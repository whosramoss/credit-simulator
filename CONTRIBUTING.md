# Contribuindo com o credit-simulator

> Bem-vindo ao credit-simulator

Se você deseja contribuir com este projeto, leia atentamente as informações abaixo para evitar mal-entendidos e retrabalho desnecessário.

Contribuições são **bem-vindas**, desde que sigam as diretrizes corretas.

## Índice

1. [Introdução](#introdução)
2. [Guia de estilo](#guia-de-estilo)
3. [Setup do Ambiente](#setup-do-ambiente)
4. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
5. [Padrões de Código](#padrões-de-código)
6. [Diretrizes de Código](#diretrizes-de-código)
7. [Como contribuir](#como-contribuir)

---

## Introdução

Este projeto é uma iniciativa colaborativa e aberta, ideal para quem deseja aprender, evoluir e contribuir com soluções voltadas ao cálculos financeiros.

---

## Guia de estilo

-   Siga as **convenções atuais** do projeto e as **boas práticas** de desenvolvimento. Evite reinventar padrões.
-   **Comente e documente** suas mudanças. Outros desenvolvedores também trabalham nas mesmas áreas do projeto e precisam entender rapidamente o que foi feito.
-   Ao criar **novas funcionalidades**, **inclua testes unitários**. Eles ajudam a:
    1. Garantir que o código funciona corretamente
    2. Evitar regressões e reduzir o custo de manutenção futura
-   Correções de **bugs** também devem, sempre que possível, incluir testes — afinal, a presença de bugs indica que a cobertura atual pode ser insuficiente.
-   **Formate seu código** utilizando o _linter_ padrão do projeto.

---

## Setup do Ambiente

Para configurar o ambiente local de desenvolvimento, siga os passos abaixo:

1. Realize o **fork** do repositório.
2. Clone seu fork localmente:
    ```bash
    git clone https://github.com/seu-usuario/credit-simulator.git
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute os testes automatizados:
    ```bash
    npm test
    ```

---

## Processo de Desenvolvimento

Siga o fluxo abaixo para contribuir com novas funcionalidades ou correções:

1. Crie uma nova branch descritiva:
    ```bash
    git checkout -b feature/nova-funcionalidade
    ```
2. Desenvolva sua feature seguindo os **padrões arquiteturais** definidos no projeto.
3. Implemente **testes automatizados** para cobrir o novo código.
4. Execute o **lint**:
    ```bash
    npm run lint
    ```
5. Execute os **testes unitários**:
    ```bash
    npm test
    ```
6. Realize o commit seguindo o padrão **Conventional Commits**.
7. Abra um **Pull Request** no repositório principal.

---

## Padrões de Código

Este projeto segue rigorosamente os seguintes padrões:

-   **TypeScript**: Tipagem estrita habilitada e obrigatória.
-   **ESLint**: Configuração baseada no padrão do Next.js, com regras customizadas para manter consistência no código.
-   **Prettier**: Utilizado para formatação automática e padronizada.
-   **Conventional Commits**: Padrão de mensagens de commit para melhor rastreabilidade e automação de changelogs.

---

## Diretrizes de Código

Ao escrever ou revisar código, observe as seguintes diretrizes:

-   **Módulos por domínio** : Estruture os arquivos de forma coesa, agrupando funcionalidades por contexto de negócio.
-   **Componentização**: Mantenha componentes de UI pequenos, reutilizáveis e com responsabilidade única.
-   **Cobertura de testes**: Exigimos **mínimo de 80% de cobertura** para novas funcionalidades.
-   **Documentação técnica**: APIs públicas e contratos devem ser devidamente documentados para facilitar o consumo e manutenção.

---

## O que estamos procurando

-   Correções de bugs
-   Novas funcionalidades
-   Exemplos ou tutoriais
-   Testes automatizados

---

## Como contribuir

As principais formas de contribuir são através da abertura de [issues](https://github.com/whosramoss/credit-simulator/issues) ou do envio de [pull requests via fork](https://github.com/whosramoss/credit-simulator/network/members).

Você também pode participar de discussões, revisar PRs ou compartilhar sua experiência com a comunidade em canais públicos/chat.

Ao enviar um pull request, lembre-se de:

-   Fazer o _fork_ do repositório.
-   Verificar se suas alterações estão de acordo com o [guia de estilo](#guia-de-estilo) e os [padrões de código](#padrões-de-código).

---
