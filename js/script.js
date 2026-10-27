
// Select all products
const cards = document.querySelectorAll(".card");

// Select the total price element
const total = document.querySelector(".total");

// Function to calculate the total price
function updateTotal() {
    let sum = 0;

    document.querySelectorAll(".card").forEach(function(card) {
        const price = parseFloat(
            card.querySelector(".unit-price").textContent
        );

        const quantity = parseInt(
            card.querySelector(".quantity").textContent
        );

        sum += price * quantity;
    });

    total.textContent = sum + " $";
}

// Add events to every product
cards.forEach(function(card) {

    // Select the elements inside the current card
    const plus = card.querySelector(".fa-plus-circle");
    const minus = card.querySelector(".fa-minus-circle");
    const trash = card.querySelector(".fa-trash-alt");
    const heart = card.querySelector(".fa-heart");
    const quantity = card.querySelector(".quantity");

    // 1. Increase quantity
    plus.addEventListener("click", function() {
        quantity.textContent = parseInt(quantity.textContent) + 1;

        updateTotal();
    });

    // 2. Decrease quantity
    minus.addEventListener("click", function() {
        let q = parseInt(quantity.textContent);

        if (q > 0) {
            quantity.textContent = q - 1;
        }

        updateTotal();
    });

    // 3. Delete product
    trash.addEventListener("click", function() {
        card.remove();

        updateTotal();
    });

    // 4. Like or unlike product
    heart.addEventListener("click", function() {
        heart.classList.toggle("text-danger");
    });

});

// Calculate the initial total
updateTotal();
