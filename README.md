PRACA DOMOWA : ROUTING & CUSTOM HOOKS

1. Zadanie wykonaj na tym samym repozytorium tworząc branch o nazwie routing_homework_imie_nazwisko a następnie tworząc nowy PR do brancha main
2. Dodaj routing i zmień strukturę - nawigacja w layoucie musi działać i przenosić użytkownika do opisanych podstron. Użyj react-router-dom.
3. Pamiętaj o tym, aby stworzyć komponent layout, który będzie obejmować nawigację i stopkę, oraz przyjmie treść strony jako props children
4. Dla chętnych. Stwórz też oddzielny komponent przechowujący router
5. Logika przechowywana w custom hooku - napisz reużywalny custom hook useDonationLogic, który obsłuży działanie przycisku DONATE NOW na komponentach renderowanych na podstronie EVENTS.
   Niech kliknięcie Donate now dodaje do puli uzyskanych środków np. 1000$ oraz powoduje proporcjonalne poszerzanie paska postępu.
6. Pamiętaj aby odpowiednio przechowywać stan komponentu. Dodanie donacji nie powinno wpływać na sąsiednie komponenty
7. Spróbuj wyłączyć przycisk donacji gdy cel zostanie osiągnięty, lub dodaj samodzielnie wymyślony widok prezentujący nadwyżkę zebranej kwoty.
8. Dla chętnych osób, które po ukończeniu zadania będą się nudzić - dodaj podstronę z listą postaci z Rick&Morty API https://rickandmortyapi.com/api,
   dodając paginację opartą na   przyciskach oraz ścieżce url, czyli wejście na path /list/5 sprawi że wyświetli się piąta strona listy (pamiętamy o hooku useParams)

WIDOKI DO PRACY DOMOWEJ:  https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=522-1427&mode=design&t=RR1Kq5gCpeSMtPUI-0

TERMIN: 23 października 2023r. (daję późny termin bo dużo osób nie oddało pracy a są one powiązane. Pamiętajcie że teraz opóźnienia będą się nawarstwiać, więc zachęcam do działania :slightly_smiling_face: )

---------------------------***-----------------------------------

PRACA DOMOWA : STYLES

Komponent App jest stylowany przez css.module
Inne komponenty przez 'styled-components'

Termin: 9 października 2023

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Praca domowa - Stylowanie w React

Setup:
Adres repozytorium - https://github.com/DEVSTOCK-PL/4ED_styles_homework
Widoki - https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=0-1&mode=design&t=QXcFg7hVOuTAADIl-0
dokumentacja styled-components - https://styled-components.com/docs

Merging Strategy:

1. klonujemy repozytorium za pomocą 'git clone' i pamiętamy o przejściu do naszego katalogu z projektem 'cd twoje-repo', lub otwieramy folder visualem
2. tworzymy własny branch, możemy zrobić to klikając w menu branchy w lewym dolnym rogu visuala lub za pomocą konsoli 'git checkout -b nazwa-brancha', nazwa brancha według templatki 'styles_homework_imię_nazwisko'
3. w folderze z projektem używamy terminala do instalacji zależności i paczek za pomocą komendy'npm i'
4. wprowadzamy zmiany w kodzie, które potem są widoczne w source control (git ikonka w menu po lewej)
5. wysyłamy zmmiany na serwer przyciskiem "publish branch" w source control lub w konsoli za pomocą 'git push origin nazwa-brancha'
6. jeśli kontynuujemy pracę, możemy commitować kolejne zmiany na nasz opublikowany branch przyciskiem Sync Changes lub w konsoli za pomocą 'git commit -m "opis zmian"'
7. Gdy skończymy musimy wejść na repozytorium i zrobić pull request do maina: - otwórz repo na GH i kliknij Pull requests na pasku - kliknij New pull request i wybierz base: main i compare: nazwa-brancha - kliknij Create pull request

   Założenia zadania:

8. Celem zadania jest odwzorowanie widoków z linku - jest to landing page organizacji ekologicznej.
9. założenia:
   - metodologia stylowania jaką przyjmujemy to styled-components
   - trzeba we własnym zakresie zrobić research dotyczący użycia media queries
   - widok musi być responsywny i uwzględniać urządzenia mobilne - przykładowe breakpointy:
     - 640px
     - 768px
     - 1024px
     - 1280px
     - 1536px
   - osoby chętne mogą wybrać sobie komponenty dla których zastosują inną metodologię, np. modules.css lub tailwind
   - praca musi być napisana zgodnie z najważniejszymi konwencjami React
     - każdy komponent powinien mieć jedno zadanie - jeśli się rozrasta, warto go podzielić
     - porządek w folderach - nie ma sensu przechowywać kilkudziesięciu plików JSX w folderze components, rozdzielaj sekcje w katalogu
     - kolejność importów - zachowuj spójność w kolejności importów. Na przykład, najpierw importuj biblioteki zewnętrzne, potem komponenty, a na końcu style.
     - reużywalność - staraj się tworzyć reużywalne komponenty. Każda sekcja może mieć ten sam layout, ale przyjmować inną zawartość jako children
   - elementy wektorowe, takie jak ikony zaimportuj do projektu jako tag svg
   - możesz stworzyć strukturę danych jako tablice obiektów których wartości są przekazywane do komponentów, oraz przekazywać treści do reużywalnych komponentów jako propsy
   - jest to single page app, więc nie musimy dodawać elementów nawigacji - to dodamy na kolejnej lekcji :)
   - DLA CHĘTNYCH\* - możesz dodać działanie nawigacji, które będzie po kliknięciu scrollować do danej sekcji strony
