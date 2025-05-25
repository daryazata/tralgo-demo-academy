import LogoDark from "../assets/tralgo-logo-dark.png";
import LogoLight from "../assets/tralgo-logo-light.png";

export function Header() {
  return (
    <header className="flex items-center mb-6 p-4 pt-2">
      <img src={LogoLight} alt="Logo" className="block dark:hidden h-10" />
      <img src={LogoDark} alt="Logo" className="hidden dark:block h-10" />
    </header>
  );
}
