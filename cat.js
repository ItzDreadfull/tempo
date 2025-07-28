// Product data
const productData = {
    milk: {
        title: "Fresh Milk Products",
        description: "Pure, creamy milk from grass-fed cows in various fat content options",
        products: [
            {
                id: 'whole-milk',
                name: 'Whole Milk',
                price: '$4.99/gallon',
                icon: '🥛',
                description: 'Rich, creamy whole milk with 3.25% fat content',
                fullDescription: 'Our whole milk is sourced from grass-fed cows that roam freely on our organic pastures. With its rich, creamy texture and natural sweetness, this milk is perfect for drinking, cooking, and baking. Contains 3.25% fat content for maximum flavor and nutrition.',
                nutrition: {
                    servingSize: '1 cup (240ml)',
                    calories: '150',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '30mg',
                    sodium: '120mg',
                    carbs: '12g',
                    protein: '8g',
                    calcium: '300mg',
                    vitaminD: '120IU'
                }
            },
            {
                id: '2-percent-milk',
                name: '2% Reduced Fat Milk',
                price: '$4.79/gallon',
                icon: '🥛',
                description: 'Smooth 2% milk with reduced fat content',
                fullDescription: 'Our 2% reduced fat milk offers the perfect balance of taste and nutrition. With 2% fat content, it provides a lighter option while maintaining the creamy texture and essential nutrients your family needs.',
                nutrition: {
                    servingSize: '1 cup (240ml)',
                    calories: '120',
                    totalFat: '5g',
                    saturatedFat: '3g',
                    cholesterol: '20mg',
                    sodium: '120mg',
                    carbs: '12g',
                    protein: '8g',
                    calcium: '300mg',
                    vitaminD: '120IU'
                }
            },
            {
                id: '1-percent-milk',
                name: '1% Low Fat Milk',
                price: '$4.69/gallon',
                icon: '🥛',
                description: 'Light and nutritious 1% low fat milk',
                fullDescription: 'Our 1% low fat milk is perfect for health-conscious families who don\'t want to compromise on taste. With only 1% fat content, it\'s an excellent source of protein and calcium while being lighter on calories.',
                nutrition: {
                    servingSize: '1 cup (240ml)',
                    calories: '100',
                    totalFat: '2.5g',
                    saturatedFat: '1.5g',
                    cholesterol: '10mg',
                    sodium: '120mg',
                    carbs: '12g',
                    protein: '8g',
                    calcium: '300mg',
                    vitaminD: '120IU'
                }
            },
            {
                id: 'skim-milk',
                name: 'Skim Milk',
                price: '$4.59/gallon',
                icon: '🥛',
                description: 'Fat-free milk with all the nutrition',
                fullDescription: 'Our skim milk provides all the essential nutrients of whole milk with virtually no fat. It\'s an excellent choice for those watching their fat intake while still wanting the protein, calcium, and vitamins that milk provides.',
                nutrition: {
                    servingSize: '1 cup (240ml)',
                    calories: '80',
                    totalFat: '0g',
                    saturatedFat: '0g',
                    cholesterol: '5mg',
                    sodium: '120mg',
                    carbs: '12g',
                    protein: '8g',
                    calcium: '300mg',
                    vitaminD: '120IU'
                }
            }
        ]
    },
    cheese: {
        title: "Artisan Cheese Collection",
        description: "Hand-crafted aged cheeses with complex flavors and textures",
        products: [
            {
                id: 'aged-cheddar',
                name: 'Aged Cheddar',
                price: '$14.99/lb',
                icon: '🧀',
                description: 'Sharp, aged cheddar with complex flavors',
                fullDescription: 'Our aged cheddar is carefully crafted and aged for 12 months to develop its distinctive sharp flavor and crumbly texture. Made from the milk of grass-fed cows, this cheese is perfect for snacking, cooking, or adding to your favorite recipes.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '110',
                    totalFat: '9g',
                    saturatedFat: '6g',
                    cholesterol: '30mg',
                    sodium: '180mg',
                    carbs: '1g',
                    protein: '7g',
                    calcium: '200mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'mild-cheddar',
                name: 'Mild Cheddar',
                price: '$12.99/lb',
                icon: '🧀',
                description: 'Smooth, mild cheddar perfect for everyday use',
                fullDescription: 'Our mild cheddar offers a smooth, creamy texture with a gentle flavor that appeals to all ages. Aged for 3 months, it melts beautifully and is perfect for sandwiches, mac and cheese, or snacking.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '105',
                    totalFat: '8.5g',
                    saturatedFat: '5.5g',
                    cholesterol: '28mg',
                    sodium: '170mg',
                    carbs: '1g',
                    protein: '7g',
                    calcium: '200mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'swiss-cheese',
                name: 'Swiss Cheese',
                price: '$13.99/lb',
                icon: '🧀',
                description: 'Traditional Swiss cheese with distinctive holes',
                fullDescription: 'Our traditional Swiss cheese is aged to perfection, developing its characteristic holes and nutty, sweet flavor. Made using time-honored techniques, this cheese is excellent for sandwiches, fondue, or enjoying on its own.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '100',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '25mg',
                    sodium: '55mg',
                    carbs: '1g',
                    protein: '8g',
                    calcium: '270mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'mozzarella',
                name: 'Fresh Mozzarella',
                price: '$11.99/lb',
                icon: '🧀',
                description: 'Creamy fresh mozzarella made daily',
                fullDescription: 'Our fresh mozzarella is made daily using traditional Italian methods. With its soft, creamy texture and mild flavor, it\'s perfect for caprese salads, pizza, or enjoying with fresh tomatoes and basil.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '85',
                    totalFat: '6g',
                    saturatedFat: '4g',
                    cholesterol: '20mg',
                    sodium: '150mg',
                    carbs: '1g',
                    protein: '6g',
                    calcium: '180mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'goat-cheese',
                name: 'Artisan Goat Cheese',
                price: '$16.99/lb',
                icon: '🧀',
                description: 'Creamy goat cheese with tangy flavor',
                fullDescription: 'Our artisan goat cheese is made from the milk of our happy, free-range goats. With its distinctive tangy flavor and creamy texture, it\'s perfect for spreading on crackers, adding to salads, or incorporating into gourmet recipes.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '75',
                    totalFat: '6g',
                    saturatedFat: '4g',
                    cholesterol: '15mg',
                    sodium: '130mg',
                    carbs: '0g',
                    protein: '5g',
                    calcium: '40mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'blue-cheese',
                name: 'Artisan Blue Cheese',
                price: '$18.99/lb',
                icon: '🧀',
                description: 'Bold blue cheese with distinctive flavor',
                fullDescription: 'Our artisan blue cheese is aged in special caves to develop its characteristic blue veining and bold, complex flavor. Perfect for cheese boards, salad dressings, or adding a gourmet touch to your favorite dishes.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '100',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '25mg',
                    sodium: '380mg',
                    carbs: '1g',
                    protein: '6g',
                    calcium: '150mg',
                    vitaminD: '0IU'
                }
            }
        ]
    },
    butter: {
        title: "Butter & Cream Products",
        description: "Rich, creamy butter and heavy cream for all your culinary needs",
        products: [
            {
                id: 'salted-butter',
                name: 'Salted Butter',
                price: '$6.99/lb',
                icon: '🧈',
                description: 'Creamy salted butter churned fresh daily',
                fullDescription: 'Our salted butter is churned fresh daily from the cream of grass-fed cows. With just the right amount of sea salt, it\'s perfect for spreading on bread, cooking, or baking. The rich, creamy texture and natural flavor make it a kitchen essential.',
                nutrition: {
                    servingSize: '1 tbsp (14g)',
                    calories: '100',
                    totalFat: '11g',
                    saturatedFat: '7g',
                    cholesterol: '30mg',
                    sodium: '90mg',
                    carbs: '0g',
                    protein: '0g',
                    calcium: '3mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'unsalted-butter',
                name: 'Unsalted Butter',
                price: '$6.99/lb',
                icon: '🧈',
                description: 'Pure unsalted butter perfect for baking',
                fullDescription: 'Our unsalted butter is made from the finest cream without any added salt, making it perfect for baking and cooking where you want to control the salt content. Its pure, sweet flavor enhances both sweet and savory dishes.',
                nutrition: {
                    servingSize: '1 tbsp (14g)',
                    calories: '100',
                    totalFat: '11g',
                    saturatedFat: '7g',
                    cholesterol: '30mg',
                    sodium: '0mg',
                    carbs: '0g',
                    protein: '0g',
                    calcium: '3mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'heavy-cream',
                name: 'Heavy Cream',
                price: '$4.99/pint',
                icon: '🥛',
                description: 'Rich heavy cream for cooking and whipping',
                fullDescription: 'Our heavy cream contains 36% fat content, making it perfect for whipping, cooking, and adding richness to soups, sauces, and desserts. Sourced from grass-fed cows, it has a naturally sweet flavor and luxurious texture.',
                nutrition: {
                    servingSize: '1 tbsp (15ml)',
                    calories: '50',
                    totalFat: '5g',
                    saturatedFat: '3.5g',
                    cholesterol: '20mg',
                    sodium: '5mg',
                    carbs: '0g',
                    protein: '0g',
                    calcium: '10mg',
                    vitaminD: '0IU'
                }
            }
        ]
    },
    yogurt: {
        title: "Yogurt & Probiotic Products",
        description: "Healthy yogurt packed with probiotics and natural goodness",
        products: [
            {
                id: 'greek-yogurt-plain',
                name: 'Plain Greek Yogurt',
                price: '$5.99/32oz',
                icon: '🥤',
                description: 'Thick, creamy Greek yogurt with live cultures',
                fullDescription: 'Our plain Greek yogurt is strained to achieve its thick, creamy texture and concentrated protein content. Packed with live and active cultures, it\'s an excellent source of probiotics that support digestive health.',
                nutrition: {
                    servingSize: '1 cup (240g)',
                    calories: '130',
                    totalFat: '0g',
                    saturatedFat: '0g',
                    cholesterol: '10mg',
                    sodium: '65mg',
                    carbs: '9g',
                    protein: '23g',
                    calcium: '200mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'greek-yogurt-vanilla',
                name: 'Vanilla Greek Yogurt',
                price: '$6.49/32oz',
                icon: '🥤',
                description: 'Creamy vanilla-flavored Greek yogurt',
                fullDescription: 'Our vanilla Greek yogurt combines the protein-rich benefits of Greek yogurt with natural vanilla flavor. Made with real vanilla extract and just the right amount of sweetness, it\'s perfect for breakfast or snacking.',
                nutrition: {
                    servingSize: '1 cup (240g)',
                    calories: '150',
                    totalFat: '0g',
                    saturatedFat: '0g',
                    cholesterol: '10mg',
                    sodium: '70mg',
                    carbs: '15g',
                    protein: '20g',
                    calcium: '200mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'regular-yogurt',
                name: 'Traditional Yogurt',
                price: '$4.99/32oz',
                icon: '🥤',
                description: 'Classic creamy yogurt with probiotics',
                fullDescription: 'Our traditional yogurt is made using time-honored methods with live and active cultures. With its smooth, creamy texture and mild tangy flavor, it\'s perfect for eating on its own or using in recipes.',
                nutrition: {
                    servingSize: '1 cup (240g)',
                    calories: '140',
                    totalFat: '3g',
                    saturatedFat: '2g',
                    cholesterol: '15mg',
                    sodium: '110mg',
                    carbs: '16g',
                    protein: '12g',
                    calcium: '300mg',
                    vitaminD: '80IU'
                }
            },
            {
                id: 'strawberry-yogurt',
                name: 'Strawberry Yogurt',
                price: '$5.49/32oz',
                icon: '🍓',
                description: 'Creamy yogurt with real strawberry pieces',
                fullDescription: 'Our strawberry yogurt is made with real strawberry pieces and natural flavors. The perfect balance of creamy yogurt and sweet strawberries makes it a family favorite for breakfast or snacking.',
                nutrition: {
                    servingSize: '1 cup (240g)',
                    calories: '160',
                    totalFat: '3g',
                    saturatedFat: '2g',
                    cholesterol: '15mg',
                    sodium: '115mg',
                    carbs: '22g',
                    protein: '11g',
                    calcium: '280mg',
                    vitaminD: '80IU'
                }
            },
            {
                id: 'blueberry-yogurt',
                name: 'Blueberry Yogurt',
                price: '$5.49/32oz',
                icon: '🫐',
                description: 'Rich yogurt with fresh blueberry flavor',
                fullDescription: 'Our blueberry yogurt features real blueberry pieces in creamy, probiotic-rich yogurt. Packed with antioxidants from real blueberries, it\'s a delicious and nutritious choice for any time of day.',
                nutrition: {
                    servingSize: '1 cup (240g)',
                    calories: '155',
                    totalFat: '3g',
                    saturatedFat: '2g',
                    cholesterol: '15mg',
                    sodium: '110mg',
                    carbs: '21g',
                    protein: '11g',
                    calcium: '280mg',
                    vitaminD: '80IU'
                }
            }
        ]
    },
    icecream: {
        title: "Premium Ice Cream",
        description: "Indulgent ice cream made with our fresh cream and natural ingredients",
        products: [
            {
                id: 'vanilla-ice-cream',
                name: 'Vanilla Bean Ice Cream',
                price: '$8.99/pint',
                icon: '🍦',
                description: 'Classic vanilla ice cream with real vanilla beans',
                fullDescription: 'Our vanilla bean ice cream is made with real Madagascar vanilla beans and our fresh heavy cream. The rich, creamy texture and authentic vanilla flavor make it the perfect base for desserts or delicious on its own.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '140',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '35mg',
                    sodium: '40mg',
                    carbs: '16g',
                    protein: '2g',
                    calcium: '80mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'chocolate-ice-cream',
                name: 'Rich Chocolate Ice Cream',
                price: '$9.49/pint',
                icon: '🍫',
                description: 'Decadent chocolate ice cream for chocolate lovers',
                fullDescription: 'Our rich chocolate ice cream is made with premium cocoa and dark chocolate for an intensely chocolatey experience. Combined with our fresh cream, it creates a luxuriously smooth and indulgent treat.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '160',
                    totalFat: '9g',
                    saturatedFat: '6g',
                    cholesterol: '30mg',
                    sodium: '45mg',
                    carbs: '18g',
                    protein: '3g',
                    calcium: '70mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'strawberry-ice-cream',
                name: 'Fresh Strawberry Ice Cream',
                price: '$9.49/pint',
                icon: '🍓',
                description: 'Creamy ice cream with real strawberry pieces',
                fullDescription: 'Made with fresh, locally-sourced strawberries, our strawberry ice cream captures the essence of summer in every bite. Real strawberry pieces throughout provide bursts of natural fruit flavor.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '135',
                    totalFat: '7g',
                    saturatedFat: '4.5g',
                    cholesterol: '30mg',
                    sodium: '35mg',
                    carbs: '17g',
                    protein: '2g',
                    calcium: '75mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'mint-chip-ice-cream',
                name: 'Mint Chocolate Chip',
                price: '$9.99/pint',
                icon: '🍃',
                description: 'Refreshing mint ice cream with chocolate chips',
                fullDescription: 'Our mint chocolate chip ice cream combines refreshing natural mint flavor with premium dark chocolate chips. The cool, creamy mint base perfectly complements the rich chocolate pieces.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '150',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '30mg',
                    sodium: '40mg',
                    carbs: '18g',
                    protein: '2g',
                    calcium: '75mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'cookies-cream-ice-cream',
                name: 'Cookies & Cream',
                price: '$9.99/pint',
                icon: '🍪',
                description: 'Vanilla ice cream loaded with cookie pieces',
                fullDescription: 'Our cookies and cream ice cream features our signature vanilla base loaded with chunks of chocolate sandwich cookies. It\'s a nostalgic favorite that brings out the kid in everyone.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '155',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '30mg',
                    sodium: '55mg',
                    carbs: '19g',
                    protein: '2g',
                    calcium: '70mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'rocky-road-ice-cream',
                name: 'Rocky Road',
                price: '$10.49/pint',
                icon: '🏔️',
                description: 'Chocolate ice cream with marshmallows and nuts',
                fullDescription: 'Our rocky road ice cream combines rich chocolate ice cream with fluffy marshmallows and crunchy almonds. This classic flavor combination creates a delightful texture and taste experience.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '170',
                    totalFat: '10g',
                    saturatedFat: '6g',
                    cholesterol: '30mg',
                    sodium: '50mg',
                    carbs: '19g',
                    protein: '3g',
                    calcium: '70mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'caramel-swirl-ice-cream',
                name: 'Caramel Swirl',
                price: '$10.49/pint',
                icon: '🍮',
                description: 'Vanilla ice cream with rich caramel swirls',
                fullDescription: 'Our caramel swirl ice cream features our creamy vanilla base with ribbons of rich, buttery caramel throughout. Made with our own caramel sauce, it\'s a luxurious treat for caramel lovers.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '165',
                    totalFat: '8g',
                    saturatedFat: '5g',
                    cholesterol: '35mg',
                    sodium: '60mg',
                    carbs: '21g',
                    protein: '2g',
                    calcium: '75mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'seasonal-flavor',
                name: 'Seasonal Special',
                price: '$11.99/pint',
                icon: '🌟',
                description: 'Limited-time seasonal flavor (changes monthly)',
                fullDescription: 'Our seasonal special changes monthly to feature unique flavors that celebrate the season. From pumpkin spice in fall to fresh peach in summer, these limited-time offerings showcase the best seasonal ingredients.',
                nutrition: {
                    servingSize: '1/2 cup (65g)',
                    calories: '160',
                    totalFat: '9g',
                    saturatedFat: '5.5g',
                    cholesterol: '32mg',
                    sodium: '45mg',
                    carbs: '18g',
                    protein: '2g',
                    calcium: '75mg',
                    vitaminD: '0IU'
                }
            }
        ]
    },
    specialty: {
        title: "Specialty Dairy Items",
        description: "Unique dairy products and seasonal specialties",
        products: [
            {
                id: 'buttermilk',
                name: 'Cultured Buttermilk',
                price: '$3.99/quart',
                icon: '🥛',
                description: 'Tangy cultured buttermilk perfect for baking',
                fullDescription: 'Our cultured buttermilk is made by adding beneficial bacteria cultures to our fresh milk, creating its characteristic tangy flavor and thick consistency. It\'s essential for fluffy pancakes, tender biscuits, and moist cakes.',
                nutrition: {
                    servingSize: '1 cup (240ml)',
                    calories: '100',
                    totalFat: '2g',
                    saturatedFat: '1.5g',
                    cholesterol: '10mg',
                    sodium: '260mg',
                    carbs: '12g',
                    protein: '8g',
                    calcium: '280mg',
                    vitaminD: '120IU'
                }
            },
            {
                id: 'sour-cream',
                name: 'Sour Cream',
                price: '$4.49/16oz',
                icon: '🥄',
                description: 'Rich, tangy sour cream made from fresh cream',
                fullDescription: 'Our sour cream is made from our fresh heavy cream cultured with lactic acid bacteria. The result is a rich, tangy product perfect for topping baked potatoes, tacos, or incorporating into dips and sauces.',
                nutrition: {
                    servingSize: '2 tbsp (30g)',
                    calories: '60',
                    totalFat: '5g',
                    saturatedFat: '3g',
                    cholesterol: '20mg',
                    sodium: '15mg',
                    carbs: '2g',
                    protein: '1g',
                    calcium: '40mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'cream-cheese',
                name: 'Artisan Cream Cheese',
                price: '$5.99/8oz',
                icon: '🧀',
                description: 'Smooth, spreadable cream cheese',
                fullDescription: 'Our artisan cream cheese is made fresh using traditional methods. With its smooth, spreadable texture and mild tangy flavor, it\'s perfect for bagels, cheesecakes, or as a base for dips and spreads.',
                nutrition: {
                    servingSize: '1 oz (28g)',
                    calories: '100',
                    totalFat: '10g',
                    saturatedFat: '6g',
                    cholesterol: '30mg',
                    sodium: '85mg',
                    carbs: '1g',
                    protein: '2g',
                    calcium: '25mg',
                    vitaminD: '0IU'
                }
            },
            {
                id: 'cottage-cheese',
                name: 'Small Curd Cottage Cheese',
                price: '$4.99/16oz',
                icon: '🥄',
                description: 'Fresh cottage cheese with small, tender curds',
                fullDescription: 'Our small curd cottage cheese is made fresh daily with a mild, creamy flavor and tender texture. High in protein and low in fat, it\'s perfect for healthy snacking, cooking, or adding to salads.',
                nutrition: {
                    servingSize: '1/2 cup (120g)',
                    calories: '90',
                    totalFat: '1g',
                    saturatedFat: '0.5g',
                    cholesterol: '5mg',
                    sodium: '400mg',
                    carbs: '5g',
                    protein: '14g',
                    calcium: '80mg',
                    vitaminD: '0IU'
                }
            }
        ]
    }
};

let currentCategory = '';
let currentQuantity = 1;

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

function showCategoryProducts(category) {
    currentCategory = category;
    const categoryData = productData[category];

    // Update category header
    document.getElementById('categoryTitle').textContent = categoryData.title;
    document.getElementById('categoryDescription').textContent = categoryData.description;

    // Generate products grid
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    categoryData.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => showProductDetails(category, product.id);

        productCard.innerHTML = `
                    <div class="product-image">${product.icon}</div>
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <div class="product-description">${product.description}</div>
                `;

        productsGrid.appendChild(productCard);
    });

    showPage('categoryProducts');
}

function showProductDetails(category, productId) {
    const categoryData = productData[category];
    const product = categoryData.products.find(p => p.id === productId);

    if (!product) return;

    // Update product details
    document.getElementById('productIcon').textContent = product.icon;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescriptionFull').textContent = product.fullDescription;

    // Update nutrition facts
    const nutrition = product.nutrition;
    document.getElementById('servingSize').textContent = nutrition.servingSize;
    document.getElementById('calories').textContent = nutrition.calories;
    document.getElementById('totalFat').textContent = nutrition.totalFat;
    document.getElementById('saturatedFat').textContent = nutrition.saturatedFat;
    document.getElementById('cholesterol').textContent = nutrition.cholesterol;
    document.getElementById('sodium').textContent = nutrition.sodium;
    document.getElementById('carbs').textContent = nutrition.carbs;
    document.getElementById('protein').textContent = nutrition.protein;
    document.getElementById('calcium').textContent = nutrition.calcium;
    document.getElementById('vitaminD').textContent = nutrition.vitaminD;

    // Reset quantity
    currentQuantity = 1;
    document.getElementById('quantity').textContent = currentQuantity;

    showPage('productDetails');
}

function goBackToCategory() {
    showCategoryProducts(currentCategory);
}

function changeQuantity(change) {
    currentQuantity = Math.max(1, currentQuantity + change);
    document.getElementById('quantity').textContent = currentQuantity;
}

function addToCart() {
    const productName = document.getElementById('productName').textContent;
    const productPrice = document.getElementById('productPrice').textContent;

    // Show success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #ffce07, #ffd700);
                color: black;
                padding: 15px 25px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: slideInRight 0.5s ease-out;
                font-weight: 600;
            `;
    notification.innerHTML = `✅ ${currentQuantity}x ${productName} added to cart!<br><small>${productPrice}</small>`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Logo upload functionality
document.getElementById('logoUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const logoImage = document.getElementById('logoImage');
            logoImage.src = e.target.result;
            logoImage.style.display = 'block';

            // Show success notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                        position: fixed;
                        top: 100px;
                        right: 20px;
                        background: linear-gradient(135deg, #ffce07, #ffd700);
                        color: black;
                        padding: 15px 25px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                        z-index: 10000;
                        animation: slideInRight 0.5s ease-out;
                        font-weight: 600;
                    `;
            notification.innerHTML = `✅ Logo uploaded successfully!`;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        };
        reader.readAsDataURL(file);
    }
});

// Add slide in animation for notifications
if (!document.querySelector('#notificationAnimation')) {
    const style = document.createElement('style');
    style.id = 'notificationAnimation';
    style.textContent = `
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `;
    document.head.appendChild(style);
}

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9662727880b07a0d',t:'MTc1MzY4NTQ3Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();