import styles from "./page.module.css";
import "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="Principal">
      <div className="izquierda">
        <div className="Texto">
          <h2 className="Titulo">Stay updated!</h2>
          <p className="subtitulo">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="Puntos">
            <li className="P1">
              <img src="/Img/icon-list.svg" />
              Product discovery and building what matters
            </li>
            <li className="P2">
              <img src="/Img/icon-list.svg" />
              Measuring to ensure updates are a success
            </li>
            <li className="P3">
              <img src="/Img/icon-list.svg" />
              And much more!
            </li>
          </ul>
          <div>Email address</div>
          <form className="InputEmail">
            <input
              type="Email"
              placeholder="email@company.com"
              className="Email"
            ></input>
            <div className="Boton">
              <button>Subscribe to monthly newsletter</button>
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
