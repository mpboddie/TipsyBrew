---
templateKey: blog-post
title: 'The Hookup: Weight sensor'
date: 2020-01-01T02:54:04.831Z
description: >-
  Happy New Year! Before you judge me for typing up a post when I should be out
  celebrating the close of an amazing, some say that the top smartest people
  have said, that I have had probably one of the best most perfect decade of the
  past 10 years. What just happened there?... Anyways, I am home typing this up
  while watching people from the 90s I know and other people I don't know
  perform on TV because I've got a sick kid and I'm being a responsible parent.
  No worries, I don't think it is anything serious and I hope she is past the
  worst of it. Anyways, my loss is your gain because it gives me time to post
  the hookup!
featuredpost: false
featuredimage: /img/loadcell_bb.png
tags:
  - pourover
  - arduino
  - HX711
  - load cell
  - weight
---
### Wiring diagram

![Wiring diagram](/img/loadcell_bb.png "Wiring diagram")

What we have above is an approximation of what I was using to test out the weight sensor. If you are unaware of the components used or curious on how it works, check out [my previous post](https://tipsybrew.com/blog/2019-12-30-lets-talk-about-your-weight/). If you have been following along you can see that I have the LCD keypad shield and Arduino UNO illustrated. The LCD in fritzing was slightly different than the one I am using, but technically it is the same. Also, I am currently using an Arduino Mega and it is my intention to use an UNO, but I'm glad I sketched this out because that LCD uses a crap load of outputs. That is a discussion for another time though. Keep that in mind though because if you check out the example code on the [GitHub page](https://github.com/mpboddie/TipsyBrewPourOver/tree/master/examples/Weight) at all, you are going to want to adjust the pin numbers to suit your usage.

Looking at the load cell (the gray rectangle on the bottom) you will see 4 wires that match the colors I have seen on all the bar type load cells I have encountered. All 4 wires get wired directly to the HX711 as so:

| Load cell       | HX711        |
|-----------------|--------------|
| Red wire        | E+ contact   |
| Black wire      | E- contact   |
| White wire      | A+ contact   |
| Green wire      | A- contact   |

The HX711 connections to the Arduino are just as straight forward.

| HX711   | Arduino     |
|---------|-------------|
| GND     | GND         |
| VCC     | 5V          |
| DT      | D3          |
| SCK     | D2          |

### Code
The complete code I have been using is on [GitHub](https://github.com/mpboddie/TipsyBrewPourOver/tree/master/examples/Weight), but I am going to run you through just some of the bare essentials here. If you checkout the sample code it will include some of the previously introduce LCD and input code, tare functionality, and smoothing of the scale values. Smoothing the values makes it look great on the display, but it does add some delay depending on how much of the history you are considering in the smoothing.

Lots of the code I will be explaining is also well documented on [SparkFun's site](https://learn.sparkfun.com/tutorials/load-cell-amplifier-hx711-breakout-hookup-guide). If you are unfamiliar with SparkFun, you should check out their site. They aren't paying me in anyways but they have some very intriguing products that are difficult to find elsewhere for hobbyists.

You will have to import the HX711 library, so in the Arduino IDE head to the library manager and search for HX711. I am using the one from Bogdan (the Olav one looks interesting though...). Then initialize the library with the following,

```c
// Include the library... duh
#include "HX711.h"

// This value is obtained using the SparkFun_HX711_Calibration sketch
#define calibration_factor 1695.0

// These are the digital pins from the fritzing diagram
// update these if you use something different
#define LOADCELL_DOUT_PIN  3
#define LOADCELL_SCK_PIN  2

// Instantiate scale
HX711 scale;
```
So all of the above is pretty straight forward, except for maybe that calibration_factor. So the block of aluminum know nothing of your grams, kilograms, and it especially doesn't understand pounds and ounces. This means that you have to determine the calibration value for the output of the sensor to align with your desired units. As noted, you can find a calibration sketch on SparkFun. The calibration process involves starting the sketch, then placing a known weight on the scale and adjusting the calibration factor until the output value matches the expected weight. Once you determine the value it should work for that load cell no matter what sketch you use. This calibration is going to be worked into the pour over machine software.
```
void setup() {
  // Tell the scale which pins to use
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  // Give the scale its calibration factor
  scale.set_scale(calibration_factor);

  // Tare will set the scale value to 0, this give it a starting point
  scale.tare();
}
```
The setup is pretty normal because for the first 2 lines all we are really doing is giving the scale the values we just discussed. That tare line may confuse you if you don't use scales often though. I'm not a drug dealer, I spent many years as a grocery store cashier. Anyways, when a scale starts it may not always be reading a zero value. This doesn't mean it is inaccurate, it just means it needs a home to reference from. This is completely normal scale behavior.
```
void loop() {
  lcd.print(scale.get_units());
  delay(10);
}
```
All you need to do to get the current weight in the loop is use scale.get_units(). Here I am using the LCD to display it, but in the code on this page I have not included all the LCD requirements. You can find that and more in theGitLab example though. I have also included a delay after getting the weight. If you do not do at least a delay the LCD will refresh so quickly that it will be difficult to see.

Holy crap, I have said a lot. I think I have covered all the basics, but definitely let me know if it is unclear. Happy New Year all!
