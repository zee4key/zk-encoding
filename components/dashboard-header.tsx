"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleDollarSign, User } from "lucide-react";
import { ToggleTheme } from "./layout/toogle-theme";
import { useTheme } from "next-themes";

export function DashboardHeader() {
  const { theme } = useTheme();

  return (
    <header className="border-b border-gray-300 bg-background">
      <div className=" mx-auto flex h-16 items-center justify-between px-7">
        <div className="h-8 w-auto items-center">
          <Image
            src={
              theme === "light"
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20q3-DV76mrGbyoafH1kTqBBp3aI7wXaNml.svg"
                : "../killme 1.svg"
            }
            alt="ZK Logo"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="flex items-center justify-between space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="@username" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">username</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {}}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
