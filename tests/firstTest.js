const { Builder, By, Key, Browser } = require('selenium-webdriver');
const assert = require('assert');
var should = require('chai').should(); 

async function example(){

    //steps 
    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    
    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    
    //add a todo
    //o programa ira procurar o id do campo e ira inserir o dado 
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    //assert - ira buscar na lista (array) o ultimo item e ira retornar o texto presente nele 
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText()
        .then(function(value){
            return value 
    });
    
    // ** assert using node assertion 
    //ira checar duas strings combinam - recebe dois argumentos: 1 - o valor atual, 2 - valor esperado
    //o valor atual estara armazenado na variavel todoText
    //o valor esperado sera a variavel que estamos procurando "Learn Selenium"
    //assert.strictEqual(todoText, "Learn Selenium")

    //ira apresentar um erro, pois o valor atual:"Learn JavaScript" é diferente do valor esperado: "Learn Selenium" 
    assert.strictEqual(todoText, "Learn JavaScript") // Error
    
    // ** assert using chai should 
    //ira checar se o valor atual (todoText) é igual ao valor esperado ("Learn Selenium") 
    //todoText.should.equal("Learn Selenium");
    todoText.should.equal("Learn JavaScript"); //Error

    //close the browser 
    await driver.quit();
    //Using locators 
}
example();