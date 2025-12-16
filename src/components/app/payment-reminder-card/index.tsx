import { Card, CardHeader } from "@/components/ui/card";
import { ReceiptTextIcon } from "lucide-react";

export function PaymentReminderCard() {
  return (
    <Card className="w-44 shrink-0">
      <CardHeader className="gap-4">
        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
          <ReceiptTextIcon className="size-4 text-primary" />
        </div>
        <span className="text-sm">
          <span className="text block text-xs font-semibold tracking-tight">
            Lembrete de conta:
          </span>
          <span className="text-muted-foreground">Luz em 2 dias</span>
        </span>
      </CardHeader>
    </Card>
  );
}
