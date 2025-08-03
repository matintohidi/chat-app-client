import { Size } from "@/app/_components/types/size.type";
import { Variant } from "@/app/_components/types/variant.type";

export type ComponentBase = {
  variant?: Variant;
  size?: Size;
  isDisabled?: boolean;
  className?: string;
};
