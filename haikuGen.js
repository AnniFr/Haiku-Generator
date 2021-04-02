const presentVerbs = [
    { word: 'eats', syllables: 1},
    { word: 'sees', syllables: 1},
    { word: 'takes', syllables: 1},
    { word: 'runs', syllables: 1},
    { word: 'bakes', syllables: 1},
    { word: 'tastes', syllables: 1},
    { word: 'shouts', syllables: 1},
    { word: 'probes', syllables: 1},
    { word: 'chokes', syllables: 1},
    { word: 'licks', syllables: 1},
    { word: 'speaks', syllables: 1},
    { word: 'hears', syllables: 1},
    { word: 'flees', syllables: 1},
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
    { word: 'fierce', syllables: 1 },
    { word: 'handsome', syllables: 2 },
    { word: 'immense', syllables: 2 },
    { word: 'ominous', syllables: 3 },
    { word: 'emerald', syllables: 3 },
    { word: 'elegant', syllables: 3 },
    { word: 'glamorous', syllables: 3 },
    { word: 'mysterious', syllables: 4 },
    ];

const adverbs = [
    { word: 'fast', syllables: 1 },
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

    const filler = [
    { word: 'back', syllables: 1 },
    { word: 'away', syllables: 2 },
    { word: 'home', syllables: 2 },
    { word: 'beyond', syllables: 2 },
    { word: 'below', syllables: 2 },
    { word: 'underneath', syllables: 3 },];










//general funciton to select random element at index[n]
const r = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

//generic function which takes the kind of word needed as an argument. 
const wordFunc = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


const pGen = (percent) => {
    if (Math.floor(Math.random() * (100 / percent)) === 0) {
        return true;
    } else {
        return false;
    }
}


//function for lines 1 & 3 
const line1 = () => {
    let syllableCount = 0
    let testCount
    let word1;
    let word2;
    let word3;
    let word4;
    let word5;

    //word 1
    word1 = wordFunc(nouns);
    let sentence = word1.word;
    syllableCount = word1.syllables;
    //test if 5 syllables reached
    if (syllableCount == 5) {return sentence} else {

        //word 2
    if (pGen(30) === true) {
        let art = Math.floor(Math.random) * 2;
        const vowels = ["a", "e", "i", "o", "u"]
        if (art == 1) {
            art = {word: "the", syllables: 1}
        } else {
            if (vowels.includes(sentence[0])) {
                art = {word: "an", syllables: 1}
            } else {
                art = {word: "a", syllables: 1}
            }
        }
        word2 = art
    } else {
        do{
        word2 = wordFunc(adjectives);
        testCount = syllableCount + word2.syllables;}
        while(testCount > 5)
    }

    syllableCount = syllableCount + word2.syllables;
    sentence = `${word2.word} ${sentence}`;
    if (syllableCount == 5) {return sentence} else {

        //word3 
        do{
            word3 = wordFunc(presentVerbs);
            testCount = syllableCount + word3.syllables;}
            while(testCount > 5)

        syllableCount = syllableCount + word3.syllables;
        sentence = `${sentence} ${word3.word}`;
        if (syllableCount == 5) {return sentence} else {

            //word 4
            do{
                word4 = wordFunc(adverbs);
                testCount = syllableCount + word4.syllables;}
                while(testCount > 5)
    
            syllableCount = syllableCount + word4.syllables;
            sentence = `${sentence} ${word4.word}`;
            if (syllableCount == 5) {return sentence};
        }
    }
}
}


const line2 = () => {
    let syllableCount = 0
    let testCount
    let word1;
    let word2;
    let word3;
    let word4;
    let word5;

    //word 1
    word1 = wordFunc(nouns);
    let sentence = word1.word;
    syllableCount = word1.syllables;

    //test if 7 syllables reached
    if (syllableCount == 7) {return sentence} else {

        //word 2
    if (pGen(50) === true) {
        let art = Math.floor(Math.random) * 2;
        const vowels = ["a", "e", "i", "o", "u"]
        if (art == 1) {
            art = {word: "the", syllables: 1}
        } else {
            if (vowels.includes(sentence[0])) {
                art = {word: "an", syllables: 1}
            } else {
                art = {word: "a", syllables: 1}
            }
        }
        word2 = art
    } else {
        do{
        word2 = wordFunc(adjectives);
        testCount = syllableCount + word2.syllables;}
        while(testCount > 7)

    }

    syllableCount = syllableCount + word2.syllables;
    sentence = `${word2.word} ${sentence}`;
    if (syllableCount == 7) {return sentence} else {

        //word3 
        do{
            word3 = wordFunc(presentVerbs);
            testCount = syllableCount + word3.syllables;}
            while(testCount > 7)

        syllableCount = syllableCount + word3.syllables;
        sentence = `${sentence} ${word3.word}`;
        if (syllableCount == 7) {return sentence} else {

            //word 4
            do{
                word4 = wordFunc(adverbs);
                testCount = syllableCount + word4.syllables;}
                while(testCount > 7)
    
            syllableCount = syllableCount + word4.syllables;
            sentence = `${sentence} ${word4.word}`;
            if (syllableCount == 7) {return sentence} else {

                //word 5
                do{
                    word5 = wordFunc(filler);
                    testCount = syllableCount + word5.syllables;}
                    while(testCount > 7)
        
                syllableCount = syllableCount + word5.syllables;
                sentence = `${sentence} ${word5.word}`;
                if (syllableCount == 7) {return sentence}

        }
    }
}
}
}

const createHaiku = () => {
    let haiku1 = line1();
    haiku1 = haiku1.charAt(0).toUpperCase() + haiku1.slice(1);
    let haiku2 = line2();
    haiku2 = haiku2.charAt(0).toUpperCase() + haiku2.slice(1);
    let haiku3 = line1();
    haiku3 = haiku3.charAt(0).toUpperCase() + haiku3.slice(1) + '.';
    document.getElementById('line1').innerHTML = haiku1;
    document.getElementById('line2').innerHTML = haiku2;
    document.getElementById('line3').innerHTML = haiku3;
    //return [haiku1, haiku2, haiku3];
    
}