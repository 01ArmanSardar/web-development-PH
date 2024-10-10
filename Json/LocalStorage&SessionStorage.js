// dynamic Vabhe local storage a key value set korlam
const addToLocalStorage = () => {
    const keyinput = document.getElementById('user-id')
    const key = keyinput.value

    const Valueinput = document.getElementById('user-value')
    const Value = Valueinput.value
    if (key && Value) {
        localStorage.setItem(key, Value)
    }
    keyinput.value = '';
    Valueinput.value = '';
}

// static vabhe local storage a key value set korlam
localStorage.setItem('userID', 90909434)

//local Storage value hisevhe kono array bha Object keh set korte hole json a convert koreh set korteh hobhe ,ar jodi local storage er value tekeh kono array bha object nite chai taile parse korteh hobhe 
const person={name:'arman',age:45,hobby:'cricket'}
localStorage.setItem('person',JSON.stringify(person))




