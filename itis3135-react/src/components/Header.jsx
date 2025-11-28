import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>ITIS3135 | Ayah Abdulkareem | Ambitious Antelope</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/introduction">Introduction</Link> |{" "}
        <Link to="/contract">Contract</Link> |{" "}
        <a href="https://aabdulk4-sys.github.io/itis3135-react/">React3</a>
      </nav>
    </header>
  );
}
