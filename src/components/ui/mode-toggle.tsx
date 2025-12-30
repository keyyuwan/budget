import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-provider";

export function ModeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="size-4.5 scale-100 rotate-0 text-muted-foreground transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4.5 scale-0 rotate-90 text-muted-foreground transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
