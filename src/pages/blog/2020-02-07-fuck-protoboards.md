---
templateKey: blog-post
title: Fuck Protoboards
date: 2020-02-08T00:36:54.297Z
description: Protoboards suck.
featuredpost: false
featuredimage: /img/img_20200207_070458.jpg
tags:
  - arduino
  - pourover
---
For those of you unacquainted with the well meaning but absolute shit protoboard, it is a PCB made for general purposes. So where as normal PCBs are designed printed for a specific circuit, protoboards are usually just a grid of holes like a breadboard. They are kind of a middle ground between breadboards and custom designing and making a PCB. 

In concept it is a great idea. This is why I say the protoboard is "well meaning". Breadboards are a fucking mess with loops of loose wire all over the place. Custom PCBs are sweet but take time to design and even more time to get professionally made in low volume (uhhh... and coronavirus?).

I've also tried to keep in mind what will make TipsyBrew easier for others once phase one is done. So naturally with lots of shield shaped protoboards available, I figured I'd give it a try and share the results. I expected this to be a happy footnote though, not a hateful title. Then this abomination happened...

![Driver proto](/img/img_20200207_070458.jpg "Driver proto")

That is just the stepper driver circuit. It took like 3 hours to do that and it does not look good.

The problem is there are a couple ways to connect individual holes on the protoboard and they all kind of suck. I feel like I've seen a lot of videos where people just bead solder across the pads. It looked so easy. It is not and it it uses a shit load of solder AND it is messier than it looked on camera. I ended up just folding the wire under after passing it through the hole. It works, but I just thought protoboards were going to be easier and faster.

The whole experience and a tough work week has lead to me finally polishing off the last bit of WL Weller 12 that I have been holding on too for too long. So good! I just wish I could get a replacement bottle.

But I digress, this is not just a woe is me post. The protoboard works! You may be thinking, "I thought Tipsy was using an UNO, what is up with the Mega protoboard?"

No? You weren't thinking that? Well then maybe you were thinking the TipsyBrew Discord motto...

![](/img/img_20200207_193003.jpg)

As you can see, the Mega protoboard juts out to the right so I have full access the the 4 pins for the stepper output. Alright, I'm going to get back to work. I need to add the weight sensor pins, so I can get this screen working.

![Pump testing](/img/img_20200207_193019.jpg "Pump testing")

This is just the pump testing screen, not a final TipsyBrew interface. Hopefully I have learned my protoboard lesson and it sucks less from now on.
