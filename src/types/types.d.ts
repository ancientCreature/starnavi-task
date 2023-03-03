/**
 * Types for HistoryItem
 * @param {row} number - number of row
 * @param {col} number - number of col
 * @param {key} string | number - key for react array rendering
 */

export interface IHistoryItemProps {
  row: number;
  col: number;
  key: string | number;
}

/**
 * Types for Level
 * @param {name} string - name of level
 * @param {field} string - number of squares to render
 */

export interface ILevel {
  name: string;
  field: number;
}
