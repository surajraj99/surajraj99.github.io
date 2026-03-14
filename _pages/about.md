---
permalink: /
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I am a Ph.D. student in the [Tri-Institutional PhD Program in Computational Biology](https://compbio.triiprograms.org/) at Weill Cornell Medical College, specializing in computational biology and machine learning. My research interests include exploring multimodal methods for furthering women's health and in vitro fertilization (IVF), clinical trial emulation, natural language processing and modeling in medical data, and deep learning in genomics. 

I am honored to be supported by the National Science Foundation through a Graduate Research Fellowship. Currently, I am co-mentored by [Dr. Fei Wang](https://wcm-wanglab.github.io/) and [Dr. Iman Hajirasouliha](https://physiology.med.cornell.edu/faculty/hajirasouliha/lab/).

Experience & Education
-----
*   **Bioinformatics Researcher**, Wake Forest School of Medicine (under [Dr. Umit Topaloglu](https://datascience.cancer.gov/about/staff-directory/umit-topaloglu)). Projects: irAE identification, COVID-19 diagnosis prediction, and federated learning.
*   **B.S. Biomedical Engineering**, Georgia Institute of Technology. Minor in Computing and Intelligence. President’s Undergraduate Research Award (PURA) Fellow.

Outreach
-----
I am passionate about mentorship and equity in academia:
*   **IMentor (since 2023):** Mentoring underprivileged high school students in NYC through the college application process.
*   **Lumiere Education:** Research Mentor for students exploring machine learning in healthcare.
*   **Equity & Access:** Led a team at Georgia Tech that [proposed policy changes](https://www.me.gatech.edu/news/team-epics-wins-student-innovation-competition-promoting-equity-access) for academic recognition for students with disabilities.
*   **Public Health:** Led a winning proposal for the HHS "Giving=Living" campaign to promote blood donations.

GRFP Help
-----
The NSF GRFP has been transformative for my career. I am happy to discuss the application process or share my research and personal statements with prospective applicants.

Latest News
-----
{% assign news_items = site.data.news | sort: 'date' | reverse %}
{% for item in news_items limit:3 %}
- **{{ item.date | date: "%m/%d/%Y" }}**: {{ item.title }}. {% if item.links %}[Details]({{ item.links[0].url }}){% endif %}
{% endfor %}

[View All News](https://surajraj99.github.io/news/)