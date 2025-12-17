radio.onReceivedNumber(function (receivedNumber) {
    if (!(Schutz == 1)) {
        if (receivedNumber == 8) {
            Leben += -1
        }
        if (receivedNumber == 9) {
            Leben += -3
        }
        if (receivedNumber == 10) {
            Leben += -5
        }
    }
})
// Variable Items:
// 0=nichts
// 1=Kompas
// 2=Starkes Schwert
// 3=schwaches Schwert
function Items () {
	
}
function Colldown () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
let Pfeile = 0
let Vielleicht = 0
let Warte = 0
let Ausgewält = 0
let Schutz = 0
radio.setGroup(1)
let Leben = 4
let Coins = 10
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Ausgewält += -1
    }
    if (input.buttonIsPressed(Button.B)) {
        Ausgewält += 1
    }
    if (1 > Ausgewält) {
        Ausgewält = 1
    }
    // Immer erhöhen wenn es ein slot mehr gibt
    if (7 < Ausgewält) {
        Ausgewält = 7
    }
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        Schutz = 0
    }
})
basic.forever(function () {
    if (Ausgewält == 1) {
        if (Leben == 25) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (Leben == 24) {
        	
        }
        if (Leben == 23) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                `)
        }
        if (Leben == 22) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                `)
        }
        if (Leben == 21) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                `)
        }
        if (Leben == 20) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
        }
        if (Leben == 19) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                `)
        }
        if (Leben == 18) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                `)
        }
        if (Leben == 17) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                `)
        }
        if (Leben == 16) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                `)
        }
        if (Leben == 15) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 14) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 13) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 12) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 11) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 10) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 9) {
            basic.showLeds(`
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 8) {
            basic.showLeds(`
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 7) {
            basic.showLeds(`
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 6) {
            basic.showLeds(`
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 5) {
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 4) {
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 3) {
            basic.showLeds(`
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 2) {
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (Leben == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (Leben == 0) {
        music.playMelody("F F E E D D C C ", 170)
        while (!(input.buttonIsPressed(Button.A))) {
            basic.showIcon(IconNames.Skull)
            music.playMelody("F F E E D D C C ", 170)
        }
    }
})
basic.forever(function () {
    if (Ausgewält == 3) {
    	
    }
})
basic.forever(function () {
    if (Ausgewält == 4) {
    	
    }
})
basic.forever(function () {
    if (Ausgewält == 5) {
    	
    }
})
basic.forever(function () {
    if (Ausgewält == 2) {
        let Items1 = 0
        if (Items1 == 0) {
            basic.clearScreen()
        }
        if (Items1 == 1) {
            basic.showCompass(500)
        }
        if (Items1 == 2) {
            radio.setTransmitPower(3)
            basic.showLeds(`
                . . . # #
                . . # # #
                # # # # .
                . # # . .
                # . # . .
                `)
            if (input.pinIsPressed(TouchPin.P0)) {
                Schutz = 1
            } else {
                if (input.isGesture(Gesture.Shake)) {
                    radio.sendNumber(13)
                    Colldown()
                }
            }
        }
        if (Items1 == 3) {
            radio.setTransmitPower(3)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                # . # . .
                `)
            if (input.pinIsPressed(TouchPin.P0)) {
                if (Warte == 1) {
                    Vielleicht = randint(0, 1)
                    Warte = 0
                }
                if (Vielleicht == 0) {
                    Schutz = 1
                }
            } else {
                if (input.isGesture(Gesture.Shake)) {
                    radio.sendNumber(12)
                    Colldown()
                }
            }
        }
        if (Items1 == 4) {
            radio.setTransmitPower(7)
            basic.showLeds(`
                . . # # .
                . # . # .
                . # . # .
                . # . # .
                . . # # .
                `)
            if (input.pinIsPressed(TouchPin.P0)) {
                if (Pfeile > 0) {
                    basic.pause(100)
                    if (input.pinIsPressed(TouchPin.P1)) {
                        Pfeile += -1
                        basic.showLeds(`
                            . . # . .
                            . # . # .
                            # # # # #
                            . # . # .
                            . . # . .
                            `)
                        radio.sendNumber(11)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (Ausgewält == 6) {
    	
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    if (Warte == 0) {
        basic.pause(1000)
        Warte = 1
    }
})
basic.forever(function () {
    if (Leben == 1) {
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.setLedColor(0x000000)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (Ausgewält == 7) {
        basic.showNumber(Coins)
    }
})
