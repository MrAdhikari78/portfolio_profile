# 🚀 Quick Start Guide

Get started with your optimized portfolio in 5 minutes!

## Step 1: Update Site Configuration (1 min)

Edit `src/data/site.json`:
```json
{
  "site": {
    "title": "YOUR NAME | Portfolio",
    "description": "YOUR HEADLINE",
    "url": "https://yourdomain.com",
    "email": "your.email@example.com",
    "author": "YOUR NAME"
  }
}
```

## Step 2: Update Social Links (1 min)

Edit `src/data/navigation.json` → `socialLinks`:
```json
{
  "name": "GitHub",
  "url": "https://github.com/YOUR_USERNAME",
  "icon": "github"
}
```

## Step 3: Add Your Projects (2 min)

Edit `src/data/projects.json`, replace the array with your projects:
```json
{
  "id": "my-project",
  "title": "My Project Title",
  "description": "Brief description",
  "tags": ["Tech1", "Tech2"],
  "link": "https://myproject.com",
  "github": "https://github.com/username/project",
  "image": "https://example.com/image.jpg"
}
```

## Step 4: Update About Section (1 min)

Edit `src/data/about.json`:
```json
{
  "hero": {
    "title": "Hi, I'm YOUR NAME",
    "subtitle": "YOUR HEADLINE",
    "description": "YOUR BIO"
  }
}
```

## Step 5: Test & Deploy

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
# See DEPLOYMENT.md for instructions
```

---

## 📁 File Reference

| What to change | File to edit |
|---|---|
| Site title, email, domain | `src/data/site.json` |
| Navigation & social links | `src/data/navigation.json` |
| Projects showcase | `src/data/projects.json` |
| About/hero section | `src/data/about.json` |
| Skills & tech stack | `src/data/skills.json` |
| App settings & features | `src/data/config.json` |

---

## ⚡ Key Features

✅ **No hardcoded content** - All in JSON files
✅ **Backend ready** - API layer included
✅ **Dark mode** - Built-in support  
✅ **Responsive** - Mobile-friendly
✅ **Fast** - Static site generation
✅ **SEO optimized** - Meta tags configured

---

## 📚 Need Help?

- **How to structure data?** → `src/data/README.md`
- **How to build features?** → `DEVELOPER_GUIDE.md`
- **View folder structure?** → `FOLDER_STRUCTURE.md`
- **Deploy to production?** → `DEPLOYMENT.md`

---

## 💡 Pro Tips

1. **JSON Validation**: Use [jsonlint.com](https://jsonlint.com) to validate JSON files
2. **Image URLs**: Use direct URLs from Unsplash, Imgur, or your own hosting
3. **Dark Mode**: Tailwind CSS handles it - just use `dark:` classes
4. **Testing**: Always test locally with `npm run dev` before committing

---

## 🎯 Your Next Steps

- [ ] Customize `src/data/site.json`
- [ ] Update social links in `src/data/navigation.json`
- [ ] Add your projects to `src/data/projects.json`
- [ ] Update about info in `src/data/about.json`
- [ ] Add skills in `src/data/skills.json`
- [ ] Test with `npm run dev`
- [ ] Deploy to GitHub Pages

**Let's go! 🎉**
