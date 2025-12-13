import { useState } from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
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

export function CreateIncomeTransactionForm() {
  const [alreadyPaid, setAlreadyPaid] = useState("true");
  const [receiptDate, setReceiptDate] = useState<Date | undefined>(new Date());
  const [expectedReceiptDate, setExpectedReceiptDate] = useState<
    Date | undefined
  >(undefined);

  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <form>
      <FieldSet className="p-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="income">Entrada</FieldLabel>
            <Input id="income" placeholder="Ex: Salário" />
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
          <Field>
            <FieldLabel htmlFor="already-paid">
              Esse valor já entrou?
            </FieldLabel>
            <RadioGroup
              value={alreadyPaid}
              onValueChange={setAlreadyPaid}
              className="mt-2 flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="true" id="true" />
                <Label htmlFor="true">Sim, já recebi</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="false" id="false" />
                <Label htmlFor="false">Ainda não recebi</Label>
              </div>
            </RadioGroup>
          </Field>
          {alreadyPaid === "true" ? (
            <Field>
              <FieldLabel htmlFor="receipt-date">
                Data de recebimento
              </FieldLabel>
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
              <FieldLabel htmlFor="expected-receipt-date">
                Previsão de recebimento
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
              placeholder="Dê uma descrição para essa entrada."
              rows={2}
            />
          </Field>
          <Field>
            <Button type="submit">Adicionar entrada</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
