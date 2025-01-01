---
layout: publications
title: "Publications"
permalink: /publications/
author_profile: true
description: "A comprehensive list of my research publications in computational biology and machine learning."
---
  
{% if author.googlescholar %}
  You can also find my articles on <a href="{{ author.googlescholar }}" target="_blank" rel="noopener noreferrer">my Google Scholar profile</a>.
{% endif %}

<div class="publications-container">
  {% for post in site.publications reversed %}
  {% endfor %}
</div>
