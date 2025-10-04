## 🐾 Clínica Dr. Pet — Painel Veterinário

Aplicação web desenvolvida em **React.js** para gestão de clínicas veterinárias, com foco em **usabilidade**, **organização visual** e **acessibilidade**.  
O sistema permite visualizar agendamentos, lembretes, pets cadastrados e notificações inteligentes — tudo em um painel unificado e moderno. O código desenvolvido nesta etapa teve como principal objetivo implementar o painel do veterinário (Dashboard), responsável por exibir informações organizadas sobre os pets, alertas e lembretes automáticos.

---

## 🌿 Visão geral

A **Clínica Dr. Pet** oferece um painel intuitivo para o médico veterinário gerenciar o dia a dia da clínica:  
- 📅 Consultas e retornos agendados  
- 💉 Lembretes automáticos de vacinas e vermífugos  
- 🐶 Cadastro e prontuários de pets  
- 🔔 Notificações salvas no localStorage  
- 📊 KPIs de acompanhamento da semana  

O projeto foi criado com foco em **design limpo**, **cores suaves** e **componentes reutilizáveis**, ideal para uso em sistemas de agendamento veterinário ou clínicas pequenas.

---

## 🧠 Tecnologias utilizadas

| Categoria | Ferramenta |
|------------|-------------|
| Front-end | React.js (Hooks, useState, useEffect, useMemo) |
| Estilização | CSS puro (Dashboard.css) |
| Armazenamento local | LocalStorage |
| Ícones e Emojis | Unicode nativo |
| Organização | Componentização e semântica HTML com aria-labels |
| Inteligência Artificial | Base para alertas automáticos e previsões de consulta
| Banco de Dados | Em desenvolvimento pelo Integrante do grupo

---

### 🔹 Barra superior (Topbar)
- Exibe nome da clínica e da veterinária.  
- Campo de busca funcional (mockado).  
- Sistema de notificações com badge dinâmica e painel suspenso.  
- Persistência das notificações no `localStorage`.

--

## 🔗 Integração com o projeto em grupo

- No projeto final, este código será integrado ao back-end da equipe, permitindo:
  
- Sincronização dos dados dos pets e consultas via API REST;
- Envio e atualização de lembretes automáticos gerados por inteligência artificial;
- Criptografia dos dados sensíveis (como histórico médico e dados do tutor);
- Containerização via Docker para facilitar o deploy conjunto com os módulos do grupo.
- Minha parte será integrada como módulo de front-end principal, responsável por consumir os endpoints criados pelo grupo e exibir as informações no painel de forma amigável e responsiva.

## 🩺 Futuras melhorias

- 📊 Painel de gestão com filtros e gráficos mensais
- 🌗 Modo escuro / claro
- 🧾 Exportar prontuário em PDF
- 📆 Integração com calendário e WhatsApp


## 👩‍⚕️ Autoria

- Projeto desenvolvido por Sarah Silva
