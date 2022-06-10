**Projeto de Implementação de Desafio Tech Day Carrefour**

`       `Autor: Francisco de Assis da Silva Furtado

`       `e-mail: <franciscofurtadoeng@hotmail.com>

`      `Repositório github: 	<https://github.com/fasfurtado/techdaycarrefour>	

1. DEFINIÇÃO DO PROBLEMA

1.1. O Carrefour disponibilizou duas chamadas de API, com os seguintes Endpoints:

● **Buscar Pontos de Venda Por CEP:** endpoint responsável por retornar os Pontos de Venda do Carrefour.GET https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&**postalCode={cep}**

● **Buscar Produtos Por Ponto de Venda:** busca os Produtos de acordo com o nome de um Ponto de Venda.GET https://mercado.carrefour.com.br/api/catalog\_system/pub/products/search?**fq={seller\_name}**

1.2. Desenvolver um projeto que possa consumir essa API através de seus Endpoints.

1.3. A aplicação deve ser responsiva para rodar na web (desktop) ou mobile (android ou IOS).



1. METODOLOGIA

1. ` `A idéia é desenvolver um front-end com ReactJS;

1. Começar com um MOCK e ir evoluindo a aplicação;
1. ` `Vamos quebrar a interface de usuário em uma hierarquia de componentes;
1. ` `Vamos construir uma versão estática no React:

\- Ao final desta etapa, teremos uma biblioteca de componentes reutilizáveis ​​que renderizam nosso modelo de dados.

\- Os componentes terão apenas métodos render(), pois esta é uma versão estática do seu aplicativo.

\- Poderemos ver como sua interface do usuário é atualizada e onde fazer alterações.



1. Vamos identificar a representação mínima (mas completa) do estado da interface do usuário (UI)

\- Para tornar a interface do usuário interativa, precisamos acionar alterações em seu modelo de dados subjacente. React consegue isso com state.

\- Para criar nossa aplicação corretamente, precisamos pensar na lista de estados mutáveis que nossa aplicação precisa.

\- A regra aqui é DRY: Don’t Repeat Yourself (não deve se repetir).

\- Exemplo de Estados:

`	`- Um texto de busca que o usuário digitou.


`	`- O valor de um checkbox.

1. ` `Após a definição dos estados do aplicativo, precisamos definir quais componentes sofrem mudanças ou possuem cada estado.

1. ` `Precisamos, agora, definir o fluxo de dados inverso: os componentes do formulário precisam atualizar o fluxo de dados nos componentes.



1. DESENVOLVIMENTO DOS TRABALHOS
   1. Definiu-se que a implementação do código seria utilizando o Visual Studio Code (VSCODE);

1. ` `Com o próprio VSCODE, criou-se um esboço em html para desenho da interface mais amigável para a aplicação:


Fonte: Próprio Autor/Carrefour.com.br

1. ` `Após definida a interface, descobriu-se que os componentes básicos necessários para atender os requisitos da aplicação seriam CEP, LOJAS e PRODUTOS;

1. ` `Passou-se a implementar os componentes de forma estática, ou seja, apenas com o método render();

1. ` `A partir daí identificou-se os estados de cada componente da aplicação;

1. ` `E, depois, os efeitos colaterais causados pela mudança nos estados dos componentes;

1. ` `Para possibilitar o acesso aos dados das APIs do Carrefour, em ambiente local de desenvolvimento, utilizou-se uma extensão do Google Chrome denominada de CORS (Cross-Origin Resource Sharing), que é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta, conforme figura a seguir: 


Fonte: mozilla.org

O mecanismo CORS suporta requisições seguras do tipo cross-origin e transferências de dados entre navegadores e servidores web.

1. Utilizou-se, como referência e conteúdo de design, o serviço localizador de lojas do próprio Carrefour.

1. Feito isso, passou-se a implementação dos códigos e testes, que apresentaram grandes dificuldades, principalmente, pela necessidade da quebra de paradigma entre a programação em programação .net, e os conceitos necessários para a programação em Reactjs, mas que foram superadas, em parte, após a revisão das aulas da DIO entre outras fontes de conhecimento.


1. RESULTADOS ALCANÇADOS

O resultado alcançado foi satisfatório e compatível com o desafio apresentado, embora, a expectativa era de implementar um visual mais arrojado, entretanto, eu considero que seja necessário, para isso, a atuação de equipe multidisciplinar, com diferentes habilidades, em especial, designers e programadores experientes, de preferência utilizando metodologia ágil de desenvolvimento.

O usuário deve digitar o código do CEP para o qual deseja localizar as lojas próximas, e  ao clicar no botão de pesquisa, a aplicação acessa a API do Carrefour e apresenta as lojas próximas do CEP digitado, em caixa de seleção, onde o usuário pode escolher a loja de sua preferência.

Automaticamente, a aplicação já apresenta a grade de produtos da 1ª. loja da lista, e permite ao usuário que escolha alguma outra loja na lista, se for o caso; e sendo assim, após a seleção de uma loja diferente da que está sendo apresentada,  a aplicação acesso novamente a API do Carrefour, e retorna com os produtos da loja selecionada.

Procurou-se utilizar elementos da biblioteca Bootstrap para garantir a responsividade da aplicação que pode rodar em diferentes dispositivos com telas de variados tamanhos.


1. REFERÊNCIAS TÉCNICAS

1. Digital Innovation One (DIO) – Bootcamp Carrefour – [www.dio.me](http://www.dio.me)	 
1. <https://reactjs.org/docs/thinking-in-react.html>
1. <https://react.semantic-ui.com/collections/form/#types-form>
1. <https://react.semantic-ui.com/layouts/responsive>
1. <https://www.carrefour.com.br/localizador-de-lojas>
1. <https://herramientas-online.com/comprimir-descomprimir-css.html>
1. <https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/>
1. <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS>
1. <https://mybrowseraddon.com/access-control-allow-origin.html>
