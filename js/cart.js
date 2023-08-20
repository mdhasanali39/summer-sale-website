// get all cards and add EventListener
const allCards = document.querySelectorAll(".card");
for (const card of allCards) {
  card.addEventListener("click", function (e) {
    // parent node (card)
    const parent = e.target.closest(".card");

    // product Name
    const productName = parent.childNodes[3].children[1].innerText;

    // product Price
    const productPrice = parseFloat(
      parent.childNodes[3].children[2].children[0].innerText
    );

    // get shopping cart product list element
    const cartNameList = document.getElementById("cart-name-list");

    // get total price element and innerText
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = parseFloat(totalPriceElement.innerText);

    // get  final total price Element and innerText
    const finalTotalPriceElement = document.getElementById("final-total-price");
    const finalTotalPrice = parseFloat(finalTotalPriceElement.innerText);

    // get discount Price Element
    const discountPriceElement = document.getElementById("discount-price");

    // set total price in cart
    totalPriceElement.innerText = (totalPrice + productPrice).toFixed(2);
    // set final Total Price
    finalTotalPriceElement.innerText = (finalTotalPrice + productPrice).toFixed(
      2
    );

    // create li now
    const li = document.createElement("li");
    li.classList.add("text-2xl", "text-primary-text-color", "font-medium");
    li.innerText = productName;
    // li appended here
    cartNameList.appendChild(li);

    // have coupon apply button
    const couponBtn = document.getElementById("btn-apply");
    if (parseFloat(totalPriceElement.innerText) >= 200) {
      couponBtn.removeAttribute("disabled");
      // apply button add add Event Listener
      // coupon Field element
      couponBtn.addEventListener("click", function () {
        const couponFieldValue = document.getElementById("coupon-field").value;

        if (couponFieldValue == "SELL200") {
          discountPriceElement.innerText = (
            (parseFloat(totalPriceElement.innerText) / 100) *
            20
          ).toFixed(2);

          finalTotalPriceElement.innerText = (
            parseFloat(totalPriceElement.innerText) -
            discountPriceElement.innerText
          ).toFixed(2);
        } else {
          alert("Insert valid coupon code");
        }
      });
    }

    // make purchase button element
    const makePurchaseBtn = document.getElementById("btn-make-purchase");
    if (parseFloat(totalPriceElement.innerText) > 0) {
      makePurchaseBtn.removeAttribute("disabled");
    }
  });
}

// modal go home button get and set add Event Listener
const goHomeBtn = document.getElementById("btn-go-home");
goHomeBtn.addEventListener("click", function () {
  goHomeBtn.setAttribute("href", "index.html");
});
