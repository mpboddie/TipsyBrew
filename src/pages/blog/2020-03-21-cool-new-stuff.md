---
templateKey: blog-post
title: Cool new stuff!
date: 2020-03-21T00:28:36.655Z
description: Lots of new additions to TipsyBrew. Let's get to it!
featuredpost: false
featuredimage: /img/img_20200320_205920.jpg
tags:
  - pourover
  - 3D printing
---
### Control Panel Experiment

![](/img/img_20200320_205920.jpg)

I know this isn't pretty, but remember it _was_ a 4x4 membrane keypad with the OLED taped to it just flopping around. As you may have noticed the arduino isn't up front anymore. My original thought was to stack a shield or two over the arduino, but there are just too many things that won't fit on a shield, like motor controllers and buck converters. So I made the choice to move the arduino and anything not UI to the side or back. This leaves us with the OLED and 6 buttons in front of us... for now. I know people want less buttons but this is not the final design and it is easier to have extra buttons and not need them than adding them on demand. I was just going to use the directional buttons plus a select button, but that meant using 5 pins which left me with a 2x3 meaning I had a free sixth button. I'm calling that a COFFEE NOW button.

You may find the construction of the control panel Faux Circuit Board (FCB) interesting as well. You all know of my [hatred of protoboards](https://tipsybrew.com/blog/2020-02-07-fuck-protoboards/). I recently can across Johan's work on what he is calling the [3DPCB](https://vonkonow.com/wordpress/2019/12/developing-3dpcb-3d-printed-circuit-board-with-lots-of-potential/) and it looked promising so I gave it a try. It is a fantastic middle ground between stupid fucking protoboards and gloriously finished but slow to produce printed circuit boards (PCBs). It is basically a 3D printed board that you press wires into from point to point. I can go into details about how I modeled it but this is the first try and I need to try a few more revisions. However, the basic process in Fusion 360 was:

1. Make a sketch of the points you need to connect. In this case I laid out where I wanted the OLED and buttons, then figured out the best place for the 2x5 header pins to connect it to the arduino.
2. Make a second sketch connecting the points to create the appropriate circuit. Johan said he used b-splines because it kept the wires in place better, but I didn't really have that issue so I used straight lines with 90 turns and then rounded the corners. By the way I was using wires from some spare ethernet cabling.
3. I then modeled cylinders around the points that tapered to be wider on the side I was soldering on and just big enough for the pins to go through on the other side.
4. I then drew diamonds on the end of the path lines and created a channel for the wire by making the diamond follow the path line.
5. Finally I made the board that encompassed all of the points and paths. The points and paths were then used to cut from the board and that was it.
   It is way nicer to assemble than I thought it was going to be and was waaaaay better than protoboards. I see a lot of advantages to this and after some fine tuning I will do a write up specifically about FCBs and how you can create them.

### SPOOOOOOON!!!

It was incredibly clear from the first [TipsyBrew cup](https://tipsybrew.com/blog/2020-03-01-success-first-cup-video/) that I needed at least some small amount of water dispersion. As you probably know pour over coffee typically involves moving the water around by pouring with a goose neck kettle in a pattern to cover the ground bed. I aim to move the spigot of TipsyBrew around, but that is going to take a bit of time and not everyone may want a solution so complicated. That brings us to the spoon.

![](/img/img_20200320_210026-collage.jpg)

This is not just *any* spoon. This isn't even the [spoon of destiny](https://www.youtube.com/watch?v=rcm-J7lQT3w). This is a servo controlled spoon. The latest version of the early phase code up on [GitHub](https://github.com/mpboddie/TipsyBrewPourOver) now, has some preliminary movements for the spoon to divert the path of water. This allows the water to spread over the grounds better. It isn't as good as pouring in a circular pattern but it is better than a single point.

You can also find the models for the tube holder and servo spoon bracket over on [GitHub](https://github.com/mpboddie/TipsyBrewPourOver) now. One thing to note about the spoon, if you look at the picture you will notice that there is a bend where the handle hits the start of the cup of the spoon. I made that bed so water would not hit the back of the spoon and travel down the handle missing the pour over cone and making a complete mess. I'd suggest you do the same unless you get a better spoon, like this [one](https://www.amazon.com/Guinness-Official-Merchandise-unknown-Engraved/dp/B0006PWLR4/ref=sr_1_5?crid=29ET2K9TAJ60I&keywords=guinness+spoon&qid=1584764163&sprefix=maker%2Caps%2C206&sr=8-5).

### Discord Friends!
I can not praise the TipsyBrewers over on the Discord server enough. There has been a grinder from scratch project going on for a while now making great strides. He ground coffee a while ago but now it seems like it is really stable. You have to check it out.

Also, from another user there are pictures of TipsyBrew code being run on other platforms such as ESP32. And I am really excited that someone else sent me a pic of a full stand that looks quite close to completion.

I do encourage you to head on over and join in. It is a great distraction from social distancing. Stay safe and healthy everyone!
