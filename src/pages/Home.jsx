import { useEffect, useState } from 'react'
import { CenteredText, MainContainer, LittleTitle, BottomOption, NextButton } from './homeStyle'
import { BeatLoader } from 'react-spinners'
export const Home = () => {
  const [textToShow, setTextToShow] = useState('');
  const [textType, setTextType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetJoke = () => {
    setIsLoading(true);

    try {
      fetch('https://api.chucknorris.io/jokes/random?category=food', {
        method: 'GET',
      }).then(response => response.json()).then(res => {
        const { value: joke } = res;
        if (joke) {
          setTextToShow(joke);
          setTextType('joke');
          setTimeout(() => {
            setIsLoading(false);
          }, 800)
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleGetAdvice = () => {
    setIsLoading(true);
    try {
      fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
      }).then(response => response.json()).then(res => {
        const { advice } = res.slip;
        if (advice) {
          setTextToShow(advice);
          setTextType('advice');
          setTimeout(() => {
            setIsLoading(false);
          }, 800)
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetAdvice();
  }, [])

  return (
    <MainContainer>
      <LittleTitle>take {textType === 'advice' ? 'an advice' : 'a joke'}</LittleTitle>
      <CenteredText>
        {isLoading ? (
          <BeatLoader color="#8a5d0b" />
        ) : (
          <>
            <h1>"{textToShow}"</h1>
            <NextButton onClick={textType === 'advice' ? handleGetAdvice : handleGetJoke}> didn't like, try again</NextButton>
          </>
        )}

      </CenteredText>
      <BottomOption onClick={textType === 'advice' ? handleGetJoke : handleGetAdvice}>actually I want a {textType === 'advice' ? 'joke' : 'advice'} instead</BottomOption>
    </MainContainer>
  )
}