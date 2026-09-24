const loveBtn = document.getElementById("loveBtn");
const hearts = document.getElementById("hearts");

loveBtn.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {
        createHeart();
    }

});

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;

    const size = Math.random() * 25 + 15;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${size}px`;

    heart.style.animationDuration =
        `${Math.random() * 2 + 2}s`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}