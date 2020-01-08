---
templateKey: blog-post
title: Smörgåsbord
date: 2020-01-08T02:25:22.593Z
description: >-
  My apologies to our Swedish friends for misusing the term, but I've got an
  offering of many small updates! Some good news and some... well, some things
  to learn from. 
featuredpost: true
featuredimage: /img/clearlcd.jpg
tags:
  - pourover
  - arduino
  - grinder
  - lcd
---
![Yay brightness control!](/img/clearlcd.jpg "Yay brightness control!")

### LCD Backlight Control

I'm sure it is a big shocker after seeing the picture above, but I can dim the faulty backlight now! If you missed the previous LCD update, I was unable to take good pictures of the LCD display because it was too bright. I couldn't adjust the brightness because apparently there is a reason why I got this LCD for under $3... who figured. It is a bad design floating around and it is common enough that there are both hardware and software fixes. If you look closely you can see I exposed a trace at the top of the board where it says "shield". If you cut that trace and place an appropriate diode there, it fixes the issue. I didn't have an appropriate diode, so what you see here is the software fix. Fortunately the software fix can detect whethere your LCD is good or bad, so any TipsyBrew code will be compatible with your LCD.

### Grinder in the works

Over on the TipsyBrew Discord server, a user (whom I would identify if they would like credit) had the brilliant idea that they would start a coffee grinder project. Well the community, myself included, is pretty enthusiastic about it. If you aren't on the Discord server yet, you really should be there, especially if you have anything to input. Come join the fun with the invite in the footer of any TipsyBrew pages. No really, scroll down and check for the Discord logo, I'll wait here...

Told you. Next time you are down there, maybe consider using the buy me a coffee button as well. It is a good way to support TipsyBrew. At least just think about it.

### Drunk Driver

<div style="width:100%;height:480px;background-color:black;text-align:center;">
  <video style="height:100%;" controls>
    <source src="https://lh3.googleusercontent.com/iDt5u-5miNV6r94emSbeDu2-Tm-LEq_2XH5cyFo2zyhhnVZf47DHdadoAFuhDi4ELOuc-P2lwSefaM9bjH4E98glII_RFR4a_Aoj8-wNBjC78ne4lMQVUlGmMetxTW_XJV6ndTRPtQ=m18" type="video/mp4">
  </video>
</div>


So you can see the pump moving back and forth as it should be, however if I put the tubing in the motor will stall out no matter what speed I put it at. The driver I am using is just thrown together using an L293D IC that I had on hand. I am thinking the L293D's current limit is causing the problem. I have some A4988 drivers on order from Aliexpress but they are taking forever, so I ordered some DRV8825 (diversification) drivers on prime. If everything goes well this should be resolved by the end of the week and I can share some sweet sweet pumping action.
