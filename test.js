const presentVerbs = [
    { word: 'running', syllables: 2 },
    { word: 'jumping', syllables: 2 },
    { word: 'flying', syllables: 2 },
    { word: 'making', syllables: 2 },
    { word: 'dancing', syllables: 2 },
    { word: 'calling', syllables: 2 },
    { word: 'doing', syllables: 2 },
    { word: 'coding', syllables: 2 },
    { word: 'smiling', syllables: 2 },
    { word: 'being', syllables: 2 },
    { word: 'forgetting', syllables: 3 },
    { word: 'cleaning', syllables: 2 },
    { word: 'beginning', syllables: 3 },
    { word: 'drawing', syllables: 2 },
    { word: 'programming', syllables: 3 },
    { word: 'becoming', syllables: 3 },
    { word: 'concentrating', syllables: 4 },
    { word: 'pretending', syllables: 3 },
    { word: 'imagining', syllables: 4 },
    ];

const nouns = [
    { word: 'tree', syllables: 1 },
    { word: 'cat', syllables: 1 },
    { word: 'dog', syllables: 1 },
    { word: 'bear', syllables: 1 },
    { word: 'frog', syllables: 1 },
    { word: 'jar', syllables: 1 },
    { word: 'eye', syllables: 1 },
    { word: 'bird', syllables: 1 },
    { word: 'spoon', syllables: 1 },
    { word: 'paper', syllables: 2 },
    { word: 'rabbit', syllables: 2 },
    { word: 'keyboard', syllables: 2 },
    { word: 'iron', syllables: 2 },
    { word: 'flower', syllables: 2 },
    { word: 'garden', syllables: 2 },
    { word: 'window', syllables: 2 },
    { word: 'water', syllables: 2 },
    { word: 'fire', syllables: 2 },
    { word: 'bubble', syllables: 2 },
    { word: 'knowledge', syllables: 2 },
    { word: 'hamster', syllables: 2 },
    { word: 'fantasy', syllables: 3 },
    { word: 'computer', syllables: 3 },
    { word: 'animal', syllables: 3 },
    { word: 'umbrella', syllables: 3 },
    ];

const adjectives = [
    { word: 'red', syllables: 1 },
    { word: 'blue', syllables: 1 },
    { word: 'wet', syllables: 1 },
    { word: 'dry', syllables: 1 },
    { word: 'cold', syllables: 1 },
    { word: 'hot', syllables: 1 },
    { word: 'fat', syllables: 1 },
    { word: 'thin', syllables: 1 },
    { word: 'little', syllables: 1 },
    { word: 'big', syllables: 1 },
    { word: 'short', syllables: 1 },
    { word: 'plain', syllables: 1 },
    { word: 'tall', syllables: 1 },
    { word: 'proud', syllables: 1 },
    { word: 'silver', syllables: 2 },
    { word: 'lazy', syllables: 2 },
    { word: 'crimson', syllables: 2 },
    { word: 'golden', syllables: 2 },
    { word: 'gentle', syllables: 2 },
    { word: 'fierce', syllables: 2 },
    { word: 'handsome', syllables: 2 },
    { word: 'immense', syllables: 2 },
    { word: 'ominous', syllables: 3 },
    { word: 'emerald', syllables: 3 },
    { word: 'elegant', syllables: 3 },
    { word: 'glamorous', syllables: 3 },
    { word: 'mysterious', syllables: 4 },
    ];

const adverbs = [
    { word: 'nicely', syllables: 2 },
    { word: 'safely', syllables: 2 },
    { word: 'nearly', syllables: 2 },
    { word: 'rudely', syllables: 2 },
    { word: 'kindly', syllables: 2 },
    { word: 'oddly', syllables: 2 },
    { word: 'seldom', syllables: 2 },
    { word: 'never', syllables: 2 },
    { word: 'truly', syllables: 2 },
    { word: 'softly', syllables: 2 },
    { word: 'quickly', syllables: 2 },
    { word: 'inwardly', syllables: 3 },
    { word: 'bitterly', syllables: 3 },
    { word: 'rightfully', syllables: 3 },
    { word: 'cleverly', syllables: 3 },
    { word: 'youthfully', syllables: 3 },
    { word: 'awkwardly', syllables: 3 },
    { word: 'cheerfully', syllables: 3 },
    { word: 'sheepishly', syllables: 3 },
    { word: 'lovingly', syllables: 3 },
    { word: 'aggresively', syllables: 4 },
    { word: 'mysteriously', syllables: 5 },
    ];       




//general funciton to select random element at index[n]
const r = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

//specific functions for each type of word
const verbFunc = () => {
    let index = Math.floor(Math.random() * presentVerbs.length);
    return presentVerbs[index];
}

const nounFunc = () => {
    let index = Math.floor(Math.random() * nouns.length);
    return nouns[index];
}

const adjectiveFunc = () => {
    let index = Math.floor(Math.random() * adjectives.length);
    return adjectives[index];
}

const adverbFunc = () => {
    let index = Math.floor(Math.random() * adverbs.length);
    return adverbs[index];
}

const articleFunc =() => {
    let art = Math.floor(Math.random) * 2;
const vowels = ["a", "e", "i", "o", "u"];
if (art == 1) {
    art = "the";
} else {
    if (vowels.includes(sentence[0])) {
        art = "an";
    } else {
        art = "a";
    }
}
return art;
}

//constants
let syllableCount = 0;
let sentence = "";
let syllabletest = Boolean;

//basic modular word adder. can select between different types of words and append or prepend
//repeats selection if goes over max syllables allowed
// and returns true and prints sentence if total syllables equal max syllables
const addElement = (func1, func2, func3, numFuncs=1, preApp, maxSyllables) => {
    let newElement = {};
    let selector = Math.floor(Math.random() * numFuncs);
    do{
    if(numFuncs > 1) {
        if(selector == 0) {
            newElement = func1();
        } else if(selector == 1) {
            newElement = func2();
        } else if(selector == 2) {
            newElement = func3();
        }
    } 
        else {
            newElement = func1()
        }    
        syllableCount = syllableCount + newElement.syllables;}
        while (syllableCount < 5);

        if(preApp === "pre") {
            sentence = newElement.word + " " + sentence
        } else if 
            (preApp === "app") {
                sentence = sentence + " " + newElement.word
            }
        
        if (syllableCount === 5) {
            syllabletest = true;
            console.log("complete 1st line: '" + sentence + ".'");
        } else {
            syllabletest = false;
            console.log("incomplete 1st line: '" + sentence + "'. Add more elements");
        }
}

addElement(nounFunc, verbFunc, null, 2, "app", 5);