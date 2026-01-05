import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";
import { Badge } from "@/components/ui/badge";
import { ChartBarLabelCustom } from "@/components/ui/chart-bar-label-custom";
import { createFileRoute } from "@tanstack/react-router";
import { FileTextIcon, HouseIcon, ShoppingCartIcon } from "lucide-react";

export const Route = createFileRoute("/__app/essentials")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="flex flex-col gap-4">
      <div className="bg-card">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="text-muted-foreground">
              <span className="font-bold text-primary">50</span> / 30 / 20
            </Badge>
            <h1 className="text-xl leading-5 font-bold">Essenciais</h1>
          </div>

          <span className="text-sm text-muted-foreground">
            Moradia, alimentação, contas e saúde.
          </span>

          <div className="mt-2">
            <ChartBarLabelCustom />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <BudgetCategoryCard
          title="Moradia"
          pendingAmount={6_000}
          totalAmount={12_000}
          icon={HouseIcon}
          iconWrapperClassName="bg-zinc-400/10"
          categoryId="1"
          cardClassName="w-full"
        />
        <BudgetCategoryCard
          title="Mercado"
          pendingAmount={6_000}
          totalAmount={12_000}
          icon={ShoppingCartIcon}
          iconWrapperClassName="bg-zinc-400/10"
          categoryId="2"
          cardClassName="w-full"
        />
        <BudgetCategoryCard
          title="Contabilidade"
          pendingAmount={6_000}
          totalAmount={12_000}
          icon={FileTextIcon}
          iconWrapperClassName="bg-zinc-400/10"
          categoryId="3"
          cardClassName="w-full"
        />
      </div>
    </Container>
  );
}
