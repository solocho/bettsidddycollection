document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Search Box Toggle
    const searchIcon = document.querySelector('.search-box i');
    const searchInput = document.querySelector('.search-box input');
    
    searchIcon.addEventListener('click', function() {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Product Data
    const products = [
        {
            id: 1,
            title: "Designer Leather Tote Bag",
            category: "Necklace",
            price: 199.99,
            oldPrice: 249.99,
            discount: 20,
            rating: 4.8,
            reviews: 142,
            image: "images/jewellery/all/j1.png",
            colors: ["Black", "Brown", "Tan"],
            materials: ["Genuine Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 2,
            title: "Luxury Evening Clutch",
            category: "Bracelets",
            price: 149.99,
            oldPrice: 179.99,
            discount: 17,
            rating: 4.6,
            reviews: 89,
            image: "images/jewellery/all/j2.png",
            colors: ["Gold", "Silver", "Black"],
            materials: ["Patent Leather"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 3,
            title: "Premium Leather Backpack",
            category: "Earrings",
            price: 179.99,
            oldPrice: 199.99,
            discount: 10,
            rating: 4.7,
            reviews: 156,
            image: "images/jewellery/all/j3.png",
            colors: ["Black", "Brown"],
            materials: ["Full Grain Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 4,
            title: "Designer Shoulder Bag",
            category: "Rings",
            price: 159.99,
            oldPrice: 189.99,
            discount: 16,
            rating: 4.5,
            reviews: 112,
            image: "images/jewellery/all/j4.png",
            colors: ["Beige", "Black"],
            materials: ["Saffiano Leather"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 5,
            title: "Limited Edition Crossbody",
            category: "Anklets",
            price: 229.99,
            oldPrice: 259.99,
            discount: 12,
            rating: 4.9,
            reviews: 78,
            image: "images/jewellery/all/j5.png",
            colors: ["Red", "Black"],
            materials: ["Crocodile Embossed Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 6,
            title: "Minimalist Leather Tote",
            category: "Limited Edition",
            price: 139.99,
            oldPrice: 169.99,
            discount: 18,
            rating: 4.4,
            reviews: 95,
            image: "images/jewellery/all/j6.png",
            colors: ["Gray", "Navy"],
            materials: ["Soft Calf Leather"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 7,
            title: "Travel Backpack",
            category: "Necklaces",
            price: 189.99,
            oldPrice: 219.99,
            discount: 14,
            rating: 4.7,
            reviews: 124,
            image: "images/jewellery/all/j7.png",
            colors: ["Black", "Khaki"],
            materials: ["Waterproof Nylon"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 8,
            title: "Evening Beaded Clutch",
            category: "Bracelets",
            price: 129.99,
            oldPrice: 149.99,
            discount: 13,
            rating: 4.3,
            reviews: 67,
            image: "images/jewellery/all/j8.png",
            colors: ["Gold", "Silver"],
            materials: ["Beaded Fabric"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 9,
            title: "Designer Satchel Bag",
            category: "Earrings",
            price: 209.99,
            oldPrice: 239.99,
            discount: 13,
            rating: 4.8,
            reviews: 132,
            image: "images/jewellery/all/j9.png",
            colors: ["Cognac", "Black"],
            materials: ["Pebbled Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 10,
            title: "Structured Top Handle Bag",
            category: "Rings",
            price: 179.99,
            oldPrice: 199.99,
            discount: 10,
            rating: 4.6,
            reviews: 98,
            image: "images/jewellery/all/j10.png",
            colors: ["White", "Black"],
            materials: ["Structured Leather"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 11,
            title: "Weekender Tote",
            category: "Anklets",
            price: 159.99,
            oldPrice: 189.99,
            discount: 16,
            rating: 4.5,
            reviews: 87,
            image: "images/jewellery/all/j11.png",
            colors: ["Navy", "Camel"],
            materials: ["Canvas & Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 12,
            title: "Limited Edition Designer Bag",
            category: "Limited Edition",
            price: 299.99,
            oldPrice: 349.99,
            discount: 14,
            rating: 4.9,
            reviews: 56,
            image: "images/jewellery/all/j12.png",
            colors: ["Black", "Gold"],
            materials: ["Exotic Leather"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        }
    ];

    // Display Products
    const productGrid = document.getElementById('product-grid');
    const loadMoreBtn = document.getElementById('load-more');
    const filterSelect = document.getElementById('filter');
    let displayedProducts = 8;
    const productsPerLoad = 4;
    
    function displayProducts(filter = 'all', count = displayedProducts) {
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category.toLowerCase().includes(filter.toLowerCase()));
        
        const productsToShow = filteredProducts.slice(0, count);
        
        if (productsToShow.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.dataset.category = product.category.toLowerCase().replace(/\s+/g, '');
            
            // Generate stars for rating
            const stars = [];
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    stars.push('<i class="fas fa-star"></i>');
                } else if (i === fullStars && hasHalfStar) {
                    stars.push('<i class="fas fa-star-half-alt"></i>');
                } else {
                    stars.push('<i class="far fa-star"></i>');
                }
            }
            
            productCard.innerHTML = `
                ${product.discount ? `<div class="product-badge">-${product.discount}%</div>` : ''}
                ${product.isNew ? '<div class="product-badge" style="left: auto; right: 15px; background-color: #111;">New</div>' : ''}
                
                <div class="product-img">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="action-btn wishlist-btn" data-id="${product.id}">
                            <i class="${product.isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                </div>
                
                <div class="product-content">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    
                    <div class="product-price">
                        <span class="current-price">KES${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="old-price">KES${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    
                    <div class="product-rating">
                        <div class="rating-stars">${stars.join('')}</div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Update load more button visibility
        if (filteredProducts.length <= count) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
        
        // Initialize event listeners for the newly added products
        initProductEvents();
    }
    
    // Filter Products
    filterSelect.addEventListener('change', function() {
        displayedProducts = 8;
        displayProducts(this.value);
    });
    
    // Load More Products
    loadMoreBtn.addEventListener('click', function() {
        displayedProducts += productsPerLoad;
        displayProducts(filterSelect.value, displayedProducts);
    });
    
    // Initialize with all products
    displayProducts();

    // Cart Functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.total-price');
    const cartCount = document.querySelector('.cart-count');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Wishlist Functionality
    const wishlistIcon = document.querySelector('.wishlist-icon');
    const wishlistSidebar = document.querySelector('.wishlist-sidebar');
    const wishlistOverlay = document.querySelector('.wishlist-overlay');
    const closeWishlist = document.querySelector('.close-wishlist');
    const wishlistItemsContainer = document.querySelector('.wishlist-items');
    const wishlistCount = document.querySelector('.wishlist-count');
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Toggle Cart Sidebar
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartUI();
    });
    
    // Close Cart Sidebar
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
    
    // Toggle Wishlist Sidebar
    wishlistIcon.addEventListener('click', function() {
        wishlistSidebar.classList.add('active');
        wishlistOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateWishlistUI();
    });
    
    // Close Wishlist Sidebar
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
    
    // Update Cart UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = 'KES0.00';
            cartCount.textContent = '0';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            total += product.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.dataset.id = item.id;
            
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${product.title}</h4>
                    <div class="cart-item-price">KES${(product.price * item.quantity).toFixed(2)}</div>
                    <button class="cart-item-remove">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus-btn"><i class="fas fa-minus"></i></button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus-btn"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartTotal.textContent = `KES${total.toFixed(2)}`;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Add event listeners to cart items
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.closest('.cart-item').dataset.id);
                removeFromCart(productId);
            });
        });
        
        document.querySelectorAll('.minus-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.closest('.cart-item').dataset.id);
                updateCartItemQuantity(productId, -1);
            });
        });
        
        document.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.closest('.cart-item').dataset.id);
                updateCartItemQuantity(productId, 1);
            });
        });
    }
    
    // Update Wishlist UI
    function updateWishlistUI() {
        wishlistItemsContainer.innerHTML = '';
        
        if (wishlist.length === 0) {
            wishlistItemsContainer.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
            wishlistCount.textContent = '0';
            return;
        }
        
        wishlist.forEach(id => {
            const product = products.find(p => p.id === id);
            
            if (!product) {
                console.error(`Product with ID ${id} not found in products array`);
                return;
            }

            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.dataset.id = id;
            
            wishlistItem.innerHTML = `
                <div class="wishlist-item-img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-title">${product.title}</h4>
                    <div class="wishlist-item-price">KES${product.price.toFixed(2)}</div>
                    <div class="wishlist-item-actions">
                        <button class="wishlist-item-remove">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <button class="wishlist-item-cart">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
            
            wishlistItemsContainer.appendChild(wishlistItem);
        });
        
        wishlistCount.textContent = wishlist.length;
        
        // Add event listeners to wishlist items
        document.querySelectorAll('.wishlist-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.closest('.wishlist-item').dataset.id);
                removeFromWishlist(productId);
            });
        });
        
        document.querySelectorAll('.wishlist-item-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.closest('.wishlist-item').dataset.id);
                addToCart(productId);
                showToast('Product added to cart', 'success');
            });
        });
    }
    
    // Add to Cart
    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        
        // Update the product card in the grid
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const addToCartBtn = productCard.querySelector('.add-to-cart');
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
            addToCartBtn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                addToCartBtn.style.backgroundColor = '';
            }, 2000);
        }
    }
    
    // Remove from Cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
        
        // Update the product card in the grid
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const addToCartBtn = productCard.querySelector('.add-to-cart');
            addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            addToCartBtn.style.backgroundColor = '';
        }
    }
    
    // Update Cart Item Quantity
    function updateCartItemQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartUI();
            }
        }
    }
    
    // Toggle Wishlist
    function toggleWishlist(productId) {
        const index = wishlist.indexOf(productId);
        
        if (index === -1) {
            wishlist.push(productId);
        } else {
            wishlist.splice(index, 1);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistUI();
        
        // Update the product card in the grid
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const wishlistBtn = productCard.querySelector('.wishlist-btn i');
            wishlistBtn.className = index === -1 ? 'fas fa-heart' : 'far fa-heart';
            
            if (index === -1) {
                wishlistBtn.style.animation = 'pulse 0.5s';
                setTimeout(() => {
                    wishlistBtn.style.animation = '';
                }, 500);
            }
        }
    }
    
    // Remove from Wishlist
    function removeFromWishlist(productId) {
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistUI();
        
        // Update the product card in the grid
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const wishlistBtn = productCard.querySelector('.wishlist-btn i');
            wishlistBtn.className = 'far fa-heart';
        }
    }
    
    // Initialize Product Event Listeners
    function initProductEvents() {
        // Add to Cart Buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                addToCart(productId);
                showToast('Product added to cart', 'success');
            });
        });
        
        // Wishlist Buttons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                const productId = parseInt(this.dataset.id);
                if (isNaN(productId)) {
                    console.error('Invalid product ID:', this.dataset.id);
                    return;
                }

                const wasWishlisted = wishlist.includes(productId);
                toggleWishlist(productId);
                const isNowWishlisted = !wasWishlisted;

                const icon = this.querySelector('i');
                icon.className = isNowWishlisted ? 'fas fa-heart' : 'far fa-heart';
                
                icon.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 300);

                showToast(
                    isNowWishlisted ? '❤️ Added to wishlist' : '💔 Removed from wishlist',
                    isNowWishlisted ? 'success' : 'info'
                );

                updateWishlistUI();
            });
        });
    }
    
    // Toast Notification
    const toast = document.querySelector('.toast');
    
    function showToast(message, type = 'info') {
        toast.textContent = message;
        toast.className = 'toast';
        toast.classList.add(type, 'active');
        
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active class for navigation links
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                this.classList.add('active');
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Set active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // Initialize UI with data from localStorage
    updateCartUI();
    updateWishlistUI();
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Here you would typically send the email to your backend
        // For now, we'll just show a success message
        this.querySelector('input').value = '';
        showToast('Thank you for subscribing!', 'success');
    });
    
    // Collection Button Click
    document.querySelectorAll('.collection-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('#shop').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Hero Button Click
    document.querySelector('.hero-btn').addEventListener('click', function() {
        document.querySelector('#shop').scrollIntoView({
            behavior: 'smooth'
        });
    });
});






// =============================================
// CHECKOUT FUNCTIONALITY (ADD AT THE END OF SCRIPT)
// =============================================

// Find the checkout button in the cart sidebar
const checkoutBtn = document.querySelector('.cart-sidebar .checkout-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        // Check if cart is empty
        if (cart.length === 0) {
            showToast('Your cart is empty', 'error');
            return;
        }
        
        // Calculate order total
        const orderTotal = cart.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return total + (product.price * item.quantity);
        }, 0);
        
        // Create and show success message
        cartItemsContainer.innerHTML = `
            <div class="checkout-success-message">
                <div class="check-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Thank you for your order!</h3>
                <p>Your payment of <strong>KES${orderTotal.toFixed(2)}</strong> was successful.</p>
                <p>We've sent the order details to your email.</p>
                <button class="btn back-to-shop">Continue Shopping</button>
            </div>
        `;
        
        // Clear the cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = '0';
        
        // Handle continue shopping button
        document.querySelector('.back-to-shop')?.addEventListener('click', function() {
            // Close cart sidebar
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Refresh products display
            displayProducts();
        });
    });
}