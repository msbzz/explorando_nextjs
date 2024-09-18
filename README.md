# Explorando nextjs

    Este projeto é fruto do curso de 'Next.js: explorando o framework' da plataforma ALURA


  ## Introdução
   
- Este projeto é voltado ao estudo basico de performance de aplicações **Next Js** ,  destacando sua popularidade crescente e como ele complementa o React, ajudando a resolver questões de SEO, performance e web vitals.

   
## Apresentação do projeto

- O projeto se concentra em duas páginas pré-definidas, e o foco principal não está tanto em explorar cada metodologia ou detalhar o desenvolvimento de cada componente, mas em otimizar a performance para proporcionar uma melhor experiência ao usuário. Isso inclui aspectos como SEO, integração de scripts externos, gerenciamento de CSS e carregamento de arquivos estáticos, conforme discutido ao longo do conteúdo do curso. 

      

 ![projeto](info/apresentacao.gif)
 

# Configurações do Ambiente
## Pré-requisitos

Antes de iniciar, você precisa ter o seguinte instalado no seu ambiente de desenvolvimento:

- **Node.js**: Você pode baixar e instalar o Node.js a partir deste link: [Node.js Download](https://nodejs.org/pt). Ele é necessário para executar o projeto e gerenciar pacotes.
- **Conta no Google Analytics**: Este projeto requer uma conta no **Google Geo Analytics** para o monitoramento. Se você não possui uma, siga as instruções em [Google Analytics](https://analytics.google.com/) para criar uma.
- **Conta no Ngrok**: O Ngrok permite expor sua aplicação local para a internet, útil para integrar com o Google Analytics. Crie uma conta no [Ngrok](https://ngrok.com/) e ative o serviço.
 
 ## Instalação do Projeto

### 1. Clonar o Repositório

Primeiramente, faça o download do código fonte deste repositório no GitHub utilizando o comando:

```bash
git clone https://github.com/msbzz/explorando_nextjs.git
```

### 2. Instalar as Dependências

Navegue até a pasta do projeto e instale todas as dependências necessárias utilizando o **npm** (que é instalado junto com o Node.js):

```bash
cd explorando_nextjs
npm install
```

### 3. Criar o Arquivo `.env.local`

O Next.js possui suporte nativo para variáveis de ambiente através de um arquivo `.env.local`. Crie um arquivo chamado `.env.local` na raiz do seu projeto e adicione a variável de ambiente **NEXT_PUBLIC_GOOGLE_ANALYTICS** para armazenar a chave do Google Analytics.

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS=seu-google-analytics-id
```

> **Nota**: Esta chave é necessária para integrar o projeto ao Google Geo Analytics.

## Aplicativos de Interface de Usuário (IU)

Neste projeto utilizei o **vscode** mas é compatível com qualquer editor de código   

- **Visual Studio Code**: Um editor leve e poderoso para desenvolvimento de aplicações web. Você pode baixá-lo [aqui](https://code.visualstudio.com/).
 
## Variáveis de Ambiente Utilizadas

No projeto, a principal variável de ambiente é:

- `NEXT_PUBLIC_GOOGLE_ANALYTICS`: A chave fornecida pelo Google Analytics que permite monitorar as métricas de uso do site.

## Google Analytics (Geo Analytics)

Este projeto utiliza o Google Geo Analytics para demonstrar monitoramento de tráfego e análise de dados. Você precisa:

1. Criar uma conta no [Google Analytics](https://analytics.google.com/).
2. Criar uma nova **propriedade** no Google Analytics e obter o **ID de acompanhamento** (Tracking ID) para configurá-lo na variável de ambiente `NEXT_PUBLIC_GOOGLE_ANALYTICS`.
3. Certifique-se de configurar corretamente o **fluxo de dados** no painel do Google Analytics para coletar dados de acesso da aplicação.

## Ngrok - Expor a Aplicação Localmente

Para expor seu ambiente de desenvolvimento local (em localhost) para a internet e integrar com o Google Analytics, siga os passos abaixo para usar o Ngrok:

1. **Crie uma conta** no [Ngrok](https://ngrok.com/).
2. Após criar a conta, **baixe e instale** o Ngrok.
3. Ative o túnel local executando o seguinte comando na pasta do seu projeto:
   
   ```bash
   ngrok http 3000
   ```

   > **Nota**: Isso irá criar um túnel para expor a porta `3000` (onde o Next.js roda por padrão) para um domínio público do Ngrok.

4. Use o URL fornecido pelo Ngrok para testar a integração com o Google Analytics.

## Executando o Projeto

Com todas as dependências instaladas e as variáveis de ambiente configuradas, você pode iniciar o servidor de desenvolvimento do Next.js com o comando:

```bash
npm run dev
```

O projeto estará acessível em `http://localhost:3000` e, com o Ngrok ativado, também estará acessível por meio de um domínio público gerado automaticamente.

 
 
 ### Tópicos abordados no curso

 - O que é Next.js
 - A criar um projeto Next.js
 - Componente Link
 - Como buildar um projeto Next.js
 - SEO no Next.js
 - Comando 'create-next-app'
 - Arquitetura de aplicação
 - Arquivos estáticos
 - Exemplo 'getStaticProps'
 - Exemplo 'getServerSideProps'

  ### Funcionalidades estudadas no projeto


  
**1. Inspeção de Desempenho com o Google Chrome:**
Utilizando as "Ferramentas de Desenvolvedor" do Google Chrome, foi analisado o desempenho da página, especialmente no que diz respeito ao tempo de carregamento de recursos e às solicitações de rede. Esse processo permitiu a identificação de possíveis gargalos e oportunidades de otimização.

**2. Integração ao Google Analytics:**
A integração ao Google Analytics foi configurada para monitorar usuários ativos na aplicação, além de fornecer métricas importantes como o tempo de engajamento médio e a quantidade de novos usuários. Essa ferramenta é essencial para entender o comportamento dos visitantes e melhorar a experiência do usuário.

**3. Utilização do Ngrok:**
Foi utilizada a ferramenta Ngrok para expor servidores locais a uma URL pública, permitindo a visualização e testes de aplicações em desenvolvimento de maneira prática e segura, sem a necessidade de publicar o projeto em um servidor.

**4. Introdução ao Deploy na Vercel:**
A Vercel é uma plataforma de hospedagem otimizada para projetos front-end, especialmente os construídos com Next.js. Através da integração com o GitHub, o monitoramento e as atualizações do deploy são feitos de forma automática. Sempre que uma alteração é enviada ao repositório no GitHub, a Vercel realiza um novo deploy, garantindo que a versão mais recente da aplicação esteja disponível de maneira rápida e eficiente.
 
