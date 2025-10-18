---
layout: default
title: "Walkthrough: analisando a saída do LinPEAS (exemplo)"
date: 2025-10-19
categories: [posts, walkthrough]
---

Este post é um **exemplo** que demonstra como formatar um walkthrough a partir da saída do `linpeas`.

**Exemplo de estrutura**:
1. Coleta da saída: `./linpeas.sh | tee linpeas.out`
2. Filtragem de potenciais vetores:
   - SUID binaries: `grep -i suid linpeas.out -n`
   - Cron jobs: `grep -i cron linpeas.out -n`
   - Configs com credenciais: `grep -R "password" -n / 2>/dev/null`
3. Análise de evidências: documente comandos, outputs e capturas de tela.
4. Mitigações recomendadas e notas finais.

**Nota:** todo conteúdo aqui é fictício — substitua pelos seus próprios comandos e evidências reais.
