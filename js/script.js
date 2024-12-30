// Scroll olduğunda header'ın görünümünü değiştir
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Scroll aşağı/yukarı kontrolü
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll aşağı
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll yukarı
            header.style.transform = 'translateY(0)';
        }
        
        // Background opacity ve border kontrolü
        if (currentScroll > 10) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.classList.add('scrolled');
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}); 