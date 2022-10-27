function check() {
    const randomData = [
        ["senior", "junior", "lead"],
        ["developer", "tester", "full-stack developer", "software engineer", "analyst", "consultant"],
        ["ABAP", "Java", "JavaScript", "Fiori", "C++", "Python", "C#", "Fortran", "Basic"]
    ];
    const d = randomDate(new Date(), new Date(2099, 0, 1));
    let dateShort = d.toLocaleDateString("en-US");
    console.log(d);

    let level = randomData[0][Math.floor(Math.random() * randomData[0].length)];
    let position = randomData[1][Math.floor(Math.random() * randomData[1].length)];
    let language = randomData[2][Math.floor(Math.random() * randomData[2].length)];

    let elText = document.getElementById("forecast");
    elText.innerText = `On date ${dateShort} you will be ${level} ${language} ${position}.`;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// register an event onClick for the button
let elButton = document.getElementById("myButton");
elButton.onclick = check;
