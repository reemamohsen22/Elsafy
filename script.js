const mainButtons = document.querySelectorAll('.categories button');
const subGroups = document.querySelectorAll('.sub-group');
const subButtons = document.querySelectorAll('.sub-group button');
const products = document.querySelectorAll('.product');

// فلترة حسب التصنيف الرئيسي
mainButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    mainButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedMain = btn.dataset.main;

    subGroups.forEach(group => {
      group.classList.add('hidden');
      if (group.dataset.main === selectedMain) {
        group.classList.remove('hidden');
      }
    });

    products.forEach(product => {
      if (selectedMain === 'all' || product.dataset.main === selectedMain) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });

    subButtons.forEach(b => b.classList.remove('active'));
  });
});

// فلترة حسب التصنيف الفرعي
subButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    subButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedSub = btn.dataset.sub;

    products.forEach(product => {
      if (product.dataset.sub === selectedSub) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // كل 3 ثواني


const groups = document.querySelectorAll('.group');
let currentGroup = 0;

function switchGroup() {
  groups[currentGroup].classList.remove('active');
  currentGroup = (currentGroup + 1) % groups.length;
  groups[currentGroup].classList.add('active');
}

setInterval(switchGroup, 2000); // تبديل كل 5 ثواني


















const fancyButtons = document.querySelectorAll('.fancy');
// const products = document.querySelectorAll('.product');

fancyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // منع التنقل
    fancyButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedCategory = btn.getAttribute('data-main');

    products.forEach(product => {
      if (selectedCategory === 'all' || product.dataset.main === selectedCategory) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});