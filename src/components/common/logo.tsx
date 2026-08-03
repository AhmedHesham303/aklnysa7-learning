import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/">
      <img src="/src/assets/images/logo.webp" alt="Logo" />
    </Link>
  );
}
