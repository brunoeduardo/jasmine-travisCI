describe('calculator.js', () => {
    describe('Calculator', () => {
            let calculator;
            
            beforeEach(()=> {
                 calculator = new Calculator();
            });

            it('should add numbers to total', () =>{
                calculator.add(5);

                expect(calculator.total).toBe(5)
            });

            it('should subtract numbers to total', () =>{
                calculator.total = 30;
                calculator.subtract(5);

                expect(calculator.total).toBe(25);
            });

            it('should multiply numbers to total', () =>{
                calculator.total = 20;

                calculator.multiply(2);

                expect(calculator.total).toBe(40);
            });

            it('should divide numbers to total', () =>{
                calculator.total = 10;

                calculator.divide(2);

                expect(calculator.total).toBe(5);
            });

            it('should init total', function () {
                const calculator = new Calculator();

                expect(calculator.total).toBe(0);
                expect(calculator.total).toBeFalsy();
            });

            it('constructor exist', function(){
                const calculator = new Calculator();
                const calculator2 = new Calculator();

                expect(calculator).toBeTruthy();
                expect(calculator2).toBeTruthy();
                expect(calculator).toEqual(calculator2);
            });

            it('total', function (){
                const calculator = new Calculator();
                calculator.total = 80;

                expect(calculator.add(20)).toBe(100);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
            });


    });
    
    describe("get version", function() {
       it("external version", async function (done){
           const calculator = new Calculator();
           spyOn(window, "fetch").and.returnValue(Promise.resolve(
               new Response('{"version": "0.1"}')
           ));

            const version = await calculator.version
               expect(version).toBe("0.1");

               done();
       });
    });
});