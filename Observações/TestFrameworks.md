# Intro to Test Frameworks 

Popular javascript frameworks include:
    - Jasmine
    - Jest
    - Mocha 

### Intro to Mocha 
- suporte de paralelização de teste para novas tentativas de teste, bem como relatórios de teste
- Mocha nos fornece duas funções principais que podemos usar ao escrever nossos testes.
    1 - describe
    describe("this is a describe block to group tests", function() {
    });

    2 - it function
    describe("this is a describe block to group tests", function() {
        it("this is a it block which represents our tests", function(){
            // Test code goes here 
        }
    });