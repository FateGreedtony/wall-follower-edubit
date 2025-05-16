let distance = 0
basic.forever(function () {
    distance = zoombit.readUltrasonic()
    rekabit.setServoPosition(ServoChannel.S1, 50)
    if (distance < 30) {
        zoombit.setMotorsSpeed(200, 100)
    } else if (distance >= 30) {
        zoombit.setMotorsSpeed(100, 200)
        basic.pause(2000)
    } else {
        zoombit.setMotorsSpeed(128, 128)
    }
})
