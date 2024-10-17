import React from 'react';
import { add, multifly, firstNumberIsDevideBySecondNumberInThisFunction as divide } from '../../utilities/Calculator'; // jkhn kono aktah import korah function er name onk boro hoie jabhe tkhn amrah setah keh as use koreh chotto aktah name dite parih
const Sunglass = () => {
    const sum = add(3, 2)
    console.log(sum);
    const ghun = multifly(2, 7)
    console.log(ghun);
    const Vhag = divide(100, 2)
    console.log(Vhag);
    return (
        <div>

        </div>
    );
};

export default Sunglass;