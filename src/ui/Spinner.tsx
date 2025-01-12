import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(720deg);
  }
`;

const AnimatedSpinner = styled.img`
  height: 100px;
  animation: ${rotate} 1s ease infinite;
`;

export default function Spinner() {
  return (
    <>
      <AnimatedSpinner
        src="/spinner2.svg"
        alt="spinner"
      />
    </>
  );
}
