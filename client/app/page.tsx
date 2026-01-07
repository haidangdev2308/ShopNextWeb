import ButtonRedirect from "@/app/components/ButtonRedirect";
import { ModeToggle } from "@/components/mode-toggle";

//page ban đầu là index.tsx, đổi tên thành page.tsx để phù hợp với cấu trúc mới của Next.js 13
export default function Home() {
  return <main>
    <ButtonRedirect>Chuyển Login</ButtonRedirect>
    <ModeToggle></ModeToggle>
  </main>;
}
