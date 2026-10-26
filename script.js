<<<<<<< HEAD

const translations = {
  en: {
    navHome: 'Home',
    navResume: 'Resume',
    navContact: 'Contact',
    introName: 'Hello, I’m Aida Ahmadi Araghi <span>✦</span>',
    heroTitle: 'I design <em>clear</em>, thoughtful<br/>digital experiences for people.',
    available: 'Available for work',
    heroDescription: 'Product designer with 2 years of hands-on UX/UI experience. I turn complex problems into useful, friendly products people enjoy coming back to.',
    explore: 'Explore selected work',
    selectedWork: 'Selected work',
    card1Label: 'PRODUCT DESIGN · 2024',
    card1Title: 'One place for every<br/>project request.',
    card1Description: 'Designing a unified workflow for communication, task management, project progress, and payments.',
    card2Label: 'UX DESIGN · 2024',
    card2Title: 'Making health education easier to explore.',
    card2Description: 'Designing an accessible educational experience through research, UX, and UI as part of a three-person product design team.',
    card3Label: 'WEB REDESIGN · 2023',
    card3Title: 'Turning an unstructured page into a clear experience.',
    card3Description: 'A responsive landing page redesign focused on clearer content hierarchy, layout, and user flow.',
    viewCase: 'View case study',
    comingSoon: 'Coming soon',
    aboutLabel: 'A LITTLE MORE ABOUT ME',
    aboutTitle: 'Empathy, clarity, and just enough curiosity to find the better question.',
    aboutDescription: 'I care about design that earns trust: accessible, useful, and made with a deep understanding of the people on the other side of the screen.',
    tagResearch: 'User research',
    tagStrategy: 'UX strategy',
    tagInterface: 'Interface design',
    tagPrototype: 'Prototyping',
    contactLabel: 'LET’S WORK TOGETHER',
    contactTitle: 'Have a project that needs <em>clarity?</em>',
    copyright: '© 2026 Aida Ahmadi Araghi'
  },

  fa: {
    navHome: 'خانه',
    navResume: 'رزومه',
    navContact: 'تماس',
    introName: 'سلام، من آیدا احمدی عراقی هستم <span>✦</span>',
    heroTitle: 'برای آدم ها تجربه های دیجیتال <em>ساده و کاربردی </em> طراحی میکنم.',
    available: 'آمادهٔ همکاری',
    heroDescription: 'طراح محصولم؛ دو ساله که روی تجربه و رابط کاربری کار می‌کنم. دوست دارم چیزهای پیچیده رو ساده‌تر کنم و محصولاتی طراحی کنم که واقعاً به درد آدم‌ها بخورن.',
    explore: 'مشاهدهٔ نمونه‌کارها',
    selectedWork: 'نمونه‌کارهای منتخب',
    card1Label: 'طراحی محصول · ۲۰۲۴',
    card1Title: 'دیگه هیچ درخواستی</br> بین پیام‌ها گم نمی‌شه',
    card1Description: 'طراحی یک گردش کار یکپارچه برای ارتباطات، مدیریت وظایف، پیشرفت پروژه و پرداخت‌ها.',
    card2Label: 'طراحی تجربه کاربری · ۲۰۲۴',
    card2Title: 'آموزش سلامت به جوانان ساده و در دسترس ',
    card2Description: 'از تحقیق درباره‌ی کاربران تا طراحی یک تجربه‌ی آموزشی در دسترس، در یک تیم سه‌نفره',
    card3Label: 'بازطراحی وب · ۲۰۲۳',
    card3Title: 'بازطراحی یک صفحه برای تجربه‌ای بهتر و ساده‌تر',
    card3Description: 'بازطراحی یک لندینگ‌ پیج واکنش‌گرا با تمرکز بر نظم محتوا، چیدمان و مسیر حرکت کاربر.',
    viewCase: 'دیدن جزئیات پروژه',
    comingSoon: 'به‌زودی',
    aboutLabel: 'کمی بیشتر دربارهٔ من',
    aboutTitle: 'همدلی، شفافیت و آن‌قدر کنجکاوی که سؤال بهتر را پیدا کنم.',
    aboutDescription: 'برای من طراحی خوب، طراحیِ قابل‌اعتماد است: در دسترس، مفید و حاصلِ درک عمیق آدم‌هایی که آن سوی صفحه هستند.',
    tagResearch: 'تحقیق کاربر',
    tagStrategy: 'استراتژی تجربه کاربری',
    tagInterface: 'طراحی رابط کاربری',
    tagPrototype: 'نمونه‌سازی',
    contactLabel: 'با هم کار کنیم',
    contactTitle: 'پروژه‌ای دارید که به <em>شفافیت</em> نیاز دارد؟',
    copyright: '© 2026 Aida Ahmadi Araghi'
  }
};

const root = document.documentElement,
  toggle = document.querySelector('.language-toggle');

function setLanguage(language) {
  const copy = translations[language];

  root.lang = language;
  root.dir = language === 'fa' ? 'rtl' : 'ltr';

  document.title =
    language === 'fa'
      ? 'آیدا احمدی عراقی — طراح محصول'
      : 'Aida Ahmadi Araghi — Product Designer';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = copy[el.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = copy[el.dataset.i18nHtml];
  });

  toggle.setAttribute('aria-pressed', String(language === 'fa'));
  toggle.setAttribute(
    'aria-label',
    language === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی'
  );

  localStorage.setItem('portfolio-language', language);
}

toggle.addEventListener('click', () =>
  setLanguage(root.lang === 'fa' ? 'en' : 'fa')
);

setLanguage(
  localStorage.getItem('portfolio-language') === 'fa' ? 'fa' : 'en'
);

const observer = new IntersectionObserver(
  entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 2) * 90}ms`;
=======
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 2) * 90}ms`;
>>>>>>> parent of 65fdccb (Add Persion version)
  observer.observe(el);
});
