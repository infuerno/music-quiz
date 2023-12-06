import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
import Link from "next/link";

type Props = {};

const NavBar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold md:block dark:border-white">
            Music Quiz
          </p>
        </Link>
        <div className="flex items-center">{session?.user ? session.user.email : <SignInButton text="Sign In" />}</div>
      </div>
    </div>
  );
};

export default NavBar;
