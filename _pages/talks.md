---
layout: page
title: talks
permalink: /talks/
description: Presentations and conference proceedings.
nav: true
nav_order: 2
---

<div class="talks">
  {% assign sorted_talks = site.talks | sort: "date" | reverse %}
  {% for talk in sorted_talks %}
  <div class="talk-item" style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
    <h3 class="title">{{ talk.title }}</h3>
    <p class="meta" style="color: #666; font-size: 0.9em;">
      <strong>{{ talk.type }}</strong> | {{ talk.venue }} | {{ talk.date | date: "%B %d, %Y" }} <br>
      <i>{{ talk.location }}</i>
    </p>
    <div class="content">
      {{ talk.content | markdownify }}
    </div>
  </div>
  {% endfor %}
</div>
