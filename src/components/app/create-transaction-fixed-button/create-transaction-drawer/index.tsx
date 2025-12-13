import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { TransactionType } from "..";
import { CreateIncomeTransactionForm } from "./create-income-transaction-form";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { CreateExpenseTransactionForm } from "./create-expense-transaction-form";

const TITLE_MAP: Record<TransactionType, string> = {
  expense: "Nova Saída",
  income: "Nova Entrada",
  bill: "Nova Conta",
};

const ICON_MAP: Record<TransactionType, React.ReactNode> = {
  expense: (
    <div className="flex size-7.5 items-center justify-center rounded-full bg-destructive/10">
      <BanknoteArrowDownIcon className="size-4 text-destructive" />
    </div>
  ),
  income: (
    <div className="flex size-7.5 items-center justify-center rounded-full bg-primary/10">
      <BanknoteArrowUpIcon className="size-4 text-primary" />
    </div>
  ),
  bill: (
    <div className="flex size-7.5 items-center justify-center rounded-full bg-sky-700/10">
      <ReceiptTextIcon className="size-4 text-sky-700" />
    </div>
  ),
};

interface CreateTransactionDrawerProps {
  transactionType: TransactionType;
  open: boolean;
  onOpenChange: () => void;
}

export function CreateTransactionDrawer({
  open,
  onOpenChange,
  transactionType,
}: CreateTransactionDrawerProps) {
  const title = TITLE_MAP[transactionType];

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center gap-2">
          {ICON_MAP[transactionType]}
          <DrawerTitle className="text-left">{title}</DrawerTitle>
        </DrawerHeader>
        {transactionType === "income" && <CreateIncomeTransactionForm />}
        {transactionType === "expense" && <CreateExpenseTransactionForm />}
      </DrawerContent>
    </Drawer>
  );
}
