Página desenvolvida com ReactJS contendo um formulário com os campos CEP, rua, número, bairro, cidade e UF. Quando o campo de CEP for preenchido (8 dígitos), deve pegar os demais dados (exceto número) do BrasilAPI e preenchê os campos automaticamente.

API REST: 
GET https://brasilapi.com.br/api/cep/v1/{cep}

Retorno:
{ "cep": "89010025", "state": "...", "city": "...", "neighborhood": "...", "street": "..." }
