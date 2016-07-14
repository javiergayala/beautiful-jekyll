---
id: 38
title: Western Digital MyBook + RHEL 4 != Friends
date: 2007-07-25T15:46:10+00:00
author: The Gargoyle
excerpt: '<p>Yesterday, a customer of mine asked us to mount their 1TB Western Digital external USB drive on their server.  Simple enough task, right?  Apparently not.</p>'
layout: post
permalink: /2007/07/western-digital-mybook-rhel-4-friends/
categories:
  - Geek Stuff
tags:
  - Linux
---
Yesterday, a customer of mine asked us to mount their 1TB Western Digital external USB drive on their server.  Simple enough task, right?  Apparently not.

When we plugged the device into the server, it saw it as `Type: Enclosure` instead of the usual `Type: Direct-Access`.  The `sg` module would assign the device a raw device name (`/dev/sgX`), but not a block device name (`/dev/sdX`).  When I researched the drive, I found out that the device actually has two physical drives in it, with an internal RAID card.  The RAID card can make it look like a RAID 0 stripe, or a RAID 1 mirror.  Pretty cool, but it complicated my issue.

I theorized that what the server was seeing was the RAID card, and not the drive that the RAID card controlled.  Problem was, how do you get the server to see the actual drive.  That&#8217;s when it occurred to me.  It wasn&#8217;t seeing all of the LUNs!  Well, finally after hours of troubleshooting, I was on the right track!  I ran the following command:

`echo 4 > /sys/module/scsi_mod/max_luns`

Then I re-inserted the `usb-storage` kernel module, and something magical happened!  The server assigned one raw device name (`/dev/sg0`) to the "Enclosure", and one raw device (`/dev/sg1`) to the drive!  It then assigned a block device (`/dev/sda`) to the drive&#8217;s raw device (`/dev/sg1`)!  All that trouble just because the kernel wasn&#8217;t scanning all of the SCSI LUNs being presented by the device!  What a pain&#8230;.

J
