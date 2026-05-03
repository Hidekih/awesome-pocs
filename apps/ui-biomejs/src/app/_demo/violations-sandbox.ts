/**
 * Violations Sandbox — BiomeJS POC
 *
 * Este arquivo contém blocos comentados com violações prontas para ativar manualmente.
 *
 * Como usar:
 *   1. Descomente um dos blocos abaixo (remova os delimitadores de comentário).
 *   2. Execute `pnpm lint` para ver a mensagem do Biome com arquivo:linha.
 *   3. Execute `pnpm lint:fix` para corrigir o que for fixável automaticamente.
 *   4. Recomente o bloco (ou use `git checkout`) para restaurar o estado limpo.
 *
 * Estado padrão: todos os blocos comentados → `pnpm check` retorna exit 0.
 */

// ---------------------------------------------------------------------------
// Bloco 1 — lint/correctness/noUnusedVariables
// Variável declarada mas nunca utilizada.
// ---------------------------------------------------------------------------
/*
const unusedVariable = 'este valor nunca é lido'
*/

// ---------------------------------------------------------------------------
// Bloco 2 — lint/suspicious/noExplicitAny
// Uso do tipo `any` explícito que desabilita verificações TypeScript.
// ---------------------------------------------------------------------------
/*
function processData(data: any) {
  return data
}
*/

// ---------------------------------------------------------------------------
// Bloco 3 — lint/correctness/noUnusedImports
// Import declarado mas não referenciado no módulo.
// ---------------------------------------------------------------------------
/*
import { useState } from 'react'

export function ComponentSemUso() {
  return null
}
*/

// ---------------------------------------------------------------------------
// Bloco 4 — lint/suspicious/noArrayIndexKey
// Index de array usado como `key` em elemento JSX — causa reconciliação errada.
// ---------------------------------------------------------------------------
/*
import { createElement } from 'react'

const items = ['a', 'b', 'c']
const elements = items.map((item, index) =>
  createElement('li', { key: index }, item),
)
*/

// ---------------------------------------------------------------------------
// Bloco 5 — lint/correctness/useHookAtTopLevel
// Hook chamado dentro de condicional — viola as regras dos Hooks React.
// ---------------------------------------------------------------------------
/*
import { useState } from 'react'

export function BrokenComponent({ enabled }: { enabled: boolean }) {
  if (enabled) {
    const [count, setCount] = useState(0)
    return count
  }
  return null
}
*/
