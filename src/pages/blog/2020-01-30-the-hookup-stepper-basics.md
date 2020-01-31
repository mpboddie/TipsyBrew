---
templateKey: blog-post
title: 'The Hookup: Stepper basics'
date: 2020-01-31T03:52:00.000Z
description: >-
  So I've been so wrapped up in follies, the stand, and getting the pump tests
  up and running that I forgot to post a hookup article for stepper motors!
featuredpost: false
featuredimage: /img/stepperbasic_bb.png
tags:
  - pourover
  - stepper
  - arduino
---
Last we mentioned [hooking up stepper motors](https://tipsybrew.com/blog/2020-01-11-magic-smoke/), it was more of a pity party related to releasing magic smoke. But I digress, this post is to move forward and make sure that we are all up to speed on steppers.

### Driver Calibration

Quick recap on the driver. I started with an L293D IC while waiting for other drivers to arrive. That couldn't push enough amperage. I then got a DRV8825 and the nearly identical A4988. I had more luck with the DRV8825 so that is what I am using for now. Done, lets talk about calibrating it.

The DRV8825 has potentiometer on board that needs adjusting to supply the appropriate amperage for your stepper. Too much amperage and you can damage the stepper. Too little amperage and it may not perform acceptably. 

To adjust the amperage you just need to connect the DRV8825 pins that normally connect to the Arduino to the 5V of the Arduino as seen below.

![Stepper Calibration](/img/steppercalibration.png "Stepper Calibration")

Once you have this hooked up, you are going to want to get your multimeter out. You are going to want to test the voltage between the body of the potentiometer and the ground. You will want to adjust the potentiometer until the voltage equals half the amperage you want to send to the stepper. For instance, the stepper I am using is spec'd to 1.7A, so I can adjust the measured voltage as high as 0.85V. If I recall correctly, I believe I set it to about 0.8V because it is a bit noisy at full amperage.

### Normal Operation

Now that you have the driver calibrated, switch the wiring back to the way it is supposed to be. See the previous diagram posted on magic smoke below.

![](/img/stepperbasic_bb.png)

So what you see above is a basic hookup. I don't really see a need at the moment for the additional unused pins, but if you must know there is a fault detection pin, power state pin, and three microstep pins that we are not using in this setup. If I start using any of these in the future I'll let you know. If you really really feel the need to use them, I suggest starting with my basic setup and working your way up.

Lets work with what we are using though. Starting on the left hand side of the DRV8825, the two pins connected to 5V using red wires are the reset and sleep pins. We are setting these to high by connecting them to 5V because otherwise reset would cause the driver to stop listening and sleep would cause it to go into low power consumption mode (essentially off).

Working our way down the left hand side, the next two pins are crucial. In our diagram the Step pin is connected to Arduino pin 3 and the Direction pin is connected to Arduino pin 2. These will be used in our code later, but put simply pulsing the Step pin will cause movement and setting the Direction pin low/high determines the spin direction.

Let us move to the upper right side of the driver. The top two pins are for the input power from the power supply. In our case this is a 12V 4A power supply. You may notice we have a capacitor across these lines. This is a 100µF electrolytic capacitor that protects the driver from power spikes. If you want more details on this ask an electrical engineer, because I'm not one, I just play one on TV.

Clearly the next 4 pins are connected directly to the stepper. These 4 wires are connected to the coils in the stepper and are assigned, from the top down, B2, B1, A1, and A2. The DRV8825 arranges the pins in a way that matches most steppers, so it is much easier to hookup.

Lastly, we have a ground pin. Did I really have to tell you that the black wire attached to the ground rail of the breadboard is a ground pin? Probably not, but I just did.

### Next up, Soft stuff

This write up took a bit longer than I anticipated. So I think I'll make the code examples for this a separate post. Look for that soon. In the meantime, let me know if I left anything out or any parts are not clear. Join us on the Discord server as usual.

**UPDATE**: Here is \[the follow up post](https://tipsybrew.com/blog/2020-01-31-the-hookup-stepper-basics-but-the-code/).
