radio.onReceivedNumber(function (receivedNumber) {
	
})
let Ausgewält = 0
radio.setGroup(1)
let Leben = 4
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (1 < Ausgewält) {
            Ausgewält += -1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (Ausgewält < 0) {
            Ausgewält += 1
        }
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
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                `)
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
        while (!(input.buttonIsPressed(Button.A))) {
            basic.showIcon(IconNames.Skull)
            music.playMelody("F F E E D D C C ", 170)
        }
    }
})
