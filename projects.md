---
layout: default
title: "Meus Projetos"
subtitle: "Lista completa de projetos de segurança, pentesting e CTFs"
---

<section>
  <h2>Projetos</h2>
  {% for project in site.projects %}
  <div class="card">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    {% if project.description %}
    <p>{{ project.description }}</p>
    {% endif %}
  </div>
  {% endfor %}
</section>
