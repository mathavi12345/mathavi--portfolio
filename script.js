```javascript
// ===== MOBILE MENU =====

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// ===== CONTACT FORM =====

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! " +
            "I will get back to you soon."
        );

        this.reset();

    });


// ===== CURRENT YEAR =====

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===== SCROLL TO TOP =====

window.addEventListener("scroll", function() {

    const button =
        document.getElementById("topButton");

    if (window.scrollY > 400) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
```
