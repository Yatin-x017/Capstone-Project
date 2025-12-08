let cart = JSON.parse(localStorage.getItem('techiumCart')) || [];

function renderCart() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalDiv = document.getElementById('cartTotal');
  cartItemsDiv.innerHTML = '';

  if(cart.length === 0){
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    cartTotalDiv.textContent = '';
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Price: ₹ ${item.price}</p>
      <button onclick="removeItem(${index})" class="btn">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price;
  });

  cartTotalDiv.textContent = 'Total: ₹ ' + total;
}

function removeItem(index){
  cart.splice(index, 1);
  localStorage.setItem('techiumCart', JSON.stringify(cart));
  renderCart();
}

document.getElementById('clearCartBtn').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('techiumCart', JSON.stringify(cart));
  renderCart();
});

renderCart();

document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.getAttribute('data-product');
    const productPrice = parseInt(btn.getAttribute('data-price')) || 1000; // default price
    cart.push({name: productName, price: productPrice});
    localStorage.setItem('techiumCart', JSON.stringify(cart));
    renderCart();
  });
});
