import style from './SubjectTitle.module.css';

interface SubjectTitlePropTypes {
    titleImageSrc: string
  title: string
  in_card?: string
}
function SubjectTitle({ titleImageSrc, title, in_card }: SubjectTitlePropTypes) {
    return (
      <div className={`${style.container} ${style[`${in_card}`]}`}>
        <span className={style.imageContainer}>
          <img src={titleImageSrc} alt={title} />
        </span>

        <h2 className={style.title}>{title}</h2>
      </div>
    );
}

export default SubjectTitle
