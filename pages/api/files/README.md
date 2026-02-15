# File Download API

This API route redirects file downloads to GitHub raw URLs instead of serving them directly from Vercel.

## Why?

Vercel charges for bandwidth usage. By redirecting to GitHub raw URLs, we:
- ✅ Save 80%+ of Vercel bandwidth quota
- ✅ Leverage GitHub's free bandwidth for public repositories
- ✅ Keep files in version control
- ✅ Maintain download tracking via Firebase Analytics

## How it works

1. User clicks download link: `/api/files/ramadhan-planner-for-kids-1442h-id.pdf`
2. API route redirects (302) to: `https://raw.githubusercontent.com/zainfathoni/rumahberbagi-app/main/public/files/ramadhan-planner-for-kids-1442h-id.pdf`
3. GitHub serves the file (no Vercel bandwidth used)

## Migration Summary

**Before:** Direct links to `/files/*` (served from `public/files/` via Vercel)

**After:** Links to `/api/files/*` (redirects to GitHub raw URLs)

**Files migrated:**
- `ramadhan-planner-for-kids-1442h-id.pdf` (17MB) - 205 requests = **2.12 GB saved**
- `ramadhan-planner-for-kids-1442h-en.pdf` (17MB) - 4 requests = 68 MB saved
- `rencana-menu-ramadhan.pdf` (909KB)
- `15-days-countdown-to-ramadhan.pdf` (260KB)
- `rencana-aktivitas-anak-prasekolah.pdf` (305KB)

## Implementation

See `[...slug].ts` for the redirect logic.

## Testing

Visit any download page and verify:
1. Download link points to `/api/files/*`
2. Clicking downloads the correct file
3. Firebase Analytics still tracks downloads
