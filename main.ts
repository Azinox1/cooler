let intensité = 0
function Mauve () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blue () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    basic.showNumber(intensité)
})
basic.forever(function () {
    intensité = pins.analogReadPin(AnalogPin.P0)
    if (intensité >= 500) {
        vert()
    } else if (intensité < 500 && intensité >= 200) {
        blue()
    } else if (intensité < 200 && intensité >= 100) {
        rouge()
    } else if (intensité < 100 && intensité < 50) {
        Mauve()
    } else {
        blanc()
    }
})
