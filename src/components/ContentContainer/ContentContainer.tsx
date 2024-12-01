import React from 'react'
import styles from './ContentContainer.module.css';

interface ContentContainerPropTypes {
    MainContent: React.ComponentType;
    Buttons: React.ComponentType;
}

function ContentContainer({MainContent, Buttons}: ContentContainerPropTypes) {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <MainContent/>
      </div>
        <Buttons/>
    </section>
  );
}

export default ContentContainer
