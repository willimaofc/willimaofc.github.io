---
layout: default
title: "Como usei o LinPEAS para encontrar vulnerabilidades"
date: 2025-10-18
categories: [posts, technical]
---

Neste post eu descrevo como usei o LinPEAS para descobrir vetores de escalada de privilégio em uma máquina de treino CTF.

**Resumo dos passos**:
1. Executei `linpeas.sh` e capturei a saída em `linpeas.out`.
2. Analisei seções importantes: SUID binaries, cron jobs, serviços com versões vulneráveis, arquivos com permissões fracas e credenciais em arquivos.
3. Priorizei vetores por facilidade de exploração e impacto.
4. Documentei cada passo com comandos, evidências e mitigação recomendada.

**Ferramentas e comandos mencionados**:
- LinPEAS
- sudo -l
- find / -perm -4000 -type f 2>/dev/null
- crontab -l / cat /etc/cron.*
- systemctl list-units --type=service

> **Observação**: este post é técnico e educacional — não use em ambientes sem autorização.
