import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HistoryItemMemo } from "../HistoryItem";
import { IHistoryProps } from "./types";
import styles from "./History.module.scss";

export const History: React.FC<IHistoryProps> = ({ items, label }) => {
  useEffect(() => {
    const pageBottom = document.querySelector("#scroll-block");

    if (pageBottom) {
      pageBottom.scrollTop = (pageBottom as HTMLElement).scrollHeight;
    }

    // console.log(items);
  }, [items]);

  return (
    <div className={"flex flex-col w-full " + styles["history"]}>
      <h4 className="text-center text-3xl font-bold mb-4">{label}</h4>
      {items.length ? (
        <TransitionGroup
          id="scroll-block"
          className={"flex flex-col gap-2 " + styles["history__items-wrapper"]}
        >
          {items.map((elem) => {
            const { key } = elem;
            return (
              <CSSTransition timeout={500} classNames="history-item" key={key}>
                <HistoryItemMemo {...elem} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <div
          className="py-4
                 px-2
                 bg-secondary-orange
                 rounded
                 border-2
                 border-primary-gold"
        >
          <div className="text-primary-orange">No items</div>
        </div>
      )}
    </div>
  );
};
