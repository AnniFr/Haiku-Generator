//i take it you already have node js and VSCode or another text editor
//can run from the terminal in VSCode with node sentenceGen


//some test arrays
const articleArr = ["a", "an", "the"]
const adjectiveArr = ["fat", "awesome", "orange", "oblivious", "lazy", "fast", "cold", "blue"]
const nounArr = ["car", "pig", "person", "fish", "rope", "bird"]
const prepositionArr = ["like", "throguh", "before"]
const verbArr = ["ran", "sank", "flew", "drank", "swam", "sang", "fell"]

//basic function to select item at random index of an array
const randomArrayIndexPicker = (arr) => {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

//some functions to pick each type of word (not sure this is really necessary)
const rArticle = () => {
        return randomArrayIndexPicker(articleArr);
    }

const rAdjective = () => {
        return randomArrayIndexPicker(adjectiveArr);
    }

const rNoun = () => {
        return randomArrayIndexPicker(nounArr);
    }

const rVerb= () => {
        return randomArrayIndexPicker(verbArr);
    }

const rPreposition = () => {
        return randomArrayIndexPicker(prepositionArr);
    }



//sentence generator based on the above functions
const sentenceGenerator = () => {
    return rArticle() + ' ' + rAdjective() + ' ' + rNoun() + ' ' + rVerb() + ' ' + rPreposition() + ' ' + rArticle() + ' ' + rAdjective() + ' ' + rNoun();
}

console.log("random sentence: " + sentenceGenerator());

//nounPhrase function where it corrects between a/an depending on the first letter of hte adjective
const nounPhrase = () => {
    let noun = rNoun();
    let adjective = rAdjective();
    let rPrep = Math.floor(Math.random)*2;
    const vowels =["a", "e", "i", "o", "u"]
    if(rPrep == 1) {
        rPrep = "the" } else {
            if(vowels.includes(adjective[0])) {
                rPrep = "an";
            }
                    else { 
                        rPrep = "a";
                    }
                }
    return rPrep + " " + adjective + " " + noun
}

//i'm tired....
const verbPhrase = () => {

}
console.log("random noun phrase: " + nounPhrase());