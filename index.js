/*========================== shopping-cart ==========================*/
document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".shopping-icon");
  const cart = document.querySelector(".shopping-cart");

  icon.addEventListener("mouseenter", function () {
    cart.classList.remove("hidden");

    icon.addEventListener("mouseleave", function () {
      setTimeout(function () {
        cart.classList.add("hidden");
      }, 3000);
    });
  });
});
/*================================product count====================================*/

document.addEventListener("DOMContentLoaded", function () {
  const increaseButtons = document.querySelectorAll(".increse");
  const decreaseButtons = document.querySelectorAll(".decrese");
  const quantityInputs = document.querySelectorAll(".Quantity");

  // =========================
  // DECREASE
  // =========================

  decreaseButtons.forEach(function (decreaseButton, index) {
    decreaseButton.addEventListener("click", function () {
      let quantity = parseInt(quantityInputs[index].innerText);

      if (quantity > 1) {
        quantity--;

        quantityInputs[index].innerText = quantity;
      }

      calculateTotal();
    });
  });

  // =========================
  // INCREASE
  // =========================

  increaseButtons.forEach(function (increaseButton, index) {
    increaseButton.addEventListener("click", function () {
      let quantity = parseInt(quantityInputs[index].innerText);

      quantity++;

      quantityInputs[index].innerText = quantity;

      calculateTotal();
    });
  });
});
