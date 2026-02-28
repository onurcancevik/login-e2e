import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const passwordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);

  const isValid = emailValid && passwordValid && accepted;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!emailValid && email && <p>Email hatalı</p>}

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!passwordValid && password && <p>Şifre hatalı</p>}

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      <button type="submit" disabled={!isValid}>
        Giriş
      </button>
    </form>
  );
}