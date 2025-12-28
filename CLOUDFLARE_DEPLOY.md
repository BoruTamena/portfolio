# Cloudflare Pages Deployment Guide

## ✅ Configuration Complete

Your Next.js app is now configured for static export. The build will output to the `out` directory.

## 🔧 Cloudflare Pages Dashboard Settings - STEP BY STEP

### Step 1: Access Your Project
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Pages**
3. Click on your project name

### Step 2: Go to Build Settings
1. Click on **Settings** tab (top navigation)
2. Scroll down to **Builds & deployments** section
3. Click **Configure build** or **Edit configuration**

### Step 3: Configure Build Settings
Set these exact values:

- **Framework preset:** Select `Next.js (Static HTML Export)` from dropdown
  - If that option doesn't exist, select `None` or `Other`
  
- **Build command:** 
  ```
  pnpm run build
  ```

- **Build output directory:**
  ```
  out
  ```

- **Root directory:** 
  ```
  /
  ```
  (Leave empty or set to `/`)

### Step 4: ⚠️ CRITICAL - Remove Deploy Command
1. In the same **Builds & deployments** section
2. Find the field labeled **Deploy command** or **Deploy step**
3. **CLEAR/DELETE** everything in that field
4. Leave it completely **EMPTY**
5. **DO NOT** put `npx wrangler deploy` or any other command here

### Step 5: Alternative (If Deploy Command Field is Required)
If Cloudflare Pages won't let you leave the deploy command empty, use:
```
bash deploy.sh
```
This will run the dummy script that does nothing (deployment is automatic).

### Step 6: Save and Redeploy
1. Click **Save** or **Update**
2. Go to **Deployments** tab
3. Click **Retry deployment** on the failed build, or push a new commit to trigger a new build

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

