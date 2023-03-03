import { Button, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { ILevel } from "@/types/types";
import { IDropDownProps } from "./types";

export const DropDown: React.FC<IDropDownProps> = ({
  level,
  setLevel,
  menuProps,
}) => {
  //Converting props to suitable form for antd component
  let items;
  if (menuProps) {
    items = {
      items: menuProps.map((prop: ILevel, i) => {
        return {
          key: i,
          label: prop.name,
          onClick: () => setLevel(prop),
        };
      }),
    };
  }

  return (
    <Dropdown
      menu={items}
      className="w-52 border-2 border-black rounded-none h-10"
    >
      <Button>
        <div className="flex items-center justify-between">
          {level ? level.name : "Choose your level"}
          <CaretDownOutlined />
        </div>
      </Button>
    </Dropdown>
  );
};
