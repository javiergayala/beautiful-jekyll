---
id: 1529
title: Dumping MySQL Tables via a Wildcard
date: 2012-02-16T13:43:08+00:00
author: The Gargoyle
layout: post
guid: http://www.javierayala.com/?p=1529
permalink: /2012/02/dumping-mysql-tables-via-a-wildcard/
aktt_notify_twitter:
  - no
geo_latitude:
  - 29.5083769
geo_longitude:
  - -98.3911976
geo_address:
  - San Antonio, Texas, United States
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Geek Stuff
tags:
  - MySQL
  - mysqldump
---
I have been trying to figure out a way to do this for years! I&#8217;ve had customers ask to dump tables from a database that match a certain prefix, however mysqldump doesn&#8217;t understand how to use wildcards. I used to have to list each and every table by hand in order to create a dumpfile that matched the customer&#8217;s requirements. No longer!

The following example can be used to dump all tables that begin with &#8220;`javier_`&#8221; from the database called &#8220;`bigdatabase`&#8220;:

`mysql -s -r -p bigdatabase -e 'SHOW TABLES LIKE "javier_%"' | grep -v Tables_in | xargs mysqldump -p --add-drop-table bigdatabase > javier_.sql`

The &#8220;`-s -r`&#8221; options tell the mysql client to produce a silent and raw output. The &#8220;`grep -v`&#8221; gets rid of the header line, and finally the xargs portion tells mysqldump what to do.

Enjoy!

<a class="geolocation-link" href="#" id="geolocation1529" name="29.5083769,-98.3911976" onclick="return false;">Posted from San Antonio, Texas, United States.</a>
