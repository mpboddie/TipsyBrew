---
templateKey: blog-post
title: Blog posts about code are boring
date: 2021-05-30T22:04:47.966Z
description: >-
  The title says it all. This is a reminder to head to the GitHub page if you
  want to see how things are coming together.
featuredpost: false
featuredimage: /img/ilya-pavlov-oqtafyt5ktw-unsplash.jpg
tags:
  - arduino
  - pourover
  - microcontrollers
  - ESP32
  - FreeRTOS
---
![](/img/ilya-pavlov-oqtafyt5ktw-unsplash.jpg)

I'm going to try and make this quick. Not because I don't think code isn't important, but because I think your time is more worthwhile spent reading the actual code, because it is _FAR_ more interesting than me talking about it. I will mention a few things here, but I encourage you to head to [GitHub](https://github.com/mpboddie/TipsyBrewPourOver) to check things out.

So the first thing I want to mention is that I am currently using an ESP32 and it is working out pretty well. I [previously mentioned](https://tipsybrew.com/blog/2021-02-26-ui-work-and-hardware-upgrade/) that I needed to make the change for more resources, but at the moment I can confirm that I am using the 38-pin devkit version of the ESP32.

Secondly, I picked up some 2.8 inch 320x240 _touchscreen_ displays that the latest code are using. This is the same exact ILI9341 driver and resolution as the previous code, but now I can use the excellent [TFT_eSPI library by Bodmer](https://github.com/Bodmer/TFT_eSPI) now that I am on an ESP32.

Also, I finally switched over to using PlatformIO and VS Code for Arduino development. It actually took me a bit to come around to it, but I think it is a better choice for the long run. Of course, since I made the switch the PlatformIO, the fine people working on Arduino [finally release the 2.x beta](https://github.com/arduino/arduino-ide) of the Arduino IDE. I haven't checked it out myself yet, but if you have and you would like to tell me all about it [head over to the TipsyBrew Discord](https://discord.com/invite/RP9Ubb6).

As a final note, the current branch on GitHub, mkII-ESP32, needs a bit of cleaning. You can see from my commits that I am mainly working in the 'TipsyBrew POR mkII' directory. I will get rid of the other similarly named directory in a bit. My current code is stable but it is a bit of a rewrite because I switched over to FreeRTOS now that the base is more capable hardware. I think it results in better performing, easier to understand code. My previous approach was essentially the same as FreeRTOS without the benefits of priorities and multiple cores. Aaaaand I feel like I am veering into that territory of talking about my own code for hours, so please go check it out if you'd like.
