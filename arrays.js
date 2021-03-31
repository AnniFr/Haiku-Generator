//A haiku is a short three line poem where the number of syllables per line must always be 5,7,5
//random generator creates sentences and restricts them to these rules
//each word is an object, with a key describing number of syllables so we can check this is right

const futureVerbs = [
    { word: 'run', syllables: 1 },
    { word: 'jump', syllables: 1 },
    { word: 'fly', syllables: 1 },
    { word: 'make', syllables: 1 },
    { word: 'dance', syllables: 1 },
    { word: 'call', syllables: 1 },
    { word: 'do', syllables: 1 },
    { word: 'code', syllables: 1 },
    { word: 'smile', syllables: 1 },
    { word: 'be', syllables: 1 },
    { word: 'forget', syllables: 2 },
    { word: 'clean', syllables: 1 },
    { word: 'begin', syllables: 2 },
    { word: 'draw', syllables: 1 },
    { word: 'program', syllables: 2 },
    { word: 'become', syllables: 2 },
    { word: 'concentrate', syllables: 3 },
    { word: 'pretend', syllables: 2 },
    { word: 'imagine', syllables: 3 },
    ];

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


//access key of object in the array using arrayName[index of object].key
console.log(`When ${nouns[10].word}s ${futureVerbs[14].word},`)
console.log(`We will ${adverbs[18].word} ${futureVerbs[17].word}`)
console.log(`That we are ${presentVerbs[8].word}.`)