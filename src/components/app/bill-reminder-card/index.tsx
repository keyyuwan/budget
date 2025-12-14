import { Card, CardHeader } from "@/components/ui/card";
import { ReceiptTextIcon } from "lucide-react";

export function BillReminderCard() {
  return (
    <Card className="w-44 shrink-0">
      <CardHeader className="gap-4">
        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
          <ReceiptTextIcon className="size-4 text-primary" />
        </div>
        <span className="text-sm">
          <span className="font-semibold">Lembrete de conta</span>:{" "}
          <span className="text-muted-foreground">Luz em 2 dias</span>
        </span>
      </CardHeader>
    </Card>
  );
}
