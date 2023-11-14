///<reference types="vitest" />
///<reference types="vite/client" />
//To dyrektywy TypeScript Triple-Slash, które służą do deklarowania zależności typów dla Vitest i Vite. Umożliwiają one IDE i kompilatorowi TypeScript znajdowanie odpowiednich definicji typów dla tych narzędzi, co poprawia wsparcie intellisense i sprawdzanie typów.

import { defineConfig } from "vite";
//Importuje funkcję defineConfig z Vite, używaną do definiowania konfiguracji projektu.

import react from "@vitejs/plugin-react";
// Importuje plugin React dla Vite, który umożliwia obsługę projektów React, w tym transformacje JSX.

// https://vitejs.dev/config/
export default defineConfig({
  // Eksportuje domyślną konfigurację Vite, korzystając z wcześniej importowanej funkcji defineConfig. Użycie tej funkcji pomaga w zapewnieniu poprawnych typów i autouzupełniania w edytorach kodu.

  plugins: [react()],
  // Dodaje plugin React do tablicy pluginów Vite. Umożliwia to Vite obsługę plików React (JSX).

  test: {
    globals: true,
    // Ustawia Vitest na korzystanie z globalnego API, eliminując potrzebę importowania funkcji testujących jak test czy expect.
    environment: "jsdom",
    // Ustawia środowisko testowe na "jsdom", co jest użyteczne dla testów, które wymagają symulacji przeglądarki (np. do manipulacji DOM).
    css: true,
    // Pozwala na obsługę importów CSS w testach, co jest przydatne dla testowania stylów i zachowania komponentów.
  },
});
