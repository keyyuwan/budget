import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon, type LucideIcon } from "lucide-react";

interface FinancialSummaryCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  iconClassName?: string;
  href?: string;
}

export function FinancialSummaryCard({
  title,
  amount,
  icon: Icon,
  iconClassName,
  href,
}: FinancialSummaryCardProps) {
  const currencyAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <Icon className={cn("size-8", iconClassName)} strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{title}</span>
            <span className="text-xl">{currencyAmount}</span>
          </div>
        </div>

        {href && (
          <Button variant="ghost" size="icon" aria-label={title}>
            <ChevronRightIcon className="size-5" strokeWidth={1.5} />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
