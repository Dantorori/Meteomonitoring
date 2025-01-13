import { createFileRoute } from "@tanstack/react-router";
import Spinner from "@ui/Spinner";
import styled from "styled-components";

export const Route = createFileRoute("/test/loading")({
  component: RouteComponent,
});

const LoadingContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RouteComponent() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
}
