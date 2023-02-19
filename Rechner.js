// Importing required libraries
const plot = require('nodeplotlib');

// Here the program will prompt the user to provide input data
let kapital = parseInt(prompt('Welches Kapital legen sie an?: '));
let zinsen = parseInt(prompt('Zu welchem Zinssatz legen Sie es an?: '));
let jahre = parseInt(prompt('Über wie viele Jahre wollen Sie es anlegen?: '));

// Creating empty arrays that will be populated using the kapitalWert function
let jahresarray = [];
let kapitalarray = [];
let zinsarray = [];

// Recursive function that calculates the total capital value
function kapitalWert(kapital, zinsen, jahre) {
    if (jahre == 1) {
        zinsarray.push((zinsen / 100) * kapital);
        kapitalarray.push(kapital);
        jahresarray.push(jahre);
        kapital = kapital + ((zinsen / 100) * kapital);
        return kapital;
    } else {
        zinsarray.push((zinsen / 100) * kapital);
        kapitalarray.push(kapital);
        jahresarray.push(jahre);
        kapital = kapital + ((zinsen / 100) * kapital);
    }
    return kapitalWert(kapital, zinsen, jahre - 1);
}
let ausgabe = kapitalWert(kapital, zinsen, jahre);

// Displaying the total capital with received interest payments
console.log('Ihr erhaltenes Endkapital nach ' + jahre + ' Jahren ist: ' + ausgabe);

// Displaying the content of the arrays
console.log('Kapital: ' + kapitalarray);
console.log('Jahre: ' + jahresarray);
console.log('Erhaltenen Zinszahlungen: ' + zinsarray);

// Calculating the sum of received interest payments
let sum = zinsarray.reduce(function(a, b) {
    return a + b;
}, 0);
console.log('Summe der erhaltenen Zinszahlungen: ' + sum);

// Preparing data for the visualization
let data = [
    { x: jahresarray, y: kapitalarray, type: 'bar', name: 'Kapital' },
    { x: jahresarray, y: zinsarray, type: 'bar', name: 'Zinsen' }
];

// Defining the layout of the graph
let layout = {
    title: 'Zinseszinsrechner',
    xaxis: { title: 'Zeitraum in Jahren' },
    yaxis: { title: 'Gesamt Ertrag' },
    barmode: 'stack'
};

// Plotting the graph
plot.newPlot('myDiv', data, layout);
