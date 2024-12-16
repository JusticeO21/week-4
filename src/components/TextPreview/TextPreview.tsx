import styles from'./TextPreview.module.css'

interface TextPreviewPropTypes {
    text:string
}


function TextPreview({ text }: TextPreviewPropTypes) {
  return (
    <div className={styles.container}>
          <h4>{text}</h4>
    </div>
  );
}

export default TextPreview
