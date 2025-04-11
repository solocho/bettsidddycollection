document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Product Data - This would typically come from a backend/database
    const products = [
        {
            id: 1,
            title: "Classic Black Hoodie",
            price: 49.99,
            originalPrice: 69.99,
            discount: 30,
            image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
            rating: 4.5,
            description: "Premium quality black hoodie with comfortable fit and durable fabric."
        },
        {
            id: 2,
            title: "Navy Blue Zip Hoodie",
            price: 59.99,
            originalPrice: 79.99,
            discount: 25,
            image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
            rating: 4.2,
            description: "Stylish navy blue zip-up hoodie with front pockets and adjustable hood."
        },
        {
            id: 3,
            title: "Gray Pullover Hoodie",
            price: 44.99,
            originalPrice: 54.99,
            discount: 18,
            image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
            rating: 4.7,
            description: "Soft gray pullover hoodie with kangaroo pocket and ribbed cuffs."
        },
        {
            id: 4,
            title: "White Oversized Hoodie",
            price: 54.99,
            originalPrice: 64.99,
            discount: 15,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            rating: 4.3,
            description: "Trendy oversized white hoodie with drop shoulders and relaxed fit."
        },
        {
            id: 5,
            title: "Black & Red Graphic Hoodie",
            price: 64.99,
            originalPrice: 84.99,
            discount: 24,
            image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            rating: 4.8,
            description: "Eye-catching black hoodie with bold red graphic print on the front."
        },
        {
            id: 6,
            title: "Dark Green Fleece Hoodie",
            price: 69.99,
            originalPrice: 89.99,
            discount: 22,
            image: "https://images.unsplash.com/photo-1609172795052-05bfe5a645b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
            rating: 4.6,
            description: "Warm dark green fleece hoodie perfect for cold weather."
        },
        {
            id: 7,
            title: "Light Blue Sport Hoodie",
            price: 54.99,
            originalPrice: 74.99,
            discount: 27,
            image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
            rating: 4.4,
            description: "Performance light blue hoodie with moisture-wicking technology."
        },
        {
            id: 8,
            title: "Charcoal Heather Hoodie",
            price: 49.99,
            originalPrice: 59.99,
            discount: 17,
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            rating: 4.1,
            description: "Classic charcoal heather hoodie with a comfortable, casual fit."
        },
        // Add more products as needed (up to 40)
    ];
    
    // Initialize cart and wishlist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Display products
    const productGrid = document.getElementById('product-grid');
    const loadMoreBtn = document.getElementById('load-more');
    let displayedProducts = 8; // Initial number of products to display
    
    function displayProducts(productsToShow) {
        productGrid.innerHTML = '';
        
        productsToShow.forEach(product => {
            const isInWishlist = wishlist.some(item => item.id === product.id);
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-badge">-${product.discount}%</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="action-btn like-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn quick-view-btn" data-id="${product.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>(${Math.floor(Math.random() * 100) + 20})</span>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to new buttons
        addProductEventListeners();
    }
    
    function generateRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        return stars;
    }
    
    function addProductEventListeners() {
        // Add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                addToCart(product);
                showNotification(`${product.title} added to cart!`);
            });
        });
        
        // Like buttons
        const likeButtons = document.querySelectorAll('.like-btn');
        likeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                if (this.classList.contains('active')) {
                    removeFromWishlist(productId);
                    this.classList.remove('active');
                } else {
                    addToWishlist(product);
                    this.classList.add('active');
                }
                
                updateWishlistCount();
            });
        });
    }
    
    // Initial display
    displayProducts(products.slice(0, displayedProducts));
    
    // Load more products
    loadMoreBtn.addEventListener('click', function() {
        displayedProducts += 8;
        if (displayedProducts >= products.length) {
            displayedProducts = products.length;
            this.style.display = 'none';
        }
        displayProducts(products.slice(0, displayedProducts));
    });
    
    // Sort products
    const sortBy = document.getElementById('sort-by');
    sortBy.addEventListener('change', function() {
        let sortedProducts = [...products];
        
        switch(this.value) {
            case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                sortedProducts.sort((a, b) => b.id - a.id);
                break;
            case 'popular':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                sortedProducts = [...products];
        }
        
        displayProducts(sortedProducts.slice(0, displayedProducts));
    });
    
    // Cart functionality
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartSidebar();
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartSidebar();
    }
    
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }
    
    function updateCartSidebar() {
        const cartItems = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total span');
        let total = 0;
        
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <p class="remove-item" data-id="${item.id}">Remove</p>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== productId);
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                updateCartSidebar();
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                updateCartSidebar();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    // Wishlist functionality
    function addToWishlist(product) {
        if (!wishlist.some(item => item.id === product.id)) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
            updateWishlistSidebar();
            showNotification(`${product.title} added to wishlist!`);
        }
    }
    
    function removeFromWishlist(productId) {
        wishlist = wishlist.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        updateWishlistSidebar();
    }
    
    function updateWishlistCount() {
        document.querySelector('.wishlist-count').textContent = wishlist.length;
    }
    
    function updateWishlistSidebar() {
        const wishlistItems = document.querySelector('.wishlist-items');
        
        wishlistItems.innerHTML = '';
        
        if (wishlist.length === 0) {
            wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
            return;
        }
        
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <div class="wishlist-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-title">${item.title}</h4>
                    <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                    <div class="wishlist-item-actions">
                        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                        <button class="remove-wishlist-btn" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            
            wishlistItems.appendChild(wishlistItem);
        });
        
        // Add event listeners to wishlist buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                addToCart(product);
                showNotification(`${product.title} added to cart!`);
            });
        });
        
        document.querySelectorAll('.remove-wishlist-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromWishlist(productId);
                
                // Update like button in product grid
                const likeButton = document.querySelector(`.like-btn[data-id="${productId}"]`);
                if (likeButton) {
                    likeButton.classList.remove('active');
                }
            });
        });
    }
    
    // Cart sidebar toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartSidebar();
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Wishlist sidebar toggle
    const wishlistIcon = document.querySelector('.wishlist-icon');
    const wishlistSidebar = document.querySelector('.wishlist-sidebar');
    const wishlistOverlay = document.querySelector('.wishlist-overlay');
    const closeWishlist = document.querySelector('.close-wishlist');
    
    wishlistIcon.addEventListener('click', function() {
        wishlistSidebar.classList.add('active');
        wishlistOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateWishlistSidebar();
    });
    
    closeWishlist.addEventListener('click', function() {
        wishlistSidebar.classList.remove('active');
        wishlistOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    wishlistOverlay.addEventListener('click', function() {
        wishlistSidebar.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Notification
    function showNotification(message) {
        const notification = document.querySelector('.notification');
        notification.querySelector('p').textContent = message;
        notification.classList.add('active');
        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 3000);
    }
    
    // Initialize counts
    updateCartCount();
    updateWishlistCount();
    
    // Check wishlist status for initial display
    products.forEach(product => {
        if (wishlist.some(item => item.id === product.id)) {
            const likeButton = document.querySelector(`.like-btn[data-id="${product.id}"]`);
            if (likeButton) {
                likeButton.classList.add('active');
            }
        }
    });
    
    // Simple animations on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial animation styles
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const delay = element.getAttribute('data-aos-delay') || '0';
        element.style.transitionDelay = `${delay}ms`;
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Hero animation
    gsap.from('.hero-content h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
    
    gsap.from('.hero-content p', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: "power3.out"
    });
    
    gsap.from('.btn-shop-now', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.4,
        ease: "power3.out"
    });
});