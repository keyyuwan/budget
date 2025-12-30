import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronRightIcon, type LucideIcon } from "lucide-react";

interface FinancialSummaryCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  iconClassName?: string;
  iconWrapperClassName?: string;
  href?: LinkProps["to"];
}

export function FinancialSummaryCard({
  title,
  amount,
  icon: Icon,
  iconClassName,
  iconWrapperClassName,
  href,
}: FinancialSummaryCardProps) {
  const currencyAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return (
    <Link to={href}>
      <Card className="w-full">
        <CardContent className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex size-9 items-center justify-center rounded-full",
                iconWrapperClassName,
              )}
            >
              <Icon
                className={cn("size-6", iconClassName)}
                strokeWidth={1.25}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">{title}</span>
              <span className="text-lg font-medium">{currencyAmount}</span>
            </div>
          </div>

          {href && (
            <Button variant="ghost" size="icon" aria-label={title}>
              <ChevronRightIcon className="size-5" strokeWidth={1.5} />
            </Button>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
