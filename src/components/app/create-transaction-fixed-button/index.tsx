import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export function CreateTransactionFixedButton() {
  return (
    <Button
      className="fixed right-5 bottom-5 size-14 rounded-full bg-primary text-primary-foreground shadow-lg lg:hidden"
      size="icon"
      aria-label="Add transaction"
    >
      <PlusIcon className="size-7" strokeWidth={1.5} />
    </Button>
  );
}
