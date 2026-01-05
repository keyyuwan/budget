import { BudgetItemCard } from "@/components/app/budget-item-card";
import { Container } from "@/components/app/container";
import { Badge } from "@/components/ui/badge";
import { ChartRadialText } from "@/components/ui/chart-radial-text";
import { createFileRoute } from "@tanstack/react-router";
import {
  BuildingIcon,
  HouseHeartIcon,
  HouseIcon,
  LightbulbIcon,
} from "lucide-react";

export const Route = createFileRoute("/__app/budget-categories/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="relative flex flex-col gap-4 pb-24">
      <div className="bg-card">
        <div className="flex w-full items-start gap-2.5">
          <div className="flex flex-1 flex-col gap-3">
            <Badge variant="secondary" className="font-semibold text-primary">
              <HouseHeartIcon className="size-4" />
              Essenciais
            </Badge>

            <div className="flex items-center gap-2">
              <HouseIcon className="size-5" />
              <h1 className="text-xl font-bold">Moradia</h1>
            </div>

            <ChartRadialText />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <h2 className="text-sm font-medium text-muted-foreground">Contas</h2>

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
    </Container>
  );
}
