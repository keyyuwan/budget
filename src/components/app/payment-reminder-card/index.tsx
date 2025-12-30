import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ReceiptIcon } from "lucide-react";

export function PaymentReminderCard() {
  return (
    <Link to="/payments">
      <Card className="w-44 shrink-0">
        <CardHeader className="gap-4">
          <ReceiptIcon className="size-5" strokeWidth={1.5} />

          <span>
            <span className="block text-xs font-medium">
              Lembrete de conta: <br />{" "}
              <span className="text-muted-foreground">Luz em 2 dias</span>
            </span>
          </span>
        </CardHeader>
      </Card>
    </Link>
  );
}
