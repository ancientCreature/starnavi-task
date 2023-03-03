import { IHistoryItemProps } from "@/types/types";

/**
 * Types for Field
 * @param {elementsCount} number - count of rendered element
 * @param {setCheckedElement} function - set checked element
 * @param {checkedElements} IHistoryItemProps[] - list of checked elements
 */

export interface IFieldProps {
  elementsCount: number;
  setCheckedElement: (elem: IHistoryItemProps) => void;
  checkedElements: Array<IHistoryItemProps>;
}
