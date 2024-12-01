import styles from './TitlePreview.module.css'

interface TitlePreviewProps {
  lightText?: string;
  boldText?: string;
  arrange?: string;
}
function TitlePreview({ lightText, boldText, arrange }: TitlePreviewProps) {
  return (
    <div>
      <h1 className={`${styles.boldTextFirst} ${styles[`${arrange}`]}`}>
        <span className={styles.title_light}>{lightText}</span>
        <span className={styles.title_bold}>{boldText}</span>
      </h1>
    </div>
  );
}

export default TitlePreview;
