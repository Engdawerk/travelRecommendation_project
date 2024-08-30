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
function loadHome() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous content

    // Home page content with icons and styles
    outputDiv.innerHTML = `
        <h2>Welcome to Travel Ethiopia</h2>
        <p class="w3-opacity"><i>We love music</i></p>
        <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        
        <div class="icon-bar">
            <a class="active" href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-facebook-f"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
        </div>
    `;
    
    // Add styles for the icon bar
    const style = document.createElement('style');
    style.textContent = `
        .icon-bar {
            width: 90px;
        }
        .icon-bar a {
            display: block;
            text-align: center;
            padding: 16px;
            transition: all 0.3s ease;
            color: white;
            font-size: 36px;
        }
        .icon-bar a:hover {
            background-color: #000;
        }
    `;
    
    document.head.appendChild(style);
}

function loadAbout() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous content

    // About page content
    outputDiv.innerHTML = `
       <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>


<div class="row">
<h2 style="text-align:center">Our Team</h2>
<div class="column">
<div class="icon-bar">
  <a class="active" href="#"><i class="fa fa-twitter"></i></a> 
  <a href="#"><i class="fa fa-facebook-f"></i></a> 
  <a href="#"><i class="fa fa-instagram"></i></a> 
  <a href="#"><i class="fa fa-youtube-play"></i></a>
 </div>
</div>
<div class="column">

    <div class="card">
     
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>
    `;
     // Add styles for the icon bar
     const style = document.createElement('style');
     style.textContent = `
    body {margin:0}

.icon-bar {
  width: 90px;
  
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #000;
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 25px;
}

.card {
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  
  color: white;
}

.container {
  padding: 5px 25px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
     `;
     
     document.head.appendChild(style);
}

function loadContact() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous content

    // Contact page content
    outputDiv.innerHTML = `
        <div class="free-section">
  
</div>


<div class="row">

<div class="column">
<div class="icon-bar">
  <a class="active" href="#"><i class="fa fa-twitter"></i></a> 
  <a href="#"><i class="fa fa-facebook-f"></i></a> 
  <a href="#"><i class="fa fa-instagram"></i></a> 
  <a href="#"><i class="fa fa-youtube-play"></i></a>
 </div>
</div>
<div class="column">

    <div class="card">
     
      <div class="container">
        <h2>contact us</h2>
              </div>
    </div>
  </div>

 
  
  <div class="column">
    <div class="card">
      
      <div class="container2">
        <form action="/action_page.php">
          <label for="fname">Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email..">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message.." style="height:200px">                 </textarea>
          <input type="submit" value="Submit">
         </form>
      </div>
    </div>
  </div>
  </div>
    `;
    const style = document.createElement('style');
    style.textContent = `
      body {margin:0}

.icon-bar {
  width: 90px;
  
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #000;
}

.active {
  background-color: #04AA6D;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 35%;
  margin-bottom: 16px;
  padding: 0 25px;
}

.card {
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  margin: 10px;
}

.free-section {
  padding: 50px;
  text-align: center;
  
  color: white;
}

.container {
  padding: 5px 20px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
.container2 {
  border-radius: 5px;
  
  padding: 5px 25px;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


.contactus {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}
    `;
    
    document.head.appendChild(style);
}
