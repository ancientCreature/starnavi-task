import React from "react";
import { IHistoryItemProps } from "@/types/types";

const HistoryItem: React.FC<IHistoryItemProps> = ({ row, col }) => {
  return (
    <div
      className="py-4
                 px-2
                 bg-secondary-orange
                 rounded
                 border-2
                 border-primary-gold"
    >
      <div className="text-primary-orange">
        row {row + 1} col {col + 1}
      </div>
    </div>
  );
};

export const HistoryItemMemo = React.memo(HistoryItem);
