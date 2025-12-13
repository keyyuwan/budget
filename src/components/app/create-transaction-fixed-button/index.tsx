import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { CreateTransactionDrawer } from "./create-transaction-drawer";

export type TransactionType = "expense" | "income";

export function CreateTransactionFixedButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);

  function handleTransactionTypeChange(type: TransactionType | null) {
    setTransactionType(type);
    setIsOpen(false);
  }

  function handleCloseCreateTransactionDrawer() {
    setTransactionType(null);
  }

  const isCreateTransactionDrawerOpen = transactionType !== null;

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            className="fixed right-5 bottom-5 size-14 rounded-full text-primary-foreground shadow-lg lg:hidden"
            size="icon"
            aria-label="Add transaction"
          >
            {isOpen ? (
              <XIcon className="size-7" strokeWidth={1.5} />
            ) : (
              <PlusIcon className="size-7" strokeWidth={1.5} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" align="end" sideOffset={12}>
          <DropdownMenuItem
            className="p-3"
            onClick={() => handleTransactionTypeChange("expense")}
          >
            <div className="flex size-7.5 items-center justify-center rounded-full bg-destructive/10">
              <BanknoteArrowDownIcon className="size-4 text-destructive" />
            </div>
            Nova Saída
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="p-3"
            onClick={() => handleTransactionTypeChange("income")}
          >
            <div className="flex size-7.5 items-center justify-center rounded-full bg-primary/10">
              <BanknoteArrowUpIcon className="size-4 text-primary" />
            </div>
            Nova Entrada
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {transactionType && (
        <CreateTransactionDrawer
          open={isCreateTransactionDrawerOpen}
          onOpenChange={handleCloseCreateTransactionDrawer}
          transactionType={transactionType}
        />
      )}
    </>
  );
}
