"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  GamepadIcon,
  Home,
  MessagesSquare,
  PenSquare,
} from "lucide-react";

const sidebarItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Homeworks", href: "/dashboard/homeworks", icon: PenSquare },
  { name: "Games", href: "/dashboard/games", icon: GamepadIcon },
  { name: "Support", href: "/dashboard/support", icon: MessagesSquare },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-60 flex-col border-r border-gray-300 bg-background">
      <ScrollArea className="flex-grow">
        <nav className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-background font-semibold"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
