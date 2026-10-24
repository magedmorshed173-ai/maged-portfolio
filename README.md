# 🌐 موقعي التعريفي | My Portfolio

> موقع تعريفي شخصي عربي بالكامل — تصميم حديث، سريع، ومتجاوب مع كل الأجهزة.
> مستضاف مجانًا عبر **GitHub Pages** مع نشر تلقائي عند كل تحديث.

[![Pages](https://img.shields.io/badge/GitHub%20Pages-مفعّل-success?logo=github)]()
[![License: MIT](https://img.shields.io/badge/الرخصة-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()

---

## ✨ المميزات

- 🎨 **تصميم عربي حديث (RTL)** بخطوط Cairo و Tajawal الأنيقة
- 🌙 **وضع ليلي / نهاري** مع حفظ تفضيل الزائر تلقائيًا
- ⌨️ **تأثير كتابة ديناميكي** للمسميات المهنية
- 📊 **عدّادات إحصائية متحركة** وحركات ظهور سلسة عند التمرير
- 📱 **متجاوب 100%** — يعمل بشكل مثالي على الجوال والتابلت والحاسب
- 🚀 **بدون مكتبات ثقيلة** — HTML و CSS و JS خالص، سرعة تحميل فائقة
- 🧩 **إعدادات مركزية** — عدّل اسمك وروابطك من مكان واحد (`js/main.js`)
- 🔄 **نشر تلقائي** عبر GitHub Actions عند كل Push

## 🗂️ هيكل المشروع

```
my-website/
├── index.html              # الصفحة الرئيسية
├── css/
│   └── style.css           # التنسيقات (ألوان، حركات، استجابة)
├── js/
│   └── main.js             # الإعدادات المركزية + التفاعلات
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # سير عمل النشر التلقائي
├── LICENSE                 # رخصة MIT
└── README.md               # هذا الملف
```

## 🛠️ تخصيص المحتوى

كل بياناتك في مكان واحد — افتح `js/main.js` وعدّل كائن `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  brand: "موقعي",              // اسم الموقع في الشعار
  name: "محمد أحمد",           // ← ضع اسمك هنا
  roles: ["مطوّر واجهات..."],  // ← مسمياتك المهنية
  email: "you@example.com",    // ← بريدك
  socials: { github: "...", linkedin: "..." },  // ← روابطك
};
```

لتعديل النصوص والمشاريع: افتح `index.html` وابحث عن القسم المطلوب
(`عنّي` / `مهاراتي` / `أعمالي` / `تواصل معي`).

لتغيير الألوان: عدّل متغيرات `:root` في أعلى `css/style.css`.

## 🚀 النشر

الموقع يُنشر تلقائيًا عبر **GitHub Pages**:

1. اذهب إلى **Settings ← Pages** في المستودع
2. اختر المصدر: **GitHub Actions**
3. كل تحديث للفرع `main` سيُنشر فورًا على:
   `https://USERNAME.github.io/my-website/`

## 🖥️ التشغيل محليًا

```bash
# افتح الملف مباشرة في المتصفح
open index.html

# أو شغّل سيرفر محلي (اختياري)
python3 -m http.server 8000
# ثم افتح http://localhost:8000
```

## 📄 الرخصة

هذا المشروع مرخّص تحت رخصة [MIT](LICENSE) — يمكنك استخدامه وتعديله بحرية.

---

<p align="center">صُنع بـ ❤️ — آثار ومراجعاتك مرحّب بها دائمًا</p>
