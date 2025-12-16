import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { CheckIcon, EllipsisIcon, LightbulbIcon } from "lucide-react";

export const Route = createFileRoute("/payments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Pagamentos</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Acompanhe o que já foi pago, o que ainda falta e as próximas datas de
          vencimento.
        </p>
      </div>

      <Tabs defaultValue="next-payments">
        <TabsList className="w-full border">
          <TabsTrigger value="next-payments">Próximos</TabsTrigger>
          <TabsTrigger value="past-payments">Pagos</TabsTrigger>
        </TabsList>
        <TabsContent value="next-payments" className="mt-2 flex flex-col gap-5">
          <span className="text-sm font-medium text-muted-foreground">
            Você tem <strong>5</strong> contas neste mês
          </span>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">14 de dezembro (hoje)</span>
            <Card>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <div className="flex size-9 items-center justify-center rounded-full bg-warning/10">
                    <LightbulbIcon className="size-4 text-warning" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Luz</span>
                    <span className="text-sm text-muted-foreground">
                      R$ 100,00
                    </span>
                  </div>
                </div>
                <Button variant="outline">Pagar</Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">28 de dezembro</span>
            <Card>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <div className="flex size-9 items-center justify-center rounded-full bg-warning/10">
                    <LightbulbIcon className="size-4 text-warning" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Luz</span>
                    <span className="text-sm text-muted-foreground">
                      R$ 100,00
                    </span>
                  </div>
                </div>
                <Button variant="outline">Pagar</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="past-payments" className="mt-2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              14 de dezembro
            </span>
            <Card className="bg-muted/10">
              <CardContent className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <div className="flex size-9 items-center justify-center rounded-full bg-muted-foreground/10">
                    <LightbulbIcon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">
                      Luz
                    </span>
                    <span className="text-sm text-muted-foreground">
                      R$ 100,00
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="size-5 text-primary" />
                  <Button variant="ghost" size="icon" aria-label="Editar">
                    <EllipsisIcon className="size-5 text-muted-foreground" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
