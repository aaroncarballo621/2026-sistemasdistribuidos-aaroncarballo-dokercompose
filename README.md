# Instruções para Rodar a Aplicação Nginx com Réplicas Usando Docker Compose

Essa é uma aplicação exemplo que usa o servidor nginx distribuindo as requisições entre réplicas. A aplicação em node roda nas réplicas e as requisições são distribuídas pelo nginx para qualquer uma delas.

## Passo 1: Rodar containers com docker compose

```sh
docker compose up -d
```

## Passo 2: Verificar status do serviço

```sh
docker ps
```

## Passo 3: Testar aplicação no navegador na porta 3000

```sh
http://127.0.0.1:3000
```

```css
- Verifique que cada requisição é respondida por uma réplica diferente

- Se quiser alterar a quantidade de réplicas, basta editar o arquivo docker-compose.yml
```