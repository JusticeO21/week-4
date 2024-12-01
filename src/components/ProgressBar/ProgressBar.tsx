import styles from "./ProgressBar.module.css"

interface ProgressBarPropTypes {
    progress: number;
    height?: number;
    color ?:string,
    borderRadius ?: number;
}

const ProgressBar = ({
  progress,
  height = 9,
  color = "#A729F5",
  borderRadius = 10,
}: ProgressBarPropTypes) => {
  
  const validProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={styles.progress_bar_container}
      style={{
        width: "100%",
        height: `${height}px`,
        backgroundColor: "var(--button-background)",
        borderRadius: `${borderRadius}px`,
      }}
    >
      <div
        className={styles.progress_bar_fill}
        style={{
          width: `${validProgress}%`,
          height: "100%",
          backgroundColor: `${color}`,
          borderRadius: `${borderRadius}px`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
