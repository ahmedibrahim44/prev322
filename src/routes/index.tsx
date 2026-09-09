import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/home-page";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Vitalida Physio & Ostéo · Physiothérapie et ostéopathie à Montréal NDG",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/photos/hero-montagnes.jpg" }],
  }),
});

function Home() {
  return <HomePage />;
}
