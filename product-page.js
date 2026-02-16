let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

let productsPerPage = 8;  
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    showAllProducts();
    applyFilters();
});

function showAllProducts() {
    const grid = document.getElementById('productsGrid');
    
    grid.innerHTML = '';
    
    // Loop through each product
    products.slice(0, productsPerPage * currentPage).forEach(product => {
        // Create a card for each product
        const card = document.createElement('a');
        card.className = 'product-card';
        card.onclick = function() {
            showProductDetails(product.id);
        };

        card.setAttribute('data-category', product.category);
        card.setAttribute('data-price', product.price);

        const isFavorite = favorites.some(fav => fav.id === product.id);

        // Generate star rating
        const rating = product.rating || 4.0;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let starsHTML = '';
    
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }
        
        // HTML inside the card
        card.innerHTML = `
        <div class="product-card-inner">
            <!-- Product Image -->
            <div class="product-image-wrapper">
                <img src="${product.images[0]}" 
                    alt="${product.name}" 
                    class="product-image">
            </div>
            
            <!-- Product Info -->
            <div class="product-info">
                <!-- Price and Heart Icon -->
                <div class="price-heart-row">
                    <div class="price-section">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <!-- Heart Icon beside price -->
                    <div class="heart-icon ${isFavorite ? 'active' : ''}" 
                         onclick="event.preventDefault(); event.stopPropagation(); toggleFavorite(${product.id})">
                        <i class="fa-${isFavorite ? 'solid' : 'regular'} fa-heart"></i>
                    </div>
                </div>
                
                <!-- Rating -->
                <div class="rating-section">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-number">${rating}</span>
                </div>
                
                <!-- Product Name -->
                <h3 class="product-name">${product.name}</h3>
            </div>
        </div>`;
        
        grid.appendChild(card);
    });
    
    // Update product count
    document.getElementById('productCount').textContent = products.length;

    let button = document.querySelector('.more');
    
    if (productsPerPage * currentPage < products.length) {
        button.style.display = 'block';  
    } else {
        button.style.display = 'none';   
    }
}

function loadMore() {
    currentPage++;  
    showAllProducts();  
}


// toggle favorie
function toggleFavorite(productId) {    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = favorites.findIndex(fav => fav.id === productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(product);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Reload products page if visible
    const productsMain = document.querySelector('.products-main');
    if (productsMain && productsMain.style.display !== 'none') {
        showAllProducts();
        applyFilters();
    }

    updateProductDetailsHeart(productId);
}


// update heart in product details page
function updateProductDetailsHeart(productId) {
    const detailsHeartBtn = document.querySelector('.save-for-later-btn');
    if (!detailsHeartBtn) return;
    
    const isFavorite = favorites.some(fav => fav.id === productId);
    
    if (isFavorite) {
        detailsHeartBtn.innerHTML = '<i class="fa-solid fa-heart"></i> Saved';
        detailsHeartBtn.style.color = 'rgb(239, 68, 68)';
    } else {
        detailsHeartBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Save for later';
        detailsHeartBtn.style.color = '';
    }
}


// show favortes modal
function showFavorites() {
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesContent');
    
    console.log('📋 Opening favorites:', favorites.length);
    
    if (favorites.length === 0) {
        content.innerHTML = `
            <div class="empty-favorites">
                <i class="fa-regular fa-heart" style="font-size: 64px; color: rgb(209, 213, 219); margin-bottom: 20px;"></i>
                <h3>No favorites yet</h3>
                <p style="font-size: 14px; color: rgb(107, 114, 128); margin-top: 10px;">
                    Click the heart icon on products to add them here
                </p>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="favorites-grid">
                ${favorites.map(product => `
                    <div class="product-card">
                        <div class="product-card-inner">
                            <div class="product-image-wrapper">
                                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                            </div>
                            <div class="product-info">
                                <div class="price-heart-row">
                                    <div class="price-section">
                                        <span class="current-price">$${product.price.toFixed(2)}</span>
                                    </div>
                                    <div class="heart-icon active" 
                                         onclick="event.stopPropagation(); toggleFavorite(${product.id}); showFavorites();">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                </div>
                                <h3 class="product-name">${product.name}</h3>
                                <button class="view-product-btn" onclick="closeFavoritesModal(); showProductDetails(${product.id})">
                                    <i class="fa-solid fa-eye"></i> View Product
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    modal.style.display = 'flex';
}

// coles favortes modal
function closeFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('favoritesModal');
    if (event.target === modal) {
        closeFavoritesModal();
    }
}

// filter
function applyFilters() {
    const grid = document.getElementById('productsGrid');
    
    const cards = grid.querySelectorAll('.product-card');
    
    const categoryRadio = document.querySelector('input[name="category"]:checked');
    const selectedCategory = categoryRadio ? categoryRadio.value : 'AllCategory';
    
    const priceCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedPrices = Array.from(priceCheckboxes).map(cb => cb.value);
    
    let visibleCount = 0;
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardPrice = parseFloat(card.getAttribute('data-price'));
        
        let categoryMatch = true;
        if (selectedCategory !== 'AllCategory') {
            categoryMatch = (cardCategory === selectedCategory);
        }
        
        let priceMatch = true;
        if (selectedPrices.length > 0) {
            priceMatch = selectedPrices.some(range => {
                if (range === '0-20') return cardPrice < 20;
                if (range === '20-50') return cardPrice >= 20 && cardPrice < 50;
                if (range === '50-100') return cardPrice >= 50 && cardPrice < 100;
                if (range === '100+') return cardPrice >= 100;
                return false;
            });
        }
        
        if (categoryMatch && priceMatch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
}

function clearFilters() {
    const allCategoryRadio = document.querySelector('input[name="category"][value="AllCategory"]');
    if (allCategoryRadio) allCategoryRadio.checked = true;
    
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    applyFilters();
}

function changeView(viewType) {
    const grid = document.getElementById('productsGrid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    if (!grid) return;
    
    if (viewType === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
    
    viewButtons.forEach(btn => {
        if (btn.getAttribute('data-view') === viewType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// product details
function showProductDetails(productId){
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }   

    document.querySelector('.products-main').style.display = 'none';
    
    const isFavorite = favorites.some(fav => fav.id === productId);

    let detailsContainer = document.getElementById('product-details');
    detailsContainer.style.display = 'block';

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
            <button class="back-to-home-btn" onclick="goBackToProducts()">
                <i class="fa-solid fa-arrow-left"></i> Go back
            </button>

            <div class="product-detail-container">
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
                            <div class="price-value">$${(product.price * 0.9).toFixed(2)}</div>
                            <div class="price-qty">100-700 pcs</div>
                        </div>
                        <div class="price-box">
                            <div class="price-value">$${(product.price * 0.8).toFixed(2)}</div>
                            <div class="price-qty">700+ pcs</div>
                        </div>
                    </div>

                    <table class="product-details-table">
                        <tr><td class="label">Price:</td><td class="value">Negotiable</td></tr>
                        <tr><td class="label">Type:</td><td class="value">${product.type || 'Classic Shirts'}</td></tr>
                        <tr><td class="label">Material:</td><td class="value">${product.material || 'Textile material'}</td></tr>
                        <tr><td class="label">Design:</td><td class="value">${product.design || 'Modern nice'}</td></tr>
                        <tr><td class="label">Customization:</td><td class="value">${product.customization || 'Customized logo'}</td></tr>
                        <tr><td class="label">Protection:</td><td class="value">${product.protection || 'Refund Policy'}</td></tr>
                        <tr><td class="label">Warranty:</td><td class="value">${product.warranty || '2 years full warranty'}</td></tr>
                    </table>
                </div>

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

                    <button class="save-for-later-btn" 
                            onclick="toggleFavorite(${product.id})" 
                            style="${isFavorite ? 'color: rgb(239, 68, 68);' : ''}">
                        <i class="fa-${isFavorite ? 'solid' : 'regular'} fa-heart"></i> 
                        ${isFavorite ? 'Saved' : 'Save for later'}
                    </button>
                </div>
            </div>

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

function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainImage').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

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

function goBackToProducts() {
    const detailsContainer = document.getElementById('product-details');
    const productsMain = document.querySelector('.products-main');
    
    if (detailsContainer) detailsContainer.style.display = 'none';
    if (productsMain) productsMain.style.display = 'block';
}

