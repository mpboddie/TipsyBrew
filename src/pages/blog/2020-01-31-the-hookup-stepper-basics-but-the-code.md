---
templateKey: blog-post
title: 'The Hookup: Stepper Basics, but the code'
date: 2020-01-31T22:38:00.000Z
description: >-
  Last time on The Hookup... We've been through the hardware pin by pin, which
  wires go where and why, let's move on to the soft stuff.
featuredpost: false
featuredimage: /img/markus-spiske-cvbbo4pzwpg-unsplash.jpg
tags:
  - pourover
  - stepper
  - arduino
---
So, a little while ago I was rummaging through different fancy stepper libraries. There are quite a few of them available for the Arduino as steppers are quite popular. I will most likely use a library in the future, but most of the libraries they do some fancy acceleration smoothing. I am thinking a basic on off of the stepper will be a better controlled testing scenario for pumps. So for now, no library.

Right, so take a look at this sample code...

```
/*
Stepper Basics
*/
// These pins match the values used in the hookup article
const int dirPin = 2;
const int stepPin = 3;
// This value is determined by the steps per revolution of your stepper
const int stepsPerRev = 200;

void setup() {
  // Set the pin modes
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
}

void loop() {
  
  // LOW/HIGH will determine the direction the stepper spins
  digitalWrite(dirPin, HIGH);
  
  // wait a couple seconds so as to not surprise you and get hair wrapped in it or something
  delay(2000);
  
  // Make 5 rotations
  for(int x = 0; x < (stepsPerRev*5); x++)
  {
    // One step!    
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(2000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(2000);
  }
	
}
```

I kept this code super simple because I should be releasing the pump test stuff sooner than later. This code will at least give anyone curious something to get their motors turning.

So the first few lines of code are just setting convenience variables. The stepsPerRev variable should be set to how ever many steps your stepper has. If you set it to something different nothing bad will happen, just when the code thinks it has done a full revolution the stepper it will be more or less than a full revolution. 

There is nothing interesting in the setup. Just setting the pins to output.

The loop code is where all the fun stuff happens. We said [last time](blog/2020-01-30-the-hookup-stepper-basics/) when discussing the pins, that the Direction pin was for controlling the-- well the direction. Big shocker there. As we can see in the first line of the loop function...

```
digitalWrite(dirPin, HIGH);
```

We are setting the direction pin to high. If you are unaware this essential put 5V to the DD8825 pin connected to arduino pin 2. If we change this to LOW, the stepper will spin the opposite way. Easy as that. Fun stuff.

The next line is just a 2 second delay. However after that we are sending pulses to the other pin I said we would use! The Step pin! You'll never guess what that does (sarcasm). As the comments in the code state, we are going to make 5 complete revolutions of the motor. You can stick a little piece of tape to the shaft to make a spinning flag to shout at in joy of your stepper conquest if you so choose. Let us break down the code a bit and I apologize if I am over explaining it but I don't know how smart you are.

```
for(int x = 0; x < (stepsPerRev*5); x++)
  {
```

So, a FOR statement is to make a set of code a number of times AKA loop. Spoiler, the code in our FOR loop does one step, meaning the motor will move its smallest increment (ignoring the possibilities of microsteps). So, we use x as a counter and start at 0, each iteration of the loop increments the value of x by 1 (x++) and the loop will continue as long as x is less than 5*stepsPerRev. In my case and probably in yours, the stepper has 200 steps. This means if I run the step code 200 times the shaft will move 360°. If I want to turn the shaft five times I then need to step 1000 times, which is what we are doing.

Let's tackle the final part of the code. The step.

```
// One step!    
digitalWrite(stepPin, HIGH);
delayMicroseconds(2000);
digitalWrite(stepPin, LOW);
delayMicroseconds(2000);
```

The step is pretty simple. All we are doing is putting 5V to the step pin, waiting a bit, then taking the 5V away, and waiting again. Amazingly, the biggest take away from this should be the waits. Why wait? Well the waits determine the speed in which the stepper spins. This leads to homework...

### Homework!

I strongly feel that for most new programmers the best thing you can do is dig around. So, if you are so inclined, set up the circuit and try to accomplish these simple tasks.

1. Reverse the direction of the motor. I blatantly told you how to do this already, so how about you reverse the direction in the code so it spins one way for a bit, stops, then spins the other way.
2. The sample code will continue spinning and stopping over and over and over until you unplug it. Mix it up a little bit, can you make it spin for random time periods? or spin for a set period of time but half the time each iteration until it is too small to be observed? Get creative.
3. Task 2 was about the spin duration, but what about the spin speed. If you crank up the ```delayMicroseconds(2000)``` statements to 10000, what do you think will happen? Change and observe. Just like with the duration, what else do you think you could do with this? Can you implement a basic form of acceleration/deceleration? 
