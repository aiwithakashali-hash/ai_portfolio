$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
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

    // PROJECT FILTERING
    const filterButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.projects-content .card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Add transition effect
            const projectsContent = document.querySelector('.projects-content');
            projectsContent.classList.add('hidden');
            
            setTimeout(() => {
                projectCards.forEach(card => {
                    if(category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                projectsContent.classList.remove('hidden');
                projectsContent.classList.add('visible');
                
                // Reset scroll position
                projectsContent.scrollLeft = 0;
            }, 300);
        });
    });

    // JSON DOWNLOAD (for n8n projects)
    document.querySelectorAll('.json-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const fileName = this.getAttribute('data-json');
            if (fileName) {
                const link = document.createElement('a');
                link.href = './' + fileName;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    });

    // MODAL FOR "GET CODE"
    document.querySelectorAll('.code-btn').forEach(button => {
        button.addEventListener('click', function() {
            const contactInfo = this.getAttribute('data-contact');
            document.getElementById('contactInfo').textContent = contactInfo;
            document.getElementById('contactModal').style.display = 'block';
        });
    });

    // Close modal with × button
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('contactModal').style.display = 'none';
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('contactModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
