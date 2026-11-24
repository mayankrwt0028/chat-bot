# AI Chatbot 

A full-stack AI chatbot powered by a locally running Qwen model using Ollama.

### Tech Stack
- React.js, Vite
- Node.js, Express.js
- Ollama
- Qwen 2.5 3B Instruct

### Setup & Installation

**1. Install Ollama**

Download: https://ollama.com/download

**2. Download Qwen Model**

```bash
ollama pull hf.co/Qwen/Qwen2.5-3B-Instruct-GGUF:Q4_K_M
```

**3. Start Ollama**

```bash
ollama serve
```

**4. Start Backend**

```bash
cd ai-chatbot
npm install
node src/server.js
```

**5. Start Frontend**

Open another terminal:

```bash
cd ai-chatbot-frontend
npm install
npm run dev
```

### Local URLs
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Ollama: http://localhost:11434

### Features
- AI-powered conversations
- Local LLM integration
- Real-time responses through Ollama
- Qwen model running locally