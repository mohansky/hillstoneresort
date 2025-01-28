import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import type { MenuLink } from "@/types";

export default function HamburgerMenu({ links }: { links: MenuLink[] }) {
  return (
    <>
      <div className="lg:hidden my-auto">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8 text-muted my-auto" />
            <span className="sr-only">Close</span>
          </SheetTrigger>
          <SheetContent className="w-full bg-black">
            <ModeToggle />
            <NavigationMenu className="mx-auto my-20">
              <NavigationMenuList className="flex-col w-full">
                {links.map((item: any, index: React.Key) => (
                  <NavigationMenuItem key={index} className="mx-auto my-2">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      title={item.text}
                      href={item.link}
                    >
                      <SheetTrigger className="uppercase">
                        {item.text}
                      </SheetTrigger>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
