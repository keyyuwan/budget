import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";

interface BudgetCategoryCardProps {
  title: string;
  pendingAmount: number;
  totalAmount: number;
  href: LinkProps["to"];
  icon: LucideIcon;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export function BudgetCategoryCard({
  title,
  pendingAmount,
  totalAmount,
  href,
  icon: Icon,
  iconWrapperClassName,
  iconClassName,
}: BudgetCategoryCardProps) {
  const pendingAmountCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(pendingAmount);

  const totalAmountCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalAmount);

  const progress = (pendingAmount / totalAmount) * 100;
  const progressPercentage = progress.toFixed(0);

  return (
    <Link to={href}>
      <Card className="w-64 shrink-0">
        <CardHeader>
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-full",
              iconWrapperClassName,
            )}
          >
            <Icon className={cn("size-4", iconClassName)} strokeWidth={2.25} />
          </div>
          <span>{title}</span>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">
            {progressPercentage}%
          </span>
          <Progress value={progress} />
          <div className="flex items-center justify-between">
            <span className="text-xxs text-muted-foreground">
              {pendingAmountCurrency}
            </span>
            <span className="text-xxs text-muted-foreground">
              {totalAmountCurrency}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
