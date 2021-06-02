describe("string matcher test", ()=>{
    it("test string tobe and ===",()=>{
        let str="Hello World";
        expect(str).toBe("Hello World")
    })
    it("test string not tobe and ===",()=>{
        let str="Hello World";
        expect(str).not.toBe("Hello Worldd")
    })

    it("test string toequal and ==", ()=>{
        let str= "Hello World";
        expect(str).toEqual("Hello World")
    })

    it("test string not equal and ==", ()=>{
        let str= "Hello World";
        expect(str).not.toEqual("cccccccccc")
    })
    it("test string toContain hello present in string", ()=>{
        let str = "Hello World";
        expect(str).toContain("Hello")
    })
    it("test string not toContain hello present in string", ()=>{
        let str = "Hello World";
        expect(str).not.toContain("Hella")
    })
    it("test string toMatch for regualr expression", ()=>{
        let str = "Hello 123";
        expect(str).toMatch(/\d+/);
        expect(str).toMatch("Hello");
    })
    it("test string nottoMatch for regualr expression", ()=>{
        let str = "Hello";
        expect(str).not.toMatch(/\d+/);
        expect(str).not.toMatch("Hellaaa");
    })
})