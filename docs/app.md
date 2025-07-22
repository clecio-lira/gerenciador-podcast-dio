# Gerenciador de Podcast

### Descrição

Um app do estilo da netflix, com vários episodios de podcasts separados por categorias

### Dominio

Podcasts feitos em vídeo

### Features

- Listar os episodios dos podcasts em sessoes de categorias
  - Saude, fitness, mentalidade, humor
- Filtrar episodios por nome de podcast

## Como

### Feature:

- Listar os episodios dos podcasts em sessoes de categorias

### Como vou implementar:

GET: Vou retornar em uma api rest (json) o nome do podcast, nome do episodio, imagem de capa, link do video, categoria

    ```js
    [
    {
        podcastName: "Flow",
        episode: "CBUM - FLOW #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saude", "fitness"]
    }
    ]
    ```

GET: retorna uma lista de episodios baseado em um parametro enviado pelo cliente do nome do podcast
