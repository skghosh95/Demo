document.getElementById("signupForm").style.display = "none";

document.getElementById("signupLink").addEventListener("click", function() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
});

document.getElementById("loginLink").addEventListener("click", function() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Perform login validation here
  // You can send the email and password to a server-side script for authentication
  
  // Example validation
  if (email === "example@example.com" && password === "password123") {
    alert("Login successful!");
    // Redirect to another page or perform other actions
  } else {
    alert("Invalid email or password");
  }
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var name = document.getElementById("sigupName").value;
  var id = document.getElementById("signupid").value;
  var PhoneNo = document.getElementById("signupPhoneNo").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;
  
  // Perform signup validation here
  // You can send the email and password to a server-side script for registration
  
  // Example validation
  alert("Signup successful!");
  // Redirect to another page or perform other actions
});
