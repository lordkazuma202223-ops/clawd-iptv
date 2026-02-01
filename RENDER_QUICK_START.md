# 🔥 Quick Render Deployment

## Your App is Ready!

**Local URL:** http://localhost:3000

---

## Option A: Easy Way (Web Interface)

1. **Go to:** https://render.com
2. **Sign up/login** with your account
3. **Click:** "New +" (top right)
4. **Select:** "Web Service"
5. **Connect GitHub:**
   - Click "Connect GitHub"
   - Authorize Render to access your repos
6. **Select repo:** `iptv-player` (or your repo name)
7. **Configure:**
   - **Name:** `iptv-player` (or your choice)
   - **Branch:** `main`
   - **Root Directory:** `.`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
8. **Deploy!**
   - Click "Create Web Service"
   - Wait 2-3 minutes

**Your app will be live at:** `https://your-app-name.onrender.com`

---

## Option B: CLI Way (Advanced)

If you have the **Render CLI** installed:

```bash
# Install Render CLI
npm install -g @renderinc/render

# Login
render login

# Deploy
render deploy
```

Follow the prompts to select your repo and configure settings.

---

## 📝 After Deployment

Once deployed, you'll get a URL like:
`https://iptv-player-xxxx.onrender.com`

### To Update Your App:

1. Make changes locally
2. `git add .`
3. `git commit -m "Update app"`
4. `git push`
5. Render auto-deploys on push to main!

---

## 🔧 Custom Domain (Optional)

After initial deployment:
1. Go to Render dashboard
2. Your app → Settings → Domains
3. Add your custom domain (e.g., `iptv.yourdomain.com`)
4. Update DNS settings

---

## 💡 Pro Tips

- **Free tier:** 750 build hours/month, 512MB RAM (usually enough for this app)
- **Auto-deploys:** Push to `main` branch triggers automatic redeploy
- **Logs:** Check Render dashboard for build/deployment logs
- **Environment:** Don't forget to add `NEXT_PUBLIC_IPTV_PLAYLIST_URL` for real streams

---

## ⚠️ Troubleshooting

**"Build failed" error:**
- Check `package.json` scripts are correct
- Verify Node.js version (needs 18+)
- Check Render logs

**"Application error" in browser:**
- Check Render logs (Dashboard → Your App → Logs)
- Check environment variables are set
- Try redeploying

---

**Need Help?**
- Render docs: https://render.com/docs
- Support: https://render.com/support
