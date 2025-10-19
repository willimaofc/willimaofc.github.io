---
layout: default
title: "Wilton Lima — Cybersecurity Portfolio"
subtitle: "Segurança da informação · Pentesting · CTF · Privilege Escalation"
---

<div class="hero">
  <h1 id="typed" data-text="{{ page.title }}"></h1>
  <p class="subtitle">{{ page.subtitle }}</p>
</div>

<section>
  <h2>Posts Recentes</h2>
  {% for post in site.posts %}
  <div class="card">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <small>{{ post.date | date: "%-d %b %Y" }}</small>
    {% if post.excerpt %}
    <p>{{ post.excerpt }}</p>
    {% endif %}
  </div>
  {% endfor %}
</section>

<section>
  <h2>Meus Projetos</h2>
  {% for project in site.projects %}
  <div class="card">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    {% if project.description %}
    <p>{{ project.description }}</p>
    {% endif %}
  </div>
  {% endfor %}
  <p><a href="/projects.html">Ver todos os projetos</a></p>
</section>

<script src="/assets/js/typing.js"></script>

</section>

<script src="/assets/js/typing.js"></script>

<div class="social-links">
  <a href="https://github.com/willimaofc" target="_blank" class="social github">GitHub</a>
  <a href="https://linkedin.com/in/wil-limaofc" target="_blank" class="social linkedin">LinkedIn</a>
  <a href="https://tryhackme.com/p/willimaofc" target="_blank" class="social tryhackme">TryHackMe</a>
  <a href="https://instagram.com/wil_limaofc" target="_blank" class="social instagram">Instagram</a>
</div>

