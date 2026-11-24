// ===============================
// AATHIN STORE - CHECKOUT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const checkoutItems =
        document.getElementById("checkout-items");

    const checkoutSubtotal =
        document.getElementById("checkout-subtotal");

    const checkoutTotal =
        document.getElementById("checkout-total");

    const placeOrderBtn =
        document.getElementById("place-order-btn");

    const successMessage =
        document.getElementById("order-success");


    // Get cart from browser
    const cart =
        JSON.parse(localStorage.getItem("aathinCart")) || [];


    // ===========================
    // SHOW CART
    // ===========================

    function showCheckoutCart() {

        if (!checkoutItems) return;

        if (cart.length === 0) {

            checkoutItems.innerHTML = `
                <p class="no-items">
                    Your cart is empty.
                </p>
            `;

            checkoutSubtotal.innerText = "₹0";
            checkoutTotal.innerText = "₹0";

            return;
        }


        let itemsHTML = "";
        let total = 0;


        cart.forEach(function (item) {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;


            itemsHTML += `
                <div class="checkout-item">

                    <div>
                        <strong>${item.name}</strong>

                        <p>
                            ₹${item.price.toLocaleString("en-IN")}
                            × ${item.quantity}
                        </p>
                    </div>

                    <strong>
                        ₹${itemTotal.toLocaleString("en-IN")}
                    </strong>

                </div>
            `;

        });


        checkoutItems.innerHTML = itemsHTML;

        checkoutSubtotal.innerText =
            "₹" + total.toLocaleString("en-IN");

        checkoutTotal.innerText =
            "₹" + total.toLocaleString("en-IN");

    }


    showCheckoutCart();


    // ===========================
    // PLACE ORDER
    // ===========================

    if (placeOrderBtn) {

        placeOrderBtn.addEventListener("click", function () {

            const name =
                document.getElementById("customer-name").value.trim();

            const email =
                document.getElementById("customer-email").value.trim();

            const phone =
                document.getElementById("customer-phone").value.trim();

            const address =
                document.getElementById("customer-address").value.trim();

            const city =
                document.getElementById("customer-city").value.trim();

            const pincode =
                document.getElementById("customer-pincode").value.trim();


            // Check details
            if (
                !name ||
                !email ||
                !phone ||
                !address ||
                !city ||
                !pincode
            ) {

                alert("Please fill all customer details.");

                return;
            }


            // Check cart
            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }


            // Show success
            if (successMessage) {

                successMessage.style.display = "flex";

            }


            // Clear cart
            localStorage.removeItem("aathinCart");

        });

    }

});