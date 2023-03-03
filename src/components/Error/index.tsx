import { Alert } from "antd";

export const Error = () => {
  return (
    <div className="w-96 h-96 flex items-center justify-center">
      <Alert message="Error" description="Something went wrong" type="error" />
    </div>
  );
};
