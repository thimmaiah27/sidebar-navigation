const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const sidebarToggle = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
    }
};

sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = sidebarToggle.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnHamburger) {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    }
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', message);
        simulateResponse(message);
        userInput.value = '';
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function simulateResponse(userMessage) {
    // This is where you'd typically call an AI API
    setTimeout(() => {
        const response = `This is a simulated response to: "${userMessage}"`;
        addMessage('ai', response);
    }, 1000);
}

// Initial state setup and window resize handler
const setInitialState = () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('sidebar-collapsed');
    } else {
        sidebar.classList.remove('active');
        // Uncomment the next line if you want the sidebar to start collapsed on desktop
        sidebar.classList.add('collapsed');
        mainContent.classList.add('sidebar-collapsed');
    }
};

// Run initial state setup
setInitialState();

// Update state on window resize
window.addEventListener('resize', setInitialState);

// Auto-resize textarea
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
