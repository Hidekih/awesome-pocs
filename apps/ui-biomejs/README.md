# ui-biomejs

POC avaliando o [BiomeJS](https://biomejs.dev) como substituto unificado de ESLint + Prettier em projetos Next.js 16. Zero dependências ESLint — linting e formatação 100% via Biome.

## Pré-requisitos

- **Node.js** >= 20.9
- **pnpm** >= 9 — instale via Corepack (recomendado) ou npm:
  ```bash
  corepack enable        # recomendado — usa a versão do packageManager do projeto
  # ou
  npm install -g pnpm
  ```

## Setup

```bash
cd apps/ui-biomejs
pnpm install
```

## Comandos

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento (Turbopack) em `http://localhost:3000` |
| `pnpm build` | Gera o build de produção |
| `pnpm start` | Inicia o servidor de produção (requer `pnpm build` antes) |
| `pnpm lint` | Executa `biome lint --error-on-warnings .` — falha com exit ≠ 0 em violações |
| `pnpm lint:fix` | Executa `biome check --write .` — aplica correções seguras automáticas |
| `pnpm format` | Executa `biome format --write .` — formata o código sem rodar lint |
| `pnpm check` | Executa `biome check .` — lint + format + organize-imports em passagem única |

## Como testar capturas do Biome

O arquivo `src/app/_demo/violations-sandbox.ts` contém blocos comentados com violações reais prontas para ativar.

### Workflow passo a passo

1. **Abra** `src/app/_demo/violations-sandbox.ts` no editor.
2. **Descomente** um dos blocos numerados removendo os delimitadores `/*` e `*/`.
3. **Execute** `pnpm lint` e observe a saída — o Biome reporta `arquivo:linha:coluna` e a regra violada.
4. **Corrija automaticamente** (quando disponível) com `pnpm lint:fix`.
5. **Restaure** o estado limpo recomentando o bloco ou executando:
   ```bash
   git checkout src/app/_demo/violations-sandbox.ts
   ```

### Violações disponíveis no sandbox

| Bloco | Regra Biome | Descrição |
| --- | --- | --- |
| 1 | `lint/correctness/noUnusedVariables` | Variável declarada mas nunca utilizada |
| 2 | `lint/suspicious/noExplicitAny` | Tipo `any` explícito |
| 3 | `lint/correctness/noUnusedImports` | Import não referenciado |
| 4 | `lint/suspicious/noArrayIndexKey` | Índice de array como `key` JSX |
| 5 | `lint/correctness/useHookAtTopLevel` | Hook dentro de condicional |

### Verificar ausência de ESLint

```bash
grep -ri "eslint" apps/ui-biomejs \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude="pnpm-lock.yaml"
# Esperado: zero linhas
```

## Integração com VS Code

### 1. Instale a extensão oficial

Instale a extensão **Biome** (ID: `biomejs.biome`) no VS Code:
- Via marketplace: pesquise "Biome" e instale a extensão da Biomejs.
- Via CLI: `code --install-extension biomejs.biome`

### 2. Configuração automática

O arquivo `.vscode/settings.json` neste projeto já configura:
- **Formatter padrão**: Biome para JS, TS, TSX, JSON e JSONC.
- **Format on save**: habilitado — ao salvar um arquivo, o Biome formata automaticamente.
- **Code actions on save**: `source.fixAll.biome` e `source.organizeImports.biome` aplicam correções e organizam imports ao salvar.

### 3. Comportamento esperado

Após instalar a extensão e abrir o projeto:
- Salvar um arquivo com formatação inconsistente (ex.: aspas duplas, semicolons desnecessários) aplica a formatação do Biome automaticamente.
- Violações de lint aparecem sublinhadas no editor com a mensagem e regra correspondente.
- O painel "Problems" lista todas as violações ativas.

## Referências

- [RULES.md](./RULES.md) — tabela completa mapeando regras do `eslint-config-next` para equivalentes Biome.
- [Spec da feature](.specs/features/ui-biomejs/spec.md) — requisitos e critérios de aceitação.
- [Design da feature](.specs/features/ui-biomejs/design.md) — decisões técnicas e arquitetura.
- [BiomeJS — documentação oficial](https://biomejs.dev)
- [BiomeJS — fontes de regras](https://biomejs.dev/linter/rules-sources/)
