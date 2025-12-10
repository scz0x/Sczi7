# 📚 Sczi7.com - دليل شامل

## 📋 جدول المحتويات

1. [نظرة عامة](#نظرة-عامة)
2. [البدء السريع](#البدء-السريع)
3. [البنية والملفات](#البنية-والملفات)
4. [التحديثات والصيانة](#التحديثات-والصيانة)
5. [التحسينات الموصى بها](#التحسينات-الموصى-بها)
6. [GitHub Pages](#github-pages)
7. [الأسئلة الشائعة](#الأسئلة-الشائعة)

---

## 🎯 نظرة عامة

موقع بورتفوليو احترافي لأحمد الزهراني - مهندس دعم ميداني بخبرة 7+ سنوات.

### المميزات الرئيسية

- ✅ تصميم احترافي متجاوب
- ✅ دعم لغتين (عربي/إنجليزي)
- ✅ تحسين SEO كامل
- ✅ رسوم متحركة سلسة
- ✅ توثيق شامل
- ✅ جاهز للنشر

### الروابط المهمة

- 🌐 **GitHub**: https://github.com/scz0x/Sczi7
- 🚀 **Live Site**: https://scz0x.github.io/Sczi7/
- 📧 **Email**: l5r@outlook.sa

---

## ⚡ البدء السريع

### التشغيل المحلي

```bash
# فتح الملف مباشرة
open index.html

# أو استخدام server محلي
python -m http.server 8000
# ثم افتح: http://localhost:8000
```

### التعديلات الأساسية

#### 1. تغيير المحتوى
عدّل ملف [translations.js](src/assets/js/translations.js):

```javascript
const translations = {
    en: {
        hero_name: "Your Name",
        hero_title: "Your Title",
        // ...
    }
}
```

#### 2. تغيير الألوان
عدّل [styles.css](src/assets/css/styles.css):

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #0ea5e9;
}
```

#### 3. تغيير الصور
استبدل الملفات في `src/assets/images/`:
- `MyPhoto.jpg` - صورتك الشخصية
- `icon/icon.png` - أيقونة الموقع

---

## 📁 البنية والملفات

```
Sczi7-WEB/
├── index.html              # الصفحة الرئيسية
├── README.md              # نظرة عامة سريعة
├── DOCUMENTATION.md       # هذا الملف - دليل شامل
├── robots.txt             # تعليمات محركات البحث
├── sitemap.xml           # خريطة الموقع
├── .gitignore            # ملفات Git المتجاهلة
│
└── src/assets/
    ├── css/
    │   └── styles.css         # جميع الأنماط (1224 سطر)
    │
    ├── js/
    │   ├── script.js          # الوظائف الرئيسية
    │   ├── language.js        # نظام اللغات
    │   └── translations.js    # النصوص المترجمة
    │
    ├── images/
    │   └── MyPhoto.jpg        # الصورة الشخصية
    │
    ├── icon/
    │   └── icon.png           # أيقونة الموقع
    │
    └── CV.pdf                 # السيرة الذاتية
```

### الملفات الأساسية

| الملف | الوصف | الحجم |
|-------|-------|------|
| `index.html` | الصفحة الرئيسية | 18 KB |
| `styles.css` | جميع الأنماط | ~40 KB |
| `script.js` | الوظائف التفاعلية | ~15 KB |
| `translations.js` | النصوص بلغتين | ~8 KB |

---

## 🔄 التحديثات والصيانة

### إضافة تحديث جديد

```bash
# 1. عدّل الملفات المطلوبة
# 2. تحقق من التغييرات
git status

# 3. أضف الملفات
git add .

# 4. اعمل commit
git commit -m "Update: وصف التحديث"

# 5. ارفع على GitHub
git push
```

### التحديثات الشائعة

#### تحديث المعلومات الشخصية

```javascript
// في translations.js
hero_name: "اسمك الجديد"
hero_title: "منصبك الجديد"
```

#### إضافة خبرة جديدة

```html
<!-- في index.html -->
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-date">التاريخ</div>
        <h3>المنصب</h3>
        <h4>الشركة</h4>
        <ul>
            <li>الإنجاز 1</li>
            <li>الإنجاز 2</li>
        </ul>
    </div>
</div>
```

#### تحديث السيرة الذاتية

```bash
# استبدل الملف
cp /path/to/new-cv.pdf src/assets/CV.pdf

# رفع التحديث
git add src/assets/CV.pdf
git commit -m "Update: CV"
git push
```

---

## 💡 التحسينات الموصى بها

### أولوية عالية 🔴 (0-7 أيام)

#### 1. تصغير الملفات (Minification)
```bash
# CSS
csso src/assets/css/styles.css -o src/assets/css/styles.min.css

# JavaScript
uglifyjs src/assets/js/script.js -o src/assets/js/script.min.js
```

ثم حدّث في HTML:
```html
<link rel="stylesheet" href="src/assets/css/styles.min.css">
<script src="src/assets/js/script.min.js"></script>
```

#### 2. ضغط الصور
- استخدم [TinyPNG](https://tinypng.com/)
- أو [ImageOptim](https://imageoptim.com/)
- حوّل إلى WebP للأداء الأفضل

#### 3. إضافة Security Headers
في `.htaccess` أو server config:
```apache
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
```

### أولوية متوسطة 🟡 (1-2 أسابيع)

#### 4. Web App Manifest

أنشئ `manifest.json`:
```json
{
  "name": "Ahmed Alzahrani Portfolio",
  "short_name": "Sczi7",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#6366f1",
  "icons": [{
    "src": "/src/assets/icon/icon.png",
    "sizes": "512x512",
    "type": "image/png"
  }]
}
```

أضف في HTML:
```html
<link rel="manifest" href="manifest.json">
```

#### 5. Google Analytics

```html
<!-- في <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

#### 6. تحسينات Accessibility

```html
<!-- إضافة ARIA labels -->
<nav role="navigation" aria-label="Main navigation">
<button aria-label="Toggle menu">
```

### أولوية منخفضة 🟢 (حسب الحاجة)

#### 7. Service Worker للعمل Offline

أنشئ `sw.js`:
```javascript
const CACHE_NAME = 'sczi7-v1';
const urlsToCache = [
  '/',
  '/src/assets/css/styles.css',
  '/src/assets/js/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

#### 8. Dark Mode Toggle

```javascript
// إضافة زر تبديل
const darkModeToggle = () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme',
    document.body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
};
```

---

## 🌐 GitHub Pages

### التفعيل

1. **اذهب إلى**: https://github.com/scz0x/Sczi7/settings/pages
2. **Source**: Deploy from a branch
3. **Branch**: `main` / `/ (root)`
4. **Save**

الموقع سيكون: https://scz0x.github.io/Sczi7/

### إصلاح المسارات

أضف في `<head>`:
```html
<base href="/Sczi7/">
```

أو استبدل جميع المسارات:
```html
<!-- من -->
href="src/assets/css/styles.css"

<!-- إلى -->
href="/Sczi7/src/assets/css/styles.css"
```

### ربط Domain مخصص (sczi7.com)

#### في GitHub
- Settings → Pages → Custom domain
- أدخل: `sczi7.com`
- ✓ Enforce HTTPS

#### في إعدادات DNS
```
Type: A | Name: @ | Value: 185.199.108.153
Type: A | Name: @ | Value: 185.199.109.153
Type: A | Name: @ | Value: 185.199.110.153
Type: A | Name: @ | Value: 185.199.111.153
Type: CNAME | Name: www | Value: scz0x.github.io
```

---

## ❓ الأسئلة الشائعة

### كيف أغير اللغة الافتراضية؟

في `language.js`:
```javascript
this.currentLang = localStorage.getItem('language') || 'ar'; // عربي افتراضي
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

### كيف أحذف قسم؟

1. احذف الـ `<section>` من HTML
2. احذف الرابط من القائمة
3. احذف الترجمات من `translations.js`

### الموقع بطيء، كيف أحسّنه؟

1. صغّر ملفات CSS/JS
2. اضغط الصور
3. استخدم CDN للـ libraries
4. فعّل Caching
5. استخدم WebP للصور

### الأيقونة لا تظهر؟

```bash
# امسح cache المتصفح
Ctrl + Shift + Delete

# تأكد من المسار
ls src/assets/icon/icon.png

# أعد تحميل
Ctrl + F5
```

### كيف أضيف مشروع جديد؟

أنشئ قسم Projects:
```html
<section id="projects" class="section">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
        <div class="project-card">
            <h3>اسم المشروع</h3>
            <p>الوصف</p>
            <a href="#">رابط</a>
        </div>
    </div>
</section>
```

---

## 🔧 استكشاف الأخطاء

### المشكلة: JavaScript لا يعمل

```javascript
// تحقق من Console
F12 → Console → ابحث عن أخطاء

// تأكد من ترتيب الـ scripts
<script src="translations.js"></script> <!-- أولاً -->
<script src="script.js"></script>      <!-- ثانياً -->
<script src="language.js"></script>    <!-- ثالثاً -->
```

### المشكلة: الأنماط لا تظهر

```html
<!-- تحقق من المسار -->
<link rel="stylesheet" href="src/assets/css/styles.css">

<!-- تأكد من عدم وجود أخطاء CSS -->
```

### المشكلة: الصور لا تظهر

```bash
# تحقق من وجود الملفات
ls src/assets/images/
ls src/assets/icon/

# تحقق من الأذونات
chmod 644 src/assets/images/*
```

---

## 📊 الأداء والإحصائيات

### الحجم الحالي
```
HTML: 18 KB
CSS: 40 KB
JavaScript: 25 KB (مجموع)
Images: ~350 KB
Total: ~435 KB
```

### بعد التحسينات المتوقعة
```
HTML: 18 KB (مضغوط)
CSS: 15 KB (minified)
JavaScript: 10 KB (minified)
Images: 150 KB (compressed WebP)
Total: ~195 KB (-55%)
```

### وقت التحميل
- **الحالي**: 1-2 ثانية
- **بعد التحسين**: <1 ثانية

---

## 🎯 الخلاصة

### ما تم إنجازه ✅
- تصميم احترافي متجاوب
- نظام لغات كامل
- تحسين SEO
- توثيق شامل
- رفع على GitHub

### الخطوات التالية 🚀
1. تصغير الملفات
2. ضغط الصور
3. إضافة Analytics
4. تفعيل PWA

---

## 📞 الدعم والمساعدة

**Ahmed Alzahrani**
- 📧 Email: l5r@outlook.sa
- 💼 LinkedIn: [ahmalzahrani](https://linkedin.com/in/ahmalzahrani)
- 🐙 GitHub: [@scz0x](https://github.com/scz0x)
- 🌐 Website: [sczi7.com](https://sczi7.com)

---

## 📝 ملاحظات التحديث

**آخر تحديث**: 10 ديسمبر 2025

### التغييرات الأخيرة:
- ✅ تحديث الأيقونة إلى icon.png
- ✅ دمج جميع الملفات التوثيقية
- ✅ تنظيف وحذف الملفات الزائدة
- ✅ تحسين البنية العامة

---

<div align="center">

**Built with ❤️ by Ahmed Alzahrani**

*Professional Portfolio - 2025*

</div>
