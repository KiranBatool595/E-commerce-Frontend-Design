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
        images: ["T-Shirt-1.jpg"],
        description: "A comfortable cotton t-shirt is a wardrobe staple known for its natural softness, breathability, and versatility.",
        quantity: 1
    },
    {
        id: 2,
        name: "brown winter coat medium size",
        name2:"coat",
        price: 10.30,
        category: "clothing",
        images: ["brown winter coat.jpg"],
        description: "A brown winter coat is a versatile, essential outer garment providing warmth and elevated style through colder months",
        quantity: 1
    },
    {
        id: 3,
        name: "blue winter coat",
        name2:"coat",
        price: 12.50,
        category: "clothing",
        images: ["blue winter coat.jpg"],
        description: "Powerful and portable laptop for professionals",
        quantity: 1
    },
    {
        id: 4,
        name: "leather wallet",
        price: 34.99,
        category: "electrical",
        images: ["leather wallet.jpg"],
        description: "A leather wallet is a classic, durable accessory designed to securely hold essential items like cash, credit cards, and IDs",
        quantity: 1
    },
    {
        id: 5,
        name: "jeans bag for travel for men",
        price: 99.00,
        category: "electrical",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1
    },
    {
        id: 6,
        name: "jeans shorts for men bule color",
        price: 79.99,
        category: "clothing",
        images: ["jeans shorts.jpg"],
        description: "jeans shorts for man bule color are a staple of casual summer fashion, offering a blend of comfort and classic style",
        quantity: 1
    },
    {
        id: 7,
        name: "headset for gaming with mic",
        price: 39.99,
        category: "electrical",
        images: ["headset.png"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1
    },
    {
        id: 8,
        name: "jeans bag for travel for men",
        price: 99.00,
        category: "clothing",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1
    },
    {
        id: 9,
        name: "leather wallet",
        price: 34.99,
        category: "clothing",
        images: ["3.jpg"],
        description: "A leather wallet is a classic, durable accessory designed to securely hold essential items like cash, credit cards, and IDs",
        quantity: 1
    },
    {
        id: 10,
        name: "jeans shorts for men bule color",
        price: 79.99,
        category: "electrical",
        images: ["cup.jpg"],
        description: "jeans shorts for man bule color are a staple of casual summer fashion, offering a blend of comfort and classic style",
        quantity: 1
    },
    {
        id: 11,
        name: "jeans shorts for men bule color",
        price: 79.99,
        category: "electrical",
        images: ["cup.jpg"],
        description: "jeans shorts for man bule color are a staple of casual summer fashion, offering a blend of comfort and classic style",
        quantity: 1
    },
    {
        id: 12,
        name: "headset for gaming with mic",
        price: 39.99,
        category: "electrical",
        images: ["laptop.jpg"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1
    },
    {
        id: 13,
        name: "headset for gaming with mic",
        price: 39.99,
        category: "electrical",
        images: ["laptop.jpg"],
        description: "A gaming headset with a microphone is an all-in-one audio solution designed to enhance the gaming experience by providing immersive sound, clear voice communication, and long-lasting comfort",
        quantity: 1
    },
    {
        id: 14,
        name: "jeans bag for travel for men",
        price: 99.00,
        category: "electrical",
        images: ["jeans bag.jpg"],
        description: "A jeans bag, often called a denim bag, is a stylish, durable, and versatile accessory crafted from denim fabric",
        quantity: 1
    }
];



document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    DealProducts()
    RecommendedProducts()
    ShowCategoryBlocks()
};

// to show Deal Products
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
// to show recommended product
function RecommendedProducts(){
    const container = document.getElementById('recommendedProducts');
    container.innerHTML = '';

    products.slice(0, 10).forEach(product => {
        const card = document.createElement('div');
        card.className = 'recommended-card';

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

        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(desc);
        
        container.appendChild(card);
    });
};

// category block section
function ShowCategoryBlocks() {
    const container = document.getElementById('categoryBlocks');
    
    container.innerHTML = '';
    
    const homeItems = products.filter(item => item.category === 'clothing').slice(0, 8);
    const electronicsItems = products.filter(item => item.category === 'electrical').slice(0, 8);
    
    const block1 = CreateCategoryBlock('Home and outdoor', homeItems, 'rgb(255, 232, 186)');
    container.appendChild(block1);
    
    const block2 = CreateCategoryBlock('Consumer electronics and gadgets', electronicsItems, '#d6e5fb');
    container.appendChild(block2);
}

// Helper function to create one category block
function CreateCategoryBlock(title, items, bgColor) {
    // Main block container
    const block = document.createElement('div');
    block.className = 'category-block';
    
    // Header section (left side with title and button)
    const header = document.createElement('div');
    header.className = 'category-header';
    header.style.backgroundColor = bgColor;
    
    const titleH2 = document.createElement('h2');
    titleH2.textContent = title;
    
    const button = document.createElement('button');
    button.className = 'source-btn';
    button.textContent = 'Source now';
    
    header.appendChild(titleH2);
    header.appendChild(button);
    
    // Products grid (right side with 8 products in 2 rows x 4 columns)
    const productsGrid = document.createElement('div');
    productsGrid.className = 'category-products';
    
    // Add each product to the grid
    items.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'category-product';
        
        const productName = document.createElement('h3');
        productName.textContent = product.name2;
        
        const productPrice = document.createElement('p');
        productPrice.className = 'category-price';
        productPrice.innerHTML = `From<br>USD ${product.price}`;
        
        const productImg = document.createElement('img');
        productImg.src = product.images;
        productImg.alt = product.name;
        
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productImg);
        
        productsGrid.appendChild(productCard);
    });
    
    // Put header and products together
    block.appendChild(header);
    block.appendChild(productsGrid);
    
    return block;
}
