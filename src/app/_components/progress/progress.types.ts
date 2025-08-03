import { ComponentBase } from "@/app/_components/types/component-base.type";

export type ProgressProps = Omit<ComponentBase, "isDisabled"> & {
  value: number;
};
