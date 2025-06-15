const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function changePrice() {
    document.getElementById("price").innerText = "İndirimli Fiyat: 35₺";
}

function addToCart(productName) {
    const cart = document.getElementById("cart");
    const item = document.createElement("p");
    item.textContent = productName + " sepete eklendi!";
    cart.appendChild(item);
}

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");

    if (emailInput) {
        emailInput.addEventListener("input", function () {
            const regex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
            const feedback = document.getElementById("emailError");
            feedback.textContent = regex.test(this.value) ? "✓" : "Geçersiz e-posta";
            feedback.style.color = regex.test(this.value) ? "green" : "red";
        });
    }
});
