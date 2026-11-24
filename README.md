
# AI Chatbot

A simple AI chatbot built using React, Node.js, Express, and Ollama. It uses a locally running Qwen model to generate responses.

## Tech Stack
- React.js + Vite
- Node.js + Express.js
- Ollama
- Qwen 2.5 3B Instruct
- JavaScript

## Features
- Real-time chat interface
- Maintains conversation history
- Loading indicator while generating responses
- Runs AI locally using Ollama
- No paid AI API required

## Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd chatbot
```

### 2. Start Backend
```bash
cd backend
npm install
node src/server.js
```

### 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Run Ollama
```bash
ollama run hf.co/Qwen/Qwen2.5-3B-Instruct-GGUF:Q4_K_M
```

## Local URLs
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Ollama: http://localhost:11434

## AI Model
Qwen 2.5 3B Instruct (Q4_K_M) running locally through Ollama.
