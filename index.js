

document.addEventListener("DOMContentLoaded", function(event) { 
  var element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

var typed = new Typed(".text", {
    strings: ["FrontEnd Developer..", "Project Enthusiast.."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function notification() {
    var nameInput = document.querySelector('input[type="text"][placeholder="Enter your Name"]');
    var emailInput = document.querySelector('input[type="email"][placeholder="Enter your Email"]');
    var subjectInput = document.querySelector('input[type="text"][placeholder="Enter your Subject"]');
    var messageInput = document.getElementById('Message');
    if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && subjectInput.value.trim() !== '' && messageInput.value.trim() !== '') {
        alert("Data Submitted Successfully!");
    } else {
        console.log("Please fill in all the fields.");
    }
}

 function menu() {
    var menuHTML = `
      <nav class="menuS" style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <a style="padding:10px;text-decoration:none;color:white" href="#home" onclick="closeMenu()">Home</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#about" onclick="closeMenu()">About</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#skills" onclick="closeMenu()">Skills</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#projects" onclick="closeMenu()">Projects</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#contact" onclick="closeMenu()">Contact</a>
      </nav>
    `;
    document.getElementById('internalPage').innerHTML = menuHTML;
}

function closeMenu() {
    var menu = document.querySelector('.menuS');
    menu.style.display = 'none';
}
