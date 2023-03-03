import { IHistoryItemProps } from "@/types/types";

export interface IHistoryProps {
  /**
   * Types for History
   * @param {items} IHistoryItemProps[] - checked squares
   * @param {label} string - heading
   */
  items: Array<IHistoryItemProps>;
  label: string;
}
