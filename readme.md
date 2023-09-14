# Página ReactJS com Preenchimento Automático de Endereço por CEP

Este é um projeto desenvolvido com ReactJS que permite preencher automaticamente os campos de rua, bairro, cidade e UF quando um CEP de 8 dígitos é inserido. Ele utiliza a API REST do BrasilAPI para obter os dados de endereço com base no CEP fornecido.

## Como Usar

**Passo 1:** Clone ou baixe este repositório para o seu computador.

```bash
git clone https://github.com/OdaliID/ConsultarCEP.git

Passo 2: Abra o terminal (CMD) dentro da pasta do projeto no Visual Studio Code.

Passo 3: Execute o comando a seguir para instalar as dependências necessárias.

npm install
Passo 4: Após a conclusão da instalação, execute o aplicativo com o seguinte comando:

npm run start
Passo 5: Se ocorrer algum erro durante a execução, vá para o arquivo package.json e selecione a opção "Depurar" em scripts.

Funcionalidades
Preenchimento automático de endereço com base no CEP fornecido.
Ação de erro quando o CEP não é localizado ou está incompleto.
API REST
Este projeto utiliza a API REST do BrasilAPI para buscar informações de endereço com base no CEP inserido. A URL da API é a seguinte:

GET https://brasilapi.com.br/api/cep/v1/{cep}
Exemplo de retorno da API:

{
  "cep": "89010025",
  "state": "Santa Catarina",
  "city": "Blumenau",
  "neighborhood": "Centro",
  "street": "Rua XV de Novembro"
}
Implementação Adicional em Progresso
"lidar com CEPs não localizados ou incompletos."

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      setDados(null);
      setErro("CEP não localizado.");
      throw new Error("CEP não localizado.");
    } else {
      return response.json();
    }
  })


Odali Araújo
https://github.com/OdaliID