/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program ...
*/

// variables 
let distanceOfObject: number = 0

// set up 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// forever loop
while (true) {
    // get distance 
    distanceOfObject = sonar.ping(
        DigitalPin.P8,
        DigitalPin.P12,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceOfObject)
    // move 
if (distanceOfObject <= 10) {
    basic.showIcon(IconNames.No)
    robotbit.StpCarMove(-10, 48)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
} else {
    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
}
    }
