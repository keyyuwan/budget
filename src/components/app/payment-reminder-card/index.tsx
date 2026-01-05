import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ReceiptIcon } from "lucide-react";

export function PaymentReminderCard() {
  return (
    <Link to="/payments">
      <Card className="w-44 shrink-0">
        <CardHeader className="gap-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
            <ReceiptIcon className="size-4 text-primary" strokeWidth={1.5} />
          </div>

          <span>
            <span className="block text-xs font-semibold">
              Lembrete de conta: <br />{" "}
              <span className="font-normal text-muted-foreground">
                Luz em 2 dias
              </span>
            </span>
          </span>
        </CardHeader>
      </Card>
    </Link>
  );
}
