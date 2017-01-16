# teste-resultado-digital

Aplicação Angular 2 utilizando a API do google books para o processo seletivo do Resultado Digital.

## Prérequisitos

1. Node;
2. Angular Cli

## Como rodar

1. Clone o projeto utilizando os seguintes comandos em um prompt de comando.
        - git clone https://github.com/raphaelssilva/teste-resultado-digital.git
        - cd teste-resultado-digital
2. Atualize as dependencias do npm com o seguinte comando:
        - npm update
3. Execute o projeto com Angular Cli
        - ng server


```
O projeto foi criado com angular 2, o angular 2 possu como principal vantagem a utilizando de webcomponents, com isso se pode construir components reaproveitaveis de forma mais simples.

O projeto de constitui de um modulo central chamado app-root, ele é o compomente principal, em baixo dele tem um compomente para cada modulo, como o projeto é muito curto, fiz com apenas um modulos, e fiz 3 componentes.

O primeiro componente é o books, responsavel pela busca e listagem dos livros.
O segundo componente é o book, responsavel pela visualização dos detalhes do livro.
e por ultimo o compomente favorito-toolbar, responsavel pelo componente que fica localizado na toolbar pela exibiç~çao dos livros favoritados.

foram utilizados 2 servicos para auxiliar os compomentes, que sao:
 - GoogleBooksService, responsavel por pesquisa e detalhe de livros.
 - FavoritoService, responsavel em manter os dados de livros favoritados, foi utlizado para armazenamento dos livros o LocalStorage.

```
