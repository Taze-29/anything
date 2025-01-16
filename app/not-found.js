import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function NotFound() {
  return (
    <div className="min-h-screen -mt-24 flex flex-col gap-4 justify-center items-center">
      <div className="text-9xl font-bold">404</div>
      <p>This page could not be found.</p>
      <Link href="/" className="flex gap-2 justify-center items-center border border-1 border-black rounded-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300">
        Go back home <GoArrowRight />
      </Link>
    </div>
  );
}