# Deployment Guide

## Automatic Deployment (Recommended)

Your portfolio is configured with GitHub Actions for automatic deployment.

### How it works:

1. **Push to main branch** - Every push to the main branch triggers the build
2. **GitHub Actions builds** - The workflow runs `npm run build`
3. **Deploy to GitHub Pages** - Built files are automatically deployed
4. **Site goes live** - Your site updates at https://manishadhikari.name.np

### Setup (One-time):

1. Go to your repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Choose `gh-pages` branch and `/ (root)` folder
4. Click Save

The CNAME file is automatically copied to the dist folder during deployment.

## Local Development & Testing

### Start Dev Server
```bash
npm run dev
```
Visit http://localhost:4321

### Build for Production
```bash
npm run build
```
Static files are generated in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The `dist` folder contains your static site
3. Commit and push:
   ```bash
   git add dist/ CNAME
   git commit -m "Deploy portfolio"
   git push origin main
   ```
4. GitHub Actions will deploy automatically

## Customization Checklist

- [ ] Update personal information in `/src/pages/index.astro`
- [ ] Replace dummy projects with real ones in `/src/pages/projects.astro`
- [ ] Add your social media links in `/src/components/Footer.astro`
- [ ] Add your blog posts to `/src/content/blog/`
- [ ] Add your profile image to `/public/`
- [ ] Update colors in `tailwind.config.mjs` if desired
- [ ] Update email in Footer component

## Troubleshooting

### Build fails
- Check Node.js version: `node --version` (should be 16+)
- Clear cache: `rm -rf node_modules dist` and run `npm install`

### Site doesn't show animations
- Make sure Framer Motion is installed: `npm install framer-motion`
- Check browser console for JavaScript errors

### Dark mode not working
- Ensure `darkMode: 'class'` is set in `tailwind.config.mjs`
- Clear browser cache and restart dev server

### GitHub Pages shows old version
- GitHub Pages may cache for up to 10 minutes
- Do a hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check "Settings → Pages" to verify deployment source

## Performance Tips

1. **Optimize images** - Use tools like TinyPNG or Squoosh
2. **Use WebP format** - Smaller file sizes
3. **Lazy load content** - Framer Motion handles this
4. **Minimize external scripts** - Load only what you need

## Need Help?

- Astro docs: https://docs.astro.build
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

Happy deploying! 🚀
