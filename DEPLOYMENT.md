# Deployment Guide: Render

## 1. Prepare Your Repository

```bash
cd C:\Users\user\.openclaw\workspace\iptv-player
git init
git add .
git commit -m "Initial IPTV player commit"
```

## 2. Push to GitHub

1. Go to https://github.com/new
2. Create a new repository: `iptv-player` (or your preferred name)
3. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/iptv-player.git
git branch -M main
git push -u origin main
```

## 3. Connect Render

1. Go to https://render.com
2. Click "New +" to create a new web service
3. Connect your GitHub repository
4. Configure:
   - **Name**: iptv-player
   - **Branch**: main
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables** (optional):
     - `NEXT_PUBLIC_IPTV_PLAYLIST_URL`: Your IPTV playlist URL

## 4. Deploy

Click "Create Web Service" and Render will:
1. Clone your repository
2. Install dependencies
3. Build your Next.js app
4. Deploy to production

## 5. Access Your App

After deployment completes (~2-3 minutes), your app will be live at:
`https://iptv-player.onrender.com` (or your chosen name)

## 🎯 Post-Deployment

1. Update your GitHub README with the live URL
2. Test all channels in different browsers
3. Monitor Render logs for any issues

## 📝 Notes

- Render provides free SSL certificates
- Automatic deploys when you push to main
- Free tier has limits (750 build hours/month, 512MB RAM)
- Upgrade to paid tier for more resources if needed

## 🔧 Troubleshooting

**Build fails?**
- Check `package.json` scripts are correct
- Verify `next.config.js` doesn't have errors
- Check Render logs in dashboard

**Blank page?**
- Ensure build output directory is correct
- Check environment variables are set
- Verify `app/page.tsx` exports default

**Video won't play?**
- Check HLS.js is properly installed
- Verify stream URLs are accessible
- Check browser console for CORS errors

---

Need help? Check Render docs: https://render.com/docs
