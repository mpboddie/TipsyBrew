---
templateKey: blog-post
title: New Pour Arm
date: 2020-04-28T00:45:04.231Z
description: >-
  *Pokes my head up* Holy shit! I have been working on pour patterns for a bit
  too long. I didn't realize it had been a while since I updated you guys.
  You've got to throw something at me when my head has been down for that long.
  Luckily I have something to show for it!
featuredpost: false
featuredimage: /img/pourhead.png
tags:
  - servo
  - pourover
---
Last time [we talked](https://tipsybrew.com/blog/2020-04-01-how-is-it-brewing/), I told you that the spoon water spreader was good, but not great. I was really seeing the value in moving the pour spout around a bit. So, that is what I did. Cue the footage of me moving the hose around with my hand... We don't have that footage?... It was crap?... Pfff, good help is hard to come by these quarantine days.

I guess we can just skip ahead to the better solution. I have been working on ways to move the spout and not spinning the brewer. There is nothing wrong with spinning the brewer, I just felt like keeping the brewer stationary will allow for for more flexibility with which brew devices can be used. Plus, it seems more difficult to not rotate the brewer and I am a sucker for a challenge.

I went with a 2 servo setup. The servo precision reduces the need for calibrating on startup and the limited area that needs to be covered means that servos are a reasonable option. One servo on the back of the stand rotates the arm holding the pour spout back and forth, or from the user perspective, left and right. The second servo is on the arm and runs a gear to linearly extend and retract the arm. The parts end up looking like this...

![2 Servo Pour Arm](/img/pourhead.png "2 Servo Pour Arm")

Like most models I have made for this project, it is more of a quick functional piece to prove it can be done. It works well and the servos keep out of the way. The servos are not pictured here, but the bracket at the top holds the angle servo to the back of the stand and the extending servo hangs underneath driving the gear. Let's take a look at it in action, shall we?

### Overhead view
<div style="width:100%;height:480px;background-color:black;text-align:center;">
  <video style="height:100%;" controls>
    <source src="https://lh3.googleusercontent.com/fdPmuwnXFJDCY9pc0v1ZBvBfwiGCfUPm65KtmdL05dhPzi691CjGr2K3mTNjX1z7rm9_sFkao-A18OcloTps8rWFFEUTj3D7ZPqtgDM92jYH4CbkS7Jbl4J6XlnEjUMfc8qWSPfTrg=m37" type="video/mp4">
  </video>
</div>

### Full frontal
<div style="width:100%;height:480px;background-color:black;text-align:center;">
  <video style="height:100%;" controls>
    <source src="https://lh3.googleusercontent.com/CkgHqRWJ7UDhQYTNL-Mm5H7dyou0BXNa3Ox3MrE9qyA7QlAJ9mOu0s716P9JcPsa2UFes2kpH1M9RT4VZEL8kODQo_rURg1osgRk5udkxfKkoL3WnapSYCsLZeaFWO_buPzcfuZnfw=m37" type="video/mp4">
  </video>
</div>

I fully admit, it still needs some work. You can see it is a bit jittery for starters. And in that second video the pour radius is clearly too wide, but this is a great start. I was planning to talk about the math behind the whole deal because calculating how to draw a circle of any size with just a vector from an external point was the kind of thing I have not considered in decades.

It is getting late though, so the math lesson will have to wait until another day. Everyone be responsible, stay safe out there, and enjoy that beverage with the added perspective of knowing we are all in this together.
