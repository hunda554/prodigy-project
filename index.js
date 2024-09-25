$(document).ready(function() {
    // Initialize Owl Carousel for Portfolio section
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    // Google Maps Initialization
    function initMap() {
        var location = { lat: -25.344, lng: 131.036 }; // Replace with your desired latitude and longitude
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // Load Google Maps after the page is fully loaded
    window.onload = function() {
        initMap();  // Initialize Google Map when the window loads
    };

    // Scroll-triggered animations for portfolio items
    const items = document.querySelectorAll('.portfolio-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add the active class when in view
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item); // Observe each portfolio item
    });
});
