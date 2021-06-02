describe("Array Test", ()=>{
    it("should array test using toEqual", ()=>{
        let arr1 = [1,2,3];
       expect(arr1).toEqual([1,2,3]);
    })
    it("should array test using toContain", ()=>{
        let arr = ["abc","cde","efg"];
        expect(arr).toContain("abc");
    })
})