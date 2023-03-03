import styles from "./NoLevel.module.scss";

export const NoLevel = () => {
  return (
    <div
      className={
        "w-96 h-96 flex items-center justify-center " + styles["no-level"]
      }
    >
      <div className="text-3xl">Choose your level...</div>
    </div>
  );
};
