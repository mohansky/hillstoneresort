import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import type { MenuLink } from "@/types";


export default function Navbar({ links }: { links: MenuLink[] }) {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="mx-3 uppercase">
        {links.map((item: any, index: React.Key) => (
          <NavigationMenuItem key={index}> 
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                title={item.text}
                href={item.link}
              >
                {item.text}
              </NavigationMenuLink> 
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  );
}
