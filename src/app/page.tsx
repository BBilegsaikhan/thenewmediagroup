import Image from "next/image";
import FullScreenSlider from "@/components/FullScreenSlider";
import GroupList from "@/components/GroupList";
import Clients from "@/components/Clients";
export default function Home() {
  return (
    <div>
      <FullScreenSlider />
      <GroupList />
      <Clients />
    </div>
  );
}
