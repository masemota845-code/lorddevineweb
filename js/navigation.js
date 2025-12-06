 // Section Content Loaders
function loadAIStudioContent(container) {
    container.innerHTML = `
        <div class="studio-container">
            <div class="studio-toolbar">
                <select id="language-selector" class="toolbar-select heading-mono">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="php">PHP</option>
                    <option value="ruby">Ruby</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                </select>
                <button onclick="executeCode()" class="btn-primary heading-mono">▶️ 𝚁𝚞𝚗 𝙲𝚘𝚍𝚎</button>
                <button onclick="formatCode()" class="btn-primary heading-mono">✨ 𝙵𝚘𝚛𝚖𝚊𝚝</button>
                <button onclick="deobfuscateCode()" class="btn-primary heading-mono">🔓 𝙳𝚎𝚘𝚋𝚏𝚞𝚜𝚌𝚊𝚝𝚎</button>
                <button onclick="analyzeCode()" class="btn-primary heading-mono">🔍 𝙰𝚗𝚊𝚕𝚢𝚣𝚎</button>
                <button onclick="downloadProject()" class="btn-primary heading-mono">💾 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍</button>
            </div>
            
            <div class="studio-workspace">
                <div class="code-editor-panel">
                    <h3 class="heading-mono">𝙲𝚘𝚍𝚎 𝙴𝚍𝚒𝚝𝚘𝚛</h3>
                    <textarea id="code-editor" class="code-editor" placeholder="// Start coding here..."></textarea>
                </div>
                
                <div class="output-panel">
                    <h3 class="heading-mono">𝙾𝚞𝚝𝚙𝚞𝚝</h3>
                    <div id="code-output" class="code-output"></div>
                </div>
            </div>
            
            <div class="ai-chat-panel">
                <h3 class="heading-mono">𝙰𝙸 𝙰𝚜𝚜𝚒𝚜𝚝𝚊𝚗𝚝</h3>
                <div id="ai-chat-messages" class="chat-messages"></div>
                <div class="chat-input-container">
                    <input type="text" id="ai-chat-input" placeholder="Ask AI for help..." class="chat-input">
                    <button onclick="sendAIMessage()" class="btn-primary heading-mono">𝚂𝚎𝚗𝚍</button>
                </div>
            </div>
        </div>
    `;
    
    initializeCodeEditor();
}

function loadBotArsenalContent(container) {
    container.innerHTML = `
        <div class="arsenal-grid">
            <div class="arsenal-card">
                <h3 class="heading-mono">🤖 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙱𝚘𝚝 𝚃𝚎𝚖𝚙𝚕𝚊𝚝𝚎𝚜</h3>
                <p class="text-serif">𝘗𝘳𝘦-𝘣𝘶𝘪𝘭𝘵 𝘵𝘦𝘮𝘱𝘭𝘢𝘵𝘦𝘴 𝘧𝘰𝘳 𝘲𝘶𝘪𝘤𝘬 𝘣𝘰𝘵 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵</p>
                <button onclick="loadBotTemplates()" class="btn-primary">𝙱𝚛𝚘𝚠𝚜𝚎 𝚃𝚎𝚖𝚙𝚕𝚊𝚝𝚎𝚜</button>
            </div>
            
            <div class="arsenal-card">
                <h3 class="heading-mono">⚙️ 𝙰𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚘𝚗 𝚂𝚌𝚛𝚒𝚙𝚝𝚜</h3>
                <p class="text-serif">𝘊𝘶𝘴𝘵𝘰𝘮 𝘢𝘶𝘵𝘰𝘮𝘢𝘵𝘪𝘰𝘯 𝘴𝘤𝘳𝘪𝘱𝘵𝘴 𝘧𝘰𝘳 𝘷𝘢𝘳𝘪𝘰𝘶𝘴 𝘵𝘢𝘴𝘬𝘴</p>
                <button onclick="createAutomationScript()" class="btn-primary">𝙲𝚛𝚎𝚊𝚝𝚎 𝚂𝚌𝚛𝚒𝚙𝚝</button>
            </div>
            
            <div class="arsenal-card">
                <h3 class="heading-mono">🎯 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙻𝚒𝚋𝚛𝚊𝚛𝚢</h3>
                <p class="text-serif">𝘚𝘦𝘢𝘳𝘤𝘩𝘢𝘣𝘭𝘦 𝘭𝘪𝘣𝘳𝘢𝘳𝘺 𝘰𝘧 𝘣𝘰𝘵 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴</p>
                <button onclick="browseCommands()" class="btn-primary">𝙱𝚛𝚘𝚠𝚜𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜</button>
            </div>
            
            <div class="arsenal-card">
                <h3 class="heading-mono">🎨 𝚅𝚒𝚜𝚞𝚊𝚕 𝙱𝚘𝚝 𝙱𝚞𝚒𝚕𝚍𝚎𝚛</h3>
                <p class="text-serif">𝘋𝘳𝘢𝘨-𝘢𝘯𝘥-𝘥𝘳𝘰𝘱 𝘣𝘰𝘵 𝘣𝘶𝘪𝘭𝘥𝘦𝘳 𝘧𝘰𝘳 𝘯𝘰𝘯-𝘤𝘰𝘥𝘦𝘳𝘴</p>
                <button onclick="openVisualBuilder()" class="btn-primary">𝙾𝚙𝚎𝚗 𝙱𝚞𝚒𝚕𝚍𝚎𝚛</button>
            </div>
        </div>
    `;
}

function loadCodingHubContent(container) {
    container.innerHTML = `
        <div class="hub-container">
            <div class="hub-sidebar">
                <h3 class="heading-mono">𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜</h3>
                <div id="project-list" class="project-list"></div>
                <button onclick="createNewProject()" class="btn-primary">+ 𝙽𝚎𝚠 𝙿𝚛𝚘𝚓𝚎𝚌𝚝</button>
            </div>
            
            <div class="hub-main">
                <div class="hub-toolbar">
                    <input type="text" id="project-search" placeholder="Search projects..." class="search-input">
                    <select id="project-filter" class="filter-select heading-mono">
                        <option value="all">𝙰𝚕𝚕 𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜</option>
                        <option value="nodejs">𝙽𝚘𝚍𝚎.𝚓𝚜</option>
                        <option value="api">𝙰𝙿𝙸𝚜</option>
                        <option value="ui">𝚄𝙸 𝙲𝚘𝚖𝚙𝚘𝚗𝚎𝚗𝚝𝚜</option>
                    </select>
                </div>
                
                <div id="project-details" class="project-details">
                    <p class="text-serif">𝘚𝘦𝘭𝘦𝘤𝘵 𝘢 𝘱𝘳𝘰𝘫𝘦𝘤𝘵 𝘵𝘰 𝘷𝘪𝘦𝘸 𝘥𝘦𝘵𝘢𝘪𝘭𝘴</p>
                </div>
            </div>
        </div>
    `;
    
    loadProjectList();
}

function loadAcademyContent(container) {
    container.innerHTML = `
        <div class="academy-grid">
            <div class="course-card">
                <span class="course-icon">📘</span>
                <h3 class="heading-mono">𝙶𝚒𝚝𝙷𝚞𝚋 𝙼𝚊𝚜𝚝𝚎𝚛𝚢</h3>
                <p class="text-serif">𝘓𝘦𝘢𝘳𝘯 𝘎𝘪𝘵𝘏𝘶𝘣 𝘧𝘳𝘰𝘮 𝘣𝘦𝘨𝘪𝘯𝘯𝘦𝘳 𝘵𝘰 𝘢𝘥𝘷𝘢𝘯𝘤𝘦𝘥</p>
                <button onclick="startCourse('github')" class="btn-primary">𝚂𝚝𝚊𝚛𝚝 𝙲𝚘𝚞𝚛𝚜𝚎</button>
            </div>
            
            <div class="course-card">
                <span class="course-icon">🚀</span>
                <h3 class="heading-mono">𝚅𝚎𝚛𝚌𝚎𝚕 𝙳𝚎𝚙𝚕𝚘𝚢𝚖𝚎𝚗𝚝</h3>
                <p class="text-serif">𝘋𝘦𝘱𝘭𝘰𝘺 𝘺𝘰𝘶𝘳 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘸𝘪𝘵𝘩 𝘦𝘢𝘴𝘦</p>
                <button onclick="startCourse('vercel')" class="btn-primary">𝚂𝚝𝚊𝚛𝚝 𝙲𝚘𝚞𝚛𝚜𝚎</button>
            </div>
            
            <div class="course-card">
                <span class="course-icon">🤖</span>
                <h3 class="heading-mono">𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙱𝚘𝚝 𝙳𝚎𝚟</h3>
                <p class="text-serif">𝘉𝘶𝘪𝘭𝘥 𝘱𝘰𝘸𝘦𝘳𝘧𝘶𝘭 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘣𝘰𝘵𝘴</p>
                <button onclick="startCourse('whatsapp')" class="btn-primary">𝚂𝚝𝚊𝚛𝚝 𝙲𝚘𝚞𝚛𝚜𝚎</button>
            </div>
            
            <div class="course-card">
                <span class="course-icon">⚡</span>
                <h3 class="heading-mono">𝙽𝚘𝚍𝚎.𝚓𝚜 𝙴𝚡𝚙𝚎𝚛𝚝</h3>
                <p class="text-serif">𝘔𝘢𝘴𝘵𝘦𝘳 𝘕𝘰𝘥𝘦.𝘫𝘴 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵</p>
                <button onclick="startCourse('nodejs')" class="btn-primary">𝚂𝚝𝚊𝚛𝚝 𝙲𝚘𝚞𝚛𝚜𝚎</button>
            </div>
        </div>
    `;
}

function loadDesignStudioContent(container) {
    container.innerHTML = `
        <div class="design-workspace">
            <div class="design-tools">
                <button onclick="openBadgeGenerator()" class="tool-btn heading-mono">🎨 𝙱𝚊𝚍𝚐𝚎 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚘𝚛</button>
                <button onclick="openAnimationBuilder()" class="tool-btn heading-mono">✨ 𝙰𝚗𝚒𝚖𝚊𝚝𝚒𝚘𝚗 𝙱𝚞𝚒𝚕𝚍𝚎𝚛</button>
                <button onclick="openTemplateLibrary()" class="tool-btn heading-mono">📚 𝚃𝚎𝚖𝚙𝚕𝚊𝚝𝚎 𝙻𝚒𝚋𝚛𝚊𝚛𝚢</button>
                <button onclick="openColorPalette()" class="tool-btn heading-mono">🎨 𝙲𝚘𝚕𝚘𝚛 𝙿𝚊𝚕𝚎𝚝𝚝𝚎</button>
            </div>
            
            <div id="design-canvas" class="design-canvas">
                <p class="text-serif">𝘚𝘦𝘭𝘦𝘤𝘵 𝘢 𝘵𝘰𝘰𝘭 𝘵𝘰 𝘴𝘵𝘢𝘳𝘵 𝘥𝘦𝘴𝘪𝘨𝘯𝘪𝘯𝘨</p>
            </div>
        </div>
    `;
}

function loadToolboxContent(container) {
    container.innerHTML = `
        <div class="toolbox-grid">
            <div class="tool-card">
                <h3 class="heading-mono">📝 𝚃𝚎𝚡𝚝 𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛</h3>
                <textarea id="text-input" placeholder="Enter text to transform..."></textarea>
                <div class="transform-buttons">
                    <button onclick="transformText('upper')" class="btn-primary">𝚄𝙿𝙿𝙴𝚁𝙲𝙰𝚂𝙴</button>
                    <button onclick="transformText('lower')" class="btn-primary">𝚕𝚘𝚠𝚎𝚛𝚌𝚊𝚜𝚎</button>
                    <button onclick="transformText('gothic')" class="btn-primary">𝔊𝔬𝔱𝔥𝔦𝔠</button>
                    <button onclick="transformText('mono')" class="btn-primary">𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</button>
                </div>
                <div id="text-output" class="text-output"></div>
            </div>
        </div>
    `;
}

function loadAIAssistantContent(container) {
    container.innerHTML = `
        <div class="ai-hub">
            <div class="ai-features">
                <div class="ai-feature-card">
                    <h3 class="heading-mono">💬 𝙲𝚘𝚗𝚟𝚎𝚛𝚜𝚊𝚝𝚒𝚘𝚗𝚊𝚕 𝙰𝙸</h3>
                    <div id="conversation-ai" class="ai-interface"></div>
                    <input type="text" id="ai-query" placeholder="Ask me anything..." class="ai-input">
                    <button onclick="askAI()" class="btn-primary">𝙰𝚜𝚔 𝙰𝙸</button>
                </div>
                
                <div class="ai-feature-card">
                    <h3 class="heading-mono">🎨 𝙰𝙸 𝙸𝚖𝚊𝚐𝚎 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚘𝚛</h3>
                    <input type="text" id="image-prompt" placeholder="Describe the image..." class="ai-input">
                    <button onclick="generateImage()" class="btn-primary">𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚎</button>
                    <div id="generated-image" class="image-output"></div>
                </div>
            </div>
        </div>
    `;
    
    initializeAI();
}

function loadAdvancedLabContent(container) {
    container.innerHTML = `
        <div class="lab-workspace">
            <div class="lab-tools-grid">
                <div class="lab-tool">
                    <h3 class="heading-mono">🗄️ 𝙳𝚊𝚝𝚊𝚋𝚊𝚜𝚎 𝙼𝚊𝚗𝚊𝚐𝚎𝚛</h3>
                    <button onclick="openDatabaseManager()" class="btn-primary">𝙾𝚙𝚎𝚗</button>
                </div>
                
                <div class="lab-tool">
                    <h3 class="heading-mono">🔐 𝙰𝚞𝚝𝚑 𝚂𝚢𝚜𝚝𝚎𝚖</h3>
                    <button onclick="buildAuthSystem()" class="btn-primary">𝙱𝚞𝚒𝚕𝚍</button>
                </div>
                
                <div class="lab-tool">
                    <h3 class="heading-mono">🧪 𝙰𝙿𝙸 𝚃𝚎𝚜𝚝𝚎𝚛</h3>
                    <button onclick="openAPITester()" class="btn-primary">𝚃𝚎𝚜𝚝</button>
                </div>
                
                <div class="lab-tool">
                    <h3 class="heading-mono">⚡ 𝚆𝚎𝚋𝚂𝚘𝚌𝚔𝚎𝚝 𝚃𝚎𝚜𝚝𝚎𝚛</h3>
                    <button onclick="testWebSocket()" class="btn-primary">𝚃𝚎𝚜𝚝</button>
                </div>
            </div>
        </div>
    `;
}

// Utility functions for content sections
function initializeCodeEditor() {
    // Initialize code editor with syntax highlighting
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.addEventListener('input', () => {
            // Auto-save functionality
            saveCodeToLocalStorage();
        });
    }
}

function loadProjectList() {
    const projectList = document.getElementById('project-list');
    if (!projectList) return;
    
    const projects = AppState.projects.length > 0 ? AppState.projects : [
        { name: 'Sample Project', type: 'nodejs', date: new Date().toISOString() }
    ];
    
    projectList.innerHTML = projects.map(project => `
        <div class="project-item" onclick="selectProject('${project.name}')">
            <span class="heading-mono">${project.name}</span>
            <span class="text-serif">${project.type}</span>
        </div>
    `).join('');
}

function initializeAI() {
    console.log('AI system initialized with Gemini API');
}

function saveCodeToLocalStorage() {
    const code = document.getElementById('code-editor')?.value || '';
    localStorage.setItem('lorddevine_code', code);
}

// Export functions
window.loadAIStudioContent = loadAIStudioContent;
window.loadBotArsenalContent = loadBotArsenalContent;
window.loadCodingHubContent = loadCodingHubContent;
window.loadAcademyContent = loadAcademyContent;
window.loadDesignStudioContent = loadDesignStudioContent;
window.loadToolboxContent = loadToolboxContent;
window.loadAIAssistantContent = loadAIAssistantContent;
window.loadAdvancedLabContent = loadAdvancedLabContent; 
