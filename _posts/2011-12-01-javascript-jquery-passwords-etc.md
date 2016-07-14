---
id: 1498
title: Javascript, JQuery, Passwords, Etc.
date: 2011-12-01T10:23:45+00:00
author: The Gargoyle
layout: post
guid: http://www.javierayala.com/?p=1498
permalink: /2011/12/javascript-jquery-passwords-etc/
aktt_notify_twitter:
  - no
geo_latitude:
  - 29.51550799999999
geo_longitude:
  - -98.3802925
geo_address:
  - San Antonio, Texas, United States
geo_enabled:
  - 0
geo_public:
  - 1
categories:
  - Geek Stuff
tags:
  - Chrome
  - HTML
  - iOS
  - Javascript
  - JQuery
  - Webapp
---

(If you want to skip to the good part of this post, head to [here](http://www.javierayala.com/2011/12/javascript-jquery-passwords-etc/#goodstuff "The Good Stuff")!)

I have been busy the past few weeks! I decided that I wanted to try and learn a bit about Javascript and <a href="http://jquery.com" title="JQuery" target="_blank">JQuery</a>, so I took it upon myself to write a couple of Web Apps. The first was a little private Web App that I made for my wife and daughter. We&#8217;ve recently begun using a &#8220;Happy Ticket&#8221; reward system, where she accumulates the tickets based on her good behavior. What the Web App does is serve as a bank for her tickets so that we don&#8217;t have to keep track of paper tickets. The app provides the ability to:

  * Bank tickets by Laura and I. Banking tickets requires a user account and passcode that is entered to authenticate that it is either Laura or I banking the tickets. It also records the GeoLocation at the time for future use.
  * Spend Ticket by Andi. There is an interface for Andi to select the number of tickets that she wants to spend with a slider, and then she puts in her passcode to authorize the spending. I am also recording the GeoLocation information of these transactions so that in the future if she does not remember a transaction, I will not only be able to show here when it was made, but also where. Since she is the only one with the ability to spend tickets, she can&#8217;t claim that we spent them. 🙂
  * Basic Reporting. Right now, the reporting is limited to an AJAX interface that shows you the transaction records in reverse chronological order. Each time you push the &#8220;Show more&#8221; button, it appends the next five entries to the display. Right now it only shows who made the transaction, the date/time and whether it was a debit (shows as green) or a credit (shows as red). In the future I would like to add a way to also see on a map where the transaction took place.

<div id="goodstuff">
</div>

## _&#8220;I Can Haz PW?&#8221;_ Web App & Extension

The other app that I wrote is public and available for use. It started out as an iPhone web app for my &#8220;<a href="http://www.javierayala.com/2011/09/i-can-haz-password/" title="I Can Haz Password?" target="_blank">I Can Haz PW?</a>&#8221; website. It ended up being a Web App for just about any modern mobile device, such as an iPhone, iPad, Android, etc. It also works in a normal desktop browser. If you are using an iPhone or iPad with Safari, you can visit <a href="http://icanhazpw.info/" title="I Can Haz PW?" target="_blank">http://icanhazpw.info/</a> and it will detect your browser and forward you to <a href="http://m.icanhazpw.info/" title="I Can Haz PW? Mobile Site" target="_blank">http://m.icanhazpw.info/</a>. All other mobile browsers can try and going directly to <a href="http://m.icanhazpw.info/" title="I Can Haz PW? Mobile Site" target="_blank">http://m.icanhazpw.info/</a>. If you install it on your iOS device as a Home Screen Web App, it should also be available to you when you are not connected to a network or the Internet.

I also took the code that I wrote, and bundled it into a <a href="http://www.google.com/chrome" title="Google Chrome" target="_blank">Google Chrome</a> extension. This allows you to quickly generate a random password from the Chrome web browser without having to leave the page that you are visiting. You can find the extension here: <a href="http://icanhazpw.info/chrome/ICanHazPW_v1.crx" title="I Can Haz PW? - Google Chrome Extension" target="_blank">http://icanhazpw.info/chrome/ICanHazPW_v1.crx</a>.

If anyone encounters any problems with either the WebApp or the Chrome Extension, send me an email at &#8220;javier dot g dot ayala at me dot com&#8221;.

Javier
