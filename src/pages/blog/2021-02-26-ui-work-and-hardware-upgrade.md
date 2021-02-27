---
templateKey: blog-post
title: UI Work and Hardware Upgrade
date: 2021-02-26T18:02:57.065Z
description: >-
  I have been working on mkII software and as usual it has been going great, but
  I have to make some changes due to a hardware limitation.
featuredpost: false
featuredimage: /img/screenwithouttime.jpg
tags:
  - pourover
  - arduino
  - microcontrollers
  - UI
  - LCD
  - Teensy
  - ESP32
  - Raspi
---
### User Interface Work

The current TipsyBrew POR mkII user interface is an ILI9341 LCD display with two buttons to each side. The LCD is 2.2 inches and lacks a touchscreen, hence the buttons. I realize when I write statements like the previous one that this information seems incredibly obvious to me because I am working on it constantly. However, you may be reading this thinking, "How long have you had an LCD screen!? TELL ME MORE!!!". I'm not holding back information on purpose, it is just that I am on project every free minute I have. I am so immersed that I don't realize when I haven't updated others. So, please let me know if you feel that I have left any details out.

With this hardware, I have planned out a design for the UI on the screen. Obviously with the limited landscape I couldn't go too elaborate. Four buttons does seem to be perfect for the size screen though because I can split the screen into quarters and it is clear as to which on screen action belongs to each button.

![](/img/screenwithouttime.jpg)

Try not to critique my coloring too much. It looks very different in person and I'm more focused on layout and functionality at the moment. Thanks, you're a peach.

Aside from the 4 quarters I have reserved about 25 pixels on the top and bottom of the screen for a header and footer. I know this is a bit cliched but across the header from left to right I have the screen label with icon (Home, Settings, Coffee, etc.), the clock (time is automatically grabbed from the internet, yay wifi!), and the wifi status. The footer has the kettle temperature displayed in the left hand corner and I have been using the right hand side for short messages. The footer messages are kind of general purpose to indicate errors or the last completed task. Right now I use it often for debugging messages.

![](/img/fullscreen-2-.png)

Back to the 4 quarters of the screen. I have created two sizes of buttons that can reside in any quarter.

* Little button - This is a button that is only 50 px wide residing on the outside edge of the screen. It uses a 40x40 px icon without any label.
* Big button - The big button is basically a little button with a label area taking up the rest of the area of the quarter. The background and text color of the label area is independent of the little button and icon. Optionally, a smaller caption text can be written under the label text.

![](/img/bigandlittle.jpg)

These two button sizes can be used in a variety of ways. The most obvious ways of four big buttons can be seen on the Home page. However, a less obvious one is as a toggle button like the Pre-heat feature on the Home screen. The Pre-heat button has the icon to the left side while off, but when you press the button the icon section switches to the right and the caption text says "ON".

![](/img/preheat.jpg)

Two little buttons can also be used in conjunction, either left and right of each other or top and bottom on one side, to scroll through a list or change a value in the unused label area.

As I have been working more diligently on the software, I have made an effort to push more frequently to the [github repo](https://github.com/mpboddie/TipsyBrewPourOver/tree/mkII/TipsyBrewPORmkII). If you are interested in the new additions, just make sure you check out the mkII branch.

### Other Improvements

I haven't been working on _just_ the UI. The UI has to _do things_ as well. As previously mentioned I added the Pre-heat function which also required that I add a temperature probe to the water kettle. I had two types of DS18B20 temperature sensor to give a try. One was just the bare TO-92 package and the other is encased in a stainless steel probe making it waterproof. I was hoping I could find some way to use the stainless steel one as it is already waterproof, however it is not food safe to my knowledge so I couldn't submerge it in the water. I tested it by pressing it against the side of the glass kettle wall hoping that I could get enough data from it to make it usable. The temp change was just too slow though. My next try was hovering the probe inside the kettle just under the lid. This was better but not good enough. So finally I used a long stainless steel thermowell I had from a homebrewing project to get one of the TO-92 sensors into the kettle water just at the minimum fill line. This works but it does require drilling a small whole into the top of the plastic kettle lid. Right now it is friction fit in, but I think it would be better if I opened the hole a bit more and put a collar around the probe so it can be easily lifted out.

Once I had the temp sensor in place and working I used the data to implement some basic functionality for Pre-heat. I wrote a bit about how pre-heat works in the README on the aforementioned [github page](https://github.com/mpboddie/TipsyBrewPourOver/tree/mkII/TipsyBrewPORmkII).

### Hardware Changes

When I started the POR mkI, my goal was to make it cheap, simple, and use accessible parts, so I started with an Arduino UNO. The plan was to make the POR a shield so it was a piece of cake to assemble. One shield became two, then I realized that I was hitting memory issues. The timing of my memory issues was fairly convenient if I recall correctly, because I believe I smoked the on board power conversion on the UNO around the same time.

In came the Arduino MEGA 2560. The MEGA has more memory and more than enough GPIO for TipsyBrew POR to use. MkI has dutifully made hundreds of cups of coffee using the MEGA board. MkII though... MkII is bringing more features that I fear are impossible to keep with the MEGA board.

Listen, if you check out the current mkII code, I know that I haven't done my best with memory management. I fully admit that. However, if you look at how much more needs to be done, I think that putting in the time and effort to get everything sorted to work on such constrained hardware may be wasted as it will still not fit on the MEGA. Memory usage really started to balloon when importing libraries associated with the LCD screen (mo pixels, mo problems) and WiFi. NOTE: You may notice that in some of the UI picture above there is no time or wifi icon in the header, this is because I had to take wifi out to resolve memory issues. In addition, logging brew data is a goal for the future and I have read that SD card usage is quite memory intensive.

For this reason, I have started looking at hardware alternatives. I still do not believe that something like a Raspberry Pi or similar single board computers (SBC) are really needed for TipsyBrew POR. There are decent options between the MEGA and SBCs though. 

### Hardware Alternatives AKA MORE POWER!

The current internet darling, the [Raspberry Pi RP2040](https://www.raspberrypi.org/documentation/rp2040/getting-started/) is a great option and I'd love to check it out, but sadly it is sold out everywhere at the moment. I may put in an order anyways but I don't want to wait until April or pay a 200% markup from a third party seller.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/o-tRJPCv0GA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Another strong candidate is one of the [Teensy boards](https://www.pjrc.com/). I have never used a Teensy before, but I have heard great things and honestly, I think I am just going to place an order for a couple boards regardless of whether or not I will use it on POR. This is because I have been in this hobby long enough to know how much Paul Stoffregen has contributed to the community.

<img src="https://www.pjrc.com/store/teensy41_4.jpg" />

And finally, there is the Espressif ESP32. I actually just started using an ESP32 last night, so there is a high likelihood that there will be some ESP32 stuff to come. The ESP32 is cheap and has WiFi integrated, so that is a plus. The downside to the ESP32 is that there are many different versions of it and there is a chance that people could get confused as to whether they are purchasing the correct one or if there are variations in cheap clones that cause problems.

<img src="https://img-for-hk.wds168.cn/comdata/51404/product/20180606144354E9FC48E988B5DBBC_b.jpg" />

The good thing about all of the microcontrollers mentioned is that TipsyBrew POR is getting a big power boost! The MEGA is an 8-bit microcontroller running at 16 MHz. All of the alternatives are 32-bit running at a minimum of 120 MHz! Most of them (possibly all of them) even have multiple cores! I'm not sure if I can even utilize that with Arduino's environment, but who cares, because you get not ONE, not FOUR, no you get TWO cores!

Anyways, I hope that this change doesn't set progress back too much. That is all for now, Tipsy OUT!
