let cartCount = 0;
const cartElement = document.querySelector('.cart-count');
const toast = document.getElementById('toast');

function addToCart() {
    // 1. เพิ่มตัวเลข
    cartCount++;
    cartElement.innerText = cartCount;
    
    // 2. ทำ Animation ให้ตะกร้าเด้งๆ
    cartElement.parentElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        cartElement.parentElement.style.transform = "scale(1)";
    }, 200);

    // 3. แสดงแจ้งเตือน (Toast)
    showToast();
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // หายไปใน 3 วินาที
}

// Smooth Scroll (เลื่อนหน้าจอสวยๆ)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("Sitsense Shop Loaded!");
