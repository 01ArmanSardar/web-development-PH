function goodMessages(name, functionName) {
    functionName(name)
}


function goodMorning(name) {
    console.log('good mornings', name);
}

goodMessages('shakib', goodMorning)