// Get list of matching attractions from Electron localStorage
var list = localStorage.getItem('locations');
// Due to JSON.stringify, the list needs to be parsed to be displayed. If not, the list will be displayed as "[Object, Object]"
var parsedList = JSON.parse(list)

// Find length of object (attractions list) to be displayed in HTML
var locationLength = Object.keys(parsedList).length;
console.log(locationLength)

let locationDom = parsedList[0].location

// Display number of matching attractions through DOM manipulation
document.getElementById('subtitle').innerHTML = `There are ${locationLength} attractions in ${locationDom} that match your critera.`

for(var i = 0; i < locationLength; i++) {
        // Dynamically create divs for specified length (for loop)
        attractionList = document.createElement("div");
        attractionList.className = `attractionsList`
        var nameBoxOpen = '<div id="nameBox">'
        var nameBoxClose = '</div>'
        var typeBoxOpen = '<div id="typeBox">'
        var typeBoxClose = '</div>'
        var ratingBoxOpen = '<div id="ratingBox">'
        var ratingBoxClose = '</div>'
        var priceBoxOpen = '<div id="priceBox">'
        var priceBoxClose = '</div>'
        var addressBoxOpen = '<div id="addressBox">'
        var addressBoxClose = '</div>'
        var imageBoxOpen = '<div id="imageBox">'
        var imageBoxClose = '</div>'

        // Display images in div (from \images folder)
        var image

        if (parsedList[i].type == 'resturant') {
            image = '<img src="images/americanfbla.jpg" alt="Resturant">'
        } else if (parsedList[i].type == 'nature') {
            image = '<img src="images/naturefbla.jpg" alt="Nature">'
        } else if (parsedList[i].type == 'shopping') {
            image = '<img src="images/mallfbla.jpg" alt="Shopping">'
        } else if (parsedList[i].type == 'museum') {
            image = '<img src="images/museumfbla.jpg" alt="Museum">'
        } else if (parsedList[i].type == 'landmark') {
            image = '<img src="images/landmarkfbla.jpg" alt="Landmark">'
        }
                  
        // Add information about each attractions to the created divs
        attractionList.innerHTML = nameBoxOpen + parsedList[i].name + nameBoxClose + typeBoxOpen + parsedList[i].description + typeBoxClose + addressBoxOpen + parsedList[i].address + priceBoxOpen + `Price Range: ${parsedList[i].price}` + priceBoxClose + addressBoxClose + imageBoxOpen + image + imageBoxClose
        // Append each div to each other
        document.body.appendChild(attractionList);
}