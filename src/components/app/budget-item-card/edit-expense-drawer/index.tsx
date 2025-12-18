import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { BanknoteArrowDownIcon } from "lucide-react";
import { EditExpenseForm } from "./edit-expense-form";

interface EditExpenseDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditExpenseDrawer({
  open,
  onOpenChange,
}: EditExpenseDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex flex-row items-center gap-2">
            <div className="flex size-7.5 items-center justify-center rounded-full bg-destructive/10">
              <BanknoteArrowDownIcon className="size-4 text-destructive" />
            </div>
            <DrawerTitle className="text-left">Editar Saída</DrawerTitle>
          </div>
        </DrawerHeader>

        <EditExpenseForm />
      </DrawerContent>
    </Drawer>
  );
}
