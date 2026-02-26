/**
 * Website Tết Đồng Nai 2024 - JavaScript
 * Xử lý menu responsive, smooth scroll, hiệu ứng
 * ================================================
 */

// ===== DARK MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        // Khôi phục trạng thái dark mode từ localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.classList.add('active');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Toggle dark mode khi click button
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            darkModeToggle.classList.toggle('active');
            
            // Cập nhật icon
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('darkMode', 'true');
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
});

// ===== MENU TOGGLE (Mobile) =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        // Toggle menu khi click button
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Đóng menu khi click vào nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Cập nhật active link dựa theo trang hiện tại
    updateActiveNav();
});

// ===== CẬP NHẬT ACTIVE NAV LINK =====
function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== SMOOTH SCROLL EFFECT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FADE IN ANIMATION OBSERVERS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards khi page load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(
        '.feature-card, .food-card, .destination-card, .culture-card, .quick-link-card'
    );
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===== HEADER STICKY EFFECT =====
let lastScrollTop = 0;
const header = document.querySelector('.header');

if (header) {
    header.style.transition = 'box-shadow 0.3s ease';
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        
        if (scrollTop > 50) {
            header.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ===== HOVER EFFECTS ON BUTTONS =====
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .nav-link-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    // Esc để đóng menu mobile
    if (e.key === 'Escape') {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (menuToggle && navMenu && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== DETECT MOBILE DEVICE =====
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('✨ Website Tết Đồng Nai 2024 tải thành công!');
    console.log('🎊 Chúc bạn có một năm mới an lành và thịnh vượng!');
});

// ===== SCROLL TO TOP BUTTON =====
function showScrollToTopButton() {
    if (window.scrollY > 300) {
        if (!document.getElementById('scrollToTop')) {
            const btn = document.createElement('button');
            btn.id = 'scrollToTop';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%);
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
                transition: all 0.3s ease;
            `;
            
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
            
            btn.addEventListener('click', scrollToTop);
            document.body.appendChild(btn);
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', showScrollToTopButton);

// ===== LOG INITIALIZATION =====
console.log('🎊 Website Tết Đồng Nai 2024 - Xuân Giáp Thìn');
console.log('📰 Website được thiết kế với tình yêu và tôn trọng nền văn hóa Việt Nam');