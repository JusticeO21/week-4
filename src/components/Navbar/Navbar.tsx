import styles from './Navbar.module.css'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import SubjectTitle from '../SubjectPreview/SubjectPreview';

interface NavbarPropsTypes {
  subject: string;
}

function Navbar({subject}:NavbarPropsTypes) {
  return (
    <nav className={styles.navbarContainer}>
      {
        subject ? <SubjectTitle titleImageSrc={`images\\${subject}.svg`} title={subject} /> : (<span ></span>)
      }
      <ThemeSwitch />
    </nav>
  );
}

export default Navbar
