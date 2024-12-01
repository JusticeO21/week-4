import styles from './Button.module.css';

interface MenuButtonPropTypes {
  text?: string;
  menu_button?: string;
  option_container?: string;
  option?: string;
  option_text?: string;
  option_button?: string;
  submit_container?: string;
  submit_button?: string;
  submit_text?: string;
  customize?: string;
  onClick: () => void;
}
function Button({
  text,
  onClick,
  menu_button,
  option_container,
  option_button,
  option,
  option_text,
  submit_container,
  submit_button,
  submit_text,
  customize
}: MenuButtonPropTypes) {
  return (
    <button
      className={`${styles.button} ${styles[`${option_container}`]} ${
        styles[`${submit_container}`]
      } ${styles[`${customize}`]}`}
      onClick={onClick}
    >
      <span className={`${styles[`${menu_button}`]} ${styles.container}`}>
        <span className={styles.image_container}>
          <img
            className={styles.button_image}
            src={`/images/${text}.svg`}
            alt={text}
          />
        </span>
        <p className={styles.button_text}>{text}</p>
      </span>

      <span className={`${styles[`${option_button}`]} ${styles.container}`}>
        <p className={styles.option}>{option}</p>
        <p className={styles.option_text}>{option_text}</p>
        <span className={styles.option_icon}>
          <img src={`/images/icon-${customize}.svg`} alt={customize} />
        </span>
      </span>

      <span className={`${styles[`${submit_button}`]} ${styles.container}`}>
        <p>{submit_text}</p>
      </span>
    </button>
  );
}

export default Button
