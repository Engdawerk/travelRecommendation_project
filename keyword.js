const keywords = {
  beach: ["beach", "beaches"],
  temple: ["temple", "temples"],
  country: ["country", "countries"]
};

// Function to search and display results
function search() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results
  
  // Check for matching keywords
  let found = false;

  for (const [key, variations] of Object.entries(keywords)) {
    if (variations.includes(searchInput)) {
      resultsDiv.innerHTML += `<div class="result">${key.charAt(0).toUpperCase() + key.slice(1)} found!</div>`;
      found = true;
    }
  }

  if (!found) {
    resultsDiv.innerHTML = '<div class="result">No results found.</div>';
  }
}

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', search);
