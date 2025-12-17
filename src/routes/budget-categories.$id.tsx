import { BudgetItemCard } from "@/components/app/budget-item-card";
import { Container } from "@/components/app/container";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import {
  BuildingIcon,
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
        <BudgetItemCard
          icon={LightbulbIcon}
          title="Luz"
          amount={100}
          iconBackgroundClassName="bg-warning/10"
          iconClassName="text-warning"
        />

        <BudgetItemCard
          icon={BuildingIcon}
          title="Aluguel"
          amount={4100}
          isPaid
        />
      </div>
    </div>
  );
}
