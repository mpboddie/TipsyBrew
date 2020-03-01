---
templateKey: blog-post
title: Not as dumb as I look
date: 2020-03-01T14:12:34.020Z
description: >-
  Alright, quick update here because as we all know, I could lose a bet any
  moment now. TL;DR, I ran into some problems, went down a rabbit hole, went
  through many cycles of thinking it was something then thinking it was solved
  because it was something else. Turns out I was right about it ALL, because it
  was everything I suspected combined to cause memory issues.
featuredpost: false
featuredimage: /img/img_20200228_153038.jpg
tags:
  - arduino
  - OLED
  - pourover
---


I have to admit that in the great rush to beat that other project to a cup of coffee things have gotten a bit messy as you can see...

![TipsyBrew just hanging out](/img/img_20200228_153038.jpg "TipsyBrew just hanging out")

If you are not up to date on the previous \[TipsyBrew post](https://tipsybrew.com/blog/2020-02-22-crunch-time/), then you may be a bit surprised by the OLED and membrane buttons. These are there because the LCD was being a pain in the ass. Buttons were registering as the wrong buttons and other difficulties that I'd have to go back to my previous post to remember (my head hurts).

However, in order to get a cup of coffee ASAP, I have raided the spare parts and this 128x64 OLED and a 4x4 membrane keypad is what I came up with. The OLED looks fantastic, but is tiny. If I stick with an OLED I will probably get a physically larger one. Any final code will try to abstract that decision so that displays are fairly easily replaced by tinkers. The 4x4 keypad has entirely too many keys, but may come in handy for the time being. The way it works is just with 4 conductors for the rows and another 4 for the columns, when a button is pressed it sets a specific row,col combination HIGH and you have your button. You could technically use this method with any combination of buttons, it is just more efficient as you scale up the number of buttons you need. For instance, I made a custom mechanical keyboard not so long ago and used this method. It was a split keyboard with 35 keys on each side. Instead of connecting each key to an arduino input, I used 5 rows and 7 columns totaling just 12 input pins for the 35 keys. If you'd like to see more about that keyboard let me know, I could probably write up a post. Plus, now that I have confirmed that I like custom mechanical keyboards, I'd love to make another one putting in extra effort to make it a real work of art.

Oh god this post is getting wordy again! On to the problems!!!
### Issues and solving them
Ok so like I said, I ran into some issues. I'm going to run through this real quick to the best of my recollection, but seriously my head does hurt so forgive me if there are some gaps.

I tested out the OLED and everything was working great. I tested out the keypad and that was working great. I did a basic test of them together and then figured I should get the whole gang together for a little phase 0.5 action. I slogged together a protoboard and for some reason the OLED would not work. This problem was so fucking dumb and should NEVER HAPPEN! I was testing everything going mad when it got so low level that I figured out that one of the 4 pass through headers on the arduino protoboard was bad. HOW DOES THAT EVEN HAPPEN!?!?!? I've accepted it and I am moving on though. I am just trashing that board and if you learn anything from this it is to always buy extras when working on a project. I could take the plastic off the header and figure out how or why it broke, but I have coffee to make.

I then got a new protoboard together, carefully testing the headers for conductivity before and after putting it together. I figured out that I could put everything together with just the OLED soldered to the protoboard, saving me time. Oh that reminds me, I switched to the diaphragm pump and an L298N motor driver... yikes, that is going to be a different post. It works well though. Everything assembled is what you see in the pic.

I've got the OLED, keypad, scale, and pump all attached to the arduino. The plan is to use a kettle to heat some water, stick the pump hose in the kettle, instruct the user to put a prepped v60 into the machine on the scale, then the display will tell the user how much coffee will be made as they add the grounds. Once everything is ready the user will press a key to start the brew cycle consisting of a bloom and filling the brewer until the weigh has been met. Breezing over the intricacies of doing that without causing a mess... Then we would have a cup of fucking coffee!!!

Why don't I have coffee? Arduino memory. The OLED library shits the bed without telling you a damn thing if you use too much memory. Before I came to this conclusion I was all over the place, thinking it was the scale or my display code because I would get into a cycle of adding code that would push it too far, then "fix" it while debugging the sudden failure with no indication, then run right back into the problem when I added more functions.

You may be thinking that I should have noticed the problem during compilation. I thought the same thing, but my code was compiling without issue and was only using 47% of the UNO's memory. On one post someone said that they had to get their program down to using just 33%. So I went through, commented out things like the scale and it's library and everything sprang to life! I then went wild taking out all of my debug to the serial statements, [F-ing all my strings](https://www.baldengineer.com/arduino-f-macro.html), and reducing any variable types, just to conclude that I could get my current incomplete state working, but not be able to add any functionality.

I then went to bed and as I fell asleep concluded that I should try using the MEGA with the [burnt voltage regulator](https://tipsybrew.com/blog/2020-01-11-magic-smoke/). I gave it a try this morning using power via USB and it reports that only 8% of memory is in use. Phew!

Long story short, I am back to the MEGA. The L298N has a voltage regulator on board that I can use to power the MEGA. I haven't tested it yet, but if it is a problem I am going to desolder a voltage regulator off another non-working arduino (not my fault, it arrived DOA... I swear) and put it on the MEGA. I would have a lot of brand new regulators at this point, but... coronavirus... Yeah seriously. COVID-19 problems in order of severity goes, TipsyBrew supply issues, mortality, and world economy crashes. Kidding of course, but I had to check if anyone reads to the end.
