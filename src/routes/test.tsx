import { createFileRoute } from "@tanstack/react-router";
import Button from "@ui/Button";
import Spinner from "@ui/Spinner";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Button>Кнопка</Button>
      <Spinner />
    </>
  );
}
