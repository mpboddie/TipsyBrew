---
templateKey: blog-post
title: Guilty Code Check In
date: 2020-05-18T02:44:07.888Z
description: >-
  I have realized that I am in a constant state of experimental coding and I
  have not checked in for a while. This is kind of an apology if you have been
  following along and waiting for code. It is also an apology for the code that
  I just pushed.
featuredpost: false
featuredimage: /img/ilya-pavlov-oqtafyt5ktw-unsplash.jpg
tags:
  - arduino
  - pourover
  - code
  - servo
---
Without further ado, I just pushed some code to [GitHub](https://github.com/mpboddie/TipsyBrewPourOver).

Admittedly, the code is a bit of a mess but it works. I have been struggling with getting the servo arm to draw circles well. I believe my math is good (look for a math lesson soon) but they keep coming out as wide ovals in the real world. I believe that the reason may be because the angle servo moves completely *then* the distance servo moves. So that means the distance is getting short changed. If all of this is greek to you stay tuned for my upcoming math lesson or complain that I am not making any sense over in the Discord!

Moving forward, I am going to keep this code the way it is for the moment so that I can still use the working rig as my daily brewer, but work on separate code to evaluate why I am getting ovals and not circles. First up on the list is using something other than Arduino's bone stock servo library.

In other news, the TipsyBrew is getting more attention in my household. Make sure you check up on the [testimonials](https://tipsybrew.com/projects) for all of the praise (sarcasm). 
