

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

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from the form
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productLink = document.getElementById('productLink').value;
    const imageLink = document.getElementById('imageLink').value;

    // Save data to Firebase
    database.ref('products').push({
        name: productName,
        price: productPrice,
        link: productLink,
        image: imageLink,
    });

    // Clear the form
    productForm.reset();
});

