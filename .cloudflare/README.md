# Cloudflare Pages Configuration

## Build Settings

In your Cloudflare Pages dashboard, configure the following:

### Build Configuration:
- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `pnpm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (leave empty or set to root)

### Environment Variables:
- None required for this static site

### Important Notes:
1. **Do NOT set a deploy command** - Cloudflare Pages will automatically deploy the `out` directory after the build
2. The build command will generate static files in the `out` directory
3. Make sure to remove any `wrangler deploy` commands from your build settings

## Alternative: If you need to keep the deploy command

If Cloudflare Pages requires a deploy command, you can create a simple script:

```bash
# This is not needed for Pages, but if required:
echo "Deployment handled by Cloudflare Pages automatically"
```

But ideally, just remove the deploy command entirely from Cloudflare Pages settings.

