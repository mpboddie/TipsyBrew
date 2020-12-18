---
templateKey: blog-post
title: TipsyBrew mkII is Well Underway!
date: 2020-12-18T18:24:42.877Z
description: >-
  Lots of work is being done on mkII of the TipsyBrew Pour Over Robot. The Pour
  Over Robot mkI is still running like a champ, but it was never meant for the
  long haul. Lots of fantastic coffee has been made and we need to make some
  improvements.
featuredpost: true
featuredimage: /img/pxl_20201204_145446917.jpg
tags:
  - pour over
  - robot
  - coffee
  - arduino
  - pump
---
![](/img/pxl_20201204_145446917.jpg)

Mark II of TipsyBrew has a few goals in mind and also I have been listening to the community for what they would like to see in mkII. With this in mind I have been ordering more parts, experimenting with new methods and materials, and making updated designs. If you have been following along with TipsyBrew's other outlets ([Twitter](https://twitter.com/tipsybrew), [Discord](https://discord.gg/RP9Ubb6), [YouTube](https://www.youtube.com/channel/UCbihciD1uIv_oLXUsaCwFyQ)), you may have a bit of an idea of what I am talking about.

## Community Top Priority

The community's top priority is not a surprise. You all want a bill of materials and easy to follow build instructions. I understand and mkI was too much of an experiment and work in progress to really make that possible. I tried to bridge that gap by breaking work on individual components down to digestible lessons ([DC motor driver for the pump](https://tipsybrew.com/blog/2020-03-09-the-hookup-l298n-dc-motor-driver/), [Stepper hardware](https://tipsybrew.com/blog/2020-01-30-the-hookup-stepper-basics/), [Stepper software](https://tipsybrew.com/blog/2020-01-31-the-hookup-stepper-basics-but-the-code/), [Weighing coffee](https://tipsybrew.com/blog/2020-01-01-the-hookup-weight-sensor/), [Even how to make a crappy stand](https://tipsybrew.com/blog/2020-01-26-stand-up/) that you too could add and remove components to leading to an IKEA swiss cheese like situation). These write ups will still be useful, even to myself as I revisit old work that I haven't thought about recently. However, there are some parts of mkI that are no longer useful, except for an example of how I don't want to do it (RIP Arduino UNO, stacking nothing but shields for TipsyBrew, fucking protoboards, LCD character display UIs). With all of the changes in the past year it would not have been fair to put out a bill of materials six months ago just for me to say, "Oops, looks like that isn't going to work, I just ordered these parts instead."

With this is mind, hardening a design for exact replication is going to come with some downsides. The first thing that comes to mind is that I always wanted a design that worked more like a framework. I wanted the Pour Over Robot to work with many methods, such as different heaters, pour over cones, carafes, additional sensors, even pour arms. I'm not saying that this won't be possible, but for mkII, in order to get to a bill of materials and start to finish build instructions, mkII is going to be a strict moment in time on the TipsyBrew timeline.

Let's take that as an opportunity to talk about the mkII vision.

## What stays, what goes

![](/img/pxl_20201218_200157731.jpg)

### The stand

Big shocker here, but the old IKEA-esque stand is on it's way out in mkII. I keep reminding people, but it is true, I threw the current plywood stand together out of scraps I had laying around. It was useful because I could drill holes and screws into it without care of ruining a nice piece of art.

I learned a few lessons for this form factor though. First off, the controls at the top are annoying. It gets in the way of loading the grounds. I thought it would be nice having the display and controls closer to eye level, but I was wrong. It also hides the fact that there is a freaking robot arm moving around making me coffee!!!

Second, spills are very infrequent. Another reason why I put the controls at the top of the stand is that I thought it would be better having them in a location that liquid would _NOT_ flow to. Turns out I really only ever had one spill and that was due to using too many grounds and the carafe over filled. I can solve that with a software check and being less dumb. Also wires/tubes all over the place and 3M sticking electronics to the side of the stand isn't cutting it in mkII.

### The pump

The current pump is a diaphragm pump that a generous Discorder wanted me to give a try. It is fantastic, but sadly I looked it up and it is not rated for food safety at boiling temps. I have not experienced any ill effects from this pump and I still make coffee with it (probably shouldn't), however I can't recommend others use it.

This has led me to a bit of a hunt. The current pump could still be used to push room temperature water to a heater that would then be pushed to the brew cone, much in the way that a k-cup machine does. This would mean integrating a sealed heater into the design though and I don't think using mains AC would be good for the general maker (although it would be super cool just heating the water we need!-- no! self control Tipsy, calm yourself down, make it accessible).

When looking for other pumps it seemed that many of the higher temp food safe diaphragm pumps were higher AC voltage, which leads to the same issues as integrating a boiler. Because of this, I have purchased some peristaltic pumps for testing. None of this is new really. You can catch up on previous pump issues here, <https://tipsybrew.com/tags/pump/>. Look for more information on evaluating these new pumps soon though.

### Arduino

Sorry RasPi lovers, the Arduino MEGA 2560 is here to stay! However, I do have some good news for the ESP (sort of) and WiFi lovers out there. Mark II will be using an Arduino MEGA 2560 with an integrated ESP8266. This will allow some WiFi features to be integrated into mkII. I wasn't completely sure how I felt about integrating WiFi, [as you may have noticed](https://tipsybrew.com/blog/2019-12-20-lets-talk-about-what-the-pour-over-machine-can-do/), but I ordered [this board](https://robotdyn.com/mega-wifi-r3-atmega2560-esp8266-flash-32mb-usb-ttl-ch340g-micro-usb.html) a while ago and started playing around with it recently. I believe there are some good use cases and I should have a basics write up of how to make a WiFi scale with it posted here soon.

## Happy Anniversary TipsyBrew!!!

Holy crap this post got long and I feel like I only scratched the surface of what I wanted to talk about! However, if I am posting this on time, tomorrow marks the one year anniversary of TipsyBrew's first post! Or maybe I spent too much time proofing what I just wrote and... Today is TipsyBrew's one year anniversary!!! Either way, I have really enjoyed working on TipsyBrew, talking with the truly great friends over in the [discord](https://discord.gg/RP9Ubb6), and drinking some damn good coffee. 

Please if you feel like you are able, head on over to [Buy Me a Coffee](https://www.buymeacoffee.com/TipsyBrew) to keep TipsyBrew going strong into a much much much better next year. But more importantly, subscribe to the YouTube [channel](https://www.youtube.com/channel/UCbihciD1uIv_oLXUsaCwFyQ), follow [TipsyBrew](https://twitter.com/tipsybrew) on Twitter, and join the [conversation](https://discord.gg/RP9Ubb6) on Discord because you too love robotically induced coffee.
