import { BudgetGroupCard } from "@/components/app/budget-group-card";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownNarrowWideIcon,
  BanknoteArrowDownIcon,
  BrainIcon,
  CarIcon,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasingIcon,
  CircleFadingArrowUpIcon,
  FileTextIcon,
  HamburgerIcon,
  HouseIcon,
  ReceiptTextIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ToolCaseIcon,
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

      {/* <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">Seus Pagamentos</h2>

        <Tabs defaultValue="next-bills">
          <TabsList className="w-full">
            <TabsTrigger value="next-bills">Próximos</TabsTrigger>
            <TabsTrigger value="past-bills">Pagos</TabsTrigger>
          </TabsList>
        </Tabs>
      </div> */}

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Essenciais</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetGroupCard
            title="Moradia"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={HouseIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Mercado"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={ShoppingCartIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Contabilidade"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={FileTextIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Investimentos</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetGroupCard
            title="Qualidade"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={CircleFadingArrowUpIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Educação"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={BrainIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Renda Fixa"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={ChartNoAxesColumnIncreasingIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">Não Essenciais</h2>

        <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
          <BudgetGroupCard
            title="Transporte"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={CarIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Alimentação"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={HamburgerIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
          <BudgetGroupCard
            title="Compras"
            pendingAmount={6_000}
            totalAmount={12_000}
            href="/"
            icon={ShoppingBagIcon}
            iconWrapperClassName="bg-zinc-400/10"
          />
        </div>
      </div>
    </div>
  );
}
