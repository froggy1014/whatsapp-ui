import { ChatDemo } from "@/components/demo/chat-demo";

export default function Home() {
  return (
    <div className="dark flex min-h-screen items-center justify-center bg-[#0b141a] p-4">
      <div className="w-full max-w-[900px] overflow-hidden rounded-lg border border-[rgba(233,237,239,0.12)] shadow-2xl">
        <ChatDemo />
      </div>
    </div>
  );
}
