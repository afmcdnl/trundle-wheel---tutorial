# Programming the Trundle Wheel Tutorial 

## About this project! @fullscreen
Using a cardboard wheel and a micro:bit you can (need picture)
keep track of the number of the distance from one object to another.

## Keeping track of the number of turns
We need to create a variable to keep track of the number of times the wheel has rotated.
We will use a variable for that. This is found in the <i> Variables </i> drawer.  The reason to start the count at ``-1``
is to make sure the first time around the wheel is at zero.

```blocks
let Count = 0
Count = -1
```
## Increasing the number of turns.
Now that we have a way to keep track of the number of turns we need a way to increase that number of turns. 
We are going to use the accelerometer sensor and the ``LogoUp`` input block

```blocks
input.onGesture(Gesture.LogoUp, function () {
    Count += 1
})
```

## Displaying the number of turns.
We can display the count using the ``||basic:show number||`` block and then placing the variable inside.

```blocks
basic.forever(function () {
    if (Count >= 0) {
        basic.showNumber(Count)
    }
})
```

## Displaying the distance.
We can use some math to convert the number of turns ``Count`` to the distance that the wheel has moved. 
The value to enter into the math block will depend on the circumference of the wheel.  In this example, a wheel with a
 circumference of 100 cm was used. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Count * 100)
})
```
## Reset the wheel.
Using the ``A`` and ``B`` buttons, the ``Count`` can be reset to find out the distance between two new objects. 

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Count = -1
})
```



## All the code
Enjoy!

```blocks
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
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Count = -1
})

```