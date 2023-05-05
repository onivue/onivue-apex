import { Footer } from "@onivue/ui";
import type { FunctionComponent } from "react";

const links = [
  { children: "Features", href: "#features", variant: "text" },
  { children: "Testimonials", href: "#testimonials", variant: "text" },
  { children: "Pricing", href: "#pricing", variant: "text" },
] as const;

const PageFooter: FunctionComponent = () => {
  return <Footer links={links} />;
};

export { PageFooter as Footer };
