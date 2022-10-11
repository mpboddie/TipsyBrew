---
templateKey: blog-post
title: Current Software in Action
date: 2021-06-06T18:20:55.265Z
description: >-
  As noted in the last update I have been working on the software side of
  things. But I think for most of you it is best to show you want is working
  rather than blabber on about it. If there is enough interest about how any of
  this is done, I am glad to do a bit of a code breakdown. Just let me know.
featuredpost: false
featuredimage: /img/currenttouchscreen1.png
tags:
  - arduino
  - pourover
  - microcontrollers
  - esp32
  - touchscreen
  - FreeRTOS
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/fFTg2qKSC5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the video above you can see a breadboard prototype of the ESP32 MkII Pour Over Robot starting up. First you can see the start up screen. While this is loading, wifi is also connecting. When the wifi becomes active you can see the wifi symbol appear in the upper right hand corner.

NTP sets the time which is top center. It is sort of a bug that it shows 7:00 before the time sync occurs. MkII doesn't have any sort of RTC so NTP initiates every time you power up.

Down on the lower left corner you will notice a -127 degrees value. This is the kettle temp and no I am not storing dry ice it in, I just don't have the temp sensor connected.

The first thing I do is press the Preheat button. This is just to demonstrate that it holds state even when changing screens, however later in the video you will notice that a power cycle does turn it off.

Next, I head to the Settings page. On this page I cycle through the 3 settings currently there and change some values. I then go back to home and into settings again to show that the values persist. Every time I leave the settings page, done by pressing on the center of the screen, the values get stored to SPIFFS. This means that the settings values will persist though a power cycle, which I then demonstrate.

This all may seem pretty trivial, but there were a lot of parts to this that I had never done before, like using a touchscreen, ESP32 wifi, SPIFFS, and it is all done with FreeRTOS tasks. I am pretty happy with the progress and it is all up on [GitHub ](https://github.com/mpboddie/TipsyBrewPourOver)as of the cf15442 commit.

Final note, I apologize for the crappy video, but it was either throw one together on my lap now or wait for the perfect moment of who knows when to make a perfect video.
