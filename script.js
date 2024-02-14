let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Get the modal and video player
var modal = document.getElementById("video-modal");
var videoPlayer = document.getElementById("video-player");

// Get all elements with class "video-popup"
var videoPopups = document.querySelectorAll(".video-popup");

// Function to open modal with clicked video
function openModal(videoSrc) {
    modal.style.display = "flex"; // Display modal
    videoPlayer.src = videoSrc; // Set video source
    videoPlayer.play(); // Start playing video
}

// Function to close modal
function closeModal() {
    modal.style.display = "none"; // Hide modal
    videoPlayer.pause(); // Pause video
}

// Get the close button element
var closeBtn = document.querySelector(".close");

// Add click event listeners to all video popups
videoPopups.forEach(function(videoPopup) {
    videoPopup.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        var videoSrc = this.getAttribute("href");
        openModal(videoSrc);
    });
});

// Add click event listener to close button
closeBtn.addEventListener("click", closeModal);

// Add click event listener to modal to close when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
