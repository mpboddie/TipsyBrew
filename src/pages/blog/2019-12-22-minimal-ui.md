---
templateKey: blog-post
title: Minimal UI
date: 2019-12-22T03:42:31.309Z
description: >-
  I know you are looking at that washed out picture thinking, "what the
  fffffffff--", but wait!
featuredpost: false
featuredimage: /img/lcdkeypad.jpg
tags:
  - pourover
  - arduino
  - ui
  - lcd
---
![LCD keypad](/img/lcdkeypad.jpg)

What you see above is an LCD keypad shield on an arduino. I know this isn't the sexiest of user interfaces, but I really think I can make this work and it should keep costs and complexity down. It is a very common shield and I got this one for under $3 with free shipping. And that wasn't with any bulk pricing. On top of that, we also get a few buttons to use as well.

Yes, I know it is not a full color high resolution touchscreen, but I want coffee first... then we can discuss gaming on the TipsyBrew.

### The brains

I suppose this is the first time I have also mentioned the arduino. The plan is to do a full brew cycle with just a standard arduino uno. At the moment I see no technical limitations of the arduino uno that would stop us from completing Phase One. Any problems along the way will be discussed here.

Eagle eyed brewers may be saying, "Tipsy is an idiot, that is an arduino mega 2560!" And I say, "No *YOU* idiot, that is a cheap knock off of an arduino mega 2560!" I am only using that for now because the only uno I had on hand turned out to be dead and the only other shieldable (was that a word before now?) arduino I had on hand was this mega. I have a habit of using homebrewed, smaller, or strange forks of arduino. I've got some pros for making custom keyboards, micros from an RFID project, some sanguino from before megas existed, and a old BBB from [Modern Device](https://moderndevice.com/) (props to Paul, he probably doesn't remember me because it was like 15 years ago, but I'm the guy who lived across the street from you).

### Some codes
I've never actually used the LCD keypad shield before, so I did a quick test. As this is an educational project, I figured I'd share any example code I make as we go. So please, go check out the [LcdHelloWorld.ino](https://github.com/mpboddie/TipsyBrewPourOver/blob/master/examples/LcdHelloWorld.ino) if you so choose.

It is pretty straight forward because the LCD uses the Liquid Crystal library. The only real change I made for that was the pin out the shield uses is different than what the library uses by default. If any of you find that the pin out with my shield is not consistent across manufacturers, I'd appreciate if you would give me a heads up.

The keypad is mildly interesting though. All 5 keys just use the A0 pin. Yes, I said FIVE keys. The one to the far right is a reset button. I figure at some point I will 3d print a case that will have 5 nice fancy buttons and a pin hole for the reset button. Anyways, you can see that all five keys are attached to A0 and if you analog read the pin you will get different values depending on which key is currently pressed. Because these are probably resistance values, I imagine they will be some variance in values. You can see my values in the code and if you run the code you can compare the values your shield uses as well.

Alright, that is all for now.
