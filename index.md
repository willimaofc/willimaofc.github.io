---
layout: default
title: "Wilton Lima — Cybersecurity Portfolio"
---

<div class="hero">
  <h1 id="typed" data-text="Wilton Lima — Cybersecurity Portfolio"></h1>
  <p class="subtitle">Segurança da informação · Pentesting · CTF · Privilege Escalation</p>
</div>

<section class="content">
## Post inicial
_Como usei o LinPEAS para encontrar vulnerabilidades_ — confira o post e o projeto exemplo abaixo.

### Posts recentes
<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%-d %b %Y" }}</small></li>
{% endfor %}
</ul>

### Meus Projetos
<p><a href="/projects.html">Ver todos os projetos</a></p>

</section>

<script src="/assets/js/typing.js"></script>
