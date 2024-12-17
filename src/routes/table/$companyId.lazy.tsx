import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/table/$companyId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/table/$companyId"!</div>;
}
