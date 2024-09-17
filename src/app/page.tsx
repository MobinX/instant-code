import { ChatUI } from "@/components/dark-chat-ui";
import Image from "next/image";
export default function Home() {
  const msg=[
    { id: 1, text: "Hey there! How's it going?", sender: 'other' },
    { id: 2, text: "Hi! I'm doing great, thanks for asking. How about you?", sender: 'user' },
    { id: 3, text: "I'm doing well too! Just working on some exciting projects.", sender: 'other' },
    { id: 4, text: "That sounds interesting! What kind of projects are you working on?", sender: 'user' },
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <ChatUI msg={msg} sendMsgCallback={(text)=>console.log(text)} />
    </div>
  );
}
