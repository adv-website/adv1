// script.js
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
