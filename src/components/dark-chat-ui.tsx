"use client"

import * as React from "react"
import { Send, Paperclip } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ChatUI({msg, sendMsgCallback}:{msg:{text:string,sender:string,id:number}[],sendMsgCallback:(text:string)=>void}) {
  const [messages, setMessages] = React.useState(msg)

  const [inputMessage, setInputMessage] = React.useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: 'user' }])
      sendMsgCallback(inputMessage)
      setInputMessage("")
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black text-gray-100">
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
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}