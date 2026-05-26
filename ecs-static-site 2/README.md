# ECS Static Website

Folder structure:

ecs-static-site/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
        ├── hero-placeholder.jpg
        ├── home1-placeholder.jpg
        └── usamap-placeholder.jpg

## Image Notes

Replace the placeholder image files with actual website photos using the same filenames, or update the image paths inside `index.html` and `style.css`.

Recommended image sizes:
- hero-placeholder.jpg: 1920x1080
- home1-placeholder.jpg: 1200x900
- usamap-placeholder.jpg: 1200x900

## GitHub Pages Upload

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Go to repository Settings.
4. Click Pages.
5. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
6. Click Save.
7. GitHub will give you a free live website URL.

## Domain / DNS Basics

To connect `ecsfood.com` to GitHub Pages:

1. In GitHub Pages settings, add your custom domain: `ecsfood.com`.
2. In your domain DNS settings, add GitHub Pages records.

For root domain:
A records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

For www:
CNAME:
www → your-github-username.github.io

3. Wait for DNS to update.
4. Turn on HTTPS in GitHub Pages when available.
