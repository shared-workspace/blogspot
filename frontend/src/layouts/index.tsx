import LayoutPrimary from "./primary";
import LayoutSecondary from "./secondary";
import LayoutTersary from "./tersary";
export interface LayoutProps {
  isLoading: boolean;
  children?: React.ReactNode;
}
export default function Layout({
  isLoading,
  children,
  type,
}: LayoutProps & { type: "primary" | "secondary" | "tersary" }) {
  switch (type) {
    default:
    case "primary":
      return <LayoutPrimary isLoading={isLoading}>{children}</LayoutPrimary>;
    case "tersary":
      return <LayoutTersary isLoading={isLoading}>{children}</LayoutTersary>;
    case "secondary":
      return <LayoutSecondary isLoading={isLoading}>{children}</LayoutSecondary>;
  }
}