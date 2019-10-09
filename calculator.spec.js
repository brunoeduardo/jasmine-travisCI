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
    });
});