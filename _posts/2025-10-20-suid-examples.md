---
layout: default
title: "Exemplos: SUID comuns e riscos"
date: 2025-10-20
categories: [posts, reference]
---

Lista de SUID comuns (exemplo):
- `/usr/bin/passwd` — normal, mas atenção a versões modificadas.
- `/usr/local/bin/vulnerable_suid` — exemplo fictício que pode permitir execução de comandos com privilégio.

**Comandos úteis para investigação**:
- `find / -perm -4000 -type f 2>/dev/null`
- `ls -l /path/to/binary`
- `strings /path/to/binary | grep -i system`
