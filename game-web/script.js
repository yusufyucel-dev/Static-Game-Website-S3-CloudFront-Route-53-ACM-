const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

// Oyun Ayarları
let tileSize = 15;
let tileCount = 20; // 300px / 15px = 20
let speed = 7;
let score = 0;

// Yılan ve Yiyecek Başlangıç Pozisyonları
let snake = [{x: 10, y: 10}];
let food = {};
let dx = 0; // x yönünde hareket
let dy = 0; // y yönünde hareket

// Yiyeceği Rastgele Konumlandırma
function placeFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
}

// Oyunu Çizme
function drawGame() {
    // Tahtayı Temizle
    ctx.fillStyle = 'green'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Yiyeceği Çiz
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize - 1, tileSize - 1);

    // Yılanı Çiz ve Hareket Ettir
    ctx.fillStyle = 'blue';
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // Yılan Yiyeceği Yedi mi?
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreDisplay.innerHTML = "Score: " + score;
        placeFood(); // Yeni yiyecek koy
    } else {
        // Yemediği sürece son segmenti kuyruktan at
        snake.pop(); 
    }

    // Yeni kafa pozisyonunu yılanın başına ekle
    snake.unshift(head);

    // Yılanı Çiz
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize - 1, tileSize - 1);
    });

    // Kenarlara Çarpmayı Kontrol Et (Basit Hata Kontrolü)
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // Kendi Kuyruğuna Çarpmayı Kontrol Et
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }
    
    setTimeout(drawGame, 1000 / speed); // Hız kontrolü
}

function gameOver() {
    alert("Game Over! Score: " + score);
    // Basitçe sayfayı yeniden yükleyerek oyunu sıfırla
    window.location.reload(); 
}

// Klavye Olaylarını Dinle
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (dy !== 1) { dx = 0; dy = -1; }
            break;
        case 'ArrowDown':
            if (dy !== -1) { dx = 0; dy = 1; }
            break;
        case 'ArrowLeft':
            if (dx !== 1) { dx = -1; dy = 0; }
            break;
        case 'ArrowRight':
            if (dx !== -1) { dx = 1; dy = 0; }
            break;
    }
});

// Oyunu Başlat
placeFood();
drawGame();