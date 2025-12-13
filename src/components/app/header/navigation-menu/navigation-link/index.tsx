import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
}

export function NavigationLink({
  icon: Icon,
  label,
  href,
  isActive = false,
}: NavigationLinkProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex items-center justify-start gap-2",
        isActive && "bg-primary/10 text-primary",
      )}
    >
      <Icon className="size-4" />
      <span>{label}</span>
    </Button>
  );
}
