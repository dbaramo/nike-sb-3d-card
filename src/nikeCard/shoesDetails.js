import React from "react";
import styled from "styled-components";
import { Marginer } from "./margin";
import nike_logo from "../assets/nike_sb_logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.3em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  transform: translateY(40px);
  animation-name: intro-medium-text;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes intro-medium-text {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  transform: translateY(20px);
  animation-name: intro-small-text;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes intro-small-text {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  /* outline: 1px solid red; */
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #b2e3b8;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  width: 100%;
  opacity: 0;
  animation-name: intro-buy-button;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  @keyframes intro-buy-button {
      from {
        opacity: 0;
      }
      to {
       opacity: 100;
      }
    }

  &:hover {
    background-color: transparent;
    color: #b2e3b8;
    border: 3px solid #b2e3b8;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  opacity: 0;
  animation-name: intro-nike-logo;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  @keyframes intro-nike-logo {
      from {
        opacity: 0;
      }
      to {
       opacity: 100;
      }
    }

  img {
    width: auto;
    /* height: 20px; */
    height: 22px;
    padding-top: 5px;
  }
`;

export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <SpacedHorizontalContainer>
        <SmallText>NIKE SB</SmallText>
      </SpacedHorizontalContainer>
      <SpacedHorizontalContainer>
        <MediumText>Grateful Dead x Dunk Low SB 'Green Bear'</MediumText>
        <MediumText>$110</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1em" />
      <SpacedHorizontalContainer>
        <BuyButton>BUY</BuyButton>
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img src={nike_logo} alt="shoe" />
      </NikeLogo>
    </DetailsContainer>
  );
}
