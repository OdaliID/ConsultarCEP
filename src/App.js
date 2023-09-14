import { useState, useEffect } from "react";
import "./styles.css";
import logo from './logo.svg';

function App() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (cep.length === 8) {
      consultaCEP();
    }
  }, [cep]);

  const consultaCEP = () => {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const options = {
      method: "GET",
      cache: "no-cache"
    };

    setErro("");

    fetch(url, options)
    .then((resposta) => {
      if (!resposta.ok) {
        setDados(null);
        setErro("CEP não localizado.");
        throw new Error("CEP não localizado.");
      } else {
        return resposta.json();
      }
    })
    .then((dados) => {
      setDados(dados);
      console.log(dados);
    })
    .catch((err) => {
      setErro(err.message);
    });
};

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ padding: "6px 0px", margin: "0px" }}>Consulta CEP 🔎</h1>

        <form>
          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              placeholder="CEP"
              value={cep}
              onChange={(evento) => {
                setCep(evento.target.value.replace(/\D/g, ""));
              }}
              maxLength="8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rua">Rua:</label>
            <input
              type="text"
              id="rua"
              placeholder="Rua"
              value={dados ? dados.street : ""}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" placeholder="Número" />
          </div>

          <div className="form-group">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              placeholder="Bairro"
              value={dados ? dados.neighborhood : ""}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              placeholder="Cidade"
              value={dados ? dados.city : ""}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="uf">UF:</label>
            <input
              type="text"
              id="uf"
              placeholder="UF"
              value={dados ? dados.state : ""}
              disabled
            />
          </div>
        </form>
        {erro && (
          <>
            <br />
            <span style={{ color: "#FF0000", fontWeight: "bold" }}>{erro}</span>
            <br />
          </>
        )}
        <footer className="footer">
            <div>AP1 DEV WEB &copy; 2023 - Todos os direitos reservados.</div>
            <div>Desenvolvido com react <img src={logo} className="footer-logo" alt="logo" /></div>
            <div className="assinatura">Odali Araujo</div>
          </footer>
        {erro && (
          <>
            <br />
            <span style={{ color: "#FF0000", fontWeight: "bold" }}>{erro}</span>
            <br />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
