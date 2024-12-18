const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".gallery__slide-item");
const count = document.querySelector(".preorder__count");
const preorderBtn = document.querySelector(".preorder__form-btn");
const contact = document.querySelector("#contact");
const expired = document.querySelector(".preorder__count__expired");

let currentSlide = 0;

const showSlide = (n) => {
  slides[currentSlide].classList.remove("active");
  slides[n].classList.add("active");
  currentSlide = n;
};

const nextSlide = () => {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
};

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

// Countdown
const countDown = setInterval(() => {
  const now = new Date().getTime();
  const preOrder = new Date("2022-12-14").getTime();
  const distance = preOrder - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    clearInterval(countDown);
    count.innerHTML = `
    <h3 class="preorder__count__expired">
      EXPIRED
    </h3>
    `;
  } else {
    count.innerHTML = `
  <div class="preorder__count__item">
      <span class="preorder__count__number">${days}</span>
      <span class="preorder__count__text">Ngày</span>
  </div>
  <div class="preorder__count__item">
      <span class="preorder__count__number">${hours}</span>
      <span class="preorder__count__text">Giờ</span>
  </div>
  <div class="preorder__count__item">
      <span class="preorder__count__number">${minutes}</span>
      <span class="preorder__count__text">Phút</span>
  </div>
  <div class="preorder__count__item">
      <span class="preorder__count__number">${seconds}</span>
      <span class="preorder__count__text">Giây</span>
  </div>
  `;
  }
}, 1000);

function handleSumbitForm() {
  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const email = document.querySelector("#email").value;

  if (name && phone && address && email) {
    expired ? alert("Đã hết hạn đặt hàng") : alert("Đặt hàng thành công");
  }
  contact.reset();
}

preorderBtn.addEventListener("click", handleSumbitForm);
