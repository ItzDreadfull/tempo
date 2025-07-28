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




function goBackToCategory() {
    showCategoryProducts(currentCategory);
}



// Partnership form functions
function openPartnershipForm(type) {
    document.getElementById('partnershipType').value = type;
    document.getElementById('partnershipForm').scrollIntoView({ behavior: 'smooth' });
}

function submitPartnershipForm(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const businessName = formData.get('businessName') || event.target.querySelector('input[type="text"]').value;
    const partnershipType = document.getElementById('partnershipType').value;

    // Show success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ffce07, #ffd700);
                color: black;
                padding: 30px 40px;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                z-index: 10000;
                text-align: center;
                max-width: 500px;
                animation: popIn 0.5s ease-out;
                font-weight: 600;
            `;

    const partnershipTypeText = partnershipType === 'retail' ? 'Retail Store' :
        partnershipType === 'restaurant' ? 'Restaurant/Cafe' :
            partnershipType === 'distributor' ? 'Distributor' : 'Partnership';

    notification.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">Application Submitted Successfully!</h3>
                <p style="margin-bottom: 1.5rem; opacity: 0.9;">Thank you for your interest in becoming a ${partnershipTypeText} partner with Pure Meadow Dairy!</p>
                <p style="font-size: 0.9rem; opacity: 0.8;">Our partnership team will review your application and contact you within 2-3 business days.</p>
                <button onclick="this.parentElement.remove()" style="background: black; color: #ffce07; border: none; padding: 10px 20px; border-radius: 15px; margin-top: 1rem; cursor: pointer; font-weight: 600;">Close</button>
            `;

    document.body.appendChild(notification);

    // Reset form
    event.target.reset();

    // Auto-remove notification after 8 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 8000);
}



// Add slide in animation for notifications
if (!document.querySelector('#notificationAnimation')) {
    const style = document.createElement('style');
    style.id = 'notificationAnimation';
    style.textContent = `
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes popIn {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
            `;
    document.head.appendChild(style);
}

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9662a508378d7a2e',t:'MTc1MzY4NzU0OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();