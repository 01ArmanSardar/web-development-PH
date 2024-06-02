const BuyPhone = {
    name: 'samsung Glaxy',
    brand: 'Samsung',
    colur: 'blue',
    Price: 1000,
    MyBalance: 4000,
    treatDeh: function (amount) {
        this.MyBalance = this.MyBalance - amount
        return this.MyBalance
    }
}

const BalnceAfterTreat = BuyPhone.treatDeh(900)
console.log(BalnceAfterTreat);