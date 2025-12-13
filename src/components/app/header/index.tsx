import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { MenuIcon, PlusIcon } from "lucide-react";
import { User } from "./user";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Menu">
            <MenuIcon />
          </Button>
          <span className="text-primary">app logo.</span>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" size="icon" aria-label="Add transaction">
            <PlusIcon />
          </Button>
          <User />
        </div>
      </div>
    </header>
  );
}
