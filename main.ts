radio.onReceivedNumber(function (receivedNumber) {
    if (Schutz == 1) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    } else {
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
// 1=Starkes Schwert
// 2=Schwaches Schwert
// 3=Bogen
// 4=Pfeile
// 5=Blaster
// 6=Apfel
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
    basic.clearScreen()
}
let Pfeile = 0
let Vielleicht = 0
let Ausgewält = 0
let Schutz = 0
radio.setGroup(1)
let Leben = 4
let Coins = 10
let Items1 = 0
let Items2 = 0
let Items3 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Ausgewält += -1
    }
    if (input.buttonIsPressed(Button.B)) {
        Ausgewält += 1
    }
})
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        Schutz = 0
    }
})
basic.forever(function () {
    if (Ausgewält == 1) {
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
    if (Ausgewält == 2 && Items1 == 0 || Ausgewält == 3 && Items2 == 0 || Ausgewält == 4 && Items3 == 0) {
        basic.clearScreen()
    }
    if (Ausgewält == 2 && Items1 == 2 || Ausgewält == 3 && Items2 == 2 || Ausgewält == 4 && Items3 == 2) {
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
    if (Ausgewält == 2 && Items1 == 3 || Ausgewält == 3 && Items2 == 3 || Ausgewält == 4 && Items3 == 3) {
        radio.setTransmitPower(3)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            `)
        if (input.pinIsPressed(TouchPin.P0)) {
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
    if (Ausgewält == 2 && Items1 == 4 || Ausgewält == 3 && Items2 == 4 || Ausgewält == 4 && Items3 == 4) {
        radio.setTransmitPower(7)
        basic.showLeds(`
            . . # # .
            . # . # .
            . # . # .
            . # . # .
            . . # # .
            `)
        if (input.pinIsPressed(TouchPin.P0)) {
            if (0 < Pfeile) {
                basic.pause(100)
                while (input.pinIsPressed(TouchPin.P1)) {
                    basic.showLeds(`
                        . . # . .
                        . # . # .
                        # # # # #
                        . # . # .
                        . . # . .
                        `)
                }
                Pfeile += -1
                radio.sendNumber(12)
                basic.pause(300)
            }
        }
    }
    if (Ausgewält == 2 && Items1 == 5 || Ausgewält == 3 && Items2 == 5 || Ausgewält == 4 && Items3 == 5) {
        basic.showLeds(`
            . . # . .
            . # . . #
            # # # # #
            . # . . #
            . . # . .
            `)
        basic.pause(2000)
        basic.showNumber(Pfeile)
    }
    if (Ausgewält == 2 && Items1 == 6 || Ausgewält == 3 && Items2 == 6 || Ausgewält == 4 && Items3 == 6) {
        radio.setTransmitPower(7)
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # .
            . . # # .
            . . . # .
            `)
        if (input.pinIsPressed(TouchPin.P0)) {
            radio.sendNumber(12)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . . . .
                . . . # .
                . # # # #
                . . . # #
                . . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . # . .
                # # # # .
                . . # # .
                . . . # .
                `)
            basic.pause(200)
        }
    }
    if (Ausgewält == 2 && Items1 == 7 || Ausgewält == 3 && Items2 == 7 || Ausgewält == 4 && Items3 == 7) {
        basic.showLeds(`
            . . . # #
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
        if (input.pinIsPressed(TouchPin.P0)) {
            Leben += 1
        }
    }
})
basic.forever(function () {
    if (Ausgewält == 5) {
        basic.showNumber(Coins)
    }
})
basic.forever(function () {
    if (Leben == 1) {
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.turnRgbLedOff()
        basic.pause(500)
    }
})
basic.forever(function () {
    basic.pause(1000)
    Vielleicht = randint(0, 1)
})
