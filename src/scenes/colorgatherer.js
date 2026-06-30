export const colorgatherer = {
    choices: []
};

export function buildkey() {
    var key = '';
    const choices = colorgatherer.choices;
    for(var i=0,  item; item = choices[i]; i++){
        if(choices[i].length==2 && choices[i]!='si'){
            key = choices[i][0];
        }else if(choices[i].length==3){
            key = key+choices[i];
        }
    }
    return key;
}

export function buildFinalkey() {
    var key = '';
    const choices = colorgatherer.choices;
    for(var i=0,  item; item = choices[i]; i++){
        if(choices[i]=='siet' || choices[i]=='si'){
            key = buildkey()+choices[i];
        }
    }
    return key;
}


export function addBackground(bg) { 
    return bg+buildkey();
}

export function addFinalBackground(bg) { 
    return bg+buildFinalkey();
}