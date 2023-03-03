import { ILevel } from "../../types/types";
import { Dispatch, SetStateAction } from "react";

/**
 * Types for DropDown
 * @param {menuProps} ILevel[]- all available levels
 * @param {level} ILevel - current level
 * @param {setLevel} function - set current level
 */

export interface IDropDownProps {
  menuProps: Array<ILevel> | null;
  level: ILevel | null;
  setLevel: Dispatch<SetStateAction<ILevel | null>>;
}
