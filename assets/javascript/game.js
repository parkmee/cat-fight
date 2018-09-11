var cats = {
    fluffy: {
        name: "Fluffy",
        imgName: "fluffy",
        hp: 345,
        attack: 29,
    },
    gus: {
        name: "Gus",
        imgName: "gus",
        hp: 280,
        attack: 34,
    },
    princess: {
        name: "Princess",
        imgName: "princess",
        hp: 400,
        attack: 26,
    },
    minx: {
        name: "Minx",
        imgName: "minx",
        hp: 150,
        attack: 23,
    },
    mittens: {
        name: "Mittens",
        imgName: "mittens",
        hp: 325,
        attack: 36,
    },
    mrCat: {
        name: "Mr. Cat",
        imgName: "mr_cat",
        hp: 275,
        attack: 40,
    },
    tiger: {
        name: "Tiger",
        imgName: "tiger",
        hp: 175,
        attack: 55,
    },
}

// cat arrays
var catRoster = [];
var playersCat = [];
var defenderCat = [];
var defeatedCats = [];

// initialize game with all cats in cat-roster box
var newGame = true;
var catRosterBox = $("#cat-roster-box");

if (newGame) {
    // populate cat roster array
    for (var i in cats) {
        catRoster.push(cats[i]);
    }
    showRosterLineup();
}

var counter = 0;

function showRosterLineup() {
    for (var j = 0; j < catRoster.length; j++) {
        // create new div elements with images for each cat in the roster
        var catRosterTile = $("<div>")
            .addClass("border border-dark d-inline-block cat-roster-tile")
            .attr('id', "cat-"+[j])
            .html("<img src=assets/images/" + catRoster[j].imgName + ".jpg class='cat-roster-img'><p class='cat-stats cat-names'>" + catRoster[j].name + "</p><p class='cat-stats'>HP: " + catRoster[j].hp + "</p>");

        // determine how to add unique ID to each tile
        // append catRosterImg div elements to catRosterBox in html
        catRosterBox.append(catRosterTile);
    }
}

// on first click, select clicked cat for player and move picture/stats to selected-cat-box
$(".cat-roster-tile").on("click", function() {
    console.log();
})
// on second click, select clicked cat as challenger and move picture/stats to defender-area
// click attack button to damage challenger
// challenger automatically counters attack
// if player's cat's hp <= 0, player loses
// show losing game message and reset
// if challenger cat's hp <=0, the cat is moved to the defeated-cat-box
// click to select the next challenger from the cat-roster-box
// if last challenger is defeated and catRoster is empty, player wins
// show winning game message and reset

console.log(cats.length);
console.log(catRoster.length);
console.log(catRoster);
console.log(catRoster[1].name);