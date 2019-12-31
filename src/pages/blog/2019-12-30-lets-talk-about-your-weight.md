---
templateKey: blog-post
title: Let's talk about your weight...
date: 2019-12-31T02:46:34.253Z
description: scale. Let's talk about your weight scale.
featuredpost: false
featuredimage: /img/scale.jpg
tags:
  - pourover
  - weight
---
Alright so I have been working with a load cell and an HX711 hooked up to the arduino to get weight input. Why is weight important to a coffee maker? Oh it is crucial. You may know that the ratio of coffee to water is important, but what you may not realize is that the formula of one scoop of grounds to a cup of water is about as useful as letting my cat make the morning pot of coffee. I won't go on and on about this like a coffee fanatic because it is basic science. Both grind size and bean roast can wildly vary a single scoop's weight. So if we want truly reproducible and accurate coffee we need to weight the beans and determine the weight of the water based on that.

![Load cell and HX711](/img/scale.jpg "Load cell and HX711")

What you see above is the Mega and LCD keypad shield* you are used to seeing if you have been following along. Attached to the arduino is an HX711 load cell amplifier and a strain load cell. Let's just call them the HX711 and the load cell.

### Load Cell

The load cell I am using is the aluminum bar you see between the 2 plexiglass circles. At the moment the one I am using has a upper limit of 1kg, but I have a 2kg and 5kg, 10kg is common in this form factor. The top plexiglass circle is fastened to one side and the bottom circle attached to the other side. This makes the bar flex slightly when something is placed on the assembly. This flex is incredibly small and as far as I can tell the flex is imperceptible by the human eye. However this causes 4 strain gauges (2 on the top, 2 on the bottom) to stretch and constrain changing their resistance. By reading these resistance values we can get the weight.

### HX711

The problem with the load cell is that the resistance change is also minute. It is consistent though, making it an accurate weight sensor. As you have probably guessed this is where the HX711 load cell amplifier comes in. The resistors on the load cell are configured as a [Wheatstone Bridge](https://en.wikipedia.org/wiki/Wheatstone_bridge). You can check out the details and if you know Ohm's Law you are capable of understanding it, but basically you put a known voltage in and and the resulting voltage can be used to determine the weight.

### Does it work?

Yeah of course it does. You think I wrote this up just to tell you it won't work? Ok, I suppose I would have. Failure will happen at some point and sometimes that is more valuable information. Over in the [TipsyBrew Discord](https://discord.gg/KKTHenQ), we were discussing the reliability of these load cells. So far in testing I believe we are good, if this changes at all, you will hear about it here. I do feel like any load cells should stay away from any heaters though as that may effect it.

I was going to throw a sweet fritzing diagram together and share the code but it turns out fritzing costs money now? Anyways I bought it but then the parts I needed weren't there or were the wrong size. It was a disaster that took time away from cleaning up the code, so I'll make a different post for that.

### Completely unrelated news

Today we talked about a crap load of stuff on the [Discord server](https://discord.gg/KKTHenQ). I can't promise I'll always be able to be active there but it is a great place to discuss plans that I haven't divulged yet. Also, I am no expert so if you think I am wrong, let me know. I also can't promise I'll always answer your questions in the discord when they have already been painstakingly answered in great detail. You know who you are.

Anyways, there was lots of talk about the brew head. As a previous post has said, I am saving that towards the end because it will take a lot of experimentation and there are varying levels of success depending on your individual needs. But, if you are curious for a baseline, the resulting bed should look at least better than this...

![Bad bed](/img/badbed.jpg "Bad bed")

\* Sidenote: I have found it difficult to get a good picture of the LCD because there is a bad design going around that breaks the backlight adjustment. I am looking for a diode to fix it. 
