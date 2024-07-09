document.addEventListener("DOMContentLoaded", function() {
    const cart = document.getElementById('cart-items');
    const productList = document.getElementById('product-list');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartTotal = document.getElementById('cart-total');
  
    let total = 0;
  
    // Add product to cart
    productList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const productName = e.target.dataset.name;
        const productPrice = parseFloat(e.target.dataset.price);
        total += productPrice;
        cartTotal.textContent = total.toFixed(2);
        cart.innerHTML += `<li>${productName} - $${productPrice.toFixed(2)}</li>`;
      }
    });
  
    // Checkout button functionality
    checkoutBtn.addEventListener('click', function() {
      alert(`Total amount: $${total.toFixed(2)}`);
    });
  });
