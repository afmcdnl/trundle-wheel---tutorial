input.onButtonPressed(Button.A, function () {
    basic.showNumber(Count * 100)
})
input.onGesture(Gesture.LogoUp, function () {
    Count += 1
})
let Count = 0
Count = 0
basic.forever(function () {
    if (Count >= 0) {
        basic.showNumber(Count)
    }
})
