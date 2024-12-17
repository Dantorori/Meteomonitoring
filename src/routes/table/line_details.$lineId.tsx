import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table/line_details/$lineId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/table/details/$lineId"!</div>;
}
