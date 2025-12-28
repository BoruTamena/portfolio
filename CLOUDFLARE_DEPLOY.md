# Cloudflare Pages Deployment Guide

## ✅ Configuration Complete

Your Next.js app is now configured for static export. The build will output to the `out` directory.

## 🔧 Cloudflare Pages Dashboard Settings

Go to your Cloudflare Pages project settings and configure:

### Build Settings:
1. **Framework preset:** `Next.js (Static HTML Export)` or `None`
2. **Build command:** `pnpm run build`
3. **Build output directory:** `out`
4. **Root directory:** `/` (leave empty)

### ⚠️ IMPORTANT - Remove Deploy Command:
1. Go to **Settings** → **Builds & deployments**
2. Find the **Deploy command** field
3. **DELETE** or **LEAVE EMPTY** the deploy command
4. Cloudflare Pages will automatically deploy the `out` directory after build
5. **DO NOT** use `npx wrangler deploy` - that's for Workers, not Pages!

### Environment Variables:
- No environment variables needed for this static site

## 📝 What Changed:

1. ✅ `next.config.ts` - Added static export configuration
2. ✅ Images set to unoptimized (required for static export)
3. ✅ Build now outputs to `out` directory

## 🚀 After Configuration:

1. Push your changes to your repository
2. Cloudflare Pages will automatically:
   - Run `pnpm run build`
   - Deploy the `out` directory
   - Serve your static site

## 🔍 Verify Build Locally:

```bash
pnpm run build
# Check that 'out' directory is created
ls -la out
```

## ❌ Common Issues:

### Issue: "Missing entry-point to Worker script"
**Solution:** Remove the deploy command from Cloudflare Pages settings. Pages handles deployment automatically.

### Issue: Build succeeds but deployment fails
**Solution:** Make sure:
- Build output directory is set to `out`
- Deploy command is empty/removed
- Framework preset is set correctly

## 📚 Resources:

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/api-reference/next-config-js/output)

