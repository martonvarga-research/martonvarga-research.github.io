# Marton Varga academic website

This is a static GitHub Pages site for research, CV, and contact information.

## Folder structure

- `index.html`: the public academic homepage.
- `styles.css`: visual styling.
- `script.js`: small paper-filter interaction.
- `assets/`: public files used by the website, currently the portrait and CV.
- `local-materials/`: private local notes and drafts. This folder is ignored by Git and should not be published.

## Dropbox CV setup

GitHub Pages cannot automatically read a local Dropbox folder after the site is published. The simplest reliable setup is:

1. In Dropbox, keep one stable file for the public CV, for example `cv_varga_latest.pdf`.
2. Create a shared link for that file.
3. Convert the shared link into a direct download link by changing the final query parameter to `dl=1`.
   - Example: `https://www.dropbox.com/scl/fi/.../cv_varga_latest.pdf?...&dl=1`
4. In `index.html`, replace each `assets/marton-varga-cv.pdf` CV link with that Dropbox direct-download URL.

After that, updating/replacing the Dropbox file updates what visitors download from the website. You do not need to republish GitHub Pages for CV-only updates.

The local file `assets/marton-varga-cv.pdf` is still useful as a fallback and as a versioned copy in the repository.

## Publishing on GitHub Pages

1. Create a GitHub repository named either `USERNAME.github.io` for a personal site or any repository name for a project site.
2. Upload `index.html`, `styles.css`, `.nojekyll`, and the `assets/` folder.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and the root folder.
6. Save. GitHub will publish the site and show the public URL.

## Local preview

Open `index.html` in a browser, or run a simple static server from this folder.
