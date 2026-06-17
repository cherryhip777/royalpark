// 이미지 확대 모달
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  if (modal && modalImg) {
    modalImg.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 이미지 슬라이더
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  if (slides.length === 0) return;
  
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;
  
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function goToSlide(n) {
  showSlide(n);
  resetSlideInterval();
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// 페이지 로드 시 슬라이더 시작
window.addEventListener('load', () => {
  if (document.querySelector('.slide')) {
    showSlide(0);
    slideInterval = setInterval(nextSlide, 5000);
  }
});





