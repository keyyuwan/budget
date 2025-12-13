import { Header } from "@/components/app/header";
import { ThemeProvider } from "@/contexts/theme-provider";
import {
  ArrowUpDownIcon,
  ChartPieIcon,
  CircleArrowDownIcon,
  CircleArrowUpIcon,
  HouseIcon,
  ShoppingBag,
} from "lucide-react";
import { FinancialSummaryCard } from "./components/app/financial-summary-card";
import { BudgetGroupCard } from "./components/app/budget-group-card";
import { BillReminderCard } from "./components/app/bill-reminder-card";

const STORAGE_KEY = "@budget-ui-theme";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey={STORAGE_KEY}>
      <div className="flex h-screen flex-col">
        <Header />

        <main className="flex flex-1 flex-col p-5">
          <span className="text-sm text-muted-foreground">Boa tarde, Key</span>

          <h1 className="text-2xl font-medium">Dezembro 2025</h1>

          <div className="mt-5 flex flex-col gap-5">
            <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
              <BillReminderCard />
              <BillReminderCard />
              <BillReminderCard />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium">Visão Geral</h2>
              <div className="flex flex-col gap-2.5">
                <FinancialSummaryCard
                  title="Entradas"
                  amount={15_500.34}
                  icon={CircleArrowUpIcon}
                  iconClassName="text-primary"
                  href="/incomes"
                />
                <FinancialSummaryCard
                  title="Saídas"
                  amount={10_000.0}
                  icon={CircleArrowDownIcon}
                  iconClassName="text-destructive"
                  href="/expenses"
                />
                <FinancialSummaryCard
                  title="Balanço"
                  amount={500.34}
                  icon={ArrowUpDownIcon}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium">Orçamento</h2>
              <div className="scrollbar-none -mx-5 flex gap-2.5 overflow-x-auto px-5">
                <BudgetGroupCard
                  title="Essenciais"
                  pendingAmount={6_000}
                  totalAmount={12_000}
                  icon={HouseIcon}
                  iconClassName="text-sky-700"
                  iconWrapperClassName="bg-sky-700/10"
                />
                <BudgetGroupCard
                  title="Investimentos"
                  pendingAmount={2_000}
                  totalAmount={3_900}
                  icon={ChartPieIcon}
                  iconClassName="text-emerald-500"
                  iconWrapperClassName="bg-emerald-500/10"
                />
                <BudgetGroupCard
                  title="Não Essenciais"
                  pendingAmount={1_000}
                  totalAmount={3_900}
                  icon={ShoppingBag}
                  iconWrapperClassName="bg-zinc-800/10"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
