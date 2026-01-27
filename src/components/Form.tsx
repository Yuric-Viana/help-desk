import { ReactNode } from "react";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "./ui/field";

interface FormProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Form({ title, children, description }: FormProps) {
  return (
    <FieldSet>
      <FieldLegend className="text-[20px] font-bold text-gray-200">
        {title}
      </FieldLegend>
      <FieldDescription className="text-xs text-gray-300">
        {description}
      </FieldDescription>
      <FieldGroup>{children}</FieldGroup>
    </FieldSet>
  );
}
