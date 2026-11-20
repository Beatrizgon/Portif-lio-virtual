# Portfólio Virtual — Beatriz Gonçalves

Site estático (sem build, sem package.json) publicado na Netlify: https://meu-portfolio-virtual.netlify.app/
Deploy: push na `main` → Netlify publica. A pasta `.netlify` é local e está no .gitignore.

## Stack
- `index.html` (~600 linhas): todas as seções numa página — home, projects, experience, skills, education, contact.
- `styles.css` (~2.900 linhas): CSS puro, fontes Ubuntu/Roboto (Google Fonts). Media queries em 1100/992/900/768/480/360px.
- `script.js`: jQuery 3.7.1 — navbar sticky, menu mobile, botão voltar ao topo, filtro de projetos, texto digitando.
- Via CDN: jQuery, AOS 2.3.1 (animação ao rolar), Font Awesome 6.5, Bootstrap Icons, Ionicons 7.
- Imagens em `image/`; currículo para download em `document/`.

## Rodar localmente
Abrir `index.html` com o Live Server do VS Code (porta 5501, ver `.vscode/settings.json`). Não há testes nem lint.

## Convenções
- Visual: fundo roxo escuro, lilás `#C77DFF` como destaque, cards de "vidro" (variáveis `--card-*` no `:root`). Manter.
- Textos do site e comentários de código em português.
- Projetos: cada card é um `.project-card` com `data-category` (`frontend`, `fullstack`, `ia`, separados por espaço — um projeto pode estar em mais de um filtro). Filtros em `.projects-filter`.
- Ao mudar a altura do grid de projetos, chamar `AOS.refresh()` (já feito no filtro).
- Responsivo é obrigatório: conferir em 360px e 768px antes de dar uma mudança por terminada.

## Pendências conhecidas (11/2026)
- Filtro padrão deveria ser "Front-End", não "Todos".
- Nome: usar "Beatriz Gonçalves" em todo o site (README e link do LinkedIn ainda usam "Beatriz dos Prazeres").
- Só o GitHub Wrapped tem demo; faltam deploys dos outros projetos.
- Botão "Baixar currículo" (seção contact) aponta para `document/Curriculo-Beatriz-Goncalves.pdf` (versão de 20/11/2026). Ao atualizar o currículo, substituir esse PDF mantendo o mesmo nome. O `.docx` antigo na mesma pasta não é mais usado pelo site.

## Como trabalhar aqui
- Explique as decisões em 3 a 5 pontos ao terminar (a Bia quer aprender e saber defender em entrevista).
- Commits em português, mensagens curtas no imperativo (ex.: "Ajusta filtro padrão para Front-End"). Só commitar quando ela pedir.
