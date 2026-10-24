/* ═══════════════════════════════════════════════
   الإعدادات المركزية — عدّل بياناتك من هنا فقط
   ═══════════════════════════════════════════════ */
const SITE_CONFIG = {
  brand: "Maged Morshed",            // اسم الموقع في الشعار
  name: "Maged Morshed",             // اسمك الكامل
  roles: [                           // المسميات التي تظهر بتأثير الكتابة
    "مطوّر واجهات أمامية",
    "مصمّم تجربة مستخدم",
    "شغوف بالتفاصيل",
  ],
  email: "Magedmorshed173@gmail.com",// بريدك الإلكتروني
  phone: "+9665XXXXXXXX",            // رقم جوالك (بدون مسافات)
  phoneDisplay: "+966 5X XXX XXXX",  // رقمك كما سيظهر للزوار
  location: "الرياض، السعودية",       // مدينتك
  socials: {                         // روابط التواصل (اتركها "" لإخفائها)
    github:   "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    x:        "https://x.com/username",
    whatsapp: "https://wa.me/9665XXXXXXXX",
    telegram: "",
  },
};

/* ═══ تطبيق الإعدادات على الصفحة ═══ */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initTheme();
  initNav();
  initTyping();
  initReveal();
  initCounters();
  initScrollFX();
  initForm();
  initFooterYear();
});

/* — تعبئة العناصر من الإعدادات — */
function applyConfig() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    const map = {
      brand: SITE_CONFIG.brand,
      name: SITE_CONFIG.name,
      email: SITE_CONFIG.email,
      phone: SITE_CONFIG.phoneDisplay,
      location: SITE_CONFIG.location,
    };
    if (map[key]) el.textContent = map[key];
  });

  const iconMap = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in",
    x: "fa-brands fa-x-twitter",
    whatsapp: "fa-brands fa-whatsapp",
    telegram: "fa-brands fa-telegram",
  };
  const linkMap = {
    github: SITE_CONFIG.socials.github,
    email: `mailto:${SITE_CONFIG.email}`,
    phone: `tel:${SITE_CONFIG.phone}`,
  };

  // روابط ثابتة (بريد / جوال)
  document.querySelectorAll("[data-config-link]").forEach((el) => {
    const href = linkMap[el.dataset.configLink];
    if (href) el.href = href;
  });

  // أيقونات التواصل في الهيرو والتذييل
  ["heroSocials", "footerSocials"].forEach((id) => {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    Object.entries(SITE_CONFIG.socials).forEach(([key, url]) => {
      if (!url || !iconMap[key]) return;
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = "social-btn";
      a.setAttribute("aria-label", key);
      a.innerHTML = `<i class="${iconMap[key]}"></i>`;
      wrap.appendChild(a);
    });
  });
}

/* — الوضع الليلي / النهاري — */
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const icon = () => btn.querySelector("i");
  const set = (t) => {
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
    if (icon()) icon().className = t === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  };
  if (saved) set(saved);
  btn.addEventListener("click", () =>
    set(document.documentElement.dataset.theme === "light" ? "dark" : "light")
  );
}

/* — القائمة العلوية — */
function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  const navAnchors = document.querySelectorAll(".nav-link[href^='#']");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });
  navAnchors.forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    })
  );

  // تظليل الرابط النشط حسب القسم الظاهر
  const sections = [...document.querySelectorAll("section[id], header[id]")];
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    const pos = window.scrollY + 120;
    let current = "home";
    sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`)
    );
  }, { passive: true });
}

/* — تأثير الكتابة — */
function initTyping() {
  const el = document.getElementById("typed");
  const roles = SITE_CONFIG.roles;
  let ri = 0, ci = 0, deleting = false;

  (function type() {
    const word = roles[ri];
    el.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) { ci++; setTimeout(type, 90); }
    else if (!deleting) { deleting = true; setTimeout(type, 1700); }
    else if (ci > 0) { ci--; setTimeout(type, 45); }
    else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 350); }
  })();
}

/* — حركات الظهور عند التمرير — */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible", "in-view");
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal, .skill-card").forEach((el) => io.observe(el));
}

/* — عدّادات الإحصائيات — */
function initCounters() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const dur = 1400, t0 = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
      io.unobserve(el);
    }),
    { threshold: 0.6 }
  );
  document.querySelectorAll(".stat-num").forEach((el) => io.observe(el));
}

/* — شريط التقدم وزر الأعلى — */
function initScrollFX() {
  const bar = document.getElementById("progressBar");
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = `${(scrollY / h) * 100}%`;
    toTop.classList.toggle("show", scrollY > 500);
  }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* — نموذج التواصل (معاينة محلية) — */
function initForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "✅ شكرًا لك! تم استلام رسالتك بنجاح (وضع المعاينة).";
    note.style.color = "#34d399";
    form.reset();
    setTimeout(() => (note.textContent = ""), 5000);
  });
}

/* — السنة الحالية — */
function initFooterYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}
