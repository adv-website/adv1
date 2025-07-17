// script.js
// script.js
/*
const sidebar      = document.getElementById('sidebar');
const toggleBtn    = document.getElementById('toggleSidebarBtn');
const sidebarNav   = document.getElementById('sidebarNav');
const lessonLabels = document.querySelectorAll('.lesson-label');
const sidebarTitle = document.querySelector('#sidebarHeader h1');

let isCollapsed = false;

toggleBtn.addEventListener('click', () => {
  isCollapsed = !isCollapsed;

  // تغيير عرض الشريط الجانبي
  sidebar.classList.toggle('w-12', isCollapsed);
  sidebar.classList.toggle('w-72', !isCollapsed);

  // إظهار/إخفاء قائمة الدروس
  sidebarNav.classList.toggle('hidden', isCollapsed);

  // إظهار/إخفاء أرقام الدروس
  lessonLabels.forEach(lbl => {
    lbl.classList.toggle('hidden', isCollapsed);
  });

  // تصغير عنوان الشريط الجانبي
  sidebarTitle.classList.toggle('truncate', isCollapsed);

  // تدوير أيقونة الزر
  toggleBtn.classList.toggle('rotate-90', isCollapsed);
});
*/
// script.js
  const sidebar     = document.getElementById('sidebar');
  const toggleBtn   = document.getElementById('toggleSidebarBtn');
  const sidebarNav  = document.getElementById('sidebarNav');
  let isNavVisible = true;

  toggleBtn.addEventListener('click', () => {
    isNavVisible = !isNavVisible;
    // إظهار/إخفاء قائمة الدروس
    sidebarNav.classList.toggle('hidden', !isNavVisible);
    // تغيير عرض الشريط الجانبي
    sidebar.classList.toggle('w-12', !isNavVisible);
    sidebar.classList.toggle('w-72', isNavVisible);
    // تدوير الأيقونة
    toggleBtn.classList.toggle('rotate-90', !isNavVisible);
  });
/*
const sidebar     = document.getElementById('sidebar');
  const toggleBtn   = document.getElementById('toggleSidebarBtn');
  const sidebarNav  = document.getElementById('sidebarNav');
  let isNavVisible = true;

  toggleBtn.addEventListener('click', () => {
    isNavVisible = !isNavVisible;
    // إظهار/إخفاء قائمة الدروس
    sidebarNav.classList.toggle('hidden', !isNavVisible);
    // تغيير عرض الشريط الجانبي
    sidebar.classList.toggle('w-12', !isNavVisible);
    sidebar.classList.toggle('w-72', isNavVisible);
    // تدوير الأيقونة
    toggleBtn.classList.toggle('rotate-90', !isNavVisible);
  });
  
const sidebar     = document.getElementById('sidebar');
const toggleBtn   = document.getElementById('toggleSidebarBtn');
const sidebarNav  = document.getElementById('sidebarNav');
const lessonLabels = document.querySelectorAll('.lesson-label');
let isCollapsed = false;

toggleBtn.addEventListener('click', () => {
  isCollapsed = !isCollapsed;

  // تغيير عرض الشريط الجانبي
  sidebar.classList.toggle('w-12', isCollapsed);
  sidebar.classList.toggle('w-72', !isCollapsed);

  // إظهار/إخفاء النصوص في القائمة
  lessonLabels.forEach(lbl => {
    lbl.classList.toggle('hidden', isCollapsed);
  });

  // تطبيق/إزالة truncate على العنوان
  document
    .querySelector('#sidebarHeader h1')
    .classList.toggle('truncate', isCollapsed);

  // تدوير السهم
  toggleBtn.classList.toggle('rotate-180', isCollapsed);
});
*/
