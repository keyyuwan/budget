import { ModeToggle } from "@/components/ui/mode-toggle";
import { User } from "./user";
import { NavigationMenu } from "./navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="border-b bg-card">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          {!isDesktop && <NavigationMenu />}
          <span className="text-primary">app logo.</span>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <User />
        </div>
      </div>
    </header>
  );
}
