/**
 * Navigation Control Script
 * 導航列控制與當前頁面偵測
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化導航
    initNavigation();
    highlightCurrentPage();
    setupMobileMenu();
});

/**
 * 初始化導航系統
 */
function initNavigation() {
    // 為所有導航連結添加平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

/**
 * 高亮當前頁面的導航連結
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // 移除所有 active 類
        link.classList.remove('active');
        
        // 精確匹配或首頁特殊處理
        if (linkPath === currentPath || 
            (currentPath.endsWith('/') && linkPath.endsWith('index.html')) ||
            (currentPath.includes('/index.html') && linkPath.endsWith('/'))) {
            link.classList.add('active');
        }
    });
}

/**
 * 設置行動版選單
 */
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    // 切換選單開關
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        
        // 切換漢堡圖示動畫
        const icons = navToggle.querySelectorAll('.icon');
        icons.forEach(icon => icon.classList.toggle('active'));
    });
    
    // 點擊選單項目後關閉選單
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 點擊外部關閉選單
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/**
 * 創建導航 HTML (用於動態插入)
 * @returns {string} 導航 HTML
 */
function createNavigationHTML() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="../index.html" class="nav-brand">
                    <span>⚡ EIT Touch Simulator</span>
                </a>
                
                <button class="nav-toggle" aria-label="Toggle navigation">
                    <span class="icon"></span>
                    <span class="icon"></span>
                    <span class="icon"></span>
                </button>
                
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="../index.html" class="nav-link">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a href="./hardware.html" class="nav-link">硬體架構</a>
                    </li>
                    <li class="nav-item">
                        <a href="./theory.html" class="nav-link">理論原理</a>
                    </li>
                    <li class="nav-item">
                        <a href="./modeling.html" class="nav-link">數學建模</a>
                    </li>
                    <li class="nav-item">
                        <a href="./deeplearning.html" class="nav-link">深度學習</a>
                    </li>
                    <li class="nav-item">
                        <a href="./simulation.html" class="nav-link">互動模擬</a>
                    </li>
                    <li class="nav-item">
                        <a href="./applications.html" class="nav-link">應用案例</a>
                    </li>
                    <li class="nav-item">
                        <a href="./faq.html" class="nav-link">FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

/**
 * 創建頁尾 HTML
 * @returns {string} 頁尾 HTML
 */
function createFooterHTML() {
    const year = new Date().getFullYear();
    return `
        <footer class="footer">
            <div class="container">
                <p>&copy; ${year} EIT Touch Simulator Project. All rights reserved.</p>
                <p>Electrical Impedance Tomography for Touch Sensing Applications</p>
            </div>
        </footer>
    `;
}

// 導出函數供其他腳本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        highlightCurrentPage,
        setupMobileMenu,
        createNavigationHTML,
        createFooterHTML
    };
}
