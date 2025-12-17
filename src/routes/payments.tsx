import { BudgetItemCard } from "@/components/app/budget-item-card";
import { Container } from "@/components/app/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { LightbulbIcon } from "lucide-react";

export const Route = createFileRoute("/payments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="relative flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Pagamentos</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Acompanhe o que já foi pago, o que ainda falta e as próximas datas
            de vencimento.
          </p>
        </div>

        <Tabs defaultValue="next-payments">
          <TabsList className="w-full border">
            <TabsTrigger value="next-payments">Próximos</TabsTrigger>
            <TabsTrigger value="past-payments">Pagos</TabsTrigger>
          </TabsList>
          <TabsContent
            value="next-payments"
            className="mt-2 flex flex-col gap-5"
          >
            <span className="text-sm text-muted-foreground">
              Você tem <strong>5</strong> contas a vencer este mês.
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium">14 de dezembro (hoje)</span>
              <BudgetItemCard
                icon={LightbulbIcon}
                title="Luz"
                amount={100}
                iconBackgroundClassName="bg-warning/10"
                iconClassName="text-warning"
                hasDetails={false}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium">28 de dezembro</span>
              <BudgetItemCard
                icon={LightbulbIcon}
                title="Luz"
                amount={100}
                iconBackgroundClassName="bg-warning/10"
                iconClassName="text-warning"
                hasDetails={false}
              />
            </div>
          </TabsContent>
          <TabsContent
            value="past-payments"
            className="mt-2 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-muted-foreground">
                14 de dezembro
              </span>
              <BudgetItemCard
                icon={LightbulbIcon}
                title="Luz"
                amount={100}
                iconBackgroundClassName="bg-warning/10"
                iconClassName="text-warning"
                isPaid
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
