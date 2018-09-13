// add cats as objects to list of all cats with properties for their name, image file name, and stats (hp and attack)
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
var challengerCat = [];
var defeatedCats = [];

// initialize game with all cats in cat-roster box
var newGame = true;
var catRosterBox = $("#cat-roster-box");

// function for new game
if (newGame) {
    // populate cat roster array with all cat objects
    for (var i in cats) {
        catRoster.push(cats[i]);
    }
    // populate screen with catRoster array contents
    showRosterLineup();
}

// function to display cats in roster
function showRosterLineup() {
    // run the number of cats in the roster
    for (var j = 0; j < catRoster.length; j++) {
        // create new div elements with images for each cat in the roster
        var catRosterTile = $("<div>")
            .addClass("border border-dark d-inline-block cat-roster-tile")
            .attr('id', "cat-" + [j])
            .html("<img src=assets/images/" + catRoster[j].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + catRoster[j].name + "</p><p class='cat-stats'>HP: " + catRoster[j].hp + "</p>");

        // append catRosterImg div elements to catRosterBox in html
        catRosterBox.append(catRosterTile);
    }
}

// link to player and challenger boxes on screen
var playersCatBox = $("#players-cat-box");
var challengerCatBox = $("#challenger-cat-box");
var catRosterTile = $(".cat-roster-tile");

function selectPlayer() {

}
var playerSelected = false;
var challengerSelected = false;

catRosterTile.on("click", function () {
    if (playerSelected === false) {
        for (var i = 0; i < catRoster.length; i++) {
            if (this.id === "cat-" + [i]) {
                playersCat.push(catRoster[i]);
                var playersCatTile = $("<div>")
                    .addClass("border border-dark d-inline-block players-cat-tile")
                    .attr('id', "players-cat")
                    .html("<img src=assets/images/" + playersCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + playersCat[0].name + "</p><p class='cat-stats'>HP: " + playersCat[0].hp + "</p>");
                playersCatBox.append(playersCatTile);
                catRoster.splice(i, 1,"");
                // remove selected cat tile from catRosterBox
                $("#cat-"+i).remove();
            }
        }
        playerSelected = true;
    } else if (challengerSelected === false) {
        for (var i = 0; i < catRoster.length; i++) {
            if (this.id === "cat-" + [i]) {
                challengerCat.push(catRoster[i]);
                var challengerCatTile = $("<div>")
                    .addClass("border border-dark d-inline-block challenger-cat-tile")
                    .attr('id', "challenger-cat")
                    .html("<img src=assets/images/" + challengerCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + challengerCat[0].name + "</p><p class='cat-stats'>HP: " + challengerCat[0].hp + "</p>");
                challengerCatBox.append(challengerCatTile);
                catRoster.splice(i, 1, "");
                console.log(catRoster);
                $("#cat-"+i).remove();
            }
        }

        console.log("level 2");
        console.log(catRoster);
        challengerSelected = true;
    }

/*     for (var j = 0; j < catRoster.length; j++) {
        // create new div elements with images for each cat in the roster
        var catRosterTile = $("<div>")
            .addClass("border border-dark d-inline-block cat-roster-tile")
            .attr('id', "cat-" + [j])
            .html("<img src=assets/images/" + catRoster[j].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + catRoster[j].name + "</p><p class='cat-stats'>HP: " + catRoster[j].hp + "</p>");
        console.log("inside");
        catRosterBox.append(catRosterTile);
    }
 */    console.log("what");

});

/* // if player's cat is not assigned, select clicked cat for player and move picture/stats to players-cat-box
catRosterTile.on("click", function () {
    /*     if (playerSelected) {
            // on subsequent clicks on cat, select clicked cat as challenger and move picture/stats to defender-area
            console.log(this.id);
            for (var i = 0; i < catRoster.length; i++) {
                if (this.id === "cat-" + [i]) {
                    console.log(this.id + " index: " + [i]);
                    challengerCat.push(catRoster[i]);
                    console.log(catRoster[i]);
                    console.log(challengerCat[0]);
                    var challengerCatTile = $("<div>")
                        .addClass("border border-dark d-inline-block challenger-cat-tile")
                        .attr('id', "challenger-cat")
                        .html("<img src=assets/images/" + challengerCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + challengerCat[0].name + "</p><p class='cat-stats'>HP: " + challengerCat[0].hp + "</p>");
                    challengerCatBox.append(challengerCatTile);
                    console.log(catRoster);
                    console.log(challengerCat.length);
                    catRoster.splice(i, 1);
                    console.log(catRoster);
                    catRosterBox.html("");
                    showRosterLineup();
                }
            }
        } */


/* $(".cat-roster-tile").on("click", function () {
    if (playersCat.length == 0) {
        for (var i = 0; i < catRoster.length; i++) {
            if (this.id === "cat-" + [i]) {
                playersCat.push(catRoster[i]);
                var playersCatTile = $("<div>")
                    .addClass("border border-dark d-inline-block players-cat-tile")
                    .attr('id', "players-cat")
                    .html("<img src=assets/images/" + playersCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + playersCat[0].name + "</p><p class='cat-stats'>HP: " + playersCat[0].hp + "</p>");
                playersCatBox.append(playersCatTile);
                catRoster.splice(i, 1);
                catRosterBox.html("");
                showRosterLineup();
                playerSelected = true;
            }
        } 
    } else {
        console.log("Hi");
    }
    console.log(catRoster.length);
    console.log(playersCat.length);
    console.log(challengerCat.length);
    console.log(playerSelected);

}); */












// click attack button to damage challenger
// challenger automatically counters attack
// if player's cat's hp <= 0, player loses
// show losing game message and reset
// if challenger cat's hp <=0, the cat is moved to the defeated-cat-box
// click to select the next challenger from the cat-roster-box
// if last challenger is defeated and catRoster is empty, player wins
// show winning game message and reset