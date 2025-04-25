"use client";
import styles from "./page.module.css";
import "./page.module.css";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isClicked, setIsClicked] = useState(false); // ✅ Faltaba esta línea

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pattern para validar email
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Valid Email Required");
      setIsClicked(false);
      return;
    }

    setError("");
    setIsClicked(true);
    console.log("Email enviado:", email);
  };

  return (
    <div className="Principal">
      <div className="izquierda">
        <div className="Texto">
          <h2 className="Titulo">Stay updated!</h2>
          <p className="subtitulo">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="Puntos">
            <li className="Punto">
              <img src="/Img/icon-list.svg" />
              Product discovery and building what matters
            </li>
            <li className="Punto">
              <img src="/Img/icon-list.svg" />
              Measuring to ensure updates are a success
            </li>
            <li className="Punto">
              <img src="/Img/icon-list.svg" />
              And much more!
            </li>
          </ul>
          <form className="InputEmail" onSubmit={handleSubmit}>
            <div className="LabelErrorWrapped">
              <label>Email Address</label>
              {error && <span className="ErrorMensaje">{error}</span>}
            </div>
            <input
              type="email"
              placeholder="email@company.com"
              className={`Email ${error ? "ErrorInput" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="Boton">
              <button className={isClicked ? "Clicked" : ""}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="derecha">
        <div className="imagen">
          <img src="/Img/illustration-sign-up-desktop.svg" />
        </div>
      </div>
    </div>
  );
}
