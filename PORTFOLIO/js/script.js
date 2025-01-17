document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // تحقق من العناصر
    if (menuToggle && mobileMenu) {
        // عند النقر على الزر، تبديل الحالة (فتح/إغلاق القائمة)
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden"); // تبديل عرض القائمة
            mobileMenu.classList.toggle("fade-in"); // تأثير فتح القائمة
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener("click", (event) => {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                if (!mobileMenu.classList.contains("hidden")) {
                    mobileMenu.classList.add("hidden");
                    mobileMenu.classList.remove("fade-in");
                }
            }
        });
    }
});
