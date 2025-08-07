// Product data
document.addEventListener("DOMContentLoaded", () => {
    // Data for all products, organized by category
    const data = {
        milk: {
            title: "Milk.",
            description: "Fresh milk from village farmers.",
            products: [
                { name: "Ultra Milk", img: "image/Milk_Mockup/1.png", description: "Fresh toned milk perfect for daily use.", nutrition: { Calories: "60 kcal", Protein: "3g", Fat: "1.5g" }, ingredients: ["Milk", "Vitamin D", "Cream", "Sugar", "Natural Flavors"], useages: ["Direct consumption", "Making tea or coffee", "Cereal"] },
                { name: "Magic Milk", img: "image/Milk_Mockup/2.png", description: "Creamy milk with full fat content.", nutrition: { Calories: "150 kcal", Protein: "8g", Fat: "8g" }, ingredients: ["Whole Milk"], useages: ["Making desserts", "Cooking rich gravies"] },
                { name: "Unigo Milk", img: "image/Milk_Mockup/3.png", description: "Low fat milk for a healthy lifestyle.", nutrition: { Calories: "50 kcal", Protein: "3.5g", Fat: "0.2g" }, ingredients: ["Skimmed Milk"], useages: ["Health-conscious diets", "Smoothies"] },
                { name: "Elite Milk", img: "image/Milk_Mockup/4.png", description: "A balanced blend for everyday use.", nutrition: { Calories: "50 kcal", Protein: "3.5g", Fat: "0.2g" }, ingredients: ["Milk", "Vitamin A & D"], useages: ["General purpose cooking and drinking"] },
                { name: "Dieto Milk", img: "image/Milk_Mockup/5.png", description: "Zero-fat milk for fitness enthusiasts.", nutrition: { Calories: "40 kcal", Protein: "4g", Fat: "0g" }, ingredients: ["Fat-Free Milk"], useages: ["Post-workout shakes", "Strict diets"] },
                { name: "Trimi Milk", img: "image/Milk_Mockup/8.png", description: "Fortified with extra vitamins.", nutrition: { Calories: "55 kcal", Protein: "3.5g", Fat: "1g" }, ingredients: ["Milk", "Vitamin Complex"], useages: ["For growing children", "Daily nutrition boost"] },
                { name: "Regular Milk", img: "image/Milk_Mockup/6.png", description: "Standardized milk for consistency.", nutrition: { Calories: "58 kcal", Protein: "3.2g", Fat: "1.2g" }, ingredients: ["Milk"], useages: ["Household use", "Baking"] },
                { name: "Premium Milk", img: "image/Milk_Mockup/7.png", description: "Rich, creamy, and indulgent.", nutrition: { Calories: "160 kcal", Protein: "8g", Fat: "9g" }, ingredients: ["Full Cream Milk"], useages: ["Making premium sweets and paneer"] },
            ]
        },
        Doi: {
            title: "Doi / Curd.",
            description: "Traditional and healthy curd varieties.",
            products: [
                { name: "Tradional Misti Doi (Cup)", img: "image/Doi_Mockup/3.png", description: "Sweetened curd in a convenient cup.", nutrition: { Calories: "90 kcal", Protein: "4g", Fat: "2.5g" }, ingredients: ["Milk", "Sugar", "Live Cultures"], useages: ["As a dessert", "Side dish"] },
                { name: "Tradional Tok Doi (Pouch)", img: "image/Doi_Mockup/1.png", description: "Classic sour curd in a pouch.", nutrition: { Calories: "65 kcal", Protein: "3.5g", Fat: "3g" }, ingredients: ["Milk", "Live Cultures"], useages: ["Cooking", "Making raita"] },
                { name: "Sudhi Misti Doi (Cup)", img: "image/Doi_Mockup/4.png", description: "Pure and simple sweet curd.", nutrition: { Calories: "95 kcal", Protein: "4.2g", Fat: "2.8g" }, ingredients: ["Milk", "Sugar", "Live Cultures"], useages: ["Healthy dessert option"] },
                { name: "Sudhi Tok Doi (Pouch)", img: "image/Doi_Mockup/2.png", description: "Pure sour curd for culinary use.", nutrition: { Calories: "62 kcal", Protein: "3.3g", Fat: "2.9g" }, ingredients: ["Milk", "Live Cultures"], useages: ["Marinades", "Cooking"] },
            ]
        },
        paneer: {
            title: "Paneer.",
            description: "Deliciously soft paneer for cooking.",
            products: [
                { name: "Malai Paneer", img: "image/Paneer_Mockup/1.png", description: "Rich and creamy paneer for special dishes.", nutrition: { Calories: "260 kcal", Protein: "14g", Fat: "22g" }, ingredients: ["Milk", "Citric Acid"], useages: ["Shahi Paneer", "Paneer Butter Masala"] },
                { name: "Lite Paneer", img: "image/Paneer_Mockup/2.png", description: "Low-fat paneer with a smooth texture.", nutrition: { Calories: "150 kcal", Protein: "18g", Fat: "8g" }, ingredients: ["Skimmed Milk", "Lactic Acid"], useages: ["Salads", "Grilling", "Healthy snacks"] },
                { name: "Receipe Paneer", img: "image/Paneer_Mockup/3.png", description: "Low-fat paneer with a smooth texture.", nutrition: { Calories: "150 kcal", Protein: "18g", Fat: "8g" }, ingredients: ["Skimmed Milk", "Lactic Acid"], useages: ["Salads", "Grilling", "Healthy snacks"] },
                { name: "Qube Paneer (cup)", img: "image/Paneer_Mockup/4.png", description: "Low-fat paneer with a smooth texture.", nutrition: { Calories: "150 kcal", Protein: "18g", Fat: "8g" }, ingredients: ["Skimmed Milk", "Lactic Acid"], useages: ["Salads", "Grilling", "Healthy snacks"] },
            ]
        },
        Dairy_Baverage: {
            title: "Dairy Beverages.",
            description: "Refreshing and nutritious dairy drinks.",
            products: [
                { name: "Sweet Lassi", img: "image/Lassi_Mockup/13.png", description: "A refreshing sweet yogurt-based drink.", nutrition: { Calories: "120 kcal", Protein: "4g", Fat: "2g" }, ingredients: ["Curd", "Sugar", "Water"], useages: ["Summer cooler", "With meals"] },
                { name: "Butter Milk (Chaas)", img: "image/4.png", description: "Spiced buttermilk, perfect for digestion.", nutrition: { Calories: "40 kcal", Protein: "2g", Fat: "1.5g" }, ingredients: ["Curd", "Water", "Spices", "Herbs"], useages: ["Digestive aid", "After-meal drink"] },
            ]
        },
        Ghee_Cream: {
            title: "Ghee & Cream.",
            description: "Pure ghee and fresh cream for rich flavor.",
            products: [
                { name: "Desi Ghee (Cow Milk)", img: "image/Ghee_Mockup/1.png", description: "Pure and aromatic ghee made from cow's milk.", nutrition: { "Energy (per 100g)": "900 kcal", "Total Fat": "100g" }, ingredients: ["Milk Fat"], useages: ["Cooking", "Frying", "Religious ceremonies"] },
                { name: "Receipe Ghee", img: "image/Ghee_Mockup/2.png", description: "Pure and aromatic ghee made from cow's milk.", nutrition: { "Energy (per 100g)": "900 kcal", "Total Fat": "100g" }, ingredients: ["Milk Fat"], useages: ["Cooking", "Frying", "Religious ceremonies"] },
                { name: "Fresh Cream", img: "image/Ghee_Mockup/3.png", description: "Thick and fresh cream for desserts and gravies.", nutrition: { "Energy (per 100g)": "292 kcal", "Total Fat": "25g" }, ingredients: ["Milk Cream"], useages: ["Thickening gravies", "Garnishing desserts", "Fruit salads"] },
            ]
        },
    };

    let currentProduct = null;

    // Renders all categories and their products on the page
    function renderCategories() {
        const container = document.getElementById("categoriesContainer");
        container.innerHTML = "";
        for (let key in data) {
            const category = data[key];
            let section = document.createElement("section");
            section.innerHTML = `
    <h3 class="section-title">${category.title}</h3>
    <p class="section-subtitle section-desc">${category.description}</p>
    <div class="products-grid"></div>
    `;
            const grid = section.querySelector(".products-grid");
            category.products.forEach((p) => {
                let card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `<img src="${p.img}" alt="${p.name}"><h4>${p.name}</h4><p>${p.description}</p>`;
                card.onclick = () => showDetails(p);
                grid.appendChild(card);
            });
            container.appendChild(section);
        }
    }

    // Shows the detailed view for a selected product
    function showDetails(product) {
        currentProduct = product;
        document.getElementById("productImage").src = product.img;
        document.getElementById("productImage").alt = product.name;
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productDescription").textContent = product.description;

        // Load content for all three tabs
        loadNutrition();
        loadIngredients();
        loadUseages();

        // By default, show the nutrition tab first
        // showNutrition();

        // Hide categories and show the details page
        document.getElementById("categoriesContainer").style.display = "none";
        document.getElementById("detailsPage").classList.add("active");
    }

    // Loads the nutrition information for the current product
    function loadNutrition() {
        const container = document.getElementById("nutritions");
        let nutritionHTML = Object.entries(currentProduct.nutrition)
            .map(([key, value]) => `<div class="nutrition-item"><span class="nutrition-label">${key}</span><span class="nutrition-value">${value}</span></div>`)
            .join("");
        container.innerHTML = `<div class="nutrition-title">Nutrition Facts</div><div id="nutration-table">${nutritionHTML}</div>`;
    }

    // Loads the ingredients list for the current product
    function loadIngredients() {
        const container = document.getElementById("ingredients");
        let ingredientsHTML = currentProduct.ingredients.map(item => `<li>${item}</li>`).join("");
        container.innerHTML = `<div class="nutrition-title">Ingredients</div><div id="ingredientsText"><ul>${ingredientsHTML}</ul></div>`;
    }

    // Loads the usage suggestions for the current product
    function loadUseages() {
        const container = document.getElementById("useages");
        // Use optional chaining (?) in case a product has no 'useages' array
        let useagesHTML = currentProduct.useages?.map(item => `<li>${item}</li>`).join("") || "<li>No specific usages listed.</li>";
        container.innerHTML = `<div class="nutrition-title">Usages</div><div id="useagesText"><ul>${useagesHTML}</ul></div>`;
    }

    // Shows the Nutrition tab and hides others
    window.showNutrition = function () {
        document.getElementById("nutritions").style.display = "block";
        document.getElementById("ingredients").style.display = "none";
        document.getElementById("useages").style.display = "none";
        document.getElementById("nutritionBtn").classList.add("active");
        document.getElementById("ingredientsBtn").classList.remove("active");
        document.getElementById("useagesBtn").classList.remove("active");
    }

    // Shows the Ingredients tab and hides others
    window.showIngredients = function () {
        document.getElementById("nutritions").style.display = "none";
        document.getElementById("ingredients").style.display = "block";
        document.getElementById("useages").style.display = "none";
        document.getElementById("nutritionBtn").classList.remove("active");
        document.getElementById("ingredientsBtn").classList.add("active");
        document.getElementById("useagesBtn").classList.remove("active");
    }

    // Shows the Usages tab and hides others
    window.showUseages = function () {
        document.getElementById("nutritions").style.display = "none";
        document.getElementById("ingredients").style.display = "none";
        document.getElementById("useages").style.display = "block";
        document.getElementById("nutritionBtn").classList.remove("active");
        document.getElementById("ingredientsBtn").classList.remove("active");
        document.getElementById("useagesBtn").classList.add("active");
    }

    // Hides details and shows the main category list
    window.backToCategories = function () {
        document.getElementById("categoriesContainer").style.display = "block";
        document.getElementById("detailsPage").classList.remove("active");
        renderCategories();
    }

    // Initial render of the page
    renderCategories();
});
