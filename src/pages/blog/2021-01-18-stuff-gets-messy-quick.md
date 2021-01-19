---
templateKey: blog-post
title: Stuff Gets Messy Quick
date: 2021-01-19T01:23:11.053Z
description: >-
  The wire mess is real and I've only got about half of the components into the
  mkII stand so far.
featuredpost: false
featuredimage: /img/pxl_20210119_011415164_2.jpg
tags:
  - LCD
  - arduino
  - pour over
---
![](/img/pxl_20210119_011415164_2.jpg)

So my wire usage has exploded because last night for some reason I thought, "Hey, everybody keeps saying that the LCD screen I am using is 3.3v logic only. I should stop using 5v." Now I will say that everything was working great. The screen shows no issue, the SD card is good, nothing is wrong. I fully accept that "everything still works" is not proof that I am doing it right. So I grabbed some bi-directional logic level converters and started rewiring. I got everything rewired and realized-- well lets go back a bit further.

This is the [exact LCD](https://www.aliexpress.com/item/33047978743.html?spm=a2g0s.9042311.0.0.27424c4dBk3UTy) I am working with. It and the SD card reader integrated into it uses Serial Peripheral Interface or SPI. Of course buying parts from China comes with zero support. It does indicate that input voltage can be 3.3/5v, but absolutely nothing about the logic voltage. If you look up the ILI4391 driver you will see that it operates at 3.3v. But not so quick, there are similar boards to the one I am using that operate at 5v... I think, I mean I have used them. This is the first graphic LCD I have used.

Why am I talking about this? Because I think my first solution was correct. When was originally hooking up the board I just kept getting a white screen. I believe this was because it was expecting 3.3v and I was using 5v. Luckily I didn't cause any damage, but in my research I read about J1, that you can see here on the back of the board.

![](/img/screenshot-2021-01-18-222110.png)

Once I connected that jumper the screen sprung to action with 5v. With the jumper still connected 3.3v just made the screen slightly fluctuate. Soooo... yes, I just explained that J1 can switch the LCD from 3.3 to 5v in way too many words.

Now that we have established that, back to all those wires. As you can see from the red board in the wood PLA printed part, there are quite a few wires involved (there are also a few wires for the UI buttons). Are these wires a permanent solution? No. But they are necessary for now. But I have learned that 1. I need to label all my wires BEFORE putting stuff in the stand, and 2. If any one else is going to make one of these I'm going to have to make these connections cleaner and easier.

So add one more task to the list. Once the electrical is more, ummmm concrete, I think I should make a PCB so harnesses can be connected rather than single dupont connectors strewn about.
