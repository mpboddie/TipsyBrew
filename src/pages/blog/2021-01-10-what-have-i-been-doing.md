---
templateKey: blog-post
title: What Have I Been Doing?
date: 2020-12-28T02:59:57.336Z
description: >-
  In my previous post I talked about TipsyBrew Pour Over Robot mkII and how work
  on it is already under way. All projects have to balance work for progress and
  documentation/communication. I am severely falling behind in the latter. I was
  really excited about the new aspects of mkII that I wanted to experiment with
  and I didn't want to share too much until I knew it was viable. However, that
  goes against TipsyBrew's value of sharing failures. To get everyone up to
  speed and share the full vision of mkII, I am going to try and break down what
  I have been doing and the plan moving forward.
featuredpost: false
featuredimage: /img/20210110_233014-collage.jpg
tags:
  - pour over
  - robot
  - coffee
  - arduino
  - pump
  - UI
  - display
  - 3D print
  - wifi
  - load cell
---
![](/img/20210110_233014-collage.jpg)

I keep walking away from completing this post in favor of doing work on TipsyBrew. So I am going to pick up the pace and write this as quick as possible. Hopefully, once you see what I have been working on, you will understand why I am so excited.

## The Stand is Being Worked From the Bottom Up

If you have been following me ANYWHERE, you have been seeing some _concrete_ progress on the mkII stand. I know. That was a horrible pun, but if you hang out in our Discord you would see way more of that. The new base of the mkII stand is made of concrete. It is the most complex and thin pour of concrete I have ever done and I absolutely love it. My first [twitter tease](https://twitter.com/tipsybrew/status/1298718629303705601) about the concrete base was way back in August. At the time I justified not sharing the details because I really wasn't sure if it was something that would work or if I'd even like it. But once again, failure should be shared with as much passion as success.

I liked the idea of concrete for many reasons. I personally think it looks wicked cool, it is readily available, it shifts the center of mass of the stand much lower, and I had some novel ideas to use it. First off, I made a 3D printed mold to shape the poured base. The mold consists of many many many parts that piece together because my first try was too difficult to demold. The first try still worked but parts of the mold didn't survive. Part of the reason why I feel the base is complex is because the bottom is hollow for most of the electronics live in and 3d printed parts are [embedded in the concrete](https://twitter.com/tipsybrew/status/1303891840526151682) during pour for strength, screw threads, and grommets for wiring pass throughs. Now I am saying the base is "complex" but that is really for you to judge. I am by no means saying that I am the first and only person to use concrete this way.

## Not Just Concrete

I feel like a completely concrete stand would be incredibly difficult to make and look like a fancy cinder block. I think the combo of wood and concrete can look great in certain cases. However, I am still at a point where I design, fabricate and revise. I don't have a CNC, so recreating something in wood over and over and over becomes way more time consuming than being able to design, sent to print, and work on something else while I wait. Enter, wood PLA filament. I know it isn't a complete replacement, but it doesn't look horrible. If you really object tell me to get a CNC machine in your [Buy Me A Coffee](https://www.buymeacoffee.com/TipsyBrew) comment when you support me.

The front of the concrete base has recently been filled by a wood PLA panel that holds the UI buttons and display (more on that in a sec). The rear of the concrete base at the moment is open but that should be where the power jack, USB port, and other related items will live. The left and right sides is where wire pass throughs are located. Wood PLA uprights with matching pass throughs are attached to the sides allowing wires to be routed from the base up to the rest of the robot. These wiring channels will eventually be hidden by customizable decorative panels.

If we move up from the base, the next new piece is a new plate to hold the brewing carafe. This plate on the mkI machine slightly warps from the heat of the coffee. I mulled over different material choices for a while but eventually decided to give wood PLA a try but with a thin layer of cork over it. I think it looks great and we will see if it helps with the warping issue. This plate rests on the load cell of course, but the gap between the base and plate is minimized by setting the load cell down into the concrete. This not only makes it look nicer, but also reduces the total height of the robot. If total height gets too tall then it may not fit on countertops under kitchen cabinets.

## Enhancements

MkII is about more than just making things look nice. There are a lot of enhancements and additions I want to make to the TipsyBrew POR, but I don't want to go too crazy. The goal of mkI was to make a great cup of coffee. The goal of mkII is to put together a robot people can (stable bill of materials and guide) _and_ want (good looks and reliable functionality) to build themselves. I mentioned some of these enhancements in my last post, but I wanted to give you a bit more info and perspective.

If we continue moving up the stand the next part we hit is new to mkII. The v60 brew cone does not sit directly on the carafe anymore. There is now a second load cell for independently weighing the cone and carafe. This give the robot more information to work with and will help the user dial in their brew even better. Full disclosure: I have designed and assembled this but it isn't even close to being tested yet. Fingers are crossed and look for more on this later.

Let's keep moving up the stand and we have gone passed my progress on the stand. However, this is the very top of the stand where the pour arm and pump will reside. The pump is something I wanted to talk about though. It turns out the pump that I have been using on mkI is not listed as food safe at higher temperatures. This lead me on a chase for alternatives. If you have been following the project for a while you will remember that early on I was looking at different [pump types](https://tipsybrew.com/blog/2019-12-26-pump-it/). Well I have tested a commercial peristaltic pump (mkI = diaphragm pump) and it looks like it performs just as well. However, lots of design work still needs to be done at the top end of the brewer.

Now if we go all the way back down to the base, a huge change in mkII is the user interface. First off, I caved and got an Arduino MEGA 2560 is an integrated ESP8266 for WiFi. I am not prioritizing the WiFi features, but I have to admit, I played around with some controls and display on my phone when testing out the new pumps and it is nice.

That isn't the only UI enhancement. On mkI I put the controls and display at the top of the brewer thinking it would be better closer to eye level, but it just made loading grounds more difficult, puts human pushing over the center of gravity, and hides the fact that a robot is moving the pour spout around making you the coolest person to exist. Obviously, the display and buttons are in the base. The display is now a 2.2" 320x240 color LCD panel. I went through a lot of display options during mkI and liked the OLED, but it was just too small for this application. I bought some larger OLEDs, but when doing so I noticed that the price of the OLEDs shoot up so much when getting even slightly larger that it made more sense going with an LCD. I have centered the LCD display in the front opening and flanked it with two buttons a side. I recently completed this and have been playing around with the LCD. Like _right now_, if I weren't typing this up, I'd be playing around with the start up screen and UI.

## What Needs to Be Done

This is becoming a monster post and I haven't even thought about pictures for all this nonsense I am writing to you all. What needs to done is going to have to wait because I don't want to delay getting this out there any more. I think I have overloaded you all with info anyways.
