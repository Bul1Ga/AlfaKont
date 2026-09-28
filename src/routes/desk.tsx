import { createFileRoute } from "@tanstack/react-router";
import { DeskShell } from "@/components/shell";

export const Route = createFileRoute("/desk")({
  component: DeskShell,
});
