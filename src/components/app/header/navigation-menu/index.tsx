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
  HouseHeartIcon,
  HouseIcon,
  MenuIcon,
  MessageCircleIcon,
  ReceiptIcon,
  ShoppingBag,
  XIcon,
} from "lucide-react";
import { NavigationLink } from "./navigation-link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Logo } from "../../logo";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <MenuIcon
            className="size-5 text-muted-foreground"
            strokeWidth={1.5}
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-60 border-t-0 border-b-0">
        <DrawerHeader className="flex flex-row items-center justify-between pb-2">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            onClick={handleCloseMenu}
          >
            <XIcon className="size-5 text-muted-foreground" strokeWidth={1.5} />
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
            icon={ReceiptIcon}
            label="Contas"
            href="/payments"
            onClick={handleCloseMenu}
          />
        </nav>

        <Separator />

        <nav className="flex flex-col gap-4 px-4 py-5">
          <span className="text-xs font-semibold text-muted-foreground uppercase">
            Orçamento
          </span>

          <div className="flex flex-col gap-2">
            <NavigationLink
              icon={HouseHeartIcon}
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
              href="/non-essentials"
              onClick={handleCloseMenu}
            />
          </div>
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
