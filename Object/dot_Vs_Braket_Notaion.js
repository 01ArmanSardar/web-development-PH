const WaterDrum = {
    color: 'white',
    hold: 'water',
    price: '200',
    isClean: true,
    242:'CountryCode-BANGLADESH'
}

//amrha object er kono aktah property caileh . dot notation die acces korte parih abr braket Notation dieo use korteh parih
const color=WaterDrum.color
console.log(color);

const color2=WaterDrum['color']
console.log(color2);

// Object er key jodhi string nah hoie onno kichu hoi tahole kinut amrah . dot notation die acces korte parih nah jemon key jodi kono number hoi tahole amrah . dot die acces korteh parih nah tkhn amader braket notation use korteh hoi ,Example below
const countryCode=WaterDrum[242]
console.log(countryCode);