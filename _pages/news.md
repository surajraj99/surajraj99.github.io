---
layout: archive
title: "All News"
permalink: /news/
author_profile: true
description: "Stay updated with the latest news, publications, and presentations related to Suraj's work in AI and healthcare."
---

<!-- Category Filter Buttons -->
<div class="filter-buttons">
  <button class="filter-btn active" onclick="filterNews(event, 'All')">All</button>
  <button class="filter-btn" onclick="filterNews(event, 'Publications')">Publications</button>
  <button class="filter-btn" onclick="filterNews(event, 'Presentations')">Presentations</button>
  <button class="filter-btn" onclick="filterNews(event, 'Awards & Recognitions')">Awards & Recognitions</button>
  <button class="filter-btn" onclick="filterNews(event, 'Internships & Positions')">Internships & Positions</button>
  <button class="filter-btn" onclick="filterNews(event, 'Media & Publicity')">Media & Publicity</button>
  <button class="filter-btn" onclick="filterNews(event, 'Projects')">Projects</button>
  <!-- Add more categories as needed -->
</div>

<!-- News Items -->
<div class="news-container">
  {% for item in site.data.news %}
    <div class="news-card" data-category="{{ item.category }}">
      {% if item.image %}
        <img src="{{ item.image }}" alt="{{ item.image_alt | default: 'News Image' }}" class="news-image" loading="lazy">
      {% endif %}
      <h3>{{ item.date | date: "%B %d, %Y" }}</h3>
      <h4>{{ item.title }}</h4>
      <p>{{ item.description | markdownify }}</p>
      {% if item.links %}
        <ul>
          {% for link in item.links %}
            <li><a href="{{ link.url }}" target="_blank">{{ link.text }}</a></li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
  {% endfor %}
</div>

<!-- JavaScript for Filtering -->
<script>
  function filterNews(event, category) {
    const cards = document.querySelectorAll('.news-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');

    // Show or hide news cards based on category
    cards.forEach(card => {
      if (category === 'All' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
</script>

<style>
/* Styles for Filter Buttons */
.filter-buttons {
  margin-bottom: 20px;
  text-align: center;
}

.filter-btn {
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-btn:hover {
  background-color: #0d6efd;
}

.filter-btn.active {
  background-color: #0b5ed7;
}

/* News Container and Card Styles */
.news-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.news-card {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  width: calc(33% - 40px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.news-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  margin-bottom: 15px;
}

.news-card h3 {
  margin-top: 10px;
  color: #1e90ff;
}

.news-card h4 {
  color: #333;
  margin: 10px 0;
}

.news-card a {
  color: #1e90ff;
  text-decoration: none;
}

.news-card a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .news-card {
    width: calc(50% - 40px);
  }
}

@media (max-width: 480px) {
  .news-card {
    width: 100%;
  }
}
</style>
