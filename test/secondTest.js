const { Builder, By, Key, Browser } = require('selenium-webdriver');
const ltCapabilities = require('../capabilities');
const assert = require('assert');
var should = require('chai').should();

//Adicionando o Mocha - describe block
describe("add another todo tests", function () {

    // Testando a aplicaçao no Cloud
    var driver;

    //username
    const USERNAME = ltCapabilities.capabilities.user;

    //key
    const KEY = ltCapabilities.capabilities.accessKey;

    //host
    const GRID_HOST = 'hub.lambdatest.com/wd/hub';

     // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
     const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

    //We're going to build our driver instance 
    //iremos construir a instancia do nosso driver

    beforeEach(function(){
        ltCapabilities.capabilities.name = this.currentTest.title; //ira inserir no titulo do test, para identifica-lo no Cloud

        driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();
    });

    afterEach(async function(){
        //close the browser 
        await driver.quit();
    });


    it("successfully adds a another todo to application", async function () {

        //let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        //o programa ira procurar o id do campo e ira inserir o dado 
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert - ira buscar na lista (array) o ultimo item e ira retornar o texto presente nele 
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText()
            .then(function (value) {
                return value
            });

        todoText.should.equal("Learn Selenium");

        //close the browser 
        //await driver.quit();
    });

    it("Adding a new test for reporting", async function () {

        //let driver = await new Builder().forBrowser("chrome").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        //o programa ira procurar o id do campo e ira inserir o dado 
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn JavaScript", Key.RETURN);

        //assert - ira buscar na lista (array) o ultimo item e ira retornar o texto presente nele 
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText()
            .then(function (value) {
                return value
            });

        todoText.should.equal("Learn JavaScript");

        //close the browser 
        //await driver.quit();
    });
});
