# ECS Static Website

This is a static rebuild of the ECS Food website using only HTML, CSS, and JavaScript.

## Folder structure

```text
ecs-static-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── hero-placeholder.jpg
        ├── about-placeholder.jpg
        └── logo.png
```

## Image notes

Replace the placeholder image references with actual ECS images:

- `assets/images/hero-placeholder.jpg` — main hero background
- `assets/images/about-placeholder.jpg` — team, kitchen, or deployment image
- `assets/images/logo.png` — ECS logo, if you want to use an image logo instead of the text logo

## How to host for free on GitHub Pages

1. Go to GitHub and create a free account if you do not already have one.
2. Click **New repository**.
3. Name the repository something like `ecs-static-site`.
4. Keep it **Public** if using free GitHub Pages.
5. Upload these files into the repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` folder
6. Go to **Settings** inside the repository.
7. Click **Pages** in the left sidebar.
8. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
9. Click **Save**.
10. GitHub will provide a free URL like:
   `https://yourusername.github.io/ecs-static-site/`

## Basic DNS instructions for connecting ecsfood.com

In the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Custom domain**, enter:
   `ecsfood.com`
3. Save it.
4. GitHub will create or ask for a `CNAME` file.

In your domain/DNS provider:

For the root domain `ecsfood.com`, add GitHub Pages A records:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For `www.ecsfood.com`, add:

```text
CNAME     www     yourusername.github.io
```

After DNS updates, go back to GitHub Pages and turn on **Enforce HTTPS** once available.

DNS can take a few minutes to 48 hours to fully update.
