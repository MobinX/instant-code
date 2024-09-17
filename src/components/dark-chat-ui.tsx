"use client"

import * as React from "react"
import { Send, Paperclip } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DarkChatUi() {
  const [messages, setMessages] = React.useState([
    { id: 1, text: "Hey there! How's it going?", sender: 'other' },
    { id: 2, text: "Hi! I'm doing great, thanks for asking. How about you?", sender: 'user' },
    { id: 3, text: "I'm doing well too! Just working on some exciting projects.", sender: 'other' },
    { id: 4, text: "That sounds interesting! What kind of projects are you working on?", sender: 'user' },
  ])

  const [inputMessage, setInputMessage] = React.useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: 'user' }])
      setInputMessage("")
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100">
      <style jsx global>{`
        :root {
          --background: 0 0% 0%;
          --foreground: 210 40% 98%;
          --card: 0 0% 10%;
          --card-foreground: 210 40% 98%;
          --popover: 0 0% 5%;
          --popover-foreground: 210 40% 98%;
          --primary: 217.2 91.2% 59.8%;
          --primary-foreground: 222.2 47.4% 11.2%;
          --secondary: 217.2 32.6% 17.5%;
          --secondary-foreground: 210 40% 98%;
          --muted: 0 0% 15%;
          --muted-foreground: 215 20.2% 65.1%;
          --accent: 217.2 32.6% 17.5%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 217.2 32.6% 17.5%;
          --input: 0 0% 20%;
          --ring: 224.3 76.3% 48%;
        }
      `}</style>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <Card className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-3 ${
              message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'
            }`}>
              {message.text}
            </Card>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="relative">
          <Input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full bg-muted/50 backdrop-blur-md text-foreground rounded-full pr-16 focus:ring-2 focus:ring-ring"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage()
              }
            }}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground focus:outline-none">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button 
              size="icon" 
              className="text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none"
              onClick={handleSendMessage}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}