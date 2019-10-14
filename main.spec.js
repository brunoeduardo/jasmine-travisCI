describe("mains.js", function (){
    describe("show version", function (){
        it("calls calculato.version", function(){
          spyOn(document, "getElementById").and.returnValue({
                innerText: null
            });

            const spy = spyOnProperty(Calculator.prototype, "version", "get").and.returnValue(
                Promise.resolve()
            )
            
            showVersion();

            expect(spy).toHaveBeenCalled();

        })
    });
});