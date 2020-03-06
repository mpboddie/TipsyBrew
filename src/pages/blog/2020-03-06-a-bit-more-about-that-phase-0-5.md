---
templateKey: blog-post
title: A bit more about that Phase 0.5
date: 2020-03-06T02:37:27.516Z
description: >-
  You've seen the first cup, now as promised let us discuss how it is done. Why?
  Because what good is a mysterious IKEA-esque coffee making machine if I'm the
  only one who knows what it is.
featuredpost: false
featuredimage: /img/coffeecup.jpg
tags:
  - pourover
  - arduino
---
## Use It
The first  cup of coffee was actually quite the jump of functionality. If you are just a casual follower or you are just joining the journey of TipsyBrew Pour Over, you may not understand what is going on at all. I think the best place to start is going through how it is used.
1. Behind the stand is an electric kettle. Before the video started I filled the kettle, ran it to a boil, then rinsed the pour over filter, then placed it behind the TipsyBrew with the intake tubing placed in it.
2. When the TipsyBrew starts up, it shows a title screen for a couple seconds then instructs the user to place a brewer in the stand WITHOUT grounds. The user should press any button to proceed.
3. TipsyBrew then uses a scale under the brewer to measure the amount of coffee grounds you place into the pour over cone. If needed you can tare the scale with the A button at this point. You will see three numbers on the screen:
  * Dead beans: This is the amount of coffee grounds you have added to the pour over cone in grams.
  * Water used: TipsyBrew calculates the exact amount of water required according to a coffee to water ratio. In this demo, it is using a standard 1:16 coffee to water ratio.
  * Coffee made: This is the amount of resulting coffee. The grounds will hold a certain amount of the water. That is subtracted from the input water and you get the amount of coffee made. This is convenient and prevents you from overflowing the brewing carafe assuming you are paying attention to what you are doing.
4. When ready to brew, then * button is pressed followed by the 1 button to confirm.
5. TipsyBrew starts the Bloom stage. The bloom for those uninitiated is some water to wet the grounds followed by a wait to allow CO2 to escape the grounds. TipsyBrew doubles the amount of grounds used and uses that amount of water (using the scale) for the bloom, then waits 30 seconds.
6. Once the Bloom stage completes, TipsyBrew starts the Brew cycle. TipsyBrew keeps a count of how much water still needs to be added to the pour over cone. If that amount is more than 150ml it will dispense 150ml, wait 20 seconds, then repeat until the correct amount of total water is used.

Aaaaand that is it.
## Bill of Materials
In the Discord channel I said it is probably too soon to release a bill of materials, so here it is!!! Kidding. I mean I am still letting you know what parts are in the demo, but just a brief run through for anyone that really wants to get a head start. Keep in mind that **any of this could change before hitting phase one**.
* Arduino MEGA 2560
* i2c OLED display 128x64
* 4x4 membrane keypad (way too many keys, but I didn't have other buttons)
* 1kg load cell and HX711 amplifier (probably going to switch this to a 2kg)
* 12v 4a power supply and matching female barrel jack
* L298N DC motor driver
* 12v diaphragm pump
* Vaguely IKEA stand and various 3D printed parts (models can be found on the GitHub page)

## The Code
So the code ain't perfect. It works as you saw in the video, but its got a couple bugs and should probably be organized and documented better. I'm not going to do a code walk-through at this stage because of this. I will still share the code though. In fact it is already on [GitHub](https://github.com/mpboddie/TipsyBrewPourOver/blob/master/earlyPhase.ino).

## What is next for TipsyBrew?
My vision for phase 1.0 when this all started was to have the features we have now plus temperature/kettle control. I still want to do temp/kettle control, but after seeing the first cup, I think some sort of brew head or spout movement will bring the most coffee improvements.

I also really crammed to get phase 0.5 done, so I need to do a bit of catch up with things like hookup articles, code cleanup, fuller menu system, 3D printed case for the electronics, coffee ground chute, peristaltic pump revisions, and the list goes on and on.

Let's not forget that I'm not the only person working on this either. I try to keep this site to my work only because I don't want to accidentally take credit for someone else's work. However if you take a look over on the Discord server, it is a great place to give me direct feedback (which helps out a lot) and check out other people's work.

If you would like to contribute to the project, the best way to do so currently is to:
* Participate in the discussions on the Discord. Doing so keeps me focused on the project because I know people are interested. It is also my best source for getting a sense of what people really want from TipsyBrew.
* Try to duplicate or improve on my work. I am trying my best to be as open as possible about what I am doing. If I am not explaining enough or you think I am going down an incorrect path, then speak up. If you don't want to come to the Discord server, use the [contact page](https://tipsybrew.com/contact).
* Donate to the project. I largely fund TipsyBrew myself and all of the work is done in my spare time. I don't really want to take money, but it does help. Please check out the options for supporting the project at [Buy me a coffee]( https://www.buymeacoffee.com/TipsyBrew).
