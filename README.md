# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Zadanie!

Światowy Zegar z Możliwością Dodawania Stref Czasowych

Cel:
Utworzenie aplikacji, która umożliwia wyświetlanie bieżącego czasu dla różnych stref czasowych, a także dodawanie i usuwanie stref z listy.

Komponenty:

App - główny komponent aplikacji.
TimezoneSelector - komponent do wybierania i dodawania nowych stref czasowych.
Clock - komponent wyświetlający czas dla konkretnej strefy czasowej.
ClockList - komponent wyświetlający listę zegarów.
Wskazówki do realizacji:

App:

- Przechowuje listę stref czasowych, które mają być wyświetlane (np. ["UTC", "UTC+1", "UTC-1"]).
- Dostarcza funkcje do dodawania i usuwania stref z listy.

TimezoneSelector:

- Posiada własny stan dla aktualnie wybranej strefy czasowej.
- Umożliwia wybór strefy czasowej z rozwijanej listy.
- Przycisk "Dodaj" dodaje wybraną strefę do listy w komponencie App.

Clock:

- Otrzymuje strefę czasową jako props.
- Wykorzystuje useEffect i useState tak jak w poprzednim zadaniu, ale dostosowuje czas do przekazanej strefy.

ClockList:

- Otrzymuje listę stref czasowych z App i dla każdej strefy renderuje komponent Clock.
- Dla każdego zegara jest przycisk "Usuń", który usuwa zegar ze strefą z listy.
- Użyj biblioteki date-fns-tz do obsługi stref czasowych.

dla chętnych! Możecie spróbować zainstalować i wykorzystać paczkę npm która pomoże interpretować strefy czasowe
https://www.npmjs.com/package/date-fns-tz
