// add cats as objects to list of all cats with properties for their name, image file name, and stats (hp and attack)
var cats = {
    fluffy: {
        name: "Fluffy",
        imgName: "fluffy",
        hp: 345,
        baseAttack: 8,
        counterAttack: 21,
    },
    gus: {
        name: "Gus",
        imgName: "gus",
        hp: 280,
        baseAttack: 7,
        counterAttack: 22,
    },
    princess: {
        name: "Princess",
        imgName: "princess",
        hp: 275,
        baseAttack: 8,
        counterAttack: 27,
    },
    minx: {
        name: "Minx",
        imgName: "minx",
        hp: 210,
        baseAttack: 6,
        counterAttack: 24,
    },
    mittens: {
        name: "Mittens",
        imgName: "mittens",
        hp: 325,
        baseAttack: 7,
        counterAttack: 23,
    },
    /*  mrCat: {
         name: "Mr. Cat",
         imgName: "mr_cat",
         hp: 275,
         attack: 6,
         counterAttack: 12,
     },
     tiger: {
         name: "Tiger",
         imgName: "tiger",
         hp: 175,
         attack: 8,
         counterAttack: 9,
     }, */
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
var defeatedCatBox = $("#defeated-cat-box");
var gameMsgText = $("#game-msg-text");

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
                    .addClass("border border-dark d-inline-block fight-tile players-cat-tile")
                    .attr('id', "players-cat")
                    .html("<img src=assets/images/" + playersCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + playersCat[0].name + "</p><p class='cat-stats' id='player-hp-text'>HP: " + playersCat[0].hp + "</p>");
                playersCatBox.append(playersCatTile);
                catRoster.splice(i, 1, "");
                // remove selected cat tile from catRosterBox
                $("#cat-" + i).remove();
            }
        }
        playerSelected = true;
    } else if (challengerSelected === false) {
        for (var i = 0; i < catRoster.length; i++) {
            if (this.id === "cat-" + [i]) {
                challengerCat.push(catRoster[i]);
                var challengerCatTile = $("<div>")
                    .addClass("border border-dark d-inline-block fight-tile challenger-cat-tile")
                    .attr('id', "challenger-cat")
                    .html("<img src=assets/images/" + challengerCat[0].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + challengerCat[0].name + "</p><p class='cat-stats' id='challenger-hp-text'>HP: " + challengerCat[0].hp + "</p>");
                challengerCatBox.append(challengerCatTile);
                catRoster.splice(i, 1, "");
                console.log(catRoster);
                $("#cat-" + i).remove();
            }
        }

        console.log("level 2");
        console.log(catRoster);
        challengerSelected = true;
        gameMsgText.text("Fight!");
        console.log(playersCat[0].hp);
        console.log(challengerCat[0]);
    }
    console.log("what");

});

var atkBtn = $("#atk-btn")
var attack = 0;

// click attack button to damage challenger
atkBtn.on("click", function () {
    if (playerSelected === true && challengerSelected === true) {
        attack = attack + playersCat[0].baseAttack;
        challengerCat[0].hp = challengerCat[0].hp - attack;
        console.log(attack);
        console.log(challengerCat[0].hp);
        playersCat[0].hp = playersCat[0].hp - challengerCat[0].counterAttack;
        console.log(playersCat[0].hp);
        $("#player-hp-text").text("HP: " + playersCat[0].hp);
        $("#challenger-hp-text").text("HP: " + challengerCat[0].hp);

        if (playersCat[0].hp <= 0) {
            gameMsgText.text("Me-OW! You lose!");

            // reset game
            newGame = true;
        }

        if (challengerCat[0].hp <= 0) {
            defeatedCats.push(challengerCat[0]);
            console.log(defeatedCats);
            challengerCat.length = 0;
            $(".challenger-cat-tile").remove();
            gameMsgText.text("Select a new challenger!");
            for (var i = 0; i < defeatedCats.length; i++) {
                var defeatedCatTile = $("<div>")
                .addClass("border border-dark d-inline-block defeated-tile")
                .html("<img src=assets/images/" + defeatedCats[i].imgName + ".jpg class='cat-img'><p class='cat-stats cat-names'>" + defeatedCats[i].name + "</p>");
            }
            defeatedCatBox.append(defeatedCatTile);
            challengerSelected = false;
        }

        if (defeatedCatBox.length == 4) {
            gameMsgText.text("You win!");
        }
    } else {
        gameMsgText.text("Yoo hoo! Select your cats first!");
    }
})
// challenger automatically counters attack
// if player's cat's hp <= 0, player loses
// show losing game message and reset
// if challenger cat's hp <=0, the cat is moved to the defeated-cat-box
// click to select the next challenger from the cat-roster-box
// if last challenger is defeated and catRoster is empty, player wins
// show winning game message and reset