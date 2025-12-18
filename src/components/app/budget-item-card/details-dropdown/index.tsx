import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { EditExpenseDrawer } from "../edit-expense-drawer";
import { DeleteExpenseAlertDialog } from "../delete-expense-alert-dialog";

export function BudgetItemCardDetailsDropdown() {
  const [isEditExpenseDrawerOpen, setIsEditExpenseDrawerOpen] = useState(false);
  const [isDeleteExpenseAlertDialogOpen, setIsDeleteExpenseAlertDialogOpen] =
    useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon" aria-label="Editar">
            <EllipsisIcon className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8} className="min-w-40">
          <DropdownMenuItem
            className="text-sm"
            onClick={() => setIsEditExpenseDrawerOpen(true)}
          >
            <PencilIcon className="size-3.5 text-foreground" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-sm text-destructive"
            onClick={() => setIsDeleteExpenseAlertDialogOpen(true)}
          >
            <Trash2Icon className="size-3.5 text-destructive" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditExpenseDrawer
        open={isEditExpenseDrawerOpen}
        onOpenChange={setIsEditExpenseDrawerOpen}
      />

      <DeleteExpenseAlertDialog
        open={isDeleteExpenseAlertDialogOpen}
        onOpenChange={setIsDeleteExpenseAlertDialogOpen}
      />
    </>
  );
}
