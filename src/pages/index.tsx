import { useState } from "react";
import { Button } from "antd";
import {
  DropDown,
  Field,
  History,
  Loading,
  Error,
  NoLevel,
} from "@/components";
import { IHistoryItemProps, ILevel } from "@/types/types";
import { useQuery } from "@/hooks";

const Index = () => {
  const { data, loading, error } = useQuery<Array<ILevel>>();

  const [checkedSquares, setCheckedSquares] = useState<
    Array<IHistoryItemProps>
  >([]);

  //Level that was chosen in dropdown, but isn't used.
  const [tmpLevel, setTmpLevel] = useState<ILevel | null>(null);
  //Level info that is used now.
  const [level, setLevel] = useState<ILevel | null>(null);

  const setLevelHandler = (): void => {
    if (tmpLevel) {
      setLevel(tmpLevel);
      setCheckedSquares([]);
    }
  };

  const setCheckedSquare = (elem: IHistoryItemProps): void => {
    for (let i = 0; i < checkedSquares.length; i++) {
      if (
        checkedSquares[i].row === elem.row &&
        checkedSquares[i].col === elem.col
      ) {
        setCheckedSquares(
          checkedSquares.filter((el) => {
            return !(el.row === elem.row && el.col === elem.col);
          })
        );
        return;
      }
    }
    setCheckedSquares([...checkedSquares, elem]);
  };

  const renderField = (): JSX.Element => {
    if (error) return <Error />;

    if (loading) return <Loading />;

    if (level) {
      const { field } = level;
      return (
        <Field
          elementsCount={field}
          setCheckedElement={setCheckedSquare}
          checkedElements={checkedSquares}
        />
      );
    }

    return <NoLevel />;
  };

  return (
    <div className="flex justify-between p-20 flex-wrap gap-20">
      <div className="w-min">
        <div className="flex w-full justify-between mb-6">
          <DropDown level={tmpLevel} setLevel={setTmpLevel} menuProps={data} />
          <Button
            type="primary"
            className="uppercase font-semibold h-11 ml-4"
            onClick={setLevelHandler}
            disabled={!tmpLevel}
          >
            start
          </Button>
        </div>
        {renderField()}
      </div>
      <History items={checkedSquares} label="Hover Squares" />
    </div>
  );
};

export default Index;
