import { Spin } from "antd";

export const Loading = () => {
  return (
    <div className="w-96 h-96 flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};
