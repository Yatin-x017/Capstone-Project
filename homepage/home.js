document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim()
  if (query) alert("Searching for: " + query)
})
