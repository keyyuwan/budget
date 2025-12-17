import { Container } from "@/components/app/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import {
  CheckIcon,
  EllipsisIcon,
  HouseIcon,
  LightbulbIcon,
  PencilIcon,
} from "lucide-react";

export const Route = createFileRoute("/budget-categories/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-b-3xl border-b bg-card">
        <Container className="flex items-start justify-between">
          <div className="flex w-full items-start gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-full bg-zinc-400/10">
              <HouseIcon className="size-5 text-muted-foreground" />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <h1 className="text-2xl font-medium">Moradia</h1>
              <Badge variant="outline">Essenciais</Badge>
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-right text-xs text-muted-foreground">
                  90%
                </span>
                <Progress value={90} />
                <div className="flex items-center justify-between">
                  <span className="text-xxs text-muted-foreground">
                    R$ 90,00
                  </span>
                  <span className="text-xxs text-muted-foreground">
                    R$ 100,00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button aria-label="Editar" className="text-muted-foreground">
            <PencilIcon className="size-4" />
          </button>
        </Container>
      </div>

      <div className="flex flex-col gap-4 px-5">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-start gap-2">
              <div className="flex size-9 items-center justify-center rounded-full bg-warning/10">
                <LightbulbIcon className="size-4 text-warning" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Luz</span>
                <span className="text-sm text-muted-foreground">R$ 100,00</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Pagar</Button>
              <Button variant="ghost" size="icon" aria-label="Editar">
                <EllipsisIcon className="size-5 text-muted-foreground" />
              </Button>
            </div>
          </CardContent>
        </Card>

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
                <span className="text-sm text-muted-foreground">R$ 100,00</span>
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
    </div>
  );
}
