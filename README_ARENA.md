# Are.na Quick Notes Integration

Your website displays quick notes from your Are.na channel in an 8-column responsive grid.

## 📝 How to Update Notes

When you add/edit notes in your Are.na channel, run:

```powershell
.\update-arena-notes.ps1
git add _data/arena-notes.json
git commit -m "Update Are.na notes"
git push
```

Changes appear on your website in ~2 minutes after pushing.

## 🔗 Links

- **Are.na Channel:** https://www.are.na/joost-h/99_notes
- **Data File:** `_data/arena-notes.json`
- **Display:** Homepage "What has been on my mind?" section

## ✨ Features

- 8-column grid (desktop) → 2 columns (tablet) → 1 column (mobile)
- Newest notes first (left to right, top to bottom)
- Click notes to open in Are.na
- Google Analytics tracking
- Automatic sync when you delete/edit in Are.na

## 🛠️ Technical Details

- **Sorting:** By `position` field (reversed)
- **Limit:** Shows up to 16 most recent notes
- **Format:** Markdown content rendered as HTML
- **Styling:** `.note-card` in `assets/css/main.css`

---

**Note:** Automatic updates via GitHub Actions don't work due to Cloudflare protection on Are.na's API. Manual updates give you full control over when your thoughts go live!
