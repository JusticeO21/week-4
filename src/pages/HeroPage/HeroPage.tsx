import React from 'react'
import Title from '../../components/TitlePreview/TitlePreview';
import ButtonsList from '../../components/ButtonGroup/ButtonGroup';
import MiniText from '../../components/TextPreview/TextPreview';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import MenuButton from '../../components/Button/Button';

const heroTitle = {
    lightText: 'Welcome to the',
    boldText: 'Frontend Quiz!'
}

interface HeroPagePropsType {
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

function HeroPage({setSubject, setCurrentPage}: HeroPagePropsType) {
  return (
    <div>
      <ContentContainer
        MainContent={() => (
          <>
            <Title
              lightText={heroTitle.lightText}
              boldText={heroTitle.boldText}
              arrange="lightTextFirst"
            />

            <MiniText text="Pick a subject to get started" />
          </>
        )}
        Buttons={() => (
          <ButtonsList
            Buttons={() => (
              <>
                <MenuButton
                  menu_button="menu_button"
                  text="html"
                  onClick={() => {
                    setSubject("html");
                    setCurrentPage("Quize");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="css"
                  onClick={() => {
                    setSubject("css");
                    setCurrentPage("Quize");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="javascript"
                  onClick={() => {
                    setSubject("javascript");
                    setCurrentPage("Quize");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="accessibility"
                  onClick={() => {
                    setSubject("accessibility");
                    setCurrentPage("Quize");
                  }}
                />
              </>
            )}
          />
        )}
      />
    </div>
  );
}

export default HeroPage
