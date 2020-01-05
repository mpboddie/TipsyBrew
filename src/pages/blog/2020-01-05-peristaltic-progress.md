---
templateKey: blog-post
title: Peristaltic Progress
date: 2020-01-05T03:38:35.257Z
description: >-
  Peristaltic pump work has commenced! This is just a first prototype and there
  is still a lot of work to be done, but here are some thoughts. None of this
  design is set in stone yet and everything is subject to change.
featuredpost: false
featuredimage: /img/complete.jpg
tags:
  - pourover
  - pump
  - 3D printing
---
![Mostly complete](/img/complete.jpg)

So there is prototype #1. I am still waiting for some stepper drivers so I can't really power it up yet... although I think I have an L293D in storage somewhere if I get desperate. So what exactly did I do here? Let's break it down a bit.

![Fusion 360 mock](/img/f360peristaltic.png)

I've included this Fusion 360 snapshot so you can see better detail. The main body is three layers, from the bottom up you have:

* The mounting plate attaches to the NEMA 17 stepper using 4 M3 screws. The next 2 plates attach to this plate with M4 screws and nuts recessed under the mounting plate.
* The next plate up is the bottom plate. This plate is sandwiched in the middle and receives half of the 9.6mm OD x 6.4mm ID silicon tubing and serves as half of the "squishing path" (big technical term, I'd explain it but I think it is too tough for you).
* The top plate caps off the squish path and tubing recesses.

The only other 3D printed parts in the pump are the two pieces of the roller spindle. The two spindle parts sandwich three 4x12x4 ball bearings to create each roller. They are held together using M4 screws and one side holds a recessed nut. The center of the spindle is D shaped to match the shaft exactly. As added protection there is a slot for a captured M3 nut so an M3 screw can hold more tension against the flat of the shaft.

![Roller detail](/img/rollercollage.jpg)

### Questions

**Isn't NEMA 17 overkill?**

It probably is, but I don't really know what exactly what will be needed so I went with a motor with good availability. The NEMA 17 term really just describes the mounting plate of this stepper, but it is extremely common these days because they are frequently used in 3D printers. I'd rather use an overkill motor at 50% that can be obtained more easily that a more appropriate one that is difficult to find.

**Why only two rollers?**

For those of you unaware, peristaltic pumps can have as many rollers as you can fit in the pump head. It is very common to have 2 or 3 rollers though, for various reasons I won't get into at the moment. I went with 2 because I am thinking it will have a better flow rate, however I will be trying out 3 rollers as well.

**What is with the ugly ass plastic?**

Yeah I know. Natural clear PLA is kind of gross. I was too lazy to swap it out.

**Where are the STL files!?**

I haven't even tested it yet! None of this design has been finalized yet. If you _really_ want to print and test it out, I guess I can share it. Just let me know.

### Possible problems

I think the spindle may need to be adjusted slightly to move the rollers out slightly more for increased squish. But I won't know for sure until I test it out. It currently squishes the tube down to 3mm, which I thought was going to be tough to turn, but once I got it assembled it really seems like it could be even tighter without issue.

I was thinking that the way I sandwiched the tubing between the top and bottom plates was going to keep the tubing solidly in place. I can definitely move it around though. I am not going to change that until I know it is a problem though. It may be that some zip ties on the tubing just outside the pump head will be good enough.

I think that is all for tonight. I'll leave you with a few more pics.

![Rollers and mounting plate](/img/mountandroller.jpg "Rollers and mounting plate")

![Mostly complete](/img/complete2.jpg)
