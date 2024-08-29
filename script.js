let data = {};

// Fetch data from the server (replace 'your-api-url' with the actual API endpoint)
fetch('travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(jsonData => {
        data = jsonData; // Store the fetched data
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

document.getElementById('filterButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    // Check for specific keyword "temples"
    if (userInput === 'temples') {
        data.temples.forEach(temple => {
            const templeElement = document.createElement('div');
            templeElement.classList.add('item');
            templeElement.innerHTML = `
                <h3>${temple.name}</h3>
                <img src="${temple.imageUrl}" alt="${temple.name}">
                <p>${temple.description}</p>
            `;
            outputDiv.appendChild(templeElement);
        });
        return; // Exit after displaying all temples
    }
    if (userInput === 'beaches') {
        data.beaches.forEach(beache => {
            const beacheElement = document.createElement('div');
            beacheElement.classList.add('item');
            beacheElement.innerHTML = `
                <h3>${beache.name}</h3>
                <img src="${beache.imageUrl}" alt="${beache.name}">
                <p>${beache.description}</p>
            `;
            outputDiv.appendChild(beacheElement);
        });
        return; // Exit after displaying all temples
    }
    if (userInput === 'countries') {
        data.countries.forEach(countrie => {
            const countrieElement = document.createElement('div');
            countrieElement.classList.add('item');
            countrieElement.innerHTML = `
                <h3>${countrie.name}</h3>
                <img src="${countrie.imageUrl}" alt="${countrie.name}">
                <p>${countrie.description}</p>
            `;
            outputDiv.appendChild(countrieElement);
        });
        return; // Exit after displaying all temples
    }
    // Check for countries
    const country = data.countries?.find(c => c.name.toLowerCase().includes(userInput));
    if (country) {
        country.cities.forEach(city => {
            const cityElement = document.createElement('div');
            cityElement.classList.add('item');
            cityElement.innerHTML = `
                <h3>${city.name}</h3>
                <img src="${city.imageUrl}" alt="${city.name}">
                <p>${city.description}</p>
            `;
            outputDiv.appendChild(cityElement);
        });
        return; // Exit if found
    }

    // Check for temples
    const temple = data.temples?.find(t => t.name.toLowerCase().includes(userInput));
    if (temple) {
        const templeElement = document.createElement('div');
        templeElement.classList.add('item');
        templeElement.innerHTML = `
            <h3>${temple.name}</h3>
            <img src="${temple.imageUrl}" alt="${temple.name}">
            <p>${temple.description}</p>
        `;
        outputDiv.appendChild(templeElement);
        return; // Exit if found
    }

    // Check for beaches
    const beach = data.beaches?.find(b => b.name.toLowerCase().includes(userInput));
    if (beach) {
        const beachElement = document.createElement('div');
        beachElement.classList.add('item');
        beachElement.innerHTML = `
            <h3>${beach.name}</h3>
            <img src="${beach.imageUrl}" alt="${beach.name}">
            <p>${beach.description}</p>
        `;
        outputDiv.appendChild(beachElement);
        return; // Exit if found
    }

    // If nothing is found
    outputDiv.innerHTML = '<p>No results found.</p>';
});
 // Clear button functionality
 document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('userInput').value = ''; // Clear input field
    document.getElementById('output').innerHTML = ''; // Clear output area
});
