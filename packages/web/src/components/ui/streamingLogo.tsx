import type React from "react";

export const StreamingLogo = ({
  src,
  href,
  ...props
}: React.ComponentProps<"img"> & { src: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    className="block overflow-hidden rounded-full ease-in-out"
  >
    <img src={src} {...props} className="fit" />
  </a>
);
