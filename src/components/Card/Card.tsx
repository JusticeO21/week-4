import styles from "./Card.module.css";
import SubjectTitle from '../Subject/SubjectTitle';
import MiniText from '../TextPreview/TextPreview';

interface CardPropTypes {
    mark: number;
    total: number;
    title: String;
}

function Card({mark, total, title}: CardPropTypes) {
  return (
    <div className={styles.card_container}>
        <SubjectTitle
          titleImageSrc={`images\\${title}.svg`}
              title={`${title}`}
              in_card="in_card"
        />
        <p className={styles.mark}>{mark}</p>
        <MiniText text={`out of ${total}`} />
     
    </div>
  );
}

export default Card
