const WaterDrum = {
    color: 'white',
    hold: 'water',
    price: '200',
    isClean: true
}
// for find only key use below line pRocess
const keys = Object.keys(WaterDrum)
console.log(keys);

// for find only Value use below line pRocess
const vAlus = Object.values(WaterDrum)
console.log(vAlus);

// for find key and value both use below line pRocess
const pair = Object.entries(WaterDrum)
console.log(pair);

//freeze() do not allow to add / delete properties but Object. seal() allows modifying value of an existing property. For nested objects, we have to follow deep traversal and apply seal / frozen as needed.
Object.seal(WaterDrum)
Object.freeze(WaterDrum)

// for delete in property of object
delete WaterDrum.isClean
console.log(WaterDrum);

