import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpIcon,
  CalendarClockIcon,
  CodeIcon,
  DollarSignIcon,
} from "lucide-react";

export const Route = createFileRoute("/__app/incomes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="gap- relative flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Entradas</h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas entradas, a receber e as entradas previstas.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <FinancialSummaryCard
            title="Entradas"
            amount={15_500.34}
            icon={ArrowUpIcon}
            iconClassName="text-primary"
            iconWrapperClassName="bg-primary/10"
            monetaryAmountClassName="font-normal text-primary"
          />

          <FinancialSummaryCard
            title="A receber"
            amount={5_500.34}
            icon={CalendarClockIcon}
            iconWrapperClassName="bg-warning/10"
            iconClassName="text-warning"
            monetaryAmountClassName="font-normal"
          />

          <FinancialSummaryCard
            title="Entradas previstas"
            amount={20_500.34}
            icon={DollarSignIcon}
          />
        </div>

        <div className="mt-2 flex flex-col gap-2.5">
          <h2 className="text-sm font-medium text-muted-foreground">
            Receitas
          </h2>

          <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
            <BudgetCategoryCard
              title="Software Dev."
              pendingAmount={6_000}
              totalAmount={12_000}
              icon={CodeIcon}
              iconWrapperClassName="bg-zinc-400/10"
              categoryId="1"
              description="Desenvolvimento de software, consultoria e outros."
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
