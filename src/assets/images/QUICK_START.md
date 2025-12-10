# 🚀 Quick Start - Generate Favicons

## Option 1: Use Built-in Generator (Easiest)

1. **Open the generator**
   ```
   Open: src/assets/images/generate-favicons.html
   ```
   in your web browser

2. **Download all icons**
   - Click each "Download" button
   - You'll get: 16x16, 32x32, 180x180, 192x192, 512x512

3. **Convert to ICO**

   **Online Tool (Recommended)**:
   - Go to: https://favicon.io/favicon-converter/
   - Upload the `favicon-32x32.png`
   - Download `favicon.ico`

   **OR Command Line** (if you have ImageMagick):
   ```bash
   convert favicon-16x16.png favicon-32x32.png favicon.ico
   ```

4. **Move files**
   ```
   Place all files in: src/assets/images/
   ```

✅ Done! The HTML already has the correct links.

---

## Option 2: Use Online Generator

### Best Option: RealFaviconGenerator

1. Go to: https://realfavicongenerator.net/
2. Upload a high-quality image (512x512 or use the SVG)
3. Configure settings:
   - iOS: Keep original design
   - Android: Solid background (#6366f1)
4. Generate and download
5. Extract files to `src/assets/images/`

### Alternative: Favicon.io

1. Go to: https://favicon.io/favicon-generator/
2. Enter text: "S7"
3. Choose:
   - Font: Poppins Bold
   - Background: #6366f1
   - Text Color: #ffffff
4. Download and extract

---

## Required Files

After generation, you should have:

```
src/assets/images/
├── favicon.ico              # 16x16 + 32x32
├── apple-touch-icon.png     # 180x180
├── icon-192.png             # 192x192 (PWA)
└── icon-512.png             # 512x512 (PWA)
```

---

## Verify

1. Clear browser cache: `Ctrl + Shift + Delete`
2. Reload page: `Ctrl + F5`
3. Check browser tab for icon
4. Test on mobile devices

---

## Need Help?

Read the full guide: [FAVICON_GUIDE.md](FAVICON_GUIDE.md)

---

**Tools Used:**
- Generator: `generate-favicons.html`
- Design: Logo with gradient (#6366f1 → #0ea5e9)
- Text: "S7" in white, bold font
