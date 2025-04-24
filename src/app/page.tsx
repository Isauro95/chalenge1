import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="Pagina principal">
      <div className="contenido de la izquierda">
        <div className="Texto">
          <h2 className="Titulo">Stay updated!</h2>
          <p className="subtitulo">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="Puntos">
            <li className="P1">
              <img></img>Product discovery and building what matters
            </li>
            <li className="P2">
              <img></img>Measuring to ensure updates are a success
            </li>
            <li className="P3">
              <img></img>And much more!
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
      <div className="contenido derecha">
        <div className="imagen">
          <img src={"./img/icon.list.svg"}></img>
        </div>
      </div>
    </div>
  );
}
