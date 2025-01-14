import Spinner from "@ui/Spinner";
import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PendingComponent() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
}
