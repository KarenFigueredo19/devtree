import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <nav>
        <Link to="/auth/register" className="text-amber-50">¿Ya tienes una cuenta? Inicia sesión</Link>
      </nav>
    </>
  );
}
