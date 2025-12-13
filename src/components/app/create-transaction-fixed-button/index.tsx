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
  ReceiptTextIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

export function CreateTransactionFixedButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <DropdownMenuItem className="p-3">
          <div className="flex size-7.5 items-center justify-center rounded-full bg-destructive/10">
            <BanknoteArrowDownIcon className="size-4 text-destructive" />
          </div>
          Nova Saída
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-3">
          <div className="flex size-7.5 items-center justify-center rounded-full bg-primary/10">
            <BanknoteArrowUpIcon className="size-4 text-primary" />
          </div>
          Nova Entrada
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-3">
          <div className="flex size-7.5 items-center justify-center rounded-full bg-sky-700/10">
            <ReceiptTextIcon className="size-4 text-sky-700" />
          </div>
          Nova Conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
