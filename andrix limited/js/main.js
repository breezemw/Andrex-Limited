document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Updated product categories
    const categories = [
        {
            title: 'Tissue Products',
            icon: 'tissue-icon.svg',
            description: 'Premium quality tissue paper products',
            products: [
                { name: 'Luxury 3-Ply Toilet Tissue', image: 'toilet-tissue.png' },
                { name: 'Soft Pack Facial Tissues', image: 'facial-tissue.png' },
                // Add more products
            ]
        },
        {
            title: 'Exercise Books & Notebooks',
            icon: 'notebook-icon.svg',
            description: 'Durable notebooks for every need',
            products: [
                { name: '120-Page Exercise Book', image: 'exercise-book.png' },
                { name: 'Hardcover Notebook', image: 'notebook.png' },
                // Add more products
            ]
        },
        // Add more categories
    ];

    // Populate category grid with enhanced cards
    const categoryGrid = document.querySelector('.category-grid');
    if (categoryGrid) {
        categories.forEach(category => {
            categoryGrid.innerHTML += `
                <div class="category-card" data-category="${category.title.toLowerCase().replace(/\s+/g, '-')}">
                    <div class="category-icon">
                        <img src="images/icons/${category.icon}" alt="${category.title}">
                    </div>
                    <h3>${category.title}</h3>
                    <p>${category.description}</p>
                    <button class="view-products-btn">View Products</button>
                </div>
            `;
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.category-card, .product-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
});
