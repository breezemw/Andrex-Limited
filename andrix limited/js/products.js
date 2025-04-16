const products = {
    tissue: [
        { name: 'Premium 3-Ply Toilet Tissue', category: 'Tissue Products', image: 'toilet-tissue.jpg', description: 'Soft and strong 3-ply toilet tissue' },
        { name: 'Facial Tissues Box (200 sheets)', category: 'Tissue Products', image: 'facial-tissue.jpg', description: 'Gentle facial tissues in convenient box' },
        { name: 'Pocket Tissues (10-pack)', category: 'Tissue Products', image: 'pocket-tissue.jpg', description: 'Travel-size tissue packs' },
        { name: 'Kitchen Paper Towels', category: 'Tissue Products', image: 'kitchen-towel.jpg', description: 'Absorbent kitchen towels' },
        { name: 'Dinner Napkins (100-pack)', category: 'Tissue Products', image: 'napkins.jpg', description: 'High-quality table napkins' }
    ],
    notebooks: [
        { name: '40-Page Exercise Book', category: 'Exercise Books', image: 'exercise-40.jpg', description: 'Standard school exercise book' },
        { name: '80-Page Exercise Book', category: 'Exercise Books', image: 'exercise-80.jpg', description: 'Double-lined exercise book' },
        { name: '120-Page Exercise Book', category: 'Exercise Books', image: 'exercise-120.jpg', description: 'Premium exercise book' },
        { name: 'A5 Hardcover Notebook', category: 'Notebooks', image: 'hardcover-a5.jpg', description: 'Professional hardcover notebook' },
        { name: 'Spiral Notebook A4', category: 'Notebooks', image: 'spiral-a4.jpg', description: 'Spiral-bound notebook' }
    ],
    writing: [
        { name: 'Ballpoint Pen Set', category: 'Writing Instruments', image: 'ballpoint.jpg', description: 'Blue, black, and red pens' },
        { name: 'Gel Pen Pack', category: 'Writing Instruments', image: 'gel-pen.jpg', description: 'Smooth writing gel pens' },
        { name: 'Fineliner Set', category: 'Writing Instruments', image: 'fineliner.jpg', description: 'Precision writing fineliners' },
        { name: 'Whiteboard Markers', category: 'Writing Instruments', image: 'markers.jpg', description: 'Dry-erase markers' },
        { name: 'Highlighter Set', category: 'Writing Instruments', image: 'highlighter.jpg', description: 'Vibrant highlighters' }
    ],
    paper: [
        { name: 'A4 Copy Paper 80gsm', category: 'Paper Products', image: 'a4-paper.jpg', description: 'Premium printing paper' },
        { name: 'A3 Paper', category: 'Paper Products', image: 'a3-paper.jpg', description: 'Large format paper' },
        { name: 'Colored Paper Pack', category: 'Paper Products', image: 'colored-paper.jpg', description: 'Assorted colors' }
    ],
    stationery: [
        { name: '30cm Ruler', category: 'Stationery', image: 'ruler.jpg', description: 'Clear plastic ruler' },
        { name: 'Eraser Pack', category: 'Stationery', image: 'eraser.jpg', description: 'Dust-free erasers' },
        { name: 'Pencil Sharpener', category: 'Stationery', image: 'sharpener.jpg', description: 'Metal sharpener' }
    ],
    school: [
        { name: 'Geometry Set', category: 'School Supplies', image: 'geometry-set.jpg', description: 'Complete math set' },
        { name: 'Crayon Pack', category: 'School Supplies', image: 'crayons.jpg', description: '12 vibrant colors' },
        { name: 'White Chalk Box', category: 'School Supplies', image: 'chalk.jpg', description: 'Dustless chalk' }
    ],
    office: [
        { name: 'File Folder Pack', category: 'Office Supplies', image: 'folders.jpg', description: 'Durable file folders' },
        { name: 'Stapler Set', category: 'Office Supplies', image: 'stapler.jpg', description: 'With 1000 staples' },
        { name: 'Sticky Notes', category: 'Office Supplies', image: 'sticky-notes.jpg', description: 'Assorted sizes' }
    ]
};

function createProductModal(product) {
    return `
        <div class="product-modal" id="productModal">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <div class="product-detail">
                    <div class="product-detail-image">
                        <div class="product-image" data-category="${product.category.toLowerCase().replace(/\s+/g, '-')}">
                            <div class="placeholder-icon">
                                <i class="fas ${getCategoryIcon(product.category)}"></i>
                            </div>
                        </div>
                    </div>
                    <div class="product-detail-info">
                        <h2>${product.name}</h2>
                        <p class="category">${product.category}</p>
                        <p class="description">${product.description}</p>
                        <div class="product-features">
                            ${getProductFeatures(product)}
                        </div>
                        <button class="inquire-btn" onclick="inquireProduct('${product.name}')">
                            <i class="fas fa-envelope"></i> Inquire Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getProductFeatures(product) {
    const features = {
        'Tissue Products': ['Soft & Strong', 'Hygienic', 'Premium Quality'],
        'Exercise Books': ['Durable Cover', 'Quality Paper', 'Line Spacing'],
        'Writing Instruments': ['Smooth Writing', 'Long-lasting', 'Comfortable Grip']
        // Add more category-specific features
    };
    
    const categoryFeatures = features[product.category] || [];
    return categoryFeatures.map(feature => `
        <div class="feature">
            <i class="fas fa-check"></i>
            <span>${feature}</span>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Function to display products
    const displayProducts = (category = 'all') => {
        productsGrid.innerHTML = '';
        
        const productsToShow = category === 'all' 
            ? Object.values(products).flat()
            : products[category] || [];

        productsToShow.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image" data-category="${product.category.toLowerCase().replace(/\s+/g, '-')}">
                    <div class="placeholder-icon">
                        <i class="fas ${getCategoryIcon(product.category)}"></i>
                    </div>
                    <div class="product-overlay"></div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-category">${product.category}</div>
                    <p class="product-description">${product.description}</p>
                    <button class="inquire-btn" onclick="inquireProduct('${product.name}')">
                        <i class="fas fa-envelope"></i> Inquire Now
                    </button>
                </div>
            `;

            card.addEventListener('click', () => {
                document.body.insertAdjacentHTML('beforeend', createProductModal(product));
                const modal = document.getElementById('productModal');
                modal.classList.add('active');
                
                modal.querySelector('.close-modal').addEventListener('click', () => {
                    modal.remove();
                });
            });

            productsGrid.appendChild(card);
        });
    };

    function getCategoryIcon(category) {
        const icons = {
            'Tissue Products': 'fa-toilet-paper',
            'Exercise Books': 'fa-book',
            'Notebooks': 'fa-notebook',
            'Writing Instruments': 'fa-pen',
            'Paper Products': 'fa-copy',
            'Stationery': 'fa-ruler',
            'School Supplies': 'fa-pencil',
            'Office Supplies': 'fa-paperclip'
        };
        return icons[category] || 'fa-box';
    }

    // Add inquiry function
    function inquireProduct(productName) {
        const message = `I'm interested in ${productName}. Please provide more information.`;
        const whatsappLink = `https://wa.me/265881963991?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    // Initialize with all products
    displayProducts();

    // Handle filter clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });
});
