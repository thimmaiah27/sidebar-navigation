const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.main-nav');
const main = document.querySelector('.main-content');
const sidebarToggle = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');

const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('inactive');
    header.classList.toggle('inactive');
    main.classList.toggle('inactive');
    overlay.classList.toggle('active');
};

sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = sidebarToggle.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// Initial state setup
const setInitialState = () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('inactive');
        header.classList.remove('inactive');
        main.classList.remove('inactive');
    } else {
        sidebar.classList.remove('inactive');
        header.classList.remove('inactive');
        main.classList.remove('inactive');
    }
};

// Run initial state setup
setInitialState();

// Update state on window resize
window.addEventListener('resize', setInitialState);