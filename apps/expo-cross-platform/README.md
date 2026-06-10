# expo-cross-platform

Aplicação mobile e web multiplataforma construída com Expo, voltada para exploração e validação de conceitos (PoC).

## Stack

| Tecnologia | Versão | Função |
|---|---|---|
| **Expo** | ~54.0 | Plataforma base para iOS, Android e Web |
| **React Native** | 0.81 | Framework de UI nativo |
| **React** | 19 | Biblioteca de componentes |
| **Expo Router** | ~6.0 | Navegação baseada em arquivo (file-based routing) |
| **React Native Reanimated** | ~4.1 | Animações de alta performance |
| **React Native Web** | ~0.21 | Renderização no navegador |
| **TypeScript** | ~5.9 | Tipagem estática |
| **pnpm** | — | Gerenciador de pacotes |

A navegação segue o padrão do Expo Router com suporte a tabs e modais, compartilhando código entre as três plataformas (iOS, Android e Web).

## Comandos

```bash
pnpm start          # Inicia o servidor de desenvolvimento
pnpm ios            # Abre no simulador iOS
pnpm android        # Abre no emulador Android
pnpm web            # Abre no navegador
```

## Changelog

### v1.0.0 — 10 de junho de 2026
- Aplicação iniciada com estrutura base do Expo Router, suporte multiplataforma (iOS, Android, Web) e configuração inicial de navegação por tabs.
