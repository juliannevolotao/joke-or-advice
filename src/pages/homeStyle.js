import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CenteredText = styled.div`
  color: #fff9ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  span {
    color: #8a5d0b;
    font-size: 0.85rem;
  }
`

export const LittleTitle = styled.span`
  color: #8a5d0b;
  position: absolute;
  top: 4rem;
  font-size: 0.85rem;
`

const ButtonBase = styled.button`
  color: #8a5d0b;
  font-size: 0.85rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 4px 0;
  transition: all 0.2s ease-in-out;
`

export const BottomOption = styled(ButtonBase)`
  position: absolute;
  bottom: 4rem;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid #8a5d0b;
  }
`

export const NextButton = styled(ButtonBase)`
  
  &:hover {
    transform: scale(1.04);
    border-bottom: 1px solid #8a5d0b;
  }
`