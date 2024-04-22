"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <ul>
      <li>
        <Link href="/">{`home ${path === "/" ? "👵" : ""}`}</Link>
      </li>
      <li>
        <Link href="/about-us">
          {`about-us ${path === "/about-us" ? "👵" : ""}`}
        </Link>
      </li>
      <li>
        <Link href="/movies">{`movies ${path === "/movies" ? "👵" : ""}`}</Link>
      </li>
    </ul>
  );
}
