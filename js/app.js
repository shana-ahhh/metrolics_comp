const bannerImages = [
    "img/Banner1.png",
    "img/Banner2.png",
    "img/Banner3.png",
];

let currentIndex = 0;

const hero = document.querySelector(".hero");
const btnLeft = document.querySelector(".hero-btn--left");
const btnRight = document.querySelector(".hero-btn--right");

function updateBanner(index) {
    hero.style.background = `url("${bannerImages[index]}") center / cover no-repeat`;
}

// init
updateBanner(currentIndex);

btnLeft.addEventListener("click", () => {
    currentIndex =
    (currentIndex - 1 + bannerImages.length) % bannerImages.length;
    updateBanner(currentIndex);
});

btnRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % bannerImages.length;
    updateBanner(currentIndex);
});