import { Card, CardHeader } from "@/components/ui/card";
import { ReceiptTextIcon } from "lucide-react";

export function BillReminderCard() {
  return (
    <Card className="w-44 shrink-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <ReceiptTextIcon className="size-5" />
          <span className="text-xs text-muted-foreground">Amanhã</span>
        </div>
        <span className="text-sm">
          <span className="font-medium">Lembrete de conta</span>: Luz
        </span>
      </CardHeader>
    </Card>
  );
}
