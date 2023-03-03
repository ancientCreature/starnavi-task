import React, { useState } from "react";
import { FieldItemMemo } from "../FieldItem";
import { IHistoryItemProps } from "@/types/types";
import { IFieldProps } from "./types";

export const Field: React.FC<IFieldProps> = ({
  elementsCount,
  setCheckedElement,
  checkedElements,
}) => {
  //Id of the previous hovered square
  const [prevId, setPrevId] = useState<string>("");

  //Create an array that is going to be the base of the rendered field
  const createArrayForFields = (
    count: number = elementsCount
  ): Array<Array<Array<number>>> => {
    const res: Array<Array<Array<number>>> = [];
    for (let i = 0; i < count; i++) {
      res.push([]);
      for (let j = 0; j < count; j++) {
        res[i].push([j, i]);
      }
    }

    return res;
  };

  const isSquareChecked = (
    elementRow: number,
    elementCol: number,
    elements: Array<IHistoryItemProps> = checkedElements
  ): boolean => {
    for (let elem of elements) {
      if (elem.col === elementCol && elem.row === elementRow) {
        return true;
      }
    }

    return false;
  };

  const onMouseMoveHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const currentElement = (event.target as HTMLTextAreaElement).closest(
      ".cell"
    );

    if (currentElement !== null) {
      if (prevId !== currentElement.id) {
        // console.log(prevId, currentElement.id);

        setPrevId(currentElement.id);

        const [row, col] = currentElement.id.split("-").map((e) => +e);
        setCheckedElement({ row, col, key: Date.now() });
      }
      // console.log("skipped");
    }
  };

  return (
    <div
      className="flex w-min"
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={() => setPrevId("")}
    >
      {createArrayForFields(elementsCount).map((rows) => {
        return (
          <div key={rows[0][1]}>
            {rows.map((elem) => {
              const [row, col] = elem;
              const id = elem.join("-");
              return (
                <FieldItemMemo
                  key={id}
                  id={id}
                  isChecked={isSquareChecked(row, col)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
