import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import sbShoeImg from "../assets/nike-sb-shoe.png";
import dancingBears from "../assets/dancing-bears.png";
import { ShoesDetails } from "./shoesDetails";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0px 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: black;
  color: #fff;
  position: relative;
  cursor: grab;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  animation-name: intro-top-container;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
  transform: translateY(-10px);
  @keyframes intro-top-container {
      from {
        opacity: 0;
      }
      to {
       opacity: 100;
      }
    }
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
  transform: translateY(-10px);
`;

const DancingBearsWrapper = styled.div`
  position: absolute;
  margin-bottom: -2rem;
  z-index: 50;
  text-align: center;

  img {
    width: 100%;
  }
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 2em;
  margin-top: 2em;

  img {
    width: auto;
    height: 110%;
    user-select: none;
    user-drag: none;
  }
`;

export function NikeCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
            >
              <img src={sbShoeImg} alt="shoe" />
            </Shoes>
          </ShoesWrapper>
          <DancingBearsWrapper>
            <img src={dancingBears} alt="nike-sb-logo" />
          </DancingBearsWrapper>
        </TopContainer>
        <BottomContainer>
          <ShoesDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
