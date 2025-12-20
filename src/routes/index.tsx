import { PaymentReminderCard } from "@/components/app/payment-reminder-card";
import { CreateTransactionFixedButton } from "@/components/app/create-transaction-fixed-button";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpDownIcon,
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  ChartPieIcon,
  HouseIcon,
  ShoppingBag,
} from "lucide-react";
import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="relative flex flex-1 flex-col">
        <span className="text-sm text-muted-foreground">Boa tarde, Key</span>

        <h1 className="text-2xl font-bold">Dezembro 2025</h1>

        <div className="mt-1 flex flex-col gap-4">
          <div className="scrollbar-none -mx-5 flex gap-1.5 overflow-x-auto px-5 py-2">
            <PaymentReminderCard />
            <PaymentReminderCard />
            <PaymentReminderCard />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium">Balanço</h2>
            <div className="flex flex-col gap-2.5 py-2">
              <FinancialSummaryCard
                title="Entradas"
                amount={15_500.34}
                icon={BanknoteArrowUpIcon}
                iconClassName="text-primary"
                href="/incomes"
              />
              <FinancialSummaryCard
                title="Saídas"
                amount={10_000.0}
                icon={BanknoteArrowDownIcon}
                iconClassName="text-destructive"
                href="/expenses"
              />
              <FinancialSummaryCard
                title="Disponível"
                amount={500.34}
                icon={ArrowUpDownIcon}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium">Orçamento</h2>
            <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5 py-2">
              <BudgetCategoryCard
                title="Essenciais"
                pendingAmount={6_000}
                totalAmount={12_000}
                icon={HouseIcon}
                iconClassName="text-sky-700"
                iconWrapperClassName="bg-sky-700/10"
                categoryId="1"
                href="/essentials"
              />
              <BudgetCategoryCard
                title="Investimentos"
                pendingAmount={2_000}
                totalAmount={3_900}
                icon={ChartPieIcon}
                iconClassName="text-emerald-500"
                iconWrapperClassName="bg-emerald-500/10"
                categoryId="2"
                href="/investments"
              />
              <BudgetCategoryCard
                title="Não Essenciais"
                pendingAmount={1_000}
                totalAmount={3_900}
                icon={ShoppingBag}
                iconWrapperClassName="bg-zinc-800/10"
                categoryId="3"
                href="/non-essentials"
              />
            </div>
          </div>
        </div>

        <CreateTransactionFixedButton />
      </div>
    </Container>
  );
}
