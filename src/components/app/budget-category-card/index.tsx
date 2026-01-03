import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Link, type LinkProps } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";

interface BudgetCategoryCardProps {
  categoryId: string;
  title: string;
  description?: string;
  pendingAmount: number;
  totalAmount: number;
  icon: LucideIcon;
  percentageFromBudget?: number;
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
              <Icon
                className={cn("size-4.5", iconClassName)}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-sm font-medium">{title}</span>
            {description && (
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            )}
          </div>

          {percentageFromBudget && (
            <>
              {percentageFromBudget === 50 && (
                <Badge variant="secondary" className="text-muted-foreground">
                  <span className="font-bold text-primary">
                    {percentageFromBudget}
                  </span>{" "}
                  / 30 / 20
                </Badge>
              )}
              {percentageFromBudget === 30 && (
                <Badge variant="secondary" className="text-muted-foreground">
                  50 /
                  <span className="font-bold text-primary">
                    {percentageFromBudget}
                  </span>{" "}
                  / 20
                </Badge>
              )}
              {percentageFromBudget === 20 && (
                <Badge variant="secondary" className="text-muted-foreground">
                  50 / 30 /
                  <span className="font-bold text-primary">
                    {percentageFromBudget}
                  </span>
                </Badge>
              )}
            </>
          )}
        </CardHeader>

        <CardContent className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xxs text-muted-foreground">
            <span>{pendingAmountCurrency}</span>
            <span>{totalAmountCurrency}</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </CardContent>
      </Card>
    </Link>
  );
}
