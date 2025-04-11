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

    // Product Data - This would typically come from a backend/database
    const products = [
        {
            id: 1,
            title: "Urban Street Hoodie",
            category: "Men",
            price: 59.99,
            oldPrice: 79.99,
            discount: 25,
            rating: 4.5,
            reviews: 124,
            image: "images/hoodie/all/h9.png",
            colors: ["Black", "Gray", "Navy"],
            sizes: ["S", "M", "L", "XL"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 2,
            title: "Oversized Comfort Hoodie",
            category: "Women's Collection",
            price: 49.99,
            oldPrice: 69.99,
            discount: 29,
            rating: 4.7,
            reviews: 89,
            image: "images/hoodie/all/h8.png",
            colors: ["Pink", "White", "Beige"],
            sizes: ["XS", "S", "M", "L"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 3,
            title: "Vintage Logo Hoodie",
            category: "Unisex",
            price: 54.99,
            oldPrice: 64.99,
            discount: 15,
            rating: 4.3,
            reviews: 156,
            image: "images/hoodie/all/h7.png",
            colors: ["Black", "White", "Red"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 4,
            title: "Athletic Performance Hoodie",
            category: "Men's Collection",
            price: 69.99,
            oldPrice: 89.99,
            discount: 22,
            rating: 4.8,
            reviews: 201,
            image: "images/hoodie/all/h6.png",
            colors: ["Navy", "Gray", "Black"],
            sizes: ["M", "L", "XL", "XXL"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 5,
            title: "Cropped Hoodie",
            category: "Women's Collection",
            price: 45.99,
            oldPrice: 55.99,
            discount: 18,
            rating: 4.4,
            reviews: 67,
            image: "images/hoodie/all/h5.png",
            colors: ["White", "Lavender", "Mint"],
            sizes: ["XS", "S", "M"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 6,
            title: "Graphic Print Hoodie",
            category: "Unisex",
            price: 49.99,
            oldPrice: 59.99,
            discount: 17,
            rating: 4.6,
            reviews: 112,
            image: "images/hoodie/all/h4.png",
            colors: ["Black", "White"],
            sizes: ["S", "M", "L", "XL"],
            isNew: true,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 7,
            title: "Fleece Lined Hoodie",
            category: "Men's Collection",
            price: 64.99,
            oldPrice: 74.99,
            discount: 13,
            rating: 4.9,
            reviews: 178,
            image: "images/hoodie/all/h16.png",
            colors: ["Charcoal", "Navy", "Olive"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            isNew: false,
            isWishlisted: false,
            inCart: false,
            quantity: 1
        },
        {
            id: 8,
            title: "Oversized Graphic Hoodie",
            category: "Women's Collection",
            price: 52.99,
            oldPrice: 62.99,
            discount: 16,
            rating: 4.5,
            reviews: 93,
            image: "images/hoodie/all/h17.png",
            colors: ["Pink", "Black", "White"],
            sizes: ["S", "M", "L"],
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
    let displayedProducts = 8; // Initial number of products to display
    const productsPerLoad = 4; // Number of products to load each time
    
    function displayProducts(filter = 'all', count = displayedProducts) {
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category.toLowerCase().includes(filter));
        
        const productsToShow = filteredProducts.slice(0, count);
        
        if (productsToShow.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id;
            productCard.dataset.category = product.category.toLowerCase().replace(/'s/g, '');
            
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

            // Create the wishlist item element
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
            // Here you would typically filter products by collection
            // For now, we'll just scroll to the products section
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