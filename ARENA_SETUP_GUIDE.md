---
layout: null
---
# Are.na Quick Notes Setup Guide

This guide will help you set up automatic fetching of your Are.na channel content to display as quick notes on your website.

## 🎯 Overview

Your website now displays quick notes from your Are.na channel **"99_notes"** in an 8-column responsive grid. The setup includes:

- **Automatic updates** via GitHub Actions (hourly)
- **Responsive design** (8 columns → 2 columns → 1 column)
- **Google Analytics tracking** for note clicks
- **Direct links** to Are.na blocks when clicked

## 📁 Files Modified/Created

### 1. GitHub Actions Workflow
**File:** `.github/workflows/fetch-arena-notes.yml`

This workflow:
- Runs every hour automatically
- Fetches your Are.na channel data via API
- Commits updated data to your repository
- Can be triggered manually from GitHub Actions tab

### 2. Data File
**File:** `_data/arena-notes.json`

This JSON file stores your Are.na channel contents and is automatically updated by the GitHub Action.

### 3. Layout Template
**File:** `_layouts/home.html`

Updated to:
- Display Are.na notes in an 8-column grid
- Show fallback placeholder if no data exists
- Track note clicks with Google Analytics
- Open Are.na blocks in new tab when clicked

### 4. Styles
**File:** `assets/css/main.css`

Added responsive styles for:
- `.note-card` - Individual note styling with hover effects
- `.note-content` - Note text content
- `.note-meta` - Timestamp display
- Responsive breakpoints (768px, 480px)

## 🚀 GitHub Actions Setup

### Step 1: Enable GitHub Actions

1. Go to your GitHub repository: `https://github.com/joosthel/system3-web`
2. Navigate to **Settings** → **Actions** → **General**
3. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
4. Click **Save**

### Step 2: Verify the Workflow File

1. In your repository, navigate to `.github/workflows/fetch-arena-notes.yml`
2. Verify the file exists and contains the workflow configuration
3. Check that the Are.na channel slug is correct: `99_notes`

### Step 3: Trigger the First Run

**Option A: Manual Trigger**
1. Go to **Actions** tab in GitHub
2. Click on "Fetch Are.na Notes" workflow
3. Click **Run workflow** → **Run workflow**
4. Wait for the workflow to complete (green checkmark)

**Option B: Push Trigger**
```bash
git add .
git commit -m "Set up Are.na integration"
git push origin main
```

The workflow will run automatically after the push.

### Step 4: Verify Data File

1. After the workflow completes, check `_data/arena-notes.json`
2. The file should contain your Are.na channel data
3. Your site will now display the notes!

## 📊 Google Analytics Tracking

When visitors click on a note card, the following event is tracked:

```javascript
Event Name: arena_note_click
Parameters:
  - event_category: 'Notes'
  - event_label: [First 50 characters of note text]
  - value: [Are.na block ID]
  - custom_parameter_1: 'quick_notes'
```

View these events in Google Analytics:
1. Go to **Reports** → **Engagement** → **Events**
2. Look for `arena_note_click` events

## 🎨 Customization Options

### Change Update Frequency

Edit `.github/workflows/fetch-arena-notes.yml`:

```yaml
on:
  schedule:
    - cron: '0 */3 * * *'  # Every 3 hours
    # OR
    - cron: '0 8,17 * * *'  # At 8 AM and 5 PM daily
```

[Cron syntax reference](https://crontab.guru/)

### Change Number of Notes Displayed

Edit `_layouts/home.html`, line ~185:

```liquid
{% for note in site.data.arena-notes.contents limit:16 %}
```

Change `limit:16` to any number (e.g., `limit:24` for 24 notes)

### Change Grid Columns

Edit `assets/css/main.css`, line ~829:

```css
.notes-grid {
  grid-template-columns: repeat(8, 1fr); /* Change 8 to 6, 10, etc. */
  gap: 1.5rem;
}
```

### Disable Are.na Link on Click

Edit `_layouts/home.html`, remove or comment out:

```javascript
// Optional: Open Are.na block in new tab
window.open(`https://www.are.na/block/${noteId}`, '_blank');
```

### Style Customization

Edit `assets/css/main.css` to customize:

```css
.note-card {
  background: var(--secondary-color);  /* Card background */
  border: 1px solid #e8e8e8;          /* Border color */
  padding: 1.25rem;                    /* Card padding */
  min-height: 150px;                   /* Minimum height */
}

.note-card:hover {
  border-color: var(--primary-color); /* Hover border color */
  transform: translateY(-2px);         /* Hover lift effect */
  box-shadow: 0 4px 8px rgba(0,0,0,0.05); /* Hover shadow */
}
```

## 🔍 Troubleshooting

### Notes Not Appearing

1. **Check the data file exists:**
   - Navigate to `_data/arena-notes.json` in your repository
   - Verify it contains valid JSON data

2. **Check Jekyll build logs:**
   ```bash
   bundle exec jekyll serve
   ```
   Look for any errors related to `arena-notes`

3. **Verify Are.na channel is public:**
   - Visit: https://www.are.na/joost-h/99_notes
   - Ensure it's not set to private

### GitHub Actions Not Running

1. **Check workflow permissions:**
   - Settings → Actions → General
   - Ensure "Read and write permissions" is selected

2. **Check workflow runs:**
   - Go to Actions tab
   - Click on failed runs to see error messages

3. **Common issues:**
   - Workflow file syntax error (check YAML indentation)
   - Repository permissions issue
   - Network timeout (retry the workflow)

### Data Not Updating

1. **Check last workflow run:**
   - Actions tab → "Fetch Are.na Notes"
   - Look for recent successful runs

2. **Manual trigger:**
   - Actions → Fetch Are.na Notes → Run workflow

3. **Clear Jekyll cache:**
   ```bash
   bundle exec jekyll clean
   bundle exec jekyll serve
   ```

## 🔗 API Reference

### Are.na API Endpoint
```
GET https://api.are.na/v2/channels/{slug}/contents
```

**Parameters:**
- `per`: Number of items per page (default: 100)
- `page`: Page number for pagination

**Response Structure:**
```json
{
  "contents": [
    {
      "id": 40588855,
      "class": "Text",
      "content": "Note content here...",
      "content_html": "<p>Note content here...</p>",
      "created_at": "2025-10-25T18:00:31.643Z",
      "updated_at": "2025-10-25T18:00:31.663Z"
    }
  ]
}
```

### Supported Block Types

The integration currently handles all Are.na block types:
- **Text**: Displayed as formatted content
- **Image**: Shows image with caption (if you want to add image support)
- **Link**: Shows link preview
- **Attachment**: Shows attachment info
- **Media**: Shows embedded media

All types are clickable and link to their Are.na block page.

## 📝 Next Steps

1. ✅ **Enable GitHub Actions** in repository settings
2. ✅ **Run the workflow** manually or via push
3. ✅ **Verify data file** is created and populated
4. ✅ **Check your website** to see notes displayed
5. ⭐ **Customize styling** to match your preferences
6. 📊 **Monitor analytics** to see note engagement

## 🎉 Success!

Your Are.na notes should now be live on your website! They will automatically update every hour as you add new notes to your Are.na channel.

**Live Preview:** http://127.0.0.1:4000/ (when Jekyll is running)

## 📧 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review GitHub Actions logs for specific errors
3. Verify Are.na API is accessible: https://api.are.na/v2/channels/99_notes

---

**Last Updated:** October 28, 2025  
**Are.na Channel:** https://www.are.na/joost-h/99_notes  
**API Docs:** https://dev.are.na/documentation
