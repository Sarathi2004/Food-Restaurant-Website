
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('bx-x');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  menu.classList.remove('bx-x');
};


window.onload=function(){
    alert("Welcome to Zen food ! Have a great visit !")
}


function sendWhatsapp() {
  let number = "+919790589329"; 
  
    // Get values
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let order = document.getElementById('order').value;
    let food = document.getElementById('food').value;
    let quantity = document.getElementById('quantity').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    let message = document.getElementById('message').value;
    
    // Construct the message
    var url = "https://wa.me/" + number + "?text="
            + "Name: " + name + "%0a"
            + "Mobile No: " + phone + "%0a"
            + "Order Item: " + order + "%0a"
            + "Additional Food: " + food + "%0a"
            + "Food Quantity: " + quantity + "%0a"
            + "Date and Time: " + date + "%0a"
            + "Address: " + address + "%0a"
            + "FeedBack: " + message + "%0a"
           
  
    window.open(url, '_blank').focus();
  }


function submit(){
    alert("Your Message Was Sending Successfully, Thank You...!");
}