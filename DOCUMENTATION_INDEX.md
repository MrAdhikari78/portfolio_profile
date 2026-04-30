# 📖 Documentation Index

Welcome to your optimized portfolio! Start here to understand the structure and get up and running.

## 🎯 Start Here (Choose Your Path)

### 👤 I just want to use it
→ Read **[QUICK_START.md](./QUICK_START.md)** (5 minutes)

### 👨‍💻 I want to understand the code
→ Read **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** (15 minutes)

### 📁 I want to see the folder structure
→ Read **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** (10 minutes)

### 🚀 I want to add a backend
→ Read **[src/api/README.md](./src/api/README.md)** (10 minutes)

### 📚 I want complete reference
→ Read **[FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)** (10 minutes)

---

## 📚 Full Documentation Guide

| File | Purpose | Read Time | Audience |
|------|---------|-----------|----------|
| **[QUICK_START.md](./QUICK_START.md)** | Get started in 5 minutes | ⏱️ 5 min | Everyone |
| **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** | Comprehensive development guide | 📖 15 min | Developers |
| **[OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md)** | What changed & why | 📊 10 min | Everyone |
| **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** | Visual folder structure | 📁 10 min | Developers |
| **[FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)** | Detailed structure reference | 📖 10 min | Developers |
| **[src/data/README.md](./src/data/README.md)** | How to use data files | 📋 5 min | Content editors |
| **[src/api/README.md](./src/api/README.md)** | Backend integration guide | ⚙️ 10 min | Backend developers |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | Deploy to GitHub Pages | 🚀 5 min | DevOps |
| **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** | Design guidelines | 🎨 5 min | Designers |
| **[README.md](./README.md)** | Project overview | 📝 5 min | Everyone |

---

## 🗂️ Quick Reference

### 📝 Editing Content

**Want to change something?** ← **Edit these JSON files:**

```
src/data/
├── site.json          # Site title, email, domain
├── navigation.json    # Nav links, social profiles
├── projects.json      # Your projects
├── about.json         # Hero section, bio
├── skills.json        # Technical skills
└── config.json        # App settings
```

→ See: **[src/data/README.md](./src/data/README.md)**

### 💻 Modifying Code

**Want to add a feature?** ← **Use these directories:**

```
src/
├── components/        # UI components
├── pages/            # Routes
├── api/              # API services (future)
├── utils/            # Helper functions
└── styles/           # CSS styling
```

→ See: **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)**

### 🚀 Deploying

**Ready to go live?** ← **Follow these steps:**

1. Customize all data files
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy with Git

→ See: **[DEPLOYMENT.md](./DEPLOYMENT.md)**

### 🔌 Adding Backend

**Ready for a backend?** ← **Check the API structure:**

- HTTP client: `src/api/client.ts`
- Services: `src/api/services/`
- Fallback: JSON files in `src/data/`

→ See: **[src/api/README.md](./src/api/README.md)**

---

## 🎯 Common Tasks

### ✏️ Update site title
→ Edit `src/data/site.json`

### 📸 Add a project
→ Edit `src/data/projects.json`

### 👥 Add social link
→ Edit `src/data/navigation.json`

### 🎨 Change colors
→ Edit `tailwind.config.mjs` or use Tailwind classes

### 📝 Add blog post
→ Create `.md` file in `src/content/blog/`

### ⚙️ Add environment variables
→ Copy `.env.example` to `.env.local`

### 🔧 Add new component
→ Create file in `src/components/`

### 🏗️ Create new page
→ Create `.astro` file in `src/pages/`

---

## 🆘 Help & Support

### Having Issues?

| Problem | Solution |
|---------|----------|
| Build fails | Check JSON syntax in `src/data/` |
| Page not showing | Verify file in `src/pages/` |
| Styles not working | Check Tailwind classes |
| API error | Check `.env` variables |
| Data not updating | Restart dev server |

### Where to look for answers

- **General questions** → [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
- **Data files** → [src/data/README.md](./src/data/README.md)
- **Backend** → [src/api/README.md](./src/api/README.md)
- **Astro docs** → https://docs.astro.build
- **React docs** → https://react.dev
- **Tailwind docs** → https://tailwindcss.com

---

## 📋 Checklist: Getting Started

- [ ] Read [QUICK_START.md](./QUICK_START.md)
- [ ] Update `src/data/site.json` with your info
- [ ] Update `src/data/navigation.json` with your links
- [ ] Add projects to `src/data/projects.json`
- [ ] Update `src/data/about.json` with your bio
- [ ] Update `src/data/skills.json` with your tech stack
- [ ] Test with `npm run dev`
- [ ] Build with `npm run build`
- [ ] Deploy to GitHub Pages

---

## 📊 What's New vs What's Existing

### ✨ NEW in this optimization:

✅ `/src/data/` - Centralized JSON configuration
✅ `/src/api/` - Backend API layer structure
✅ `QUICK_START.md` - 5-minute setup guide
✅ `DEVELOPER_GUIDE.md` - Complete dev handbook
✅ `OPTIMIZATION_SUMMARY.md` - Change documentation
✅ `PROJECT_STRUCTURE.md` - Visual structure
✅ `DOCUMENTATION_INDEX.md` - This file!

### 📌 Existing & Enhanced:

✓ `/src/components/` - Reorganized for clarity
✓ `/src/pages/` - Routes system (unchanged)
✓ `/src/layouts/` - Templates (unchanged)
✓ `/src/styles/` - Styling (enhanced with utils)
✓ `/src/utils/` - New validation.ts added
✓ `package.json` - Dependencies (unchanged)

---

## 🎓 Learning Path

### Week 1: Get Comfortable
1. Read QUICK_START.md (5 min)
2. Edit your data files (30 min)
3. Customize components (1 hour)
4. Deploy to GitHub Pages (30 min)

### Week 2: Deepen Knowledge
1. Read DEVELOPER_GUIDE.md (30 min)
2. Add new components (1-2 hours)
3. Create blog posts (1 hour)
4. Learn Astro basics (2 hours)

### Week 3+: Advanced
1. Read src/api/README.md (30 min)
2. Plan backend integration (1 hour)
3. Add advanced features (varies)
4. Optimize & scale (ongoing)

---

## 🚀 Next Steps

1. **Open [QUICK_START.md](./QUICK_START.md)** ← Start here!
2. **Customize your data** in `src/data/`
3. **Test locally** with `npm run dev`
4. **Deploy** following [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📞 Navigation

- **Home** → [README.md](./README.md)
- **Quick Start** → [QUICK_START.md](./QUICK_START.md)
- **Developer Guide** → [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
- **Project Structure** → [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- **Data Guide** → [src/data/README.md](./src/data/README.md)
- **API Guide** → [src/api/README.md](./src/api/README.md)
- **Deployment** → [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Happy building! 🎉**

Questions? Check the relevant guide above, or review the inline code comments!
