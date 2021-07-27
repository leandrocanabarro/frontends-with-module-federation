## Micro-frontends: Module Federation with WebPack 5

O module federation é responsável por criar essa integração entre vários builds separados, com ele, você poderá compartilhar seu código (componentes, UI, serviços, etc...) em tempo de execução, e ao mesmo tempo manter seu processo de construção e desenvolvimento em paralelo.

Com este exemplo, vamos criar 3 micro-frontends com compartilhamento de código de forma bi-direcional, a ideia é ter a mesma experiência sendo compartilhada.

## Primeiros passos

Clone o repositório:

```sh
git clone https://github.com/leandrocanabarro/frontends-with-module-federation.git
```

Instale as dependências

```sh
yarn install
```

Inicie o servidor de desenvolvimento

```sh
yarn start
```

Com isso, você terá os aplicativos em execução em:

- [localhost:4000](http://localhost:3000/) (host) - `Core`
- [localhost:4001](http://localhost:3001/) (autônomo remoto) - `ProductList`
- [localhost:4002](http://localhost:3002/) (autônomo remoto) - `ProductDetails`

Abra uma dessas portas no navegador de sua escolha e você estará pronto para visualizar a mágica acontecendo.

## Estrutura do Projeto

- `Core`: Aplicação principal
- `ProductList`: Listagem de produtos
- `ProductDetails`: Detalhamento de produtos

```md
├── ProductDetails
│ ├── package.json
│ ├── public
│ ├── src
│ └── webpack.config.js
├── ProductList
│ ├── package.json
│ ├── public
│ ├── src
│ └── webpack.config.js
├── Core
│ ├── package.json
│ ├── public
│ ├── src
│ └── webpack.config.js
├── package.json
└── yarn.lock
```
