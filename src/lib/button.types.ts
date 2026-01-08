import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type BaseProps = {
  label: string;
  icon?: ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
};

export type ButtonAsInternalLink = BaseProps & {
  href: Url;
  external?: false;
};

export type ButtonAsExternalLink = BaseProps & {
  href: string;
  external: true;
};

export type ButtonProps =
  | ButtonAsButton
  | ButtonAsInternalLink
  | ButtonAsExternalLink;
