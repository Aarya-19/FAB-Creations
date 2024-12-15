// Image Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Product Filter Functionality
const filter = document.getElementById('product-filter');
const productCards = document.querySelectorAll('.product-card');

filter.addEventListener('change', function() {
    const selectedCategory = filter.value;

    productCards.forEach(card => {
        if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

//Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // // Add event listeners to all "Add to Cart" buttons
        // document.querySelectorAll('.add-to-cart').forEach(button => {
        //     button.addEventListener('click', function() {
        //         const product = {
        //             name: this.getAttribute('data-product'),
        //             price: parseFloat(this.getAttribute('data-price')),
        //             image: this.getAttribute('data-image'),
        //             quantity: 1
        //         };

        //         // Check if the product is already in the cart
        //         const existingProductIndex = cart.findIndex(item => item.name === product.name);
        //         if (existingProductIndex !== -1) {
        //             cart[existingProductIndex].quantity += 1; // Increase the quantity if the product is already in the cart
        //         } else {
        //             cart.push(product); // Add the product to the cart
        //         }

        //         // Save the updated cart to localStorage
        //         localStorage.setItem('cart', JSON.stringify(cart));

        //         // Update the cart count in the header
        //         updateCartCount();
        //     });
        // });

        // // Function to update the cart count in the header
        // function updateCartCount() {
        //     const cartCount = document.getElementById('cart-count');
        //     cartCount.textContent = cart.length;
        // }

        // // Initial call to update the cart count
        // updateCartCount();

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                // Get product details
                const productName = this.getAttribute('data-product');
                const productPrice = this.getAttribute('data-price');
                const productImage = this.getAttribute('data-image');
        
                // Create a new product object
                const product = {
                    name: productName,
                    price: parseFloat(productPrice),
                    image: productImage,
                    quantity: 1 // Initialize with 1 quantity (you can modify this if needed)
                };
        
                // Get existing cart from localStorage or create a new array
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
                // Check if the product already exists in the cart, and if so, increase the quantity
                const existingProductIndex = cart.findIndex(item => item.name === product.name && item.image === product.image);
                if (existingProductIndex >= 0) {
                    cart[existingProductIndex].quantity += 1;
                } else {
                    cart.push(product);
                }
        
                // Save the updated cart back to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
        
                // Update the cart count in the header
                updateCartCount();
            });
        });
        
        // Function to update cart count
        function updateCartCount() {
            const cartCount = document.getElementById('cart-count');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartCount.textContent = cart.length;
        }
        
        // Update cart count on page load
        updateCartCount();