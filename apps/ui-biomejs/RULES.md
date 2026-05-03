# ESLint → Biome Rule Mapping

Mapeamento das regras do `eslint-config-next` / `next/core-web-vitals` para equivalentes BiomeJS 2.4.14.

> **Nota**: grupos verificados empiricamente via `biome explain <ruleName>` em `@biomejs/biome@2.4.14`.
> Grupos `nursery` do design original foram promovidos a grupos estáveis na versão instalada.

| Regra ESLint | Equivalente Biome | Status | Notas |
| --- | --- | --- | --- |
| `@next/next/google-font-display` | `lint/a11y/useGoogleFontDisplay` | mapeada | Habilitada via domain `next` + `a11y` recommended. |
| `@next/next/google-font-preconnect` | `lint/performance/useGoogleFontPreconnect` | mapeada | Via domain `next`. Grupo `performance` (não `nursery`) em 2.4.14. |
| `@next/next/inline-script-id` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/next-script-for-ga` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-assign-module-variable` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-async-client-component` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-before-interactive-script-outside-document` | — | lacuna | Específico Pages Router. Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-css-tags` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-document-import-in-page` | `lint/suspicious/noDocumentImportInPage` | mapeada | Via domain `next`. Grupo `suspicious` em 2.4.14 (não `nursery`). Específico Pages Router. |
| `@next/next/no-duplicate-head` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-head-element` | `lint/style/noHeadElement` | mapeada | Via domain `next`. Grupo `style` em 2.4.14 (não `nursery`). |
| `@next/next/no-head-import-in-document` | `lint/suspicious/noHeadImportInDocument` | mapeada | Via domain `next`. Grupo `suspicious` em 2.4.14 (não `nursery`). |
| `@next/next/no-html-link-for-pages` | — | lacuna | App Router torna obsoleto na maioria dos casos. Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-img-element` | `lint/performance/noImgElement` | mapeada | Via domain `next`. Grupo `performance` em 2.4.14 (não `nursery`). |
| `@next/next/no-page-custom-font` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-script-component-in-head` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-styled-jsx-in-document` | — | lacuna | Específico Pages Router. Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-sync-scripts` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-title-in-document-head` | — | lacuna | Específico Pages Router. Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-typos` | — | lacuna | Específico Pages Router (`getStaticProps` etc.). Sem equivalente no BiomeJS 2.4.14. |
| `@next/next/no-unwanted-polyfillio` | `lint/performance/noUnwantedPolyfillio` | mapeada | Via domain `next`. Grupo `performance` em 2.4.14. |
| `react-hooks/rules-of-hooks` | `lint/correctness/useHookAtTopLevel` | mapeada | Via domain `react`. |
| `react-hooks/exhaustive-deps` | `lint/correctness/useExhaustiveDependencies` | mapeada | Via domain `react`. Fix disponível (unsafe). |
| `react/jsx-key` | `lint/correctness/useJsxKeyInIterable` + `lint/suspicious/noArrayIndexKey` | mapeada | Cobertura mais ampla: Biome também rejeita índices como key. |
| `react/jsx-no-comment-textnodes` | `lint/suspicious/noCommentText` | mapeada | Via `recommended`. |
| `react/jsx-no-duplicate-props` | `lint/suspicious/noDuplicateJsxProps` | mapeada | Via `recommended`. |
| `react/jsx-no-target-blank` | `lint/security/noBlankTarget` | mapeada | Grupo `security` em 2.4.14 (não `a11y`). Via `recommended`. |
| `react/no-children-prop` | `lint/correctness/noChildrenProp` | mapeada | Via `recommended`. |
| `react/no-danger-with-children` | `lint/correctness/noDangerouslySetInnerHtmlWithChildren` | mapeada | Via `recommended`. |
| `react/no-render-return-value` | `lint/correctness/noRenderReturnValue` | mapeada | Via `recommended`. |
| `react/no-unescaped-entities` | — | lacuna | Sem equivalente direto no BiomeJS 2.4.14. |
| `react/no-unknown-property` | — | lacuna | Sem equivalente no BiomeJS 2.4.14. |
| `react/react-in-jsx-scope` | n/a | mapeada (parcial) | Obsoleto desde React 17 (transformação JSX automática). Não necessário no Next 16. |
| `react/jsx-uses-react` | n/a | mapeada (parcial) | Obsoleto desde React 17. Não necessário no Next 16. |
| `jsx-a11y/*` (~28 regras) | `lint/a11y/*` (via `a11y.recommended`) | mapeada | Cobertura ampla — ver [biomejs.dev/linter/rules-sources](https://biomejs.dev/linter/rules-sources/). |

## Resumo de cobertura

| Status | Contagem |
| --- | --- |
| mapeada | 18 |
| mapeada (parcial) | 2 |
| lacuna | 15 |
| **Total** | **35** |

## Lacunas notáveis

As regras Next.js sem equivalente Biome na versão 2.4.14 referem-se principalmente a:
- **Script específico** (`inline-script-id`, `next-script-for-ga`, `no-script-component-in-head`): controles sobre o componente `<Script>` do Next.js.
- **Pages Router** (`no-before-interactive-script-outside-document`, `no-styled-jsx-in-document`, `no-title-in-document-head`, `no-typos`): regras relevantes apenas para o Pages Router (obsoleto no App Router).
- **Assets** (`no-css-tags`, `no-sync-scripts`, `no-page-custom-font`): controles sobre carregamento de recursos externos.
- **React** (`no-unescaped-entities`, `no-unknown-property`): verificações de JSX sem equivalente no Biome 2.4.14.
