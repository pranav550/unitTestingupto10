import { CustomerReservation } from './CustomerReservation';
describe("Customer Reservation", ()=>{
    let CustomerService: CustomerReservation;
    beforeEach(()=>{
       CustomerService = new CustomerReservation();
    })
    afterEach(()=>{
       CustomerService= null;
    })
    it("should register Customer",()=>{
        let count = CustomerService.registerCustomer();
        console.log(count)
        expect(count).toEqual(11);
    })
    it("should unregister the customer", ()=>{
        let count = CustomerService.unregisterCustomer();
        expect(count).toEqual(9);
    })
    it("testing room is reserved or not", ()=>{
        let isReserved = CustomerService.reserveRoom();
        expect(isReserved).toBeTruthy();
    })
})