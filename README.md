# Static-Game-Website-S3-CloudFront-Route-53-ACM-
This project demonstrates a highly secure, high-performance solution for hosting static web content using the AWS infrastructure. It features a classic Snake Game deployed globally via a Content Delivery Network (CDN) and accessed securely via HTTPS under a custom domain name.

This setup showcases expertise in leveraging four critical AWS services for modern web hosting and optimization.

## Architecture & Services

The architecture focuses on security and speed, ensuring the origin content is never directly exposed to the public internet.

    Amazon S3 (Origin):

        Role: Stores all static assets (index.html, style.css, script.js).

        Security: Configured to Block All Public Access. Access is granted exclusively to CloudFront via Origin Access Control (OAC).

    Amazon CloudFront (CDN):

        Role: Global Content Delivery Network. Caches the game files at Edge Locations worldwide, minimizing latency for global users.

        Security: Enforces HTTPS and handles all user requests.

    Route 53 (DNS):

        Role: Manages the domain's DNS records. The A record uses an Alias to point the custom subdomain (game.yusufyucel.com) directly to the CloudFront distribution.

    ACM (Certificate Manager):

        Role: Provides a free, managed Wildcard SSL/TLS certificate (*.yusufyucel.com) to enable secure HTTPS access on the custom domain.

🌐 Live Demo

You can view the fully optimized Snake Game here:

## Live URL: https://game.yusufyucel.com (live for a while)

! [Live Website Screenshot](game-web/game.png)

## Key Technical Achievements

This project required solving complex integration and security challenges:

    Secure Origin Access (OAC): Successfully configured Origin Access Control (OAC) to ensure the S3 bucket's files are accessible only by the CloudFront distribution, keeping the S3 bucket fully private.

    Full HTTPS Setup: Integrated a Wildcard ACM Certificate into the CloudFront distribution to provide HTTPS security across the custom subdomain, requiring precise configuration in the us-east-1 region.

    DNS Root/Alias Mapping: Mastered the use of Route 53 Alias records to seamlessly map the custom subdomain (game.yusufyucel.com) to the CloudFront distribution, a fundamental skill in production cloud setups.

    403 Error Handling: Implemented a Custom Error Page in CloudFront to correctly handle 403 Forbidden responses from S3, ensuring that the index.html file is loaded correctly when users access the root path (/) of the domain.

## Local Files

    index.html: The game's main structure and display.

    style.css: Styling for the classic Snake Game.

    script.js: Core JavaScript logic for movement, scoring, and collision detection.
