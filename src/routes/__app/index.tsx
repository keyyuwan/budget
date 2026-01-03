import { PaymentReminderCard } from "@/components/app/payment-reminder-card";
import { CreateTransactionFixedButton } from "@/components/app/create-transaction-fixed-button";
import { FinancialSummaryCard } from "@/components/app/financial-summary-card";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChartPieIcon,
  DollarSignIcon,
  HouseIcon,
  ShoppingBag,
} from "lucide-react";
import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";

export const Route = createFileRoute("/__app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="relative flex flex-1 flex-col">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">
            👋 Boa tarde, Key
          </span>
          <h1 className="text-xl font-bold">Dezembro 2025</h1>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-sm font-medium text-muted-foreground">
              Lembretes
            </h2>

            <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
              <PaymentReminderCard />
              <PaymentReminderCard />
              <PaymentReminderCard />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-sm font-medium text-muted-foreground">
              Balanço
            </h2>

            <div className="flex flex-col gap-1">
              {/* <h2 className="text-xl font-medium">Balanço</h2> */}
              <div className="flex flex-col gap-2.5">
                <FinancialSummaryCard
                  title="Entradas"
                  amount={15_500.34}
                  icon={ArrowUpIcon}
                  iconClassName="text-primary"
                  iconWrapperClassName="bg-primary/10"
                  monetaryAmountClassName="text-primary"
                  href="/incomes"
                />
                <FinancialSummaryCard
                  title="Saídas"
                  amount={10_000.0}
                  icon={ArrowDownIcon}
                  iconClassName="text-destructive"
                  iconWrapperClassName="bg-destructive/10"
                  monetaryAmountClassName="text-destructive"
                  href="/expenses"
                />
                <FinancialSummaryCard
                  title="Disponível"
                  amount={500.34}
                  icon={DollarSignIcon}
                />
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex flex-col gap-2.5">
            <h2 className="text-sm font-medium text-muted-foreground">
              Distribuição do orçamento
            </h2>

            <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
              <BudgetCategoryCard
                title="Essenciais"
                description="Moradia, alimentação, contas e saúde."
                pendingAmount={6_000}
                totalAmount={12_000}
                icon={HouseIcon}
                iconClassName="text-primary"
                iconWrapperClassName="bg-primary/10"
                categoryId="1"
                href="/essentials"
                percentageFromBudget={50}
              />
              <BudgetCategoryCard
                title="Não Essenciais"
                description="Lazer, assinaturas, compras e extras."
                pendingAmount={1_000}
                totalAmount={3_900}
                icon={ShoppingBag}
                iconWrapperClassName="bg-zinc-800/10"
                categoryId="3"
                href="/non-essentials"
                percentageFromBudget={30}
              />
              <BudgetCategoryCard
                title="Investimentos"
                description="Reserva, aplicações e educação."
                pendingAmount={2_000}
                totalAmount={3_900}
                icon={ChartPieIcon}
                iconClassName="text-emerald-500"
                iconWrapperClassName="bg-emerald-500/10"
                categoryId="2"
                href="/investments"
                percentageFromBudget={20}
              />
            </div>
          </div>
        </div>

        <CreateTransactionFixedButton />
      </div>
    </Container>
  );
}
