---
templateKey: blog-post
title: Let's talk about what the pour over machine can do
date: 2019-12-20T22:15:00.000Z
description: >-
  Make a damn good cup of coffee. Oh you want more? Yeah I actually need more
  detail than that as well. Let's discuss...
featuredpost: false
featuredimage: /img/coffeecup.jpg
tags:
  - pourover
---
![cup of coffee](/img/coffeecup.jpg)

Alright so of course we want the pourover machine to make a good cup of coffee, that is the end result. What I want to discuss here are some of the steps to that end result. I touched on this briefly on my last post when discussing the manual steps for a pourover brew. Now I want to determine the most reasonable steps for the machine to do so.

Keep in mind, this first iteration will be focused on the design principles that I outlined over on the [GitHub readme](https://github.com/mpboddie/TipsyBrewPourOver). If you say, "but what about wifi?!", I am going to say that wifi does not contribute to the coffee... along with other rationale. I have thought about this a lot. This blog is just me putting it on paper.

## Heat the water
This is a clear starting point. You need hot water. Unless you are making cold brew, which is technically possible but that is getting off track.

## Weigh the grounds and calculate water
There will be weight sensors in TipsyBrew. These will be used to weigh the water as it is poured over the grounds, but before it even gets there it should weigh the dry grounds and using a user set ratio, calculate how much water to use.

## Rinse the filter
This sounds pretty basic. Once water is up to temp, TipsyBrew could ask if you would like to rinse. If accepted it would either dispence a set amount of water or a button could be held to dispense.

## Pourover...
This part is more complicated than it seems. Once started I want it to do all the steps of the pour unattended. That means it will:
1. Start weighing water
2. Pour the bloom
3. Wait the appropriate bloom length
4. Pour an amount of water for one round or hit the total amount of water required
5. Wait for the draw down
6. Go back to step 4 until we have used all the allotted water

All of the pouring portions may or may not require a distinct pattern. The volume rates of the pours should also be definable.

These are the basics of phase one. Once this is accomplished we can start talking about more features. I have a plan for most of these items, but it is going to take some experimenting to get it right. And that is what this site is for. You will be able to follow along and possibly learn from my mistakes.
