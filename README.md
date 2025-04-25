
## Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)
- Docker e Docker Compose (opcional, para containerização)

## Instalação e Execução

### Método 1: Usando Node.js localmente

1. Clone o repositório: https://github.com/luisgabrieltech/Lightspark-cloud.git
   ```

### Método 2: Usando Docker

1. Clone o repositório:
   ```bash
   git clone https://github.com/luisgabrieltech/Lightspark-cloud.git
   cd LightSpark
   ```

2. Inicie com Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Acesse no navegador:
   ```
   http://localhost:8585
   ```

## API Endpoints

- `GET /api/status` - Verificar status da API
- `GET /api/campanhas` - Listar todas as campanhas
- `POST /api/campanhas` - Adicionar nova campanha

### Exemplo de Requisição para Adicionar Campanha

```json
POST /api/campanhas
Content-Type: application/json

{
  "cliente": "Nome do Cliente",
  "cliques": 5000,
  "impressoes": 20000,
  "engagement": 0.25,
  "previsao_roi": 1.8
}
```

## Personalização

Você pode facilmente personalizar o LightSpark modificando:

- Esquema de cores em `:root` no CSS (Frontend/index.html)
- Estrutura de dados em Backend/campanhas.js
- Layout e componentes visuais em Frontend/index.html

