export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">BiomeJS POC</h1>
        <p className="text-lg text-gray-600">
          Demonstração do BiomeJS como substituto unificado de ESLint + Prettier em projetos Next.js
          16. Zero dependências ESLint — configuração explícita via{' '}
          <code className="bg-gray-100 px-1 rounded">biome.json</code>.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Violações cobertas pelo Biome</h2>
        <p className="text-gray-600 mb-6">
          Cada item abaixo descreve uma violação que o Biome detecta. Para testá-las, consulte a
          seção <strong>Como testar</strong> abaixo.
        </p>

        <div className="space-y-6">
          {/* lint/correctness/noUnusedVariables */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                correctness
              </span>
              <code className="text-sm font-mono font-semibold">noUnusedVariables</code>
            </div>
            <p className="text-sm text-gray-700">
              Detecta variáveis declaradas mas nunca utilizadas. Prefixar com{' '}
              <code className="bg-gray-100 px-1 rounded">_</code> sinaliza intenção explícita de não
              uso.
            </p>
          </article>

          {/* lint/suspicious/noExplicitAny */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                suspicious
              </span>
              <code className="text-sm font-mono font-semibold">noExplicitAny</code>
            </div>
            <p className="text-sm text-gray-700">
              Proíbe o tipo <code className="bg-gray-100 px-1 rounded">any</code> explícito, que
              desabilita verificações de tipo do TypeScript.
            </p>
          </article>

          {/* lint/correctness/noUnusedImports */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                correctness
              </span>
              <code className="text-sm font-mono font-semibold">noUnusedImports</code>
            </div>
            <p className="text-sm text-gray-700">
              Remove imports não referenciados no código. O Biome pode aplicar a correção
              automaticamente via <code className="bg-gray-100 px-1 rounded">pnpm lint:fix</code>.
            </p>
          </article>

          {/* lint/suspicious/noArrayIndexKey */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                suspicious
              </span>
              <code className="text-sm font-mono font-semibold">noArrayIndexKey</code>
            </div>
            <p className="text-sm text-gray-700">
              Impede o uso de índice de array como{' '}
              <code className="bg-gray-100 px-1 rounded">key</code> em elementos JSX — causa
              reconciliação incorreta no React.
            </p>
          </article>

          {/* lint/correctness/useHookAtTopLevel */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                correctness
              </span>
              <code className="text-sm font-mono font-semibold">useHookAtTopLevel</code>
            </div>
            <p className="text-sm text-gray-700">
              Garante que hooks React sejam chamados apenas no nível superior do componente, nunca
              dentro de condicionais ou loops.
            </p>
          </article>

          {/* lint/correctness/useExhaustiveDependencies */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                correctness
              </span>
              <code className="text-sm font-mono font-semibold">useExhaustiveDependencies</code>
            </div>
            <p className="text-sm text-gray-700">
              Equivalente ao{' '}
              <code className="bg-gray-100 px-1 rounded">react-hooks/exhaustive-deps</code> do
              ESLint. Detecta dependências faltando ou desnecessárias em{' '}
              <code className="bg-gray-100 px-1 rounded">useEffect</code>,{' '}
              <code className="bg-gray-100 px-1 rounded">useCallback</code> etc.
            </p>
          </article>

          {/* lint/a11y/useAltText */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded">
                a11y
              </span>
              <code className="text-sm font-mono font-semibold">useAltText</code>
            </div>
            <p className="text-sm text-gray-700">
              Exige atributo <code className="bg-gray-100 px-1 rounded">alt</code> em elementos{' '}
              <code className="bg-gray-100 px-1 rounded">{'<img>'}</code> e componentes de imagem.
              Cobre o conjunto <code className="bg-gray-100 px-1 rounded">jsx-a11y</code> do
              eslint-config-next.
            </p>
          </article>

          {/* lint/performance/noImgElement (via domain next) */}
          <article className="border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                next
              </span>
              <code className="text-sm font-mono font-semibold">noImgElement</code>
            </div>
            <p className="text-sm text-gray-700">
              Equivalente a{' '}
              <code className="bg-gray-100 px-1 rounded">@next/next/no-img-element</code>. Recomenda
              o componente <code className="bg-gray-100 px-1 rounded">{'<Image>'}</code> do Next.js
              em vez do elemento nativo <code className="bg-gray-100 px-1 rounded">{'<img>'}</code>.
              Habilitado via domain <code className="bg-gray-100 px-1 rounded">next</code>.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-10 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Como testar</h2>
        <p className="text-gray-700 mb-4">
          Use o arquivo{' '}
          <code className="bg-gray-100 px-1 rounded">app/_demo/violations-sandbox.ts</code> para
          ativar violações manualmente e observar as mensagens do Biome.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Abra <code className="bg-gray-100 px-1 rounded">app/_demo/violations-sandbox.ts</code> e
            descomente um dos blocos numerados.
          </li>
          <li>
            Execute <code className="bg-gray-100 px-1 rounded">pnpm lint</code> e observe a saída
            com arquivo e linha.
          </li>
          <li>
            Execute <code className="bg-gray-100 px-1 rounded">pnpm lint:fix</code> para corrigir o
            que for fixável automaticamente.
          </li>
          <li>Reverta a alteração manualmente ou via git para restaurar o estado limpo.</li>
        </ol>
        <p className="mt-4 text-sm text-gray-500">
          Consulte o <code className="bg-gray-100 px-1 rounded">README.md</code> para instruções
          completas de setup e integração com VS Code.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Mapeamento ESLint → Biome</h2>
        <p className="text-gray-700">
          O arquivo <code className="bg-gray-100 px-1 rounded">RULES.md</code> contém a tabela
          completa mapeando as regras do{' '}
          <code className="bg-gray-100 px-1 rounded">eslint-config-next</code> para equivalentes
          Biome, com status <em>mapeada</em>, <em>parcial</em> ou <em>lacuna</em> para cada uma.
        </p>
      </section>
    </main>
  )
}
