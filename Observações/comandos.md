# Principais Comandos do Projeto 

* Iniciar o projeto
$ npm init

* Instalar o Selenium Webdriver
Link: https://www.npmjs.com/package/selenium-webdriver
$ npm install selenium-webdriver

* Setting up drivers
Link: https://www.npmjs.com/package/selenium-webdriver 
 - e confirmar o Path do computador 

* Rodar a aplicação 
$ node /test/firstTest.js 

* Baixar a extensão Code Runner e poderá rodar a aplicação de forma mais pratica e rapida.

* Instalar o Chai - library popular in node.js 
$ npm install chai
    - proporciona tres funçoes para escrever as nossas afirmacoes (assertions):
        - should
        - expect
        - assert 

* Instalar o Mocha
$ npm install mocha

* Rodar o Mocha no nosso projeto
- Iremos invocar o Mocha via terminal: 
    - npx (node package runner), 
    - mocha (especificar o pacote que queremos rodar),
    - --no-timeouts (por ser um codigo assincrono, precisa adicionar uma flag, por padrao o mocha tem 2 segundos de timeout)
    - (adicionando o caminho path onde o arquivo esta)
$ npx mocha --no-timeouts 'tests/*js'

- Por padrao o Mocha reconhece o diretorio "test", entao, precisamos renomear nossa parte de "tests" para "test"
$ npx mocha --no-timeouts

- Modificar o arquivo package.json, e adicionar o comando: 
  "scripts": {
    "test": "npx mocha --no-timeouts"
  },

- Apos essa modificaçao, rodar a aplicaçao no comando: 
$ npm test

* Rodar os testes no modo Parallel
- Link: https://www.npmjs.com/package/paralleljs
- adicionar no arquivo package.json a flag:
  "scripts": {
    "test": "npx mocha --no-timeouts --parallel"
  },

- Apos essa modificaçao, rodar a aplicaçao no comando: 
$ npm test

* Mochawesome Flags
- Link: https://www.npmjs.com/package/mochawesome
$ npm install mochawesome

- Adicionar no package.json, a flag:
  "scripts": {
    "test": "npx mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register"
  },
  
- Apos essa modificaçao, rodar a aplicaçao no comando: 
$ npm test

- Para receber as informacoes da aplicacao, sobre os erros, incluir no package.json, o --reporter-options recebe dois parametros: 
    1 muda o diretorio dos nosso reporters e o 2 muda o nome dos arquivos 

- Adicionar no package.json, a flag: 
mochawesome flags:
--reporter mochawesome --require mochawesome/register --reporter-options reportDir=customReportDir, reportFileName=customReportFileName

  "scripts": {
    "test": "mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register --reporter-options reportDir=/Users/daniele/Estudos/webdriverio-selenium-js-workspace/JavaScriptTestAutomationTutorial2021/seleniumDemo/testReports"
  },


* TESTING ON THE CLOUD
* Username & Access Key
- Fazer o login no site: https://www.lambdatest.com/
- E ira adquirir o username e access key, no link: https://www.lambdatest.com/capabilities-generator/
- Ira obter as informaçoes inseridas no capabilities.js

- Para visualizar os builds, acesse o link: https://accounts.lambdatest.com/dashboard



