const tabs = document.querySelectorAll('.filter-tab');
const items = document.querySelectorAll('.product-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    items.forEach(item => {
      const category = item.getAttribute('data-category');
      item.style.display = (filter === 'all' || filter === category) ? 'block' : 'none';
    });
  });
});