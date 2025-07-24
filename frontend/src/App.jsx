import { useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://your-backend.onrender.com/chat", {
        prompt: input,
      })
      setResponse(res.data.response)
    } catch (err) {
      setResponse("Error connecting to backend.")
    }
  }

  return (
    <div className="container">
      <h1>ChatGPT Clone 💬</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSubmit}>Send</button>
      {response && (
        <div className="response">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  )
}

export default App
