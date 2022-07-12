import React from "react";
import Image from "next/image";
import { ArchiveIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="w-full h-14 flex bg-neutral-50 justify-between items-center sticky top-0 px-8 drop-shadow-md">
      <div>
        <h1 className="font-extrabold cursor-default">ARCHIVE</h1>
      </div>
      <div>
        {session ? (
          <a
            onClick={() => signOut()}
            className="cursor-pointer py-2 px-3 bg-neutral-200 rounded-lg duration-300 drop-shadow-sm hover:opacity-75"
          >
            Sign Out
          </a>
        ) : (
          <a
            onClick={() => signIn()}
            className="cursor-pointer py-2 px-3 bg-neutral-200 rounded-lg duration-300 drop-shadow-sm hover:opacity-75"
          >
            Sign In
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
