import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <nav>
        <Link to="/auth/login" className="text-amber-50">¿No tienes cuenta? Crea una aquí</Link>
      </nav>
    </>
  );
}
