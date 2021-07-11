
faker = require('faker');



class  FakeUser {
    constructor(store,orderID,customer,address)
    {
        this.store=faker.company.companyName();
        this.orderID=faker.random.uuid();
        this.customer=faker.name.findName();
        this.address=faker.address.city();
    }
}

module.exports=FakeUser;