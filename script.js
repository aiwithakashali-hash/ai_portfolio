$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: [
            "n8n Automation Expert",
            "Generative AI Developer",
            "Machine Learning Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// JSON download functionality
document.querySelectorAll('.json-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const fileName = this.getAttribute('data-json');
        if (fileName) {
            // Trigger download by creating a temporary anchor
            const link = document.createElement('a');
            link.href = './' + fileName; // assumes JSON files are in same directory
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
});