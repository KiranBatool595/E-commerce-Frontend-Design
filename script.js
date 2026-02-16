// Deal Products
const dealProducts = [
    { name: 'Smart watches', discount: '-25%', img: 'smartwatch.jpg' },
    { name: 'Laptops', discount: '-15%', img: 'laptop.jpg' },
    { name: 'GoPro cameras', discount: '-40%', img: 'gopro-camra.jpg' },
    { name: 'Headphones', discount: '-25%', img: 'headphones.jpg' },
    { name: 'Canon cameras', discount: '-25%', img: 'canon.jpg'}
];

// Product Data
const products = [
    {
        id: 1,
        name: "T-Shirt with multifull colors for man",
        name2:"T-shirt",
        price: 10.30,
        category: "clothing",
        images: ["T-Shirt-1.jpg", "blue winter coat.jpg", "T-Shirt-1.jpg", "T-Shirt-1.jpg"],
        description: "A comfortable cotton t-shirt is a wardrobe staple known for its natural softness, breathability, and versatility.",
        quantity: 1,
        stock: "In stock",
        reviews: 32,
        rating: 4.5,
        sold: 154,
        type: "Classic Shirts",
        material: "Textile material",
        design: "Modern nice",
        customization: "Customized logo and design custom packages",
        protection: "Refund Policy",
        warranty: "2 years full warranty",
        specifications: {
            model: "BR786897",
            style: "Classic style",
            certificate: "ISO-9001:2017",
            size: "34mm x 450mm x 19mm",
            memory: "36GB RAM"
        },
        features: [
            "Some great feature name here",
            "Lorem ipsum dolor sit amet, consectetur",
            "Duis aute irure dolor in reprehenderit",
            "Some great feature name here"
        ]
    },
    {
        id: 2,
        name: "brown winter coat medium size",
        name2:"Coat",
        price: 10.30,
        category: "clothing",
        images: ["brown winter coat.jpg", "brown winter coat.jpg"],
        description: "A brown winter coat is a versatile, essential outer garment providing warmth and elevated style through colder months",
        quantity: 1,
        stock: "In stock",
        reviews: 25,
        rating: 4.0,
        sold: 89
    },
    {
        id: 3,
        name: "blue winter coat",
        name2:"Coat",
        price: 12.50,
        category: "clothing",
        images: ["blue winter coat.jpg"],
        description: "Powerful and portable laptop for professionals",
        quantity: 1,
        stock: "In stock",
        reviews: 18,
        rating: 4.2,
        sold: 45
    },
    {
        id: 4,
        name: "leather wallet",
        name2:"Wallet",
        price: 34.99,
        category: "electrical",
        images: ["leather wallet.jpg"],
        description: "A leather wallet is a classic, durable accessory designed to securely hold essential items like cash, credit cards, and IDs",
        quantity: 1,
        stock: "In stock",
        reviews: 42,
        rating: 4.7,
        sold: 220
    },
    {
        id: 5,
        name: "Samsung Galaxy mobile phone blue color",
        name2:"phone",
        price: 99.00,
        category: "electrical",
        images: ["phone2.jpg"],
        description: "premium Android smartphones known for cutting-edge AMOLED displays, advanced multi-lens cameras, 5G connectivity, and robust AI features like Galaxy AI.",
        quantity: 1,
        stock: "In stock",
        reviews: 156,
        rating: 4.8,
        sold: 890
    },
    {
        id: 6,
        name: "jeans shorts for men bule color",
        name2:"Jeans",
        price: 79.99,
        category: "clothing",
        images: ["jeans shorts.jpg"],
        description: "jeans shorts for man bule color are a staple of casual summer fashion, offering a blend of comfort and classic style",
        quantity: 1,
        stock: "In stock",
        reviews: 28,
        rating: 4.3,
        sold: 112
    },
    {
        id: 7,
        name: "headset for gaming with mic",
        name2:"Headset",
        price: 39.99,
        category: "electrical",
        images: ["headset.png"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1,
        stock: "In stock",
        reviews: 87,
        rating: 4.6,
        sold: 340
    },
    {
        id: 8,
        name: "jeans bag for travel for men",
        name2:"Bag",
        price: 99.00,
        category: "clothing",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1,
        stock: "In stock",
        reviews: 15,
        rating: 4.1,
        sold: 67
    },
    {
        id: 9,
        name: "leather wallet",
        name2:"Wallet",
        price: 34.99,
        category: "clothing",
        images: ["3.jpg"],
        description: "A leather wallet is a classic, durable accessory designed to securely hold essential items like cash, credit cards, and IDs",
        quantity: 1,
        stock: "In stock",
        reviews: 42,
        rating: 4.7,
        sold: 220
    },
    {
        id: 10,
        name: "jeans shorts for men bule color",
        name2:"Jeans",
        price: 79.99,
        category: "electrical",
        images: ["cup.jpg"],
        description: "jeans shorts for man bule color are a staple of casual summer fashion, offering a blend of comfort and classic style",
        quantity: 1,
        stock: "In stock",
        reviews: 28,
        rating: 4.3,
        sold: 112
    },
    {
        id: 11,
        name: "Samsung Galaxy mobile phone red color",
        name2:"phone",
        price: 89.99,
        category: "electrical",
        images: ["phone.jpg"],
        description: "premium Android smartphones known for cutting-edge AMOLED displays, advanced multi-lens cameras, 5G connectivity, and robust AI features like Galaxy AI.",
        quantity: 1,
        stock: "In stock",
        reviews: 156,
        rating: 4.8,
        sold: 890
    },
    {
        id: 12,
        name: "headset for gaming with mic",
        name2:"Headset",
        price: 39.99,
        category: "electrical",
        images: ["laptop.jpg"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1,
        stock: "In stock",
        reviews: 87,
        rating: 4.6,
        sold: 340
    },
    {
        id: 13,
        name: "headset for gaming with mic",
        name2:"Headset",
        price: 39.99,
        category: "electrical",
        images: ["laptop.jpg"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1,
        stock: "In stock",
        reviews: 87,
        rating: 4.6,
        sold: 340
    },
    {
        id: 14,
        name: "Samsung Galaxy mobile phone red color",
        name2:"Phone",
        price: 99.00,
        category: "electrical",
        images: ["phone.jpg"],
        description: "premium Android smartphones known for cutting-edge AMOLED displays, advanced multi-lens cameras, 5G connectivity, and robust AI features like Galaxy AI.",
        quantity: 1,
        stock: "In stock",
        reviews: 156,
        rating: 4.8,
        sold: 890
    },
    {
        id: 15,
        name: "jeans bag for travel for men",
        name2:"Bag",
        price: 99.00,
        category: "clothing",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1,
        stock: "In stock",
        reviews: 15,
        rating: 4.1,
        sold: 67
    },
    {
        id: 16,
        name: "jeans bag for travel for men",
        name2:"Bag",
        price: 99.00,
        category: "clothing",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1,
        stock: "In stock",
        reviews: 15,
        rating: 4.1,
        sold: 67
    }
];



document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    DealProducts();
    RecommendedProducts();
    ShowCategoryBlocks();
}

// Show Deal Products
function DealProducts() {
    const container = document.getElementById('dealProducts');
    if (!container) return;
    
    container.innerHTML = '';
    
    dealProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'deal-product-card';
        
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;
        img.className = 'deal-product-img';
        
        const name = document.createElement('div');
        name.className = 'deal-product-name';
        name.textContent = product.name;
        
        const discount = document.createElement('div');
        discount.className = 'deal-discount';
        discount.textContent = product.discount;
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(discount);
        
        container.appendChild(card);
    });
}

// Show Recommended Products
function RecommendedProducts(){
    const container = document.getElementById('recommendedProducts');
    
    container.innerHTML = '';

    products.slice(0, 10).forEach(product => {
        const card = document.createElement('a');
        card.className = 'recommended-card';
        card.onclick = function() {
            showProductDetails(product.id);
        };

        const img = document.createElement('img');
        img.src = product.images[0];
        img.alt = product.name;
        img.className = 'recommended-img';

        const price = document.createElement('div');
        price.className = 'recommended-price';
        price.textContent = `$${product.price.toFixed(2)}`;

        const desc = document.createElement('div');
        desc.className = 'recommended-desc';
        const descriptionText = product.description.substring(0, 50);
        desc.textContent = descriptionText + (product.description.length > 50 ? '...' : '');

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'product-buttons';

        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(desc);

        container.appendChild(card);
    });
}

// category block section
function ShowCategoryBlocks() {
    const container = document.getElementById('categoryBlocks');
    if (!container) return;
    
    container.innerHTML = '';
    
    const homeItems = products.filter(item => item.category === 'clothing').slice(0, 8);
    const electronicsItems = products.filter(item => item.category === 'electrical').slice(0, 8);
    
    const block1 = CreateCategoryBlock('Home and outdoor', homeItems, 'url(category-block1.jpg)');
    container.appendChild(block1);
    
    const block2 = CreateCategoryBlock('Consumer electronics and gadgets', electronicsItems, 'url(category-block-2.png)');
    container.appendChild(block2);
}

// function to create one category block
function CreateCategoryBlock(title, items, bgColor) {
    const block = document.createElement('div');
    block.className = 'category-block';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.style.backgroundImage = bgColor;
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    
    const titleH2 = document.createElement('h2');
    titleH2.textContent = title;
    
    const button = document.createElement('button');
    button.className = 'source-btn';
    button.textContent = 'Source now';
    
    header.appendChild(titleH2);
    header.appendChild(button);
    
    const productsGrid = document.createElement('div');
    productsGrid.className = 'category-products';
    
    items.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'category-product';
        
        const productName = document.createElement('h3');
        productName.textContent = product.name2;
        
        const productPrice = document.createElement('p');
        productPrice.className = 'category-price';
        productPrice.innerHTML = `From<br>USD ${product.price}`;
        
        const productImg = document.createElement('img');
        productImg.src = product.images[0];
        productImg.alt = product.name;
        
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productImg);
        
        productsGrid.appendChild(productCard);
    });
    
    block.appendChild(header);
    block.appendChild(productsGrid);
    
    return block;
}

// product detail page
function showProductDetails(productId){
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }   

    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('.suppliers-section').style.display = 'none';
    document.querySelector('.newsletter-section').style.display = 'none';

    const detailsContainer = document.getElementById('product-details');
    detailsContainer.style.display = 'block';

    // generate stars
    const fullStars = Math.floor(product.rating || 4);
    const halfStar = (product.rating || 4) % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
    }
    if (halfStar) {
        starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    }

    detailsContainer.innerHTML = `
        <div class="product-detail-page">
            <!-- Go Back Button -->
            <button class="back-to-home-btn" onclick="goBackToHome()">
                <i class="fa-solid fa-arrow-left"></i> Go back
            </button>

            <div class="product-detail-container">
                <!-- Left Section Images -->
                <div class="product-images-section">
                    <div class="main-product-image">
                        <img id="mainImage" src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-thumbnails">
                        ${product.images.map((img, index) => `
                            <img src="${img}" 
                                 class="thumbnail ${index === 0 ? 'active' : ''}"
                                 onclick="changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                </div>

                <!-- Middle Section Product Info -->
                <div class="product-info-section">
                    <div class="stock-badge">
                        <i class="fa-solid fa-check"></i> ${product.stock || 'In stock'}
                    </div>
                    
                    <h1 class="product-detail-title">${product.name}</h1>
                    
                    <div class="product-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-number">${product.rating || 4.0}</span>
                        <span class="reviews-count">${product.reviews || 32} reviews</span>
                        <span class="sold-count"><i class="fa-regular fa-message"></i> ${product.sold || 154} sold</span>
                    </div>

                    <div class="price-section">
                        <div class="price-box">
                            <div class="price-value">$${product.price.toFixed(2)}</div>
                            <div class="price-qty">50-100 pcs</div>
                        </div>
                        <div class="price-box">
                            <div class="price-label"></div>
                            <div class="price-value">$${(product.price * 0.9).toFixed(2)}</div>
                            <div class="price-qty">100-700 pcs</div>
                        </div>
                        <div class="price-box">
                            <div class="price-label"></div>
                            <div class="price-value">$${(product.price * 0.8).toFixed(2)}</div>
                            <div class="price-qty">700+ pcs</div>
                        </div>
                    </div>

                    <table class="product-details-table">
                        <tr>
                            <td class="label">Price:</td>
                            <td class="value">Negotiable</td>
                        </tr>
                        <tr>
                            <td class="label">Type:</td>
                            <td class="value">${product.type || 'Classic Shirts'}</td>
                        </tr>
                        <tr>
                            <td class="label">Material:</td>
                            <td class="value">${product.material || 'Textile material'}</td>
                        </tr>
                        <tr>
                            <td class="label">Design:</td>
                            <td class="value">${product.design || 'Modern nice'}</td>
                        </tr>
                        <tr>
                            <td class="label">Customization:</td>
                            <td class="value">${product.customization || 'Customized logo and design custom packages'}</td>
                        </tr>
                        <tr>
                            <td class="label">Protection:</td>
                            <td class="value">${product.protection || 'Refund Policy'}</td>
                        </tr>
                        <tr>
                            <td class="label">Warranty:</td>
                            <td class="value">${product.warranty || '2 years full warranty'}</td>
                        </tr>
                    </table>
                </div>

                <!-- Right Section: Supplier Info -->
                <div class="supplier-info-section">
                    <div class="supplier-card">
                        <div class="supplier-logo">R</div>
                        <div class="supplier-details">
                            <h3>Supplier</h3>
                            <p>Guanjoi Trading LLC</p>
                        </div>
                    </div>

                    <div class="supplier-location">
                        <p><img src="germany-flag.png" alt="Germany" class="country-flag"> Germany, Berlin</p>
                        <p><i class="fa-regular fa-circle-check"></i> Verified Seller</p>
                        <p><i class="fa-solid fa-earth-americas"></i> Worldwide shipping</p>
                    </div>

                    <button class="send-inquiry-btn">Send inquiry</button>
                    <a href="#" class="seller-profile-link">Seller's profile</a>

                    <button class="save-for-later-btn">
                        <i class="fa-regular fa-heart"></i> Save for later
                    </button>
                </div>
            </div>

            <!-- Tabs Section -->
            <div class="product-tabs">
                <div class="tab-buttons">
                    <button class="tab-btn active" onclick="switchTab('description')">Description</button>
                    <button class="tab-btn" onclick="switchTab('reviews')">Reviews</button>
                    <button class="tab-btn" onclick="switchTab('shipping')">Shipping</button>
                    <button class="tab-btn" onclick="switchTab('seller')">About seller</button>
                </div>

                <div class="tab-content active" id="description">
                    <p>${product.description}</p>
                    
                    <table class="specifications-table">
                        <tr><td>Model</td><td>${product.specifications?.model || 'BR786897'}</td></tr>
                        <tr><td>Style</td><td>${product.specifications?.style || 'Classic style'}</td></tr>
                        <tr><td>Certificate</td><td>${product.specifications?.certificate || 'ISO-9001:2017'}</td></tr>
                        <tr><td>Size</td><td>${product.specifications?.size || '34mm x 450mm x 19mm'}</td></tr>
                        <tr><td>Memory</td><td>${product.specifications?.memory || '36GB RAM'}</td></tr>
                    </table>

                    ${product.features ? `
                        <ul class="features-list">
                            ${product.features.map(feature => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>

                <div class="tab-content" id="reviews">
                    <p>Customer reviews will appear here.</p>
                </div>

                <div class="tab-content" id="shipping">
                    <p>Shipping information will appear here.</p>
                </div>

                <div class="tab-content" id="seller">
                    <p>Seller information will appear here.</p>
                </div>
            </div>
        </div>
    `;
}

// Change main image when clicking thumbnail
function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainImage').src = imageSrc;
    
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    thumbnail.classList.add('active');
}

// Switch tabs
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    
    event.target.classList.add('active');
}

// Go back to home page
function goBackToHome() {
    document.getElementById('product-details').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
    document.querySelector('.suppliers-section').style.display = 'block';
    document.querySelector('.newsletter-section').style.display = 'block';
}
