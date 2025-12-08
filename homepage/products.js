document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    const product = btn.getAttribute('data-product');
    alert(product + ' added to cart!');
  });
});
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim()
  if (query) alert("Searching for: " + query)
})
