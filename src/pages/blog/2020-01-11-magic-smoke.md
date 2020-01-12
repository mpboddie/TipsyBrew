---
templateKey: blog-post
title: Magic Smoke!
date: 2020-01-12T02:14:17.579Z
description: >-
  Oy! Remember when I said I'd share failures with you. Oh, of course you
  remember that, I said it TODAY!
featuredpost: false
featuredimage: /img/magicsmoke.jpg
tags:
  - pourover
  - failure
  - stepper
  - pump
---
![Blown voltage regulator](/img/magicsmoke.jpg "Blown voltage regulator")

What you see before you is a close up shot of the voltage regulator of my Arduino Mega. Some people would say I released the magic smoke that normally resides inside of it. The exact part we are looking at is just above the barrel jack. The one with three prongs on the right, one on the left. The one that looks like I left a soldering iron on the black plastic. Basically... I fucked up. And I am going to tell you where I went wrong despite the fact that reliving it enrages me!!!

Hey at least I am sticking with readily available and cheap parts. Yet another excellent justification to the TipsyBrew method. I spent less than a third of a RasPi on this.

### More POWER!!!

So, as you may know I have been working on the stepper motor that will be used to spin the peristalic pump. The stepper motor I am using is a NEMA 17 stepper with an operating voltage of 12-24v and 1.7A, if I recall correctly. The Arduino can not even remotely supply this on its own and I didn't try. I swear, I am not that dumb.

You also can't just simply supply a stepper the appropriate voltage and amperage and expect it to move. It works on a series of coils that you power in a sequence to make it move in steps, hence the name. So I needed a stepper driver. There are a lot of good cheap options for drivers these day thanks to the popularity of 3D printers. I mentioned in the [Smörgåsbord](https://tipsybrew.com/blog/2020-01-07-smörgåsbord/) update that my first attempt using some parts from the basement was not providing enough current to the stepper. Well the DRV8825 provided enough power and was able to to spin the pump quite nicely.

Unfortunately, I didn't get much time to enjoy my newly powered pump. I was using a 12v 4A power supply I had on hand with a 5.5mm barrel jack. There is nothing wrong with 4A, stop jumping to conclusions and let me finish. I had been using a barrel jack on the breadboard then taking that power for the stepper. The Arduino was being powered by the USB connection to the computer I had the Arduino IDE on. This is a ad idea, but STOP JUMPING TO CONCLUSIONS because that didn't break anything either. It did cause strange behavior of the stepper though, so don't do it.

So what did cause the problem? Well I was thinking, why am I using the extra barrel jack, there is one on the Arduino and the input voltage is 7-12v. If I plug the power supply into that and pull the power for the stepper from the Vin, then everything will be all nice and tidy. Well it was a fantastic idea! Until the second the stepper turned on and smoke started pouring out of the voltage regulator.

### What is the correct way?

![Stepper hookup](/img/stepperbasic_bb.png "Stepper hookup")

Ok, so there is a lot going on here. Luckily the data and driver hookup is really straight forward, but the power requires just a bit of attention... unless you want to experience the wonderful (sarcasm) smell of electronics smoke.

There are 2 voltages at play here. The barrel jack at the top right provides 12v in, which goes to the GND and Vin of the Arduino. With this input the Arduino uses the voltage regulator to produce the 5v it needs to operate. As long as you don't pull too much everything will be fine. Now the left side power rails on the breadboard are 5v and the right side 12v. Especially important is that the 12v for the stepper is coming from the barrel and not the Arduino.

So this post is kind of getting long and I don't think I should get into the code examples now. If you are really really impatient, shoot me a message and I'll fast track it, but otherwise I'll probably wait until get the Mega fixed or a replacement.

### What are you going to do to fix the Mega?
Oh right that.

Well, the good news is it still functions when using USB power. This is because the voltage regulator is not involved with that power source. The bad news is I won't be able to use it with the stepper unless I regulate the power some other way. This is possible, but unless I am missing something stupid simple and in my parts bin it is probably best to wait for a new Arduino and/or new regulator.

Fear not! There is always more TipsyBrewing to be brewed!
