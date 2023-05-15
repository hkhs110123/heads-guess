let index = 0
let text_list: string[] = []
input.onGesture(Gesture.LogoUp, function () {
    let test_list: number[] = []
    index = randint(0, test_list.length - 0)
    basic.showString("" + (test_list[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
basic.forever(function () {
    text_list = ["PUPPY", "CLOCK", "NIGHT"]
    game.startCountdown(30000)
})
