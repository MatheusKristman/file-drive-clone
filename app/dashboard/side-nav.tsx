"use client";

import Link from "next/link";
import { FileIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="w-40 flex flex-col gap-4">
      <Button asChild variant="link">
        <Link
          href="/dashboard/files"
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/files"),
          })}
        >
          <FileIcon /> All Files
        </Link>
      </Button>

      <Button asChild variant="link">
        <Link
          href="/dashboard/favorites"
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/favorites"),
          })}
        >
          <StarIcon /> Favorites
        </Link>
      </Button>
    </div>
  );
}
