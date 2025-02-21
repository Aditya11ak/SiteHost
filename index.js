function toggleImageOnResize() {
  let imagesc = document.querySelector(".imagesc");

  if (window.matchMedia("(max-width: 1040px)").matches) {
    if (imagesc) {
      imagesc.innerHTML = `
      <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="blobClip">
            <path d="M17.8,-21.9C24.1,-16,30.9,-11.3,33.4,-4.7C35.9,1.8,34.2,10.3,29.5,15.5C24.7,20.7,16.8,22.6,9.3,25.2C1.8,27.7,-5.3,30.9,-12.4,30.1C-19.4,29.2,-26.5,24.3,-32.2,17.2C-38,10.1,-42.4,0.9,-41.7,-8C-40.9,-17,-35,-25.8,-27.1,-31.5C-19.3,-37.1,-9.7,-39.8,-1.9,-37.5C5.8,-35.2,11.6,-27.9,17.8,-21.9Z" transform="translate(50 50)"/>
          </clipPath>
        </defs>
        <path fill="orange" d="M17.8,-21.9C24.1,-16,30.9,-11.3,33.4,-4.7C35.9,1.8,34.2,10.3,29.5,15.5C24.7,20.7,16.8,22.6,9.3,25.2C1.8,27.7,-5.3,30.9,-12.4,30.1C-19.4,29.2,-26.5,24.3,-32.2,17.2C-38,10.1,-42.4,0.9,-41.7,-8C-40.9,-17,-35,-25.8,-27.1,-31.5C-19.3,-37.1,-9.7,-39.8,-1.9,-37.5C5.8,-35.2,11.6,-27.9,17.8,-21.9Z" transform="translate(50 50)" stroke-width="0" style="transition: 0.3s"></path>
        <image href="./features/pro1.png" width="100" height="100" preserveAspectRatio="xMidYMid slice" clip-path="url(#blobClip)"/>
      </svg>`;
    }
  } else {
    imagesc.innerHTML = ``; // Hide otherwise
  }
}

// Run function on page load and on window resize
toggleImageOnResize();
window.addEventListener("resize", toggleImageOnResize);

document.addEventListener("DOMContentLoaded", function(event) {
  var element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// this part is solving the issue of adjustment of the website
window.onload = function() {
  window.scrollTo(0, 0);
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
};

var typed = new Typed(".text", {
  strings: ["FrontEnd Developer..", "Project Enthusiast.."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function notification() {
  var nameInput = document.querySelector(
    'input[type="text"][placeholder="Enter your Name"]'
  );
  var emailInput = document.querySelector(
    'input[type="email"][placeholder="Enter your Email"]'
  );
  var subjectInput = document.querySelector(
    'input[type="text"][placeholder="Enter your Subject"]'
  );
  var messageInput = document.getElementById("Message");
  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    subjectInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  ) {
    alert("Data Submitted Successfully!");
  } else {
    console.log("Please fill in all the fields.");
  }
}

function menu() {
  toggleScrollLock(true);
  var menuHTML = `
      <nav class="menuS" style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <a style="padding:10px;text-decoration:none;color:white" href="#home" onclick="closeMenu()">Home</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#about" onclick="closeMenu()">About</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#skills" onclick="closeMenu()">Skills</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#projects" onclick="closeMenu()">Projects</a>
        <a style="padding:10px;text-decoration:none;color:white" href="#contact" onclick="closeMenu()">Contact</a>
      </nav>
    `;
  document.getElementById("internalPage").innerHTML = menuHTML;
}

//locks the scrolling when the button is clicked
function toggleScrollLock(lock) {
  document.body.style.overflow = lock ? "hidden" : "auto";
}

function closeMenu() {
  toggleScrollLock(false);
  var menu = document.querySelector(".menuS");
  menu.style.display = "none";
}
