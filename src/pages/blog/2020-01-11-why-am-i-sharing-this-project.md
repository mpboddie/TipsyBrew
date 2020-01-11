---
templateKey: blog-post
title: Why am I sharing this project?
date: 2020-01-11T15:23:05.978Z
description: >-
  I am sharing my thoughts and progress of the TipsyBrew pour over machine for
  some very good reasons. If you are following along with this journey, you
  should know my motivations.
featuredpost: false
featuredimage: /img/nathan-dumlao-az9x3l1va2y-unsplash.jpg
tags:
  - failure
  - pourover
  - arduino
  - stepper
---
### A result of failure
So many of the TipsyBrew visitors up to this point know exactly where I am going with this. Many of us, dare I say ALL of us up to this point,  were backers of a Kickstarter that is essentially a golden gilded version of what I am trying to accomplish with features well above and beyond the Phase One milestone. I do not want to name the product because it is still technically on going. However, it has promised a lot and I lost confidence in it due to repeated missed deadlines.

The funny thing is, I completely understand and relate to the problems that the effort is having. The experience of following that Kickstarter is THE biggest influence on TipsyBrew. From what I can tell about the person in charge of the Kickstarter, we both have similar weaknesses.

### So why would you follow in it's footsteps?!
We have already established why we should [automate pour over coffee](https://tipsybrew.com/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/), but why would I take on this project after just admitting that I feel like I am personally similar to the person who failed doing so before? Well for one thing, I want to prove that it is possible to do, both to myself and others. Many in the TipsyBrew Discord have pointed out how bad of a track record coffee related Kickstarter and Indiegogo products have. I don't have any official statistics, but it does seem like coffee related products have a much higher failure rate than others. You can find a great read on Medium from one person's experience with the [Orenda coffee maker](https://medium.com/adventures-in-software-development/orenda-coffee-more-than-just-a-failed-kickstarter-182c331e8266?).

This is why for TipsyBrew I am not Kickstarting anything. From day one I have been documenting all of my work here. I have the buy me a coffee link on the site so that if someone feels the need to support my efforts they may do so, but I am not requiring it. Also, I am welcoming any help and input over on the Discord channel. We have a great base of users there already. A lot of good discussions take place there and I am sure it will keep up.

Bottom line though, if I get hit by a bus or hit financial troubles before completing a TipsyBrew pour over machine, I hope that the documentation of my work here is enough for someone(s) to continue my work. Part of my approach is to keep it educational as well. I want to break down the components I am using, so that if you wanted to use something like the weight sensor for something else, you have the knowledge to do so.

### Why are you discussing this now?
I am bringing this up because I definitely went down a rabbit hole last night. It is ok though. I want to discuss failures of all sorts here. When I made the decision to make my process public and discuss failures, I was thinking it was going to be discussions about the wrong choice of motors or other design decisions. I am of course still going to disclose that information. Sharing why a design failed in enough detail that convinces you to not repeat my mistakes is an explicit goal of the project.

The rabbit hole I went down last night had to do with stepper motors. As you may know I am using a stepper motor to turn the [peristaltic pump](https://tipsybrew.com/blog/2020-01-05-peristaltic-progress/) that I am evaluating for use in the TipsyBrew. From my previous post you know I got the motor working but it was stalling out. That was definitely due to the limited amperage of my thrown together driver, because I got a DRV8825 in and it works! It is also worth mentioning that I was having some jitteriness in the motor when I had the 12v and USB powering the system. I am pretty sure it is a bad idea to have 2 power supplies period. So don't do that.

This brings me to last night. I was kind of sick and out of it, but that was only part of the problem. I started thinking about which Arduino library I should use for the stepper motor (there is an oddly large variety), setting up experiments to evaluate pump performance (more on that later), integrating this test into the LCD menu system I have been evaluating (more on THAT later), yada yada yada. Long story short, I should have just worked on a hookup article for stepper motors. This would have kept things simple and it would have been posted by now.

### Failure as a success
Full disclosure, I am an engineer in real life. You will never be a good engineer if you can't admit when you are wrong and learn from your failures. I got ahead of the process I defined for myself and tried to skip steps. Yes a full menu for running the pump tests would have been fantastic, but if any of you were just looking to use a stepper motor for the first time you would have been completely swamped in unnecessary code. I feel that this educational and stripped down phased features process is going to lead to more success than Kickstarting a product. 

I failed to stick to my own process for the night and I succeeded in teaching myself a lesson.
