class Supoport {
    name;
    designation = 'support web Dev'
    address = 'Bd';
    constructor(name,address) {
        this.name = name
        this.address =address
    }
    stratSession() {
        console.log(this.name,'start a support Session');
    }
}


const shakib=new Supoport('shakib al hasan','america')
console.log(shakib);

shakib.stratSession()

