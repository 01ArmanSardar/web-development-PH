const getStoredCart=()=>{//  2. akhne deklam jeh loacalStorage a cart name er kono key ache kinah jodi takhe tahole setar value keh json a convert korbho jodi nah takhe tahole a function aktah empty array return korbhe
    const storedCartString=localStorage.getItem('cart'); 
    if(storedCartString){
        return JSON.parse(storedCartString)

    }
    return []
}


const saveCartTols=cart=>{
    const cartStrinified=JSON.stringify(cart); // 4. cart/value tah keh localStorage a save korar jonno stringify korteh hobhe
    localStorage.setItem('cart',cartStrinified) // 5. at last localStorage a save koreh dibho

}

const addToLS=id=>{
    const cart=getStoredCart();// 1. getStoredCart() function korle at first kintu kono value takbhe nah amrah aktah empty array pabho
    cart.push(id) // 3 .then oi array teh amrah amder id parameter tah maneh element/value push korbho
    saveCartTols(cart)
}

const removeFromLS=id=>{
    const cart=getStoredCart();
    //removing every id
    const remaining=cart.filter(idx=>idx!==id);
    saveCartTols(remaining)

}

export {addToLS,getStoredCart,removeFromLS}