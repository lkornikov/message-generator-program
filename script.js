// Generate a random number in a range min - max-1
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}
// Get a random date in a range start - end
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
// Create a new prediction
function makePrediction() {
    //line 1
    const randomData = [
        ["senior", "junior", "lead"],
        ["developer", "tester", "full-stack developer", "software engineer", "analyst", "consultant"],
        ["ABAP", "Java", "JavaScript", "Fiori", "C++", "Python", "C#", "Fortran", "Basic"]
    ];
    //lines 2-3
    const otherRandomData = {
        sentance1 : ["It is certain.", "But I'm not sure", "I can be wrong", "You bet", "It is highly likely", "It is really possible", "Sorry, it's not possible"],
        sentance2 : [ ["don't need","anymore"], ["need", "much more"]]
    }
    //generate a date
    const d = randomDate(new Date(), new Date(2099, 0, 1));
    let dateShort = d.toLocaleDateString("en-US");
    console.log(d);

    //create lines
    let level = randomData[0][Math.floor(Math.random() * randomData[0].length)];
    let position = randomData[1][Math.floor(Math.random() * randomData[1].length)];
    let language = randomData[2][Math.floor(Math.random() * randomData[2].length)];

    let elText = document.getElementById("forecast1");
    elText.innerText = `On date ${dateShort} you will be ${level} ${language} ${position}.`;

    elText = document.getElementById("forecast2");
    elText.innerText = `${otherRandomData.sentance1[getRandomNumber(0,otherRandomData.sentance1.length)]}.`;

    elText = document.getElementById("forecast3");
    let idx = getRandomNumber(0,otherRandomData.sentance2.length);
    elText.innerText = `You ${otherRandomData.sentance2[idx][0]} to practice ${otherRandomData.sentance2[idx][1]}.`;
}

// register an event onClick for the button
if (typeof document !== 'undefined') {
    let elButton = document.getElementById("myButton");
    elButton.onclick = makePrediction;
} else {
  console.log("run node.js");
  console.log("please, open index.html");
}

