---
layout: default
title: "CTF — Privilege Escalation (exemplo)"
date: 2025-10-18
categories: [projects]
---

**Descrição**: Projeto exemplo documentando uma escalada de privilégio em uma máquina CTF.

**Resumo**:
- Máquina alvo: fictícia para fins de aprendizado.
- Vetor explorado: serviço SUID + credenciais fracas em config.
- Mitigações: remover SUID, corrigir permissões e rotacionar credenciais.

**Passos (resumido)**:
1. Reconhecimento: nmap, enumeracao de serviços.
2. Execução do LinPEAS para pegar um panorama rápido.
3. Identificação de binário SUID vulnerável.
4. Exploração para shell com privilegios e pós-exploração limitada.
