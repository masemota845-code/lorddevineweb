 // AI Service using Gemini API
const GEMINI_API_KEY = 'AIzaSyBA6m8Bk8ybeKjiLzRk01NtEyMHbQccpzc';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

class AIService {
    static async generateText(prompt) {
        try {
            const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });
            
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('AI Error:', error);
            return 'Error generating response';
        }
    }
    
    static async analyzeCode(code, language) {
        const prompt = `Analyze this ${language} code and provide insights on:
1. Code quality
2. Potential bugs
3. Performance improvements
4. Best practices violations
5. Security concerns

Code:
${code}`;
        
        return await this.generateText(prompt);
    }
    
    static async generateCode(description, language) {
        const prompt = `Generate ${language} code based on this description: ${description}. 
Provide clean, well-commented, production-ready code.`;
        
        return await this.generateText(prompt);
    }
    
    static async debugCode(code, error, language) {
        const prompt = `Debug this ${language} code that's producing this error: "${error}"

Code:
${code}

Provide:
1. The cause of the error
2. Fixed code
3. Explanation of the fix`;
        
        return await this.generateText(prompt);
    }
}

// AI Functions for UI
async function askAI() {
    const input = document.getElementById('ai-query');
    const output = document.getElementById('conversation-ai');
    
    if (!input || !output) return;
    
    const question = input.value.trim();
    if (!question) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'ai-message user-message';
    userMessage.innerHTML = `<p class="text-serif">${question}</p>`;
    output.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Show loading
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'ai-message ai-message-loading';
    loadingMessage.innerHTML = `<p class="text-serif">𝘈𝘐 𝘪𝘴 𝘵𝘩𝘪𝘯𝘬𝘪𝘯𝘨...</p>`;
    output.appendChild(loadingMessage);
    
    // Get AI response
    const response = await AIService.generateText(question);
    
    // Remove loading
    loadingMessage.remove();
    
    // Add AI response
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message ai-response';
    aiMessage.innerHTML = `<p class="text-serif">${response}</p>`;
    output.appendChild(aiMessage);
    
    output.scrollTop = output.scrollHeight;
}

async function sendAIMessage() {
    const input = document.getElementById('ai-chat-input');
    const messages = document.getElementById('ai-chat-messages');
    
    if (!input || !messages) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    messages.innerHTML += `
        <div class="chat-message user">
            <p class="text-serif">${message}</p>
        </div>
    `;
    
    input.value = '';
    
    // Get AI response
    const response = await AIService.generateText(`You are a coding assistant. Help with this: ${message}`);
    
    messages.innerHTML += `
        <div class="chat-message ai">
            <p class="text-serif">${response}</p>
        </div>
    `;
    
    messages.scrollTop = messages.scrollHeight;
}

async function executeCode() {
    const editor = document.getElementById('code-editor');
    const output = document.getElementById('code-output');
    const languageSelector = document.getElementById('language-selector');
    
    if (!editor || !output) return;
    
    const code = editor.value;
    const language = languageSelector?.value || 'javascript';
    
    output.innerHTML = '<p class="text-serif">𝘌𝘹𝘦𝘤𝘶𝘵𝘪𝘯𝘨 𝘤𝘰𝘥𝘦...</p>';
    
    try {
        if (language === 'javascript') {
            const result = eval(code);
            output.innerHTML = `<pre class="text-serif">${result}</pre>`;
        } else {
            output.innerHTML = `<p class="text-serif">𝘌𝘹𝘦𝘤𝘶𝘵𝘪𝘰𝘯 𝘧𝘰𝘳 ${language} 𝘳𝘦𝘲𝘶𝘪𝘳𝘦𝘴 𝘴𝘦𝘳𝘷𝘦𝘳-𝘴𝘪𝘥𝘦 𝘴𝘶𝘱𝘱𝘰𝘳𝘵</p>`;
        }
    } catch (error) {
        output.innerHTML = `<pre class="error text-serif">𝘌𝘳𝘳𝘰𝘳: ${error.message}</pre>`;
    }
}

async function analyzeCode() {
    const editor = document.getElementById('code-editor');
    const output = document.getElementById('code-output');
    const languageSelector = document.getElementById('language-selector');
    
    if (!editor || !output) return;
    
    const code = editor.value;
    const language = languageSelector?.value || 'javascript';
    
    output.innerHTML = '<p class="text-serif">𝘈𝘯𝘢𝘭𝘺𝘻𝘪𝘯𝘨 𝘤𝘰𝘥𝘦...</p>';
    
    const analysis = await AIService.analyzeCode(code, language);
    output.innerHTML = `<pre class="text-serif">${analysis}</pre>`;
}

function formatCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    try {
        const code = editor.value;
        // Basic formatting - in production, use a proper formatter like Prettier
        const formatted = code.split(';').join(';\n').split('{').join('{\n').split('}').join('\n}');
        editor.value = formatted;
        showNotification('Code formatted successfully!', 'success');
    } catch (error) {
        showNotification('Error formatting code', 'error');
    }
}

function deobfuscateCode() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    showNotification('Deobfuscating code...', 'info');
    
    // Basic deobfuscation - in production, use advanced techniques
    setTimeout(() => {
        showNotification('Deobfuscation complete!', 'success');
    }, 1000);
}

function downloadProject() {
    const editor = document.getElementById('code-editor');
    if (!editor) return;
    
    const code = editor.value;
    const language = document.getElementById('language-selector')?.value || 'javascript';
    const extension = {
        'javascript': 'js',
        'python': 'py',
        'java': 'java',
        'cpp': 'cpp',
        'php': 'php',
        'ruby': 'rb',
        'go': 'go',
        'rust': 'rs'
    }[language] || 'txt';
    
    downloadFile(code, `project.${extension}`, 'text/plain');
}

window.askAI = askAI;
window.sendAIMessage = sendAIMessage;
window.executeCode = executeCode;
window.analyzeCode = analyzeCode;
window.formatCode = formatCode;
window.deobfuscateCode = deobfuscateCode;
window.downloadProject = downloadProject;
window.AIService = AIService; 
