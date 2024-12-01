import React from 'react'
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Title from '../../components/TitlePreview/TitlePreview';
import ButtonsList from '../../components/ButtonGroup/ButtonGroup';

interface ResultPagePropsTypes {
    ScoreCard: React.ComponentType;
}
function ResultPage({ScoreCard}:ResultPagePropsTypes) {
  return (
    <div>
      <ContentContainer
        MainContent={() => (
          <Title
            lightText="Quize completed"
            boldText="You scored ..."
            arrange="lightTextFirst"
          />
        )}
        Buttons={() => (
          <ButtonsList
            Buttons={() => (
              <>
                <ScoreCard/>
              </>
            )}
          />
        )}
      />
    </div>
  );
}

export default ResultPage
