import { createFileRoute } from "@tanstack/react-router";
import { Meteotable } from "../pages/Meteotable/index";
import { fetchPrediction } from "../pages/Meteotable/index";

export const Route = createFileRoute("/table")({
  component: Meteotable,
  loader: () => fetchPrediction(1),
});
