let x = 0
basic.forever(function () {
    x = input.compassHeading()
    if (x > 315 || x <= 45) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("N")
    } else if (x == 45) {
        basic.showString("NE")
    } else if (x < 135) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("E")
    } else if (x == 135) {
        basic.showString("SE")
    } else {
    	
    }
})
