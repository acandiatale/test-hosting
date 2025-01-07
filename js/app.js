import Router from "./router.js";
import Home from "./views/Home.js";
import HowItWorks from "./views/HowItWorks.js";
import Products from "./views/Products.js";
import Contact from "./views/Contact.js";

// DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    // 네우터 초기화
    const router = new Router([
        { path: "/", view: Home },
        { path: "/how-it-works", view: HowItWorks },
        { path: "/products", view: Products },
        { path: "/contact", view: Contact }
    ]);

    // 스크롤 이벤트 처리
    window.addEventListener('scroll', () => {
        const logo = document.querySelector('.logo');
        const secondSection = document.querySelector('.second-section');
        
        if (secondSection) {
            const secondSectionTop = secondSection.offsetTop;
            const scrollPosition = window.scrollY + 50; // 약간의 오프셋 추가

            if (scrollPosition >= secondSectionTop) {
                logo.classList.add('scrolled');
            } else {
                logo.classList.remove('scrolled');
            }
        }
    });
}); 