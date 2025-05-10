let 탁구공: game.LedSprite = null
let a = 0
OLED.init(128, 64)
let 생명 = 5
game.addScore(0)
let _1p = 2
let _2p = 2
for (let index = 0; index < 101; index++) {
    OLED.drawLoading(0)
    OLED.drawLoading(a)
    a += 1
    basic.pause(10)
}
OLED.clear()
basic.forever(function () {
    while (생명 > 0) {
        if (100 < pins.analogReadPin(AnalogReadWritePin.P1) && pins.analogReadPin(AnalogReadWritePin.P1) < 150) {
            탁구공 = game.createSprite(2, 2)
            led.plot(0, _1p)
            led.plot(4, _2p)
        }
        if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else {
        	
        }
    }
})
