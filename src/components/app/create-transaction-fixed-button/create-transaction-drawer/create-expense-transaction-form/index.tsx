import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { CategoriesSelect } from "@/components/app/categories-select";

export function CreateExpenseTransactionForm() {
  const [alreadyPaid, setAlreadyPaid] = useState("true");
  const [receiptDate, setReceiptDate] = useState<Date | undefined>(new Date());
  const [expectedReceiptDate, setExpectedReceiptDate] = useState<
    Date | undefined
  >(undefined);

  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <form className="overflow-y-auto">
      <FieldSet className="p-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="expense">Saída</FieldLabel>
            <Input id="expense" placeholder="Ex: Aluguel" />
          </Field>
          <Field>
            <FieldLabel htmlFor="amount">Valor</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>R$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="amount" placeholder="0,00" />
            </InputGroup>
          </Field>
          <FieldGroup>
            <FieldSet>
              <FieldLabel htmlFor="compute-environment-p8w">
                Essa saída pertence a:
              </FieldLabel>
              <RadioGroup
                defaultValue="essential"
                className="grid grid-cols-2 gap-2.5"
              >
                <FieldLabel htmlFor="essential">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Essenciais</FieldTitle>
                      <FieldDescription>
                        Gastos indispensáveis para o dia a dia.
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="essential" id="essential" />
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="investments">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Investimentos</FieldTitle>
                      <FieldDescription>
                        O que te dará retorno no futuro.
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="investments" id="investments" />
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="non-essential">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Não Essenciais</FieldTitle>
                      <FieldDescription>
                        Gastos opcionais, ligados a conforto ou lazer.
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="non-essential" id="non-essential" />
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </FieldSet>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor="category">Categoria</FieldLabel>
            <CategoriesSelect />
          </Field>
          <Field>
            <FieldLabel htmlFor="already-paid">
              Esse valor já foi pago?
            </FieldLabel>
            <RadioGroup
              value={alreadyPaid}
              onValueChange={setAlreadyPaid}
              className="mt-2 flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="true" id="true" />
                <Label htmlFor="true">Sim, já paguei</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="false" id="false" />
                <Label htmlFor="false">Ainda não paguei</Label>
              </div>
            </RadioGroup>
          </Field>
          {alreadyPaid === "true" ? (
            <Field>
              <FieldLabel htmlFor="payment-date">Data do pagamento</FieldLabel>
              <DatePicker
                date={receiptDate}
                setDate={setReceiptDate}
                calendarProps={{
                  hideNavigation: true,
                  disabled: { after: today },
                }}
              />
            </Field>
          ) : (
            <Field>
              <FieldLabel htmlFor="expected-payment-date">
                Previsão do pagamento
              </FieldLabel>
              <DatePicker
                date={expectedReceiptDate}
                setDate={setExpectedReceiptDate}
                calendarProps={{
                  hideNavigation: true,
                  disabled: { before: today, after: endOfMonth },
                }}
              />
            </Field>
          )}
          <Field>
            <FieldLabel htmlFor="description">Descrição</FieldLabel>
            <Textarea
              id="description"
              placeholder="Dê uma descrição para essa saída."
              rows={2}
            />
          </Field>
          <Field>
            <Button type="submit" size="lg">
              Adicionar saída
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
