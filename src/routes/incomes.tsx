import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { createFileRoute } from "@tanstack/react-router";
import {
  BanknoteArrowUpIcon,
  CalendarArrowUpIcon,
  CodeIcon,
  DollarSignIcon,
} from "lucide-react";

export const Route = createFileRoute("/incomes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="relative flex flex-1 flex-col gap-4">
        <h1 className="text-2xl font-bold">Entradas</h1>

        <div className="flex flex-col gap-2">
          <FinancialSummaryCard
            title="Entradas"
            amount={15_500.34}
            icon={BanknoteArrowUpIcon}
            iconClassName="text-primary"
          />

          <FinancialSummaryCard
            title="A receber"
            amount={5_500.34}
            icon={CalendarArrowUpIcon}
            iconClassName="text-warning"
          />

          <FinancialSummaryCard
            title="Total previsto"
            amount={5_500.34}
            icon={DollarSignIcon}
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">Receitas</h2>

          <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
            <BudgetCategoryCard
              title="Software Dev."
              pendingAmount={6_000}
              totalAmount={12_000}
              icon={CodeIcon}
              iconWrapperClassName="bg-zinc-400/10"
              categoryId="1"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
