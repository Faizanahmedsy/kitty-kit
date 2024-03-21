import ButtonsModule from "@/components/modules/butttons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="p-7 flex justify-center items-center ">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>Buttons</li>
            <Link href="/calender">
              <li>Calender</li>
            </Link>
            <li className="text-gray-400">Forms</li>
            <li className="text-gray-400">Dashboard</li>
          </ul>
        </div>
        <ButtonsModule />
      </div>
    </>
  );
}
