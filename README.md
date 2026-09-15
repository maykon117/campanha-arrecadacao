# Timbó em Missão — MVP de acompanhamento da ação social

Sistema web em React + TypeScript + Tailwind CSS para gerenciar a arrecadação de alimentos da ação social **Timbó em Missão**.

## Estrutura atual

- Visão geral da ação
- Gestão de alimentos
- Registro de arrecadações
- Histórico e transparência
- Página pública de acompanhamento (`?view=public`)
- Modo OBS (`?view=obs`)
- Configurações da ação
- Persistência local via `localStorage`

## Executar

```bash
npm install
npm run dev
```

## Próxima etapa recomendada

Para que o link público e o modo OBS recebam alterações feitas por outro celular/computador instantaneamente, substituir o armazenamento local por backend + banco de dados com Realtime (por exemplo, Supabase). A interface já separa os modos administrativo, público e OBS para facilitar essa evolução.
