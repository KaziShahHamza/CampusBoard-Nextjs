import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Home,
  Rss,
  CircleUserRound,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home, isActive: true },
  { title: "RequestBoard", href: "/request", icon: Rss },
  { title: "Post a Issue", href: "/post", icon: Rss },
  { title: "Live Chats", href: "/chat", icon: MessageCircleMore },
  { title: "Dashboard", href: "/dashboard", icon: CircleUserRound },
  { title: "Login/Signup", href: "/login", icon: Rss },
];

export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-2 bg-gray-200">
      <div className="font-bold text-3xl p-2 flex items-center justify-center">
        <Link href="/">CampusBoard</Link>
      </div>
      <NavigationMenu >
        <NavigationMenuList>
          {navigationMenuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
                active={item.isActive}
              >
                <Link href={item.href} className="text-xl">
                  <item.icon className="h-5 w-5 mr-3 size-1.5" />
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
