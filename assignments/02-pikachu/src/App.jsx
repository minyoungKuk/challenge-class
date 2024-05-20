import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-image: url("/src/assets/images/grass.png");
  position: relative;
  outline: none;
`;

const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("/src/assets/images/pikachu.png");
  background-size: cover;
  position: absolute;
  transition: top 0.4s ease, left 0.4s ease;

  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};

  ${({ $isFlipped }) =>
    $isFlipped ? `transform: scaleX(-1);` : `transform: scaleX(1);`}

  ${({ $isJumping }) =>
    $isJumping &&
    css`
      animation: ${jumpAnimation} 0.5s;
    `}
`;

const App = () => {
  const [position, setPosition] = useState([0, 0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const fieldSize = 500;
  const imgSize = 50;

  useEffect(() => {
    if (isJumping) {
      const timer = setTimeout(() => {
        setIsJumping(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isJumping]);

  const handleKeyDown = (e) => {
    let [newX, newY] = position;

    switch (e.key) {
      case "ArrowUp":
        newY = Math.max(newY - imgSize, 0);
        break;
      case "ArrowDown":
        newY = Math.min(newY + imgSize, fieldSize - imgSize);
        break;
      case "ArrowLeft":
        newX = Math.max(newX - imgSize, 0);
        setIsFlipped(true);
        break;
      case "ArrowRight":
        newX = Math.min(newX + imgSize, fieldSize - imgSize);
        setIsFlipped(false);
        break;
      case " ":
        setIsJumping(true);
        newY = Math.max(newY - 50, 0);
        break;
      default:
        break;
    }

    setPosition([newX, newY]);
  };

  return (
    <Wrapper tabIndex="0" onKeyDown={handleKeyDown}>
      <ImgWrapper
        $left={position[0]}
        $top={position[1]}
        $isFlipped={isFlipped}
        $isJumping={isJumping}
      />
    </Wrapper>
  );
};

export default App;
