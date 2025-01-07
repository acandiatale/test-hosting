export default class Navigation {
    constructor() {
        this.navItems = [
            { path: "/", text: "홈" },
            { path: "/how-it-works", text: "제품 소개" },
            { path: "/products", text: "구매하기" },
            { path: "/contact", text: "문의하기" }
        ];
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const navContainer = document.getElementById('nav-container');
        const navLinks = document.createElement('div');
        navLinks.className = 'nav-links';
        
        navLinks.innerHTML = this.navItems
            .map(item => `
                <a href="${item.path}" data-link>${item.text}</a>
            `).join('');
        
        navContainer.appendChild(navLinks);
    }

    setupEventListeners() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 모바일에서 메뉴 클릭시 자동으로 닫기
        navLinks.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
} 