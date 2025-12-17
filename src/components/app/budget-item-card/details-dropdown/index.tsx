import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisIcon,
  FileTextIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";

export function BudgetItemCardDetailsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon" aria-label="Editar">
          <EllipsisIcon className="size-5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-40">
        <DropdownMenuItem className="text-sm">
          <FileTextIcon className="size-3.5 text-foreground" />
          Detalhes
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm">
          <PencilIcon className="size-3.5 text-foreground" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm text-destructive">
          <Trash2Icon className="size-3.5 text-destructive" />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
