---
id: 1477
title: I Can Haz Password?
date: 2011-09-23T13:29:12+00:00
author: The Gargoyle
layout: post
guid: http://www.javierayala.com/?p=1477
permalink: /2011/09/i-can-haz-password/
aktt_notify_twitter:
  - no
geo_latitude:
  - 29.47
geo_longitude:
  - -98.529
geo_address:
  - San Antonio, Texas, United States
geo_enabled:
  - 0
geo_public:
  - 1
categories:
  - Geek Stuff
  - Work
tags:
  - HTML
  - Javascript
  - Programming
---

Last night, a site that I helped write in Python (prior to 2005) was moved to a new server. It came as a surprise to no one that the site broke as a result of the move. The old server was likely RHEL 2.1. The new server is likely RHEL 5 or 6. Python versions are different, and I don&#8217;t even know if they copied over the custom module stuff that we did back then.

In any case, the site itself was old and outdated, and hadn&#8217;t been updated in 6+ years. Who cares, right? Well, apparently, there were a large number of users that had been using a Javascript password generator that had been located on the site for whenever they needed to generate random passwords. (It&#8217;s actually the same Javascript used [on this very site](http://www.javierayala.com/password-generator/ "PassGen").)

This dilemma got me thinking about other easy ways to get a random password. So I decided to do something about it. My efforts have produced the site which I now announce to you!:

<a href="http://icanhazpw.info" title="ICanHazPW" target="_blank">http://icanhazpw.info</a>

The ICanHazPW site is a simple site that returns a randomly generated password when the site is accessed via a browser, or a command-line interface such as &#8220;curl&#8221; or &#8220;wget&#8221;. All passwords generated will contain a mixture of Uppercase and Lowercase letters, numbers, and special characters. By default, the site will return a password with a length of 8 characters. You can easily change the length requested by prepending either &#8220;12&#8221; or &#8220;16&#8221; as the sub-domain name:

<a href="http://12.icanhazpw.info/" title="12.icanhazpw.info" target="_blank">12.icanhazpw.info</a> returns 12 characters

<a href="http://16.icanhazpw.info/" title="16.icanhazpw.info" target="_blank">16.icanhazpw.info</a> returns 16 characters

If anyone has any comments, or questions about this site, please email admin <at> icanhazpw.info.

Javier
