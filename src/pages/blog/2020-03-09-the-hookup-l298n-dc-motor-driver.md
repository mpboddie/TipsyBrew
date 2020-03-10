---
templateKey: blog-post
title: 'The Hookup: L298N DC Motor Driver'
date: 2020-03-10T01:33:01.439Z
description: >-
  The L298N is a dead simple way to drive a DC motor and they are readily
  available. This is an essential hookup article if you've never used a DC motor
  before.
featuredpost: false
featuredimage: /img/l298dcmotordriver_bb.png
tags:
  - arduino
  - pourover
  - motors
---
![L298N](/img/l298dcmotordriver_bb.png "L298N")

All we need here is an arduino, 12v power, 12v DC motor, and of course an L298N driver. I won't into the technical intricacies of the L298N, but it has some really useful features for not much money that is great for TipsyBrew.

First off, if you haven't been keeping tabs on the project, I am using the arduino MEGA 2560 full time now because the OLED requires too much memory for the UNO to be reasonable. Second, I am only using the L298N to drive one DC motor at the moment but you can independently drive a second motor with just one driver. 

### Connections

Starting with the far right, you will find my usual barrel jack which I use to connect a 12v 4a power supply. The positive and negative from this go directly to the 12V and GND screw terminals on the L298N. This will provide the power for the DC motors. One of the handy features I was alluding to earlier is that the L298N has a voltage regulator that we can utilize as a 5v source. To use the 5v output, as I have done to power the arduino, you need to use a jumper connecting the two pins just north of the power screw terminals labelled 5VEN. DO NOT use this regulator if you are using more than 12v, but I really can't speak to if the L298N should be used with over 12v either way. I can not confirm this personally but I believe if you are using over 12v, then you should remove the 5VEN jumper and input 5v from another source to the 5v screw terminal that you see me stealing power from.

The left and right sides of the L298N each have a pair of screw terminals. These are where you attach the DC motors. Each of these OUT connections have corresponding IN connections that you will connect to the arduino. To the right of the power screw terminals you will find these IN pins and others. Look to the 4 pins in the middle as these are the INs. In my diagram I have an orange and blue wire connecting the IN1 and IN2 pins to pins 9 and 10 of the arduino. These pins will control whether the left motor is stopped, moving clockwise, or moving counter clockwise. The same applies for IN3 and IN4 but for the motor to the right, which we are not using in this example. More on how to use these pins later in the code.

Technically, we have discussed all the connections you need to get a motor moving. However, if you want to change the speed of the motor, as I did/do, then you need one more. The ENA pin that you will find to the left of the IN1 and IN2 pins is connected with a green wire to pin 8 of the arduino. The L298N ships with a jumper connecting it to the 5v pin directly north of it. If you do not remove that jumper, the motor when told to move, will move at full speed. If you remove that jumper and connect it to an arduino pin, you will be able to vary the speed.

### That Code Stuff
The code is so damn simple. First off, no libraries. There may be some libraries to do fancy schmancy stuff, but I didn't even bother looking.

Let's start with just the definitions and setup.

```
// The aformention connections
int enA = 8;
int in1 = 9;
int in2 = 10;

void setup() {
  // Set used pins as output
  pinMode(enA, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
	
  // Making sure I don't get my beard tangled 
  // in the motor when I'm hanging over it 
  // plugging it in AKA motor off
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
}
```
I am not doing this line by line. I just defined which pins I am using to keep it clean then declared them as output pins in setup. The digitalWrite lines are interesting though. As I said, in1 and in2 control if the motor is on or the direction of spin. Let's take a look at the 4 possible states.
* in1 = LOW, in2 = LOW -> Motor is OFF
* in1 = HIGH, in2 = LOW -> Motor is moving CLOCKWISE
* in1 = LOW, in2 = HIGH -> Motor is moving COUNTER
* in1 = HIGH, in2 = HIGH -> Motor is plaid, just kidding, it is OFF again

Note: Clockwise and counter clockwise is dependant on your wiring. Nothing says that if your motor is the other way around that you are doing it wrong, it is just my choice of words.

If you were to keep the jumper connecting 5v to ENA, you have all the code you need to start work. Just set in1 OR in2 to HIGH and away your motor will spin. Make the pins match state and the motor will stop. Reverse the states from LOW/HIGH to HIGH/LOW and the motor will spin the other way.

Great, bye Felicia.

Oh you wanted more? Fiiiine, here is some code to run through a few speeds.
```
void loop() {
  analogWrite(enA, 50); // set the speed
  
  // turn it on
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);

  delay(5000);

  analogWrite(enA, 100); // a little bit faster now
  delay(2000);
  analogWrite(enA, 180); // a little bit faster now
  delay(2000);
  analogWrite(enA, 255); // Shout! Hey! Hey! Hey!
  delay(2000);
  analogWrite(enA, 200); // a little bit softer now
  delay(2000);
  analogWrite(enA, 75); // a little bit softer now
  delay(2000);

  // Come on now!
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  
  delay(5000);
}
```

Alright so I got a little carried away with my comments there and from what I can remember they are completely out of order, but... [Animal House](https://www.youtube.com/watch?v=MG7KCOO76Wc)... come on now.

Anyways, all I did here is use analogWrite to set the enA pin to a value between 0 and 255 (255 being the fastest). Setting the speed itself isn't enough to get it moving though, make sure you set the in1 and in2 pins as well.

That is it. Play around a bit, maybe see what kind of acceleration you can get with for loops. I'm not going to do everything for you.
