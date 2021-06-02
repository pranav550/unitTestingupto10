describe("toBe vs toEqual", ()=>{
    xit("should array test using toBe", ()=>{
        let a = {
            val:10
        }
        let b = {
            val:10
        }
       expect(a).toBe(b);
    })
    it("should array test using toEqual", ()=>{
        let a = {
            val:10
        }
        let b = {
            val:10
        }
       expect(a).toEqual(b);
    })
})