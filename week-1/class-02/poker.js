///////////////////////////////////////
//
//    JavaScript Poker Game
//    =====================
//    (c) Copyright Paul Griffiths 2001
//    Email: mail@paulgriffiths.net
//
//    Main functions for game
//


//  Randomly deals five cards

function dealcards() {
if ( gamestatus == 0 ) {    //  Player has flipped his unwanted cards
        gamestatus = 1;
    }
    else {
        gamestatus = 0;         //  This is a new hand, so do some stuff

        for ( var i = 0; i < 5; i++ ) {
            flipped[i] = 0;     //  Reset flipped flags
        }
        for ( var i = 0; i < 52; i++ ) {
            picked[i] = 0;      //  Reset picked status of deck
        }

        var form = document.forms[0];
        form.elements[0].value = "Click the cards you want to trade";

        bet = form.elements[1].value;       //  Get amount to bet...
        winnings -= bet;                    //  ...deduct it from winnings...
        form.elements[2].value = winnings;  //  ...and update winnings
    }


    //  Deal random five cards
    //  If not a new hand, only replace the flipped cards

    for ( var i = 0; i < 5; i++ ) {
        if ( gamestatus == 0 || flipped[i] == 1 ) {
            do {
                var n = Math.round(Math.random() * 51);  //  Pick random card
            } while ( picked[n] == 1 );      //  Make sure not already picked
            picked[n] = 1;                   //  Got it, so set picked flag
            cards[i].src = cardimg[n].src;   //  Update card image array
            document.images[i+offset].src = cardimg[n].src;  //  Update on screen
            cardvals[i] = n;                          //  Store value of card
        }
    }

    if ( gamestatus == 1 )          //  We've replaced the flipped cards...
        checkwin();                 //  So check if we've won
}


//  Flips a clicked card

function flipcard(i) {
    if ( gamestatus == 1 )       //  If it's the end of a hand, we can't flip
        return;

    if ( flipped[i] == 0 ) {                    //  Either flip card over...
        document.images[i+offset].src = back.src;
        flipped[i] = 1;
    }
    else {                                      //  ...or flip it back
        document.images[i+offset].src = cards[i].src;
        flipped[i] = 0;
    }
}


//  Compare function for sorting the cards

function compare(a, b) {
    return a-b;
}


//  Checks for winnings

function checkwin() {
    var suits = new Array(4);         //  To check for a flush
    var matched = new Array(13);      //  To check for pairs, threes, fours
    var pairs = 0, threes = 0, fours = 0;
    var flush = false, straight = false;
    var info = document.forms[0].elements[0];
    var won = 0;


    cardvals.sort(compare);           //  Sort the cards

    for ( var i = 0; i < 4; i++ ) {
        suits[i] = 0;                 //  Initialise suits array to zero
    }

    for ( var i = 0; i < 13; i++ ) {
        matched[i] = 0;               //  Initialise matched array to zero
    }

    for ( var i = 0; i < 5; i++ ) {
        matched[cardvals[i] % 13]++;            //  Update matched for cards
        suits[Math.floor(cardvals[i]/13)]++;    //  Update suits for cards
    }


    //  Check for pairs, threes and fours

    for ( var i = 0; i < 13; i++ ) {
        if ( matched[i] == 2 ) {
            pairs++;
        }
        else if ( matched[i] == 3 ) {
            threes++;
        }
        else if ( matched[i] == 4 ) {
            fours++;
        }
    }


    //  Check for a flush

    for ( var i = 0; i < 4; i++ ) {
        if ( suits[i] == 5 ) {
            flush = true;
        }
    }

    if ( cardvals[4] - cardvals[1] == 3  &&              //  Consistent with
         cardvals[4] - cardvals[0] == 12 &&              //  A, T, J, Q, K...
         flush ) {        //  If we also have a flush, then its a royal flush
        info.value = "Royal flush!";
        won = bet * 2500;
    }
    else if ( cardvals[4] - cardvals[0] == 4 && flush ) {
        info.value = "Straight flush!";
        won = bet * 250;
    }


    //  Sort cards by face value (necessary to check for a straight)

    for ( var i = 0; i < 5; i++ )
        cardvals[i] = cardvals[i] % 13;
    cardvals.sort(compare);


    if ( won == 0 ) {           // Don't check further if we've already won
        if ( fours > 0 ) {
            info.value = "Four of a kind!";
         won = bet * 100;
        }
        else if ( threes == 1 && pairs == 1 ) {
            info.value = "Full house!";
            won = bet * 50;
        }
        else if ( flush ) {
            info.value = "A flush!";
            won = bet * 20;
        }
        else if ( cardvals[4] - cardvals[0] == 4 ) {
            info.value = "A straight!";
            won = bet * 15;
        }
        else if ( threes > 0 ) {
            info.value = "Three of a kind!";
            won = bet * 4;
        }
        else if ( pairs == 2 ) {
            info.value = "Two pair!";
            won = bet * 3;
        }
        else if ( matched[0]  == 2 ||
                  matched[10] == 2 ||
                  matched[11] == 2 ||
                  matched[12] == 2 ) {
            info.value = "Jacks or better!";
            won = bet * 2;
        }
        else {
            info.value = "No win! Bad luck!";
        }
    }


    //  Update winnings if we've won

    if ( won > 0 ) {
        winnings += won;
        document.forms[0].elements[2].value = winnings;
        info.value += " You win $" + won + "!";
    }
}
