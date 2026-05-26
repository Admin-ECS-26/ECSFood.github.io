# ECS Static Website

This is a clean static rebuild of the public ECS Food website using only HTML, CSS, and JavaScript.

## Folder structure

```text
ecs-full-static/
├── index.html
├── about.html
├── services.html
├── disaster-relief.html
├── campsite-catering.html
├── workforce-meal-planning.html
├── mobile-catering.html
├── government-food-vendor.html
├── industries.html
├── experience.html
├── contact.html
├── CNAME
└── assets/
    ├── css/style.css
    ├── js/script.js
    ├── images/
    └── icons/
```

## Images

The included images are editable SVG placeholders. Replace files in `assets/images/` with your real website photos using the same filenames, or update the image paths in the HTML.

## Contact form

The form is visual and ready for a free service like Formspree.

1. Go to Formspree and create a free form.
2. Copy your endpoint.
3. Replace `https://formspree.io/f/YOUR_FORM_ID` in the HTML files with your real endpoint.

## Upload to GitHub Pages

1. Create a GitHub account or log in.
2. Create a new repository, for example: `ecsfood-static`.
3. Upload all files from this folder into the repository.
4. Go to **Settings** → **Pages**.
5. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Click **Save**.
7. GitHub will provide a free URL like `https://yourusername.github.io/ecsfood-static/`.

## Connect ecsfood.com DNS

The included `CNAME` file contains:

```text
ecsfood.com
```

At your domain/DNS provider, add these records:

### For root domain ecsfood.com

Create A records pointing to GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### For www.ecsfood.com

Create a CNAME record:

```text
www → yourusername.github.io
```

Then in GitHub Pages settings, enter your custom domain: `ecsfood.com` and enable **Enforce HTTPS** once available.

## Editing tips

- Text: edit the HTML files.
- Colors/layout: edit `assets/css/style.css`.
- Mobile menu and form warning: edit `assets/js/script.js`.
- Photos: replace images in `assets/images/`.
