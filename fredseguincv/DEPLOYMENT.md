# Deployment Instructions

This file contains step-by-step instructions for deploying the Fred Seguin website to GitHub Pages.

## Prerequisites

1. You have push access to the GitHub repository: `danieloseguin67/freddythechef`
2. You have Node.js and npm installed
3. You have installed all project dependencies with `npm install`

## Quick Deployment

The easiest way to deploy is using the npm script:

```bash
npm run deploy
```

This single command will:
1. Build the project with production optimizations
2. Set the correct base href for GitHub Pages (`/freddythechef/`)
3. Deploy the built files to the `gh-pages` branch
4. Push to GitHub

## Manual Deployment Steps

If you prefer to deploy manually or the automatic deployment fails:

### Step 1: Build the Project

```bash
npm run build:prod
```

This creates optimized production files in `dist/fredseguincv/browser/`

### Step 2: Navigate to Build Directory

```bash
cd dist/fredseguincv/browser
```

### Step 3: Prepare for GitHub Pages

Create a `.nojekyll` file to prevent Jekyll processing:

```bash
# Windows (PowerShell)
New-Item .nojekyll -type file

# macOS/Linux
touch .nojekyll
```

Copy index.html to 404.html for SPA routing:

```bash
# Windows
copy index.html 404.html

# macOS/Linux
cp index.html 404.html
```

### Step 4: Initialize Git and Push

```bash
git init
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/danieloseguin67/freddythechef.git
git branch -M gh-pages
git push -f origin gh-pages
```

### Step 5: Configure GitHub Pages

1. Go to your GitHub repository: https://github.com/danieloseguin67/freddythechef
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 6: Wait for Deployment

GitHub Pages will build and deploy your site. This usually takes 1-5 minutes.

You can check the deployment status:
1. Go to the **Actions** tab in your repository
2. Look for the latest "pages build and deployment" workflow

### Step 7: Access Your Site

Once deployed, your site will be available at:
**https://danieloseguin67.github.io/freddythechef/**

## Troubleshooting

### Issue: 404 errors on page refresh

**Solution**: Make sure you created the 404.html file (Step 3 above). This handles Angular routing on GitHub Pages.

### Issue: CSS/Assets not loading

**Solution**: Check that the base href is correctly set to `/freddythechef/` in the build command.

### Issue: Cannot push to repository

**Solution**: Make sure you have push permissions. You may need to authenticate with GitHub:
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Issue: Build fails

**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try building again

### Issue: Old version still showing

**Solution**: 
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few minutes for GitHub's CDN to update
3. Check the commit in the gh-pages branch to confirm new files were pushed

## Updating the Site

To update the deployed site after making changes:

1. Make your changes in the source code
2. Test locally with `npm start`
3. Run `npm run deploy` again

The deployment script will automatically rebuild and redeploy the updated version.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file named `CNAME` to the `public` folder with your domain:
   ```
   www.example.com
   ```

2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `danieloseguin67.github.io`

3. In GitHub repository settings > Pages, enter your custom domain

## Important Notes

- The `gh-pages` branch is automatically created and managed by the deployment process
- Never manually edit the `gh-pages` branch
- Always work on the `main` branch and deploy from there
- Make sure all images are added to `public/assets/images/` before deploying

## Support

For issues with deployment, check:
- GitHub Pages documentation: https://docs.github.com/en/pages
- Angular deployment guide: https://angular.dev/cli/deploy

---

Happy deploying! 🚀
