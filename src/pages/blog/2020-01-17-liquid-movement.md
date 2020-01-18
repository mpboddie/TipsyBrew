---
templateKey: blog-post
title: Liquid movement
date: 2020-01-17T01:39:23.444Z
description: >-
  The peristaltic pump has moved water! It is great news but we still have a
  little bit of work to do.
featuredpost: false
featuredimage: /img/multnomah.jpg
tags:
  - pump
  - pourover
---
<div style="width:100%;height:480px;background-color:black;text-align:center;">
  <video style="height:100%;" controls>
    <source src="https://lh3.googleusercontent.com/3TH5C6O79wDcbZHQ0N5B_GZj_MdrEiKUBMc-PfoH8Z10lng0ZriirKSGLjDk8NcgrWdiUjJjitmua1KOHlvqzNGKt2vQO4XzPiopJTtIDmnxQbDGqbkw_SvRHeMZGMTEZRrdwgOpLw=m37" type="video/mp4">
  </video>
</div>

When you watch the video, keep in mind that it is pumping water through 2 meters of hose. Obviously there is a slight problem with the seal in the tube. I had the motor running for 10 rotations and then pause for 5 seconds. During that pause air is getting past the pinch of the hose. That is leading to a choppy flow. So I am going to print a hub that moves the rollers out a bit to see if that makes a difference. I am also going to try a 3 roller hub.

It did feel pretty dangerous holding a pump pumping water, next to a power supply and computer. I think I need to make an initial structure for the pour over machine. So expect to see something about that soon.

As far as the stepper is concerned, I may have damaged the original DRV8825 I was using, the first A4988 I tried seems to not provide enough power for the pump, and the video is using a fresh DRV8825. These drivers are very common because they are used in 3D printers and they are frequently offered in 5 or 6 packs. I'd highly recommend getting multiples because I have no clue what I did to screw up the first one. At the moment, if you really really want my recommendation on which driver to get I would suggest the DRV8825. I may be at fault with the A4988, but I believe I have the current set correctly. I will revisit the drivers at some point if needed, but for now the DRV8825 is being used.

I was trying out the [AccelStepper library](http://www.airspayce.com/mikem/arduino/AccelStepper/) and I will probably use it but right now it is just manually turning the step pin on and off. This provides a constant speed and may be best for comparing changes made to the pump.

The pump did have a lot of successes though. The tubing does not seem to shift in or out of the pump head. Also, I thought I was going to need to work some stabilizers into the design to make sure the tube didn't slip out of the roller path. I really did expect more failure than this.

### Discord News

In other great news, just as I had hoped the Discord users are pressing ahead with or without me! As usual, I am not going to identify any users here and will refrain from displaying any of their work here. If anyone from Discord would like a shout out or for their work to be included here, just let me know. I received a diaphragm pump from one generous user as seen below. That same user has also shared some screenshots of a stand he is looking to make for the pour over machine. Another user that has been working on a grinder has been showing screenshots of their design and discussing some of the struggle. I think that most of the readers here are regulars of the TipsyBrew Discord as well, but if you are not, definitely scroll down to the footer and find the Discord icon. We have fun there.

![](/img/diaphragm.jpg)
