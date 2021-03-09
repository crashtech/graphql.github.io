import React from "react"
import Link from "../Link"

interface LinkItem {
  section: string
  text: string
  href: string
}

const links: LinkItem[] = [
  { section: "learn", text: "Learn", href: "/learn/" },
  { section: "code", text: "Code", href: "/code/" },
  { section: "community", text: "Community", href: "/community/" },
  { section: "faq", text: "FAQ", href: "/faq/" },
  {
    section: "spec",
    text: "Spec",
    href: "https://graphql.github.io/graphql-spec/",
  },
  {
    section: "foundation",
    text: "Foundation",
    href: "/foundation/",
  },
  { section: "landscape", text: "Landscape", href: "https://l.graphql.org/" },
]

export default () => (
  <nav>
    {links.map((link, i) => (
      <Link key={i} href={link.href}>
        {link.text}
      </Link>
    ))}
  </nav>
)
