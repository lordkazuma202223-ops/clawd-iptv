# Quick Start Guide

## 1. Install Dependencies

```bash
cd C:\Users\user\.openclaw\workspace\iptv-player
npm install
```

## 2. Run Development Server

```bash
npm run dev
```

App will be available at: `http://localhost:3000`

## 3. Open in Browser

Navigate to:
- `http://localhost:3000` - All channels
- `http://localhost:3000/sports` - Sports only
- `http://localhost:3000/burmese` - Burmese channels only
- `http://localhost:3000/player/1` - Play channel 1

## 4. Add Your Own Channels

Edit `app/player/[id]/page.tsx` to add your own IPTV URLs:

```typescript
const channels: Record<string, { name: string; url: string }> = {
  '1': { name: 'MRTV', url: 'YOUR_MRTV_STREAM_URL_HERE' },
  '2': { name: 'Mizzima', url: 'YOUR_MIZZIMA_STREAM_URL_HERE' },
  // Add more channels here...
};
```

## 5. Customization

### Change Colors
Edit `tailwind.config.js` to adjust the black/white theme.

### Add More Categories
Create new pages like `app/news/page.tsx` or `app/entertainment/page.tsx`.

### Real IPTV Integration
Replace the mock data in `app/player/[id]/page.tsx` with real M3U playlist fetching using `m3u-parser`.

---

## Notes

- This is a template - you'll need real IPTV stream URLs for actual playback
- HLS.js handles stream formats like .m3u8
- Consider adding error handling for failed streams
