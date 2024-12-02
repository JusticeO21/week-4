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

function storeSubject(subject: string) {
  localStorage.setItem("subject", subject);
  localStorage.setItem("currentPage", "Quize");
}

function HeroPage({ setSubject, setCurrentPage }: HeroPagePropsType) {

  function handleButtonClick(subject: string) {
    localStorage.setItem("subject", subject);
    setSubject(subject);
    storeSubject(subject);
    setCurrentPage("Quize");
  }

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
                    handleButtonClick("html");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="css"
                  onClick={() => {
                    handleButtonClick("css");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="javascript"
                  onClick={() => {
                    handleButtonClick("javascript");
                  }}
                />
                <MenuButton
                  menu_button="menu_button"
                  text="accessibility"
                  onClick={() => {
                    handleButtonClick("accessibility");
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
