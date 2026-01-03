import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownIcon,
  ArrowDownNarrowWideIcon,
  BrainIcon,
  CarIcon,
  ChartNoAxesColumnIncreasingIcon,
  CircleFadingArrowUpIcon,
  FileTextIcon,
  HamburgerIcon,
  HouseIcon,
  ReceiptIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";

export const Route = createFileRoute("/__app/expenses")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="relative flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Saídas</h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas saídas, valores a pagar e os gastos previstos.
          </p>
        </div>

        <Separator />

        <div className="flex flex-col gap-2.5">
          <FinancialSummaryCard
            title="Saídas"
            amount={15_500.34}
            icon={ArrowDownIcon}
            iconClassName="text-destructive"
            iconWrapperClassName="bg-destructive/10"
            monetaryAmountClassName="text-destructive"
          />

          <FinancialSummaryCard
            title="A pagar"
            amount={5_500.34}
            icon={ReceiptIcon}
            iconClassName="text-warning"
            iconWrapperClassName="bg-warning/10"
          />

          <FinancialSummaryCard
            title="Gastos previstos"
            amount={5_500.34}
            icon={ArrowDownNarrowWideIcon}
          />
        </div>

        <div className="mt-2 flex flex-col gap-2.5">
          <h2 className="text-sm font-medium text-muted-foreground">
            Essenciais
          </h2>

          <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
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

        <div className="mt-2 flex flex-col gap-2.5">
          <h2 className="text-sm font-medium text-muted-foreground">
            Investimentos
          </h2>

          <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
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

        <div className="mt-2 flex flex-col gap-2.5">
          <h2 className="text-sm font-medium text-muted-foreground">
            Não essenciais
          </h2>

          <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
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
    </Container>
  );
}
