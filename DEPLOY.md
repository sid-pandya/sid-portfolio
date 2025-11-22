# How to Deploy Your Portfolio for Free (GitHub Pages)

I've configured your project for easy deployment to GitHub Pages. Follow these steps to get your site online.

## 1. Create a GitHub Repository
1.  Go to [GitHub.com](https://github.com) and sign in.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it something like `portfolio` (or `yourusername.github.io` for a user site).
4.  Make it **Public**.
5.  Click **Create repository**.

## 2. Connect Your Local Project
Open your terminal in the project folder and run these commands (replace `YOUR_USERNAME` and `REPO_NAME` with yours):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## 3. Update Configuration (Important!)
Before deploying, you need to tell Vite where your site lives.

1.  Open `vite.config.js`.
2.  Find the line `base: './'`.
3.  **If your repo is named `portfolio`**, change it to:
    ```javascript
    base: '/portfolio/',
    ```
4.  **If your repo is named `yourusername.github.io`**, you can leave it as `/` or `./`.

## 4. Deploy!
Run this command in your terminal:

```bash
npm run deploy
```

This script will:
1.  Build your project.
2.  Upload the `dist` folder to a `gh-pages` branch on your GitHub repo.

## 5. Enable GitHub Pages
1.  Go to your repository on GitHub.
2.  Click **Settings** > **Pages** (on the left sidebar).
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select `gh-pages` and `/ (root)`.
5.  Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/` in a few minutes!
