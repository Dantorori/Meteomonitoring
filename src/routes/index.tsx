import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Primitives/Button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button>Кнопка для тестирования</Button>
    </div>
  );
}
