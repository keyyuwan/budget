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
  CreditCardIcon,
  HouseIcon,
  MenuIcon,
  MessageCircleIcon,
  ShoppingBag,
  XIcon,
} from "lucide-react";
import { NavigationLink } from "./navigation-link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Menu">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-60">
        <DrawerHeader className="flex flex-row items-center justify-between border-b">
          <span className="text-primary">app logo.</span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            onClick={handleCloseMenu}
          >
            <XIcon />
          </Button>
        </DrawerHeader>
        <nav className="flex flex-col gap-2 p-4">
          <NavigationLink
            icon={HouseIcon}
            label="Início"
            href="/"
            onClick={handleCloseMenu}
          />
          <NavigationLink
            icon={BanknoteArrowUpIcon}
            label="Entradas"
            href="/incomes"
            onClick={handleCloseMenu}
          />
          <NavigationLink
            icon={BanknoteArrowDownIcon}
            label="Saídas"
            href="/expenses"
            onClick={handleCloseMenu}
          />
          <NavigationLink
            icon={CreditCardIcon}
            label="Pagamentos"
            href="/payments"
            onClick={handleCloseMenu}
          />
        </nav>
        <Separator />
        <nav className="flex flex-col gap-2 p-4">
          <span className="text-sm font-medium">Orçamento</span>

          <NavigationLink
            icon={HouseIcon}
            label="Essenciais"
            href="/essentials"
            onClick={handleCloseMenu}
          />
          <NavigationLink
            icon={ChartPieIcon}
            label="Investimentos"
            href="/investments"
            onClick={handleCloseMenu}
          />
          <NavigationLink
            icon={ShoppingBag}
            label="Não Essenciais"
            href="/non-essencials"
            onClick={handleCloseMenu}
          />
        </nav>
        <DrawerFooter className="flex flex-col gap-3">
          <span className="text-xs text-muted-foreground">
            Seu feedback é muito importante para nós!
          </span>
          <Button>
            <MessageCircleIcon />
            Escrever um feedback
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
