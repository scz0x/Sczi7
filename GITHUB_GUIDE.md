# 🚀 دليل رفع المشروع على GitHub

## 📋 نظرة عامة

هذا الدليل يشرح خطوة بخطوة كيفية رفع مشروع Sczi7.com على GitHub.

---

## ✅ المتطلبات

- [x] Git مثبت (✓ النسخة: 2.50.0)
- [ ] حساب GitHub
- [ ] معلومات Git الأساسية مضبوطة

---

## 📝 الخطوة 1: إعداد Git المحلي

### 1.1 التحقق من إعدادات Git

```bash
# عرض الإعدادات الحالية
git config --list

# أو عرض الاسم والبريد فقط
git config user.name
git config user.email
```

### 1.2 إعداد معلوماتك (إذا لم تكن مضبوطة)

```bash
# ضبط الاسم
git config --global user.name "Ahmed Alzahrani"

# ضبط البريد الإلكتروني
git config --global user.email "l5r@outlook.sa"

# التحقق
git config --list
```

---

## 📝 الخطوة 2: تهيئة Git في المشروع

### 2.1 التحقق من حالة Git الحالية

```bash
# التحقق إذا كان المشروع مرتبط بـ Git بالفعل
git status
```

**إذا ظهرت رسالة خطأ** `fatal: not a git repository`:

```bash
# تهيئة مستودع Git جديد
git init
```

**إذا كان المشروع مرتبط بـ Git بالفعل**:
```bash
# يمكنك الانتقال للخطوة التالية مباشرة
git status
```

---

## 📝 الخطوة 3: إنشاء Repository على GitHub

### الطريقة 1: عبر موقع GitHub (الأسهل)

1. **اذهب إلى**: https://github.com/new

2. **املأ المعلومات**:
   ```
   Repository name: sczi7-portfolio
   (أو أي اسم تريده)

   Description: Professional portfolio website for Ahmed Alzahrani - Field Support Engineer

   Visibility:
   ◉ Public (الموقع سيكون عام)
   ◯ Private (الموقع سيكون خاص)

   ⚠️ لا تختر أي من هذه:
   [ ] Add a README file
   [ ] Add .gitignore
   [ ] Choose a license
   (لأننا لدينا هذه الملفات بالفعل)
   ```

3. **انقر**: Create repository

4. **انسخ رابط المستودع**:
   ```
   https://github.com/YOUR_USERNAME/sczi7-portfolio.git
   ```

### الطريقة 2: عبر GitHub CLI (متقدم)

```bash
# إذا كان لديك GitHub CLI مثبت
gh repo create sczi7-portfolio --public --source=. --remote=origin
```

---

## 📝 الخطوة 4: ربط المشروع بـ GitHub

### 4.1 إضافة Remote Repository

```bash
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك
git remote add origin https://github.com/YOUR_USERNAME/sczi7-portfolio.git

# التحقق من إضافة الـ remote
git remote -v
```

**يجب أن ترى**:
```
origin  https://github.com/YOUR_USERNAME/sczi7-portfolio.git (fetch)
origin  https://github.com/YOUR_USERNAME/sczi7-portfolio.git (push)
```

### 4.2 إذا كان Remote موجود مسبقاً

```bash
# حذف الـ remote القديم
git remote remove origin

# إضافة الـ remote الجديد
git remote add origin https://github.com/YOUR_USERNAME/sczi7-portfolio.git
```

---

## 📝 الخطوة 5: إضافة الملفات والـ Commit الأول

### 5.1 التحقق من حالة الملفات

```bash
git status
```

### 5.2 إضافة جميع الملفات

```bash
# إضافة جميع الملفات
git add .

# التحقق من الملفات المضافة
git status
```

### 5.3 عمل Commit الأول

```bash
git commit -m "$(cat <<'EOF'
🎉 Initial commit - Portfolio website

✨ Features:
- Professional portfolio with 7+ years experience
- Multi-language support (English/Arabic)
- Fully responsive design
- Modern UI with smooth animations
- SEO optimized
- Favicon system ready
- Comprehensive documentation

📚 Documentation:
- README.md - Main documentation
- IMPROVEMENTS.md - Recommended enhancements
- CLEANUP_SUMMARY.md - Cleanup summary
- FAVICON_SUMMARY.md - Favicon guide
- UPDATE_LOG.md - Update log

🛠️ Tech Stack:
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome, Google Fonts
- Multi-language system

🤖 Generated with Claude Code
https://claude.com/claude-code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## 📝 الخطوة 6: رفع المشروع إلى GitHub

### 6.1 رفع الملفات (Push)

```bash
# رفع إلى main branch
git push -u origin main
```

**إذا ظهرت رسالة خطأ** عن `master` بدلاً من `main`:

```bash
# تغيير اسم الـ branch إلى main
git branch -M main

# ثم ارفع
git push -u origin main
```

### 6.2 المصادقة

عند الرفع لأول مرة، سيطلب منك GitHub:

**Option A: Personal Access Token (موصى به)**
1. اذهب إلى: https://github.com/settings/tokens
2. انقر: Generate new token → Generate new token (classic)
3. اختر:
   - Note: "Sczi7 Portfolio"
   - Expiration: 90 days (أو حسب رغبتك)
   - Select scopes: ✓ repo (كامل)
4. انسخ الـ Token (احفظه في مكان آمن!)
5. استخدمه كـ password عند Push

**Option B: GitHub CLI (أسهل)**
```bash
# تسجيل الدخول
gh auth login

# ثم Push
git push -u origin main
```

---

## 📝 الخطوة 7: التحقق من الرفع

1. **افتح المستودع على GitHub**:
   ```
   https://github.com/YOUR_USERNAME/sczi7-portfolio
   ```

2. **تحقق من**:
   - ✅ جميع الملفات موجودة
   - ✅ README.md يظهر بشكل صحيح
   - ✅ الصور تظهر
   - ✅ التاريخ والـ Commit صحيح

---

## 📝 الخطوة 8: إعداد GitHub Pages (اختياري)

لنشر الموقع مجاناً على GitHub Pages:

### 8.1 عبر الإعدادات

1. اذهب إلى Repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `/ (root)`
5. Save

### 8.2 الانتظار والتحقق

- انتظر 1-2 دقيقة
- الموقع سيكون متاح على:
  ```
  https://YOUR_USERNAME.github.io/sczi7-portfolio/
  ```

### 8.3 ربط Domain الخاص بك (اختياري)

إذا أردت استخدام sczi7.com:

1. Settings → Pages → Custom domain
2. أدخل: `sczi7.com`
3. في إعدادات الـ Domain (عند مزود الدومين):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

---

## 🔄 التحديثات المستقبلية

عندما تريد رفع تحديثات جديدة:

```bash
# 1. تحقق من التغييرات
git status

# 2. أضف الملفات المعدلة
git add .
# أو ملف محدد
git add index.html

# 3. عمل Commit
git commit -m "Update: وصف التحديث

- تفاصيل التغيير 1
- تفاصيل التغيير 2

🤖 Generated with Claude Code
https://claude.com/claude-code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
"

# 4. رفع التحديث
git push
```

---

## 📊 أوامر Git المفيدة

### عرض التاريخ

```bash
# عرض آخر 5 commits
git log --oneline -5

# عرض تفاصيل أكثر
git log --graph --decorate --oneline
```

### التحقق من الفروع

```bash
# عرض جميع الفروع
git branch -a

# إنشاء branch جديد
git checkout -b feature-name

# العودة إلى main
git checkout main
```

### التراجع عن التغييرات

```bash
# التراجع عن ملف معين (قبل add)
git checkout -- filename

# إزالة ملف من staging (بعد add)
git reset HEAD filename

# التراجع عن آخر commit (الملفات تبقى معدلة)
git reset --soft HEAD~1
```

### التحديث من GitHub

```bash
# جلب أحدث التغييرات
git pull origin main
```

---

## 🎯 نصائح وأفضل الممارسات

### ✅ افعل

1. **Commit Messages واضحة**
   ```bash
   ✓ git commit -m "Fix: إصلاح مشكلة في القائمة"
   ✓ git commit -m "Add: إضافة قسم المشاريع"
   ✓ git commit -m "Update: تحديث الصورة الشخصية"
   ```

2. **Commit صغيرة ومتكررة**
   - بدلاً من commit واحد كبير
   - عدة commits صغيرة أفضل

3. **Pull قبل Push**
   ```bash
   git pull origin main
   git push origin main
   ```

4. **استخدم .gitignore**
   - لا ترفع ملفات حساسة
   - لا ترفع node_modules

### ❌ لا تفعل

1. **لا ترفع معلومات حساسة**
   - كلمات سر
   - API keys
   - بيانات شخصية

2. **لا تستخدم `git push --force`**
   - إلا إذا كنت متأكد تماماً
   - خاصة على main branch

3. **لا ترفع ملفات كبيرة جداً**
   - GitHub limit: 100MB per file
   - استخدم Git LFS للملفات الكبيرة

---

## 🐛 حل المشاكل الشائعة

### المشكلة 1: Permission denied

**الحل**:
```bash
# استخدم HTTPS بدلاً من SSH
git remote set-url origin https://github.com/USERNAME/REPO.git

# أو استخدم GitHub CLI
gh auth login
```

### المشكلة 2: Repository already exists

**الحل**:
```bash
# حذف الـ remote القديم
git remote remove origin

# إضافة remote جديد
git remote add origin NEW_URL
```

### المشكلة 3: Merge conflicts

**الحل**:
```bash
# حل التعارضات يدوياً في الملفات
# ثم
git add .
git commit -m "Resolve merge conflicts"
git push
```

### المشكلة 4: Large files error

**الحل**:
```bash
# إذا كان الملف غير ضروري
git rm --cached large-file.zip
git commit -m "Remove large file"

# إذا كان الملف ضروري
# استخدم Git LFS
git lfs install
git lfs track "*.zip"
git add .gitattributes
```

---

## 📚 مصادر إضافية

### التعلم

- **Git Basics**: https://git-scm.com/book/en/v2
- **GitHub Guides**: https://guides.github.com/
- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf

### الأدوات

- **GitHub Desktop**: https://desktop.github.com/ (واجهة رسومية)
- **GitKraken**: https://www.gitkraken.com/ (بديل متقدم)
- **VSCode Git**: مدمج في VS Code

### الدعم

- **GitHub Docs**: https://docs.github.com/
- **GitHub Community**: https://github.community/
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/git

---

## ✅ Checklist النهائي

قبل الرفع، تأكد من:

- [ ] Git مثبت ومضبوط
- [ ] .gitignore محدّث
- [ ] لا توجد ملفات حساسة
- [ ] جميع الملفات صحيحة
- [ ] الـ README واضح
- [ ] الصور تعمل
- [ ] الروابط صحيحة

بعد الرفع:

- [ ] الملفات ظهرت على GitHub
- [ ] README يظهر بشكل صحيح
- [ ] الصور تعمل
- [ ] GitHub Pages مفعّل (إذا أردت)

---

## 🎉 الخلاصة

بعد اتباع هذا الدليل:

✅ المشروع على GitHub
✅ Version control فعّال
✅ Backup آمن
✅ يمكن النشر على GitHub Pages
✅ جاهز للمشاركة والتطوير

---

<div align="center">

## 🚀 مبروك! مشروعك الآن على GitHub

**نُشر**: 10 ديسمبر 2025

**المطور**: Ahmed Alzahrani

[📧 Email](mailto:l5r@outlook.sa) | [💼 LinkedIn](https://linkedin.com/in/ahmalzahrani) | [🐙 GitHub](https://github.com/scz0x)

</div>
