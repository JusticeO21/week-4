import style from './SubjectPreview.module.css';

interface SubjectPreviewPropTypes {
  titleImageSrc: string
  title: string
  in_card?: string
}
function SubjectPreview({ titleImageSrc, title, in_card }: SubjectPreviewPropTypes) {
    return (
      <div className={`${style.container} ${style[`${in_card}`]}`}>
        <span className={style.imageContainer}>
          <img src={titleImageSrc} alt={title} />
        </span>
        <h2 className={style.title}>{title}</h2>
      </div>
    );
}

export default SubjectPreview
