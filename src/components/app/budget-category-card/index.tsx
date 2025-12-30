import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";

interface BudgetCategoryCardProps {
  categoryId: string;
  title: string;
  description: string;
  pendingAmount: number;
  totalAmount: number;
  icon: LucideIcon;
  percentageFromBudget: number;
  href?: LinkProps["to"];
  cardClassName?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export function BudgetCategoryCard({
  categoryId,
  title,
  description,
  pendingAmount,
  totalAmount,
  icon: Icon,
  percentageFromBudget,
  href,
  cardClassName,
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

  return (
    <Link to={href ?? "/budget-categories/$id"} params={{ id: categoryId }}>
      <Card className={cn("w-64 shrink-0", cardClassName)}>
        <CardHeader className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-2">
            <div
              className={cn(
                "flex size-9 items-center justify-center rounded-full",
                iconWrapperClassName,
              )}
            >
              <Icon className={cn("size-4.5", iconClassName)} />
            </div>
            <span className="text-sm font-medium">{title}</span>
            <span className="text-xs text-muted-foreground">{description}</span>
          </div>

          <Badge variant="secondary">{percentageFromBudget}%</Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
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
