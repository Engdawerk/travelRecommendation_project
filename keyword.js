  const keywords = {
  beach: ["beach", "beaches"],
  temple: ["temple", "temples"],
  country: ["country", "countries"]
};

  async function fetchData() {
  const response = await fetch('travel_recommendation_api.json');
  const data = await response.json();
  return data.recommendations;
}

async function search() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  const recommendations = await fetchData();
  let found = false;

  for (const [key, variations] of Object.entries(keywords)) {
    if (variations.includes(searchInput)) {
           found = true;
      const keyword = Object.keys(recommendations).find(key => key === searchInput);

  if (keyword) {
    recommendations[keyword].forEach(place => {
      resultsDiv.innerHTML += `
        <div class="result">
          <h3>${place.name}</h3>
          <img src="${place.imageUrl}" alt="${place.name}" />
          <p>${place.description}</p>
        </div>
      `;
    });
  } else {
    resultsDiv.innerHTML = '<div class="result">No results found.</div>';
  }
    }
  } 
}

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', search);
