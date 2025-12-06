 // Global State
const AppState = {
    currentSection: 'home',
    userData: {},
    projects: [],
    settings: {
        theme: 'dark',
        fontSize: 'medium'
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadDynamicContent();
    setupEventListeners();
});

function initializeApp() {
    console.log('🚀 LordDevine Empire Initialized');
    loadUserData();
    initializeParticles();
}

function loadUserData() {
    const savedData = localStorage.getItem('lorddevine_data');
    if (savedData) {
        AppState.userData = JSON.parse(savedData);
    }
}

function saveUserData() {
    localStorage.setItem('lorddevine_data', JSON.stringify(AppState.userData));
}

function setupEventListeners() {
    // Menu item clicks
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            navigateToSection(section);
        });
    });
}

// Navigation
function navigateToSection(sectionId) {
    // Update active menu item
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Update active section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        AppState.currentSection = sectionId;
        
        // Load section content if not already loaded
        loadSectionContent(sectionId);
    }
}

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Dynamic Content Loading
async function loadSectionContent(sectionId) {
    const contentDiv = document.getElementById(`${sectionId}-content`);
    
    if (!contentDiv || contentDiv.innerHTML.trim() !== '') return;
    
    switch(sectionId) {
        case 'ai-studio':
            loadAIStudioContent(contentDiv);
            break;
        case 'bot-arsenal':
            loadBotArsenalContent(contentDiv);
            break;
        case 'coding-hub':
            loadCodingHubContent(contentDiv);
            break;
        case 'academy':
            loadAcademyContent(contentDiv);
            break;
        case 'design-studio':
            loadDesignStudioContent(contentDiv);
            break;
        case 'toolbox':
            loadToolboxContent(contentDiv);
            break;
        case 'ai-assistant':
            loadAIAssistantContent(contentDiv);
            break;
        case 'advanced-lab':
            loadAdvancedLabContent(contentDiv);
            break;
    }
}

function loadDynamicContent() {
    // Load content for currently active section
    if (AppState.currentSection !== 'home') {
        loadSectionContent(AppState.currentSection);
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    });
}

function downloadFile(content, filename, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Export for global use
window.navigateToSection = navigateToSection;
window.toggleSidebar = toggleSidebar;
window.showNotification = showNotification;
window.copyToClipboard = copyToClipboard;
window.downloadFile = downloadFile; 
