import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { TransactionType } from "..";
import { CreateIncomeTransactionForm } from "./create-income-transaction-form";

const TITLE_MAP: Record<TransactionType, string> = {
  expense: "Nova Saída",
  income: "Nova Entrada",
  bill: "Nova Conta",
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
        <DrawerHeader>
          <DrawerTitle className="text-left">{title}</DrawerTitle>
        </DrawerHeader>
        {transactionType === "income" && <CreateIncomeTransactionForm />}
      </DrawerContent>
    </Drawer>
  );
}
