

const firebaseConfig = {
    apiKey: "AIzaSyCgxJodtssgXAH2WsUlMymIWiDhPmk8_8w",
    authDomain: "form-based.firebaseapp.com",
    databaseURL: "https://form-based-default-rtdb.firebaseio.com",
    projectId: "form-based",
    storageBucket: "form-based.appspot.com",
    messagingSenderId: "802614182485",
    appId: "1:802614182485:web:6a93edbc66b117701a8adc",
    measurementId: "G-Q9P25HWMGY"
};

firebase.initializeApp(firebaseConfig);

// Reference to your database
const database = firebase.database();

const productForm = document.getElementById('productForm');

// Function to fetch data from Firebase and update HTML
function fetchData() {
    var database = firebase.database();

    // Reference to the 'items' node in the database
    var itemsRef = database.ref('items');

    // Listen for changes in the data
    itemsRef.on('value', function (snapshot) {
        // Clear the existing HTML content
        document.getElementById('itemList').innerHTML = '';

        // Iterate through the retrieved data
        snapshot.forEach(function (childSnapshot) {
            // Get the data of each item
            var itemData = childSnapshot.val();

            // Create an HTML element for each item
            var itemElement = document.createElement('div');
            itemElement.innerHTML = '<p><strong>Name:</strong> ' + itemData.name + '</p>' +
                '<p><strong>Price:</strong> $' + itemData.price + '</p>' +
                '<p><strong>Link:</strong> <a href="' + itemData.link + '" target="_blank">Visit Item</a></p>' +
                '<p><strong>Image:</strong> <img src="' + itemData.image + '" alt="Item Image"></p>';

            // Append the item element to the container
            document.getElementById('itemList').appendChild(itemElement);
        });
    });
}

// Call the fetchData function to initially load data
fetchData();

