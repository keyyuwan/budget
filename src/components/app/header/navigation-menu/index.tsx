import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  ChartPieIcon,
  HouseIcon,
  MenuIcon,
  MessageCircleIcon,
  ReceiptTextIcon,
  ShoppingBag,
} from "lucide-react";
import { NavigationLink } from "./navigation-link";
import { Separator } from "@/components/ui/separator";

export function NavigationMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Menu">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-56">
        <DrawerHeader className="border-b">
          <span className="text-primary">app logo.</span>
        </DrawerHeader>
        <nav className="flex flex-col gap-2 p-4">
          <NavigationLink icon={HouseIcon} label="Início" href="/" isActive />
          <NavigationLink
            icon={BanknoteArrowUpIcon}
            label="Entradas"
            href="/incomes"
          />
          <NavigationLink
            icon={BanknoteArrowDownIcon}
            label="Saídas"
            href="/expenses"
          />
          <NavigationLink
            icon={ReceiptTextIcon}
            label="Contas"
            href="/incomes"
          />
        </nav>
        <Separator />
        <nav className="flex flex-col gap-2 p-4">
          <span className="text-sm font-medium">Orçamento</span>

          <NavigationLink icon={HouseIcon} label="Essenciais" href="#" />
          <NavigationLink icon={ChartPieIcon} label="Investimentos" href="#" />
          <NavigationLink icon={ShoppingBag} label="Não Essenciais" href="#" />
        </nav>
        <DrawerFooter className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">
            Seu feedback é muito importante para nós!
          </span>
          <Button>
            <MessageCircleIcon />
            Feedback
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
