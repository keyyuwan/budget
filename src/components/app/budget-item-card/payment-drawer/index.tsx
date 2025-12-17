import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CopyIcon, LightbulbIcon } from "lucide-react";

interface PaymentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaymentDrawer({ open, onOpenChange }: PaymentDrawerProps) {
  const isPix = true;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="flex items-center gap-2">
          <div className="flex size-16 items-center justify-center rounded-full bg-warning/10">
            <LightbulbIcon className="size-9 text-warning" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              Você está pagando:
            </span>
            <DrawerTitle>Luz - R$ 132,44</DrawerTitle>
          </div>
        </DrawerHeader>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">Data de vencimento:</span>
            <span>17/12/2025</span>
          </div>

          {isPix ? (
            <div className="flex flex-col gap-4 rounded-md bg-muted-foreground/20 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  Código PIX
                </span>
                <button aria-label="Copiar código">
                  <CopyIcon className="size-4 text-muted-foreground" />
                </button>
              </div>
              <p className="w-full text-sm tracking-tight break-all text-muted-foreground">
                00020126360014BR.GOV.BCB.PIX0114123456789015204000053039865405100.005802BR5920Empresa
                Ficticia6009SAO PAULO62130509ABC1234566304A1B2
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 rounded-md bg-muted-foreground/20 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  Link do boleto
                </span>
                <button aria-label="Copiar código">
                  <CopyIcon className="size-4 text-muted-foreground" />
                </button>
              </div>
              <a
                href="#"
                target="_blank"
                className="w-full text-sm break-all text-primary underline"
              >
                https://pagamentos.exemplo.com/boleto/23793.38127-60000.123456-78901.234567-8
              </a>
            </div>
          )}
        </div>

        <DrawerFooter>
          <Button className="w-full">Pagar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
