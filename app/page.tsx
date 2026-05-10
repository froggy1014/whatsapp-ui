import { ChatAnimation } from "@/components/chat-animation";
import { LandingHeader } from "@/components/landing-header";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden dark bg-[#0b141a]">
      <LandingHeader />
      <div className="min-h-0 flex-1">
        <ChatAnimation />
      </div>
    </div>
  );
}
