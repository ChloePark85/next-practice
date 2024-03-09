import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Not Found</h1>;
    </div>
  );
}
