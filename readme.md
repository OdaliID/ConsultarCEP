use esse código pra Crar uma página com ReactJS contendo um formulário com os campos CEP, rua, número, bairro, cidade e UF. Quando o campo de CEP for preenchido (8 dígitos), deve pegar os demais dados (exceto número) do BrasilAPI e preenchê os campos automaticamente

npm install react react-dom



{dados && dados.cep && (
          <div style={{ textAlign: "left" }}>
            <br />
            <span>CEP: {dados.cep}</span>
            <br />
            <span>Rua: {dados.street}</span>
            <br />
            <span>Bairro: {dados.neighborhood}</span>
            <br />
            <span>Cidade: {dados.city}</span>
            <br />
            <span>Estado: {dados.state}</span>
            <br />
          </div>
        )}