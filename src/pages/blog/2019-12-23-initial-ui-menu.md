---
templateKey: blog-post
title: Initial UI Menu
date: 2019-12-24T00:07:10.414Z
description: >-
  Look at that beautiful cup of coffee steaming out in the fresh air of the
  morning sunrise just below. Get all nice and relaxed thinking of a new day
  while you breathe in that cool air with the wonderful wafting scents of fresh
  brewed coffee. Just close your eyes for a moment and soak it all in like you
  were reclined on a porch chair... Never mind that you aren't a lefty, I didn't
  ask. Just put yourself in a zen moment. Did you take it all in? No? Take
  another moment. Great, now I am going to f*&k it all up by talking about a
  flowchart.
featuredpost: false
featuredimage: /img/coffeemorning.jpg
tags:
  - pourover
  - ui
---
![Coffee morning sunrise](/img/coffeemorning.jpg)

User interface flowcharts. They aren't the worst, but in my experiences if you are or were a dev at any point, you really did not enjoy front end development. And if you were one of the rare few who did enjoy front end, it was because you had more than two lines of 16 characters to work with.

I know I praised keeping things simple by using the LCD keypad just [yesterday](https://tipsybrew.com/blog/2019-12-22-minimal-ui/) and now I am calling it a pain in the a$$. Well it's not really that bad, it just takes a bit more consideration and planning than you would think for LITERALLY 32 CHARACTERS!

![Flowchart](/img/pourover.png)

And that leads us to this fancy (sarcasm) flowchart. So the states forming the column to the left are the main menu items which you will cycle through with the up/down buttons, then choose an item with the select button. These main menu items are what I am aiming for in phase one, but I will probably add some more for testing purposes.

The 'Set Temp' and 'Ratio' items simply put you in a mode to adjust the brewing water temperature and the coffee to water ratio used. The preheat and scale options are self explanatory and not completely necessary, but I figured it could be convenient.

That leaves the really important one, 'Brew Coffee'. I figure I should run through what a user would expect from that option since it is THE reason for the project.
1. User presses select on the 'Brew coffee' option to be asked if the carafe is ready to prevent turning it on dry. Choosing No will bring you back to the main menu and Yes will continue.
2. The carafe will now start heating to match the target temperature. On this and most of the Brew coffee steps holding the select button will cancel the brew and go back to the main menu.
3. Once the water is to temp, the user will be asked if they want to rinse the filter. Selecting No will continue to the next, but choosing Yes will bring up a screen where pressing the down button will dispense water from the heated carafe. Pressing select will continue to the next step.
4. The user should discard any rinse water because the next step is to way the grounds. The brewer should be in place without grounds, press down to tare, then grounds placed in the brewer on the scale. Pressing right will continue to the next step and automatically use the weight recorded and ratio to calculate the water to be used.
5. From this point on the brewer will go through bloom, necessary pours, and the required waits until the required amount of water has been dispensed.

This is it for phase one. There are plenty of simplifications in this plan, such as time required for the drawdowns and letting the user specify the pour schedule. I mean I haven't even talked about the pour pattern yet!!! Fun things to come, stay tuned.
