import { BudgetCategoryCard } from "@/components/app/budget-category-card";
import { Container } from "@/components/app/container";
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import {
  FileTextIcon,
  HouseIcon,
  PencilIcon,
  ShoppingCartIcon,
} from "lucide-react";

export const Route = createFileRoute("/__app/essentials")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <div className="rounded-b-3xl border-b bg-card">
        <Container className="flex items-start justify-between">
          <div className="flex w-full items-start gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-full bg-sky-700/10">
              <HouseIcon className="size-5 text-sky-700" />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <h1 className="text-2xl font-medium">Essenciais</h1>
              <span className="text-sm text-muted-foreground">
                50% do orçamento
              </span>
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

      <div className="grid grid-cols-2 gap-2.5 p-4">
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
    </div>
  );
}
