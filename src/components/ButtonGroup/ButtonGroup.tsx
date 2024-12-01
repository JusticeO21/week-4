import React from 'react'
import styles from './ButtonGroup.module.css';

interface ButtonGroupPropTypes {
  Buttons: React.ComponentType;
}
function ButtonGroup({Buttons} : ButtonGroupPropTypes) {
  return (
    <div className={styles.container}>
      <Buttons/>
    </div>
  );
}

export default ButtonGroup;
