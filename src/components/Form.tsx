import { ReactNode } from "react";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "./ui/field";

type FormProps = React.ComponentProps<"form"> & {
  title: string;
  description: string;
  children: ReactNode;
};

export function Form({ title, children, description, ...rest }: FormProps) {
  return (
    <form {...rest}>
      <FieldSet>
        <FieldLegend className="text-app-gray-200 text-[20px] font-bold">
          {title}
        </FieldLegend>
        <FieldDescription className="text-app-gray-300 text-xs">
          {description}
        </FieldDescription>
        <FieldGroup>{children}</FieldGroup>
      </FieldSet>
    </form>
  );
}
