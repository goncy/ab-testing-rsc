import {lazy, createElement} from "react";
import {cookies} from "next/headers";

const components = {
  a: lazy(() => import("./header-a")),
  b: lazy(() => import("./header-b")),
} as const;

export default function Header() {
  const bucket = (cookies().get("bucket")?.value || "a") as keyof typeof components;

  return createElement(components[bucket]);
}
