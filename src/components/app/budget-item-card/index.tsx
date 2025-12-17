import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatBRL } from "@/utils/format-brl";
import { CheckIcon, type LucideIcon } from "lucide-react";
import { BudgetItemCardDetailsDropdown } from "./details-dropdown";

interface BudgetItemCardProps {
  icon: LucideIcon;
  title: string;
  amount: number;
  iconBackgroundClassName?: string;
  iconClassName?: string;
  isPaid?: boolean;
  hasDetails?: boolean;
}

export function BudgetItemCard({
  icon: Icon,
  title,
  amount,
  iconBackgroundClassName,
  iconClassName,
  isPaid = false,
  hasDetails = true,
}: BudgetItemCardProps) {
  const currencyAmount = formatBRL(amount);

  return (
    <Card data-paid={isPaid} className="group data-[paid=true]:bg-muted/10">
      <CardContent className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-full group-data-[paid=true]:bg-muted-foreground/10",
              iconBackgroundClassName,
            )}
          >
            <Icon
              className={cn(
                "size-4 group-data-[paid=true]:text-muted-foreground",
                iconClassName,
              )}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium group-data-[paid=true]:text-muted-foreground">
              {title}
            </span>
            <span className="text-sm text-muted-foreground">
              {currencyAmount}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isPaid ? (
            <CheckIcon className="size-5 text-primary" />
          ) : (
            <Button variant="outline">Pagar</Button>
          )}

          {hasDetails && <BudgetItemCardDetailsDropdown />}
        </div>
      </CardContent>
    </Card>
  );
}
