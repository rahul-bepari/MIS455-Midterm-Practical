//Rahul Bepari   ID- 2321165

let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
    cartCount = cartCount + 1;
    cartTotal = cartTotal + price;
    document.getElementById("cartCount").innerHTML = cartCount;
    document.getElementById("cartTotal").innerHTML = cartTotal;
    alert(productName + " added to cart!");
}

function subscribeNewsletter() {
    let email = document.getElementById("newsletterEmail").value;
    let msgBox = document.getElementById("newsletterMsg");

    if (email === "" || email.indexOf("@") === -1) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Please enter a valid email address.";
    } else {
        msgBox.style.color = "green";
        msgBox.innerHTML = "Thanks! We'll email you at " + email + " about new stock.";
        document.getElementById("newsletterEmail").value = "";
    }
}

function sendMessage() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;
    let message = document.getElementById("messageField").value;

    let msgBox = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Please fill in all fields before sending.";
    } else {
        msgBox.style.color = "green";
        msgBox.innerHTML = "Thanks " + name + ", your message has been sent!";

        document.getElementById("nameField").value = "";
        document.getElementById("emailField").value = "";
        document.getElementById("messageField").value = "";
    }
}