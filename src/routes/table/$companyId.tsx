import { createFileRoute } from "@tanstack/react-router";
import fetchPolePrediction from "../../utils/fetchPolePrediction";
import PendingComponent from "../../components/PendingComponent";

export const Route = createFileRoute("/table/$companyId")({
  loader: () => fetchPolePrediction(0),
  pendingComponent: PendingComponent,
});
