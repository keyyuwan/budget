import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, type LinkProps, useMatchRoute } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";

interface NavigationLinkProps {
  icon: LucideIcon;
  label: string;
  href: LinkProps["to"];
  onClick?: () => void;
}

export function NavigationLink({
  icon: Icon,
  label,
  href,
  onClick,
}: NavigationLinkProps) {
  const matchRoute = useMatchRoute();

  const isActive = matchRoute({ to: href });

  return (
    <Link to={href} className="flex w-full" onClick={onClick}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2",
          isActive && "bg-primary/10 text-primary",
        )}
      >
        <Icon className="size-4" />
        <span>{label}</span>
      </Button>
    </Link>
  );
}
