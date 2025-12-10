# 📚 Sczi7.com - دليل شامل | Complete Guide

> **Portfolio Website for Ahmed Alzahrani - Field Support Engineer**
>
> Professional portfolio with 7+ years of experience in IT infrastructure and technical support.

---

## 📋 جدول المحتويات | Table of Contents

1. [البدء السريع](#quick-start)
2. [البنية والملفات](#structure)
3. [التحسينات والأداء](#optimization)
4. [PWA Setup](#pwa)
5. [الأمان](#security)
6. [Accessibility](#accessibility)
7. [Analytics](#analytics)
8. [الأسئلة الشائعة](#faq)

---

## ⚡ البدء السريع | Quick Start {#quick-start}

### التشغيل المحلي

```bash
# طريقة 1: فتح مباشر
open index.html

# طريقة 2: Server محلي
python -m http.server 8000
# ثم: http://localhost:8000
```

### التعديلات الأساسية

#### تغيير المحتوى
عدّل `src/assets/js/translations.js`:
```javascript
const translations = {
    en: {
        hero_name: "Your Name",
        hero_title: "Your Title",
        // ...
    }
}
```

#### تغيير الألوان
عدّل `src/assets/css/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #0ea5e9;
}
```

---

## 📁 البنية والملفات | Structure {#structure}

```
Sczi7-WEB/
├── index.html              # الصفحة الرئيسية
├── manifest.json           # PWA Manifest
├── sw.js                   # Service Worker
├── offline.html            # صفحة Offline
├── .htaccess              # أمان وأداء
├── robots.txt             # SEO
├── sitemap.xml            # SEO
│
├── 📁 docs/               # التوثيق
│   ├── GUIDE.md          # هذا الملف
│   └── CHANGELOG.md      # سجل التغييرات
│
├── 📁 tools/             # أدوات التطوير
│   └── minify-tool.html  # أداة التصغير
│
└── 📁 src/assets/
    ├── css/styles.css
    ├── js/
    │   ├── script.js
    │   ├── language.js
    │   ├── translations.js
    │   ├── accessibility.js
    │   └── analytics.js
    ├── images/MyPhoto.jpg
    ├── icon/icon.png
    └── CV.pdf
```

---

## 🚀 التحسينات والأداء | Optimization {#optimization}

### 1. تصغير الملفات (Minification)

#### استخدام الأداة المحلية:
```bash
# افتح الأداة
open tools/minify-tool.html

# صغّر الملفات:
1. styles.css → styles.min.css
2. script.js → script.min.js
3. language.js → language.min.js
4. translations.js → translations.min.js
```

#### أدوات أونلاين:
- **CSS:** [cssminifier.com](https://cssminifier.com/)
- **JS:** [javascript-minifier.com](https://javascript-minifier.com/)

#### Node.js (متقدم):
```bash
npm install -g clean-css-cli uglify-js

# CSS
cleancss -o src/assets/css/styles.min.css src/assets/css/styles.css

# JS
uglifyjs src/assets/js/script.js -o src/assets/js/script.min.js -c -m
```

#### تحديث index.html:
```html
<!-- من -->
<link rel="stylesheet" href="src/assets/css/styles.css">

<!-- إلى -->
<link rel="stylesheet" href="src/assets/css/styles.min.css">
```

### 2. ضغط الصور

#### الأدوات الموصى بها:
- [TinyPNG](https://tinypng.com/) ⭐
- [Squoosh](https://squoosh.app/) ⭐
- [Compressor.io](https://compressor.io/)

#### الخطوات:
```bash
1. ارفع MyPhoto.jpg و icon.png
2. اضغطها (جودة 80-85%)
3. احفظ النسخ المضغوطة
4. استبدل الملفات الأصلية
```

#### WebP (موصى به):
```html
<picture>
    <source srcset="src/assets/images/MyPhoto.webp" type="image/webp">
    <img src="src/assets/images/MyPhoto.jpg" alt="Ahmed Alzahrani">
</picture>
```

### 3. النتائج المتوقعة

| المقياس | قبل | بعد | التحسين |
|---------|-----|-----|---------|
| **File Size** | 750 KB | 280 KB | **-62%** |
| **Load Time** | 2-3s | < 1s | **-67%** |
| **PageSpeed** | 75 | 95 | **+27%** |

---

## 📱 PWA Setup {#pwa}

### 1. إضافة إلى index.html

في `<head>`:
```html
<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- iOS Support -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Sczi7">
<link rel="apple-touch-icon" href="/src/assets/icon/icon.png">

<!-- Theme Color -->
<meta name="theme-color" content="#6366f1">
```

قبل `</body>`:
```html
<!-- Service Worker -->
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('✅ SW registered'))
        .catch(err => console.log('❌ SW failed', err));
}
</script>
```

### 2. اختبار PWA

```bash
# Chrome DevTools:
F12 → Application → Manifest

# Lighthouse:
F12 → Lighthouse → Generate Report

# الهدف: PWA Score = 100
```

### 3. المميزات

- ✅ قابل للتثبيت
- ✅ يعمل offline
- ✅ Push notifications (جاهز)
- ✅ اختصارات سريعة

---

## 🔒 الأمان | Security {#security}

### الرؤوس الأمنية (في .htaccess)

```apache
✓ X-Content-Type-Options: nosniff
✓ X-Frame-Options: SAMEORIGIN
✓ X-XSS-Protection: 1; mode=block
✓ Content-Security-Policy
✓ Referrer-Policy
✓ Permissions-Policy
```

### تفعيل HSTS (بعد HTTPS)

في `.htaccess`, أزل التعليق:
```apache
Header always set Strict-Transport-Security "max-age=31536000"
```

### اختبار الأمان

- [SecurityHeaders.com](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

**الهدف:** Grade A+

---

## ♿ Accessibility {#accessibility}

### المميزات المفعّلة

```javascript
✅ Skip Links
✅ ARIA Labels
✅ Keyboard Navigation
✅ Focus Indicators
✅ Screen Reader Support
✅ Reduced Motion Support
✅ Form Accessibility
```

### التفعيل

أضف قبل `</body>`:
```html
<script src="src/assets/js/accessibility.js"></script>
```

### الاختبار

- [WAVE Extension](https://wave.webaim.org/)
- Lighthouse Accessibility Audit
- NVDA/JAWS Screen Reader

**الهدف:** WCAG 2.1 AA Compliance

---

## 📊 Analytics {#analytics}

### الإعداد

1. **احصل على Measurement ID:**
   - [Google Analytics](https://analytics.google.com/)
   - أنشئ Property
   - انسخ ID (يبدأ بـ G-)

2. **حدّث analytics.js:**
```javascript
const MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID';
```

3. **أضف إلى index.html:**
```html
<script src="src/assets/js/analytics.js"></script>
```

### Events المتتبعة

```javascript
✓ Downloads (CV)
✓ Social Media Clicks
✓ Form Submissions
✓ Language Switches
✓ Scroll Depth (25%, 50%, 75%, 100%)
✓ Section Views
✓ Button Clicks
✓ Outbound Links
```

### الخصوصية

- ✅ Cookie Consent Banner (GDPR)
- ✅ IP Anonymization
- ✅ User Control

---

## ❓ الأسئلة الشائعة | FAQ {#faq}

### كيف أغير اللغة الافتراضية؟

في `src/assets/js/language.js`:
```javascript
this.currentLang = localStorage.getItem('language') || 'ar'; // عربي
```

### كيف أضيف قسم جديد؟

```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">العنوان</h2>
        <!-- المحتوى -->
    </div>
</section>
```

ثم أضف في القائمة:
```html
<li><a href="#new-section" class="nav-link">القسم الجديد</a></li>
```

### كيف أحسّن الأداء أكثر؟

1. صغّر CSS/JS
2. اضغط الصور → WebP
3. استخدم CDN
4. فعّل Browser Caching
5. راقب Core Web Vitals

### الأيقونة لا تظهر؟

```bash
# امسح Cache
Ctrl + Shift + Delete

# تأكد من المسار
ls src/assets/icon/icon.png

# أعد تحميل
Ctrl + F5
```

---

## 📈 اختبار الأداء | Performance Testing

### الأدوات

1. **[PageSpeed Insights](https://pagespeed.web.dev/)** ⭐
   - الهدف: 90+ (Mobile & Desktop)

2. **[GTmetrix](https://gtmetrix.com/)**
   - الهدف: Grade A, LCP < 2.5s

3. **[WebPageTest](https://www.webpagetest.org/)**
   - اختبر من مواقع متعددة

4. **Lighthouse (Chrome)**
   ```bash
   F12 → Lighthouse → Generate Report
   ```

### المقاييس المستهدفة

| Metric | Target | Priority |
|--------|--------|----------|
| FCP | < 1.8s | ⭐ |
| LCP | < 2.5s | ⭐⭐⭐ |
| TTI | < 3.8s | ⭐⭐ |
| TBT | < 300ms | ⭐ |
| CLS | < 0.1 | ⭐⭐ |

---

## 🔧 استكشاف الأخطاء | Troubleshooting

### Service Worker لا يعمل

```javascript
// تحقق من:
1. HTTPS enabled (أو localhost)
2. ملف sw.js في الجذر
3. لا أخطاء في Console

// إعادة تسجيل:
navigator.serviceWorker.getRegistrations()
    .then(regs => regs.forEach(reg => reg.unregister()));
```

### Manifest لا يظهر

```bash
# تحقق من:
1. ملف manifest.json في الجذر
2. Content-Type: application/json
3. لا أخطاء JSON

# اختبر:
DevTools → Application → Manifest
```

### JavaScript لا يعمل

```javascript
// تحقق Console:
F12 → Console

// ترتيب الـ scripts:
1. translations.js  (أولاً)
2. script.js        (ثانياً)
3. language.js      (ثالثاً)
4. accessibility.js (رابعاً)
5. analytics.js     (أخيراً)
```

---

## 📞 الدعم | Support

**Ahmed Alzahrani** - Field Support Engineer

- 📧 Email: l5r@outlook.sa
- 💼 LinkedIn: [ahmalzahrani](https://linkedin.com/in/ahmalzahrani)
- 🐙 GitHub: [@scz0x](https://github.com/scz0x)
- 🌐 Website: [sczi7.com](https://sczi7.com)

---

## 📚 مصادر إضافية | Resources

### تعلم المزيد
- [Web.dev](https://web.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Web Fundamentals](https://developers.google.com/web)

### أدوات مفيدة
- [Can I Use](https://caniuse.com/)
- [Bundlephobia](https://bundlephobia.com/)
- [WebP Converter](https://developers.google.com/speed/webp)

---

## ✅ Checklist التنفيذ | Implementation Checklist

```bash
# التحسينات الأساسية
☐ 1. تصغير CSS/JS
☐ 2. ضغط الصور
☐ 3. رفع .htaccess

# PWA
☐ 4. إضافة manifest link
☐ 5. تسجيل Service Worker
☐ 6. اختبار Offline mode

# Scripts
☐ 7. إضافة accessibility.js
☐ 8. إضافة analytics.js
☐ 9. تحديث Analytics ID

# الاختبار
☐ 10. Lighthouse Audit
☐ 11. SecurityHeaders.com
☐ 12. WAVE Accessibility
☐ 13. اختبار على Mobile

# النشر
☐ 14. رفع على السيرفر
☐ 15. تفعيل HTTPS
☐ 16. تفعيل HSTS
☐ 17. إرسال إلى Search Console
```

---

<div align="center">

**🚀 حظاً موفقاً! | Good Luck!**

*آخر تحديث: 10 ديسمبر 2025*

**Built with ❤️ by Ahmed Alzahrani**

</div>
