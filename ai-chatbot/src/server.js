import express from "express"
import cors from "cors"


const app = express()

app.use(cors());
app.use(express.json());

app.post("/api/chat", async(req, res)=>{
  try {
    console.log("Received message from frontend:", req.body);
    const {messages} = req.body
   if (!Array.isArray(messages) || messages.length === 0) {
  return res.status(400).json({
    success: false,
    message: "messages array is required"
  });
}
    console.log("Sending message:", messages);
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
   body: JSON.stringify({
  model: "hf.co/Qwen/Qwen2.5-3B-Instruct-GGUF:Q4_K_M",
  messages: messages,
  stream: false
})
    }
  )

  const data = await response.json()
  
  if (!response.ok) {
  throw new Error(`Ollama error: ${response.status}`);
}
// console.log("Backend response:", data);
// console.log("AI reply:", data.reply);

console.log("Ollama response:", JSON.stringify(data, null, 2));
console.log("Generated reply:", data.message?.content);


return res.status(200).json({
  success: true,
  reply: data.message.content
})
  } catch (error) {
   console.log(error)
   
   return res.status(500).json({
    success: false,
    message: "something went wrong"
   })
  }
})

app.listen(5000, ()=>{

  console.log("server is running")
  
})

