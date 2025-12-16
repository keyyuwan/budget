import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownNarrowWideIcon,
  BanknoteArrowDownIcon,
  BrainIcon,
  CarIcon,
  ChartNoAxesColumnIncreasingIcon,
  CircleFadingArrowUpIcon,
  FileTextIcon,
  HamburgerIcon,
  HouseIcon,
  ReceiptTextIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";

export const Route = createFileRoute("/expenses")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Saídas</h1>

      <div className="flex flex-col gap-2">
        <FinancialSummaryCard
          title="Saídas"
          amount={15_500.34}
          icon={BanknoteArrowDownIcon}
          iconClassName="text-destructive"
        />

        <FinancialSummaryCard
          title="A pagar"
          amount={5_500.34}
          icon={ReceiptTextIcon}
          iconClassName="text-warning"
        />

        <FinancialSummaryCard
          title="Total previsto"
          amount={5_500.34}
          icon={ArrowDownNarrowWideIcon}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Essenciais</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetCategoryCard
            title="Moradia"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={HouseIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="1"
          />
          <BudgetCategoryCard
            title="Mercado"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={ShoppingCartIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="2"
          />
          <BudgetCategoryCard
            title="Contabilidade"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={FileTextIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="3"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Investimentos</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetCategoryCard
            title="Qualidade"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={CircleFadingArrowUpIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="4"
          />
          <BudgetCategoryCard
            title="Educação"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={BrainIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="5"
          />
          <BudgetCategoryCard
            title="Renda Fixa"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={ChartNoAxesColumnIncreasingIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="6"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Não Essenciais</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetCategoryCard
            title="Transporte"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={CarIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="7"
          />
          <BudgetCategoryCard
            title="Alimentação"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={HamburgerIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="8"
          />
          <BudgetCategoryCard
            title="Compras"
            pendingAmount={6_000}
            totalAmount={12_000}
            icon={ShoppingBagIcon}
            iconWrapperClassName="bg-zinc-400/10"
            categoryId="9"
          />
        </div>
      </div>
    </div>
  );
}
