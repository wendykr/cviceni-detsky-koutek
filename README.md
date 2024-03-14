# React Router

Kurz React 1 - Základy od Czechitas.

## Dětský koutek

Vytvořte jednoduchou stránku pro dětský koutek.

V tomto cvičení vytvoříte jednoduchou stránku pro dětský koutek. Pomocí knihovny [React Router](https://reactrouter.com/en/main) vytvoříte navigaci, která umožní zobrazit různé komponenty na základě cesty v URL.

1. Vygenerujte si novou aplikaci pomocí příkazu

    `npm init kodim-app@latest detsky-koutek react`

2. Nainstalujte si knihovnu React Router pomocí příkazu

    `npm install react-router-dom`

3. Spusťte aplikaci příkazem `npm start` a zkontrolujte, že vám v prohlížeči správně běží.

4. Nebojte se v následujících krocích inspirovat dokumentací [React Routeru](https://reactrouter.com/en/main/start/overview)!

5. V hlavním souboru `index.jsx` založte objekt s routami. Vytvořte si v tomto souboru komponentu `App`, která zatím bude obsahovat pouze nadpis stránky. Zobrazujte ji pod cestou `/`. Nezapomeňte použít `RouterProvider` ve funkci `render`. Vyzkoušejte, že takto vaše aplikace funguje.

6. V adresáři `pages` už máte vygenerovanou komponentu `HomePage`. Ta by měla obsahovat nadpis a text:

    > Dětský koutek  
    > Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6 let. Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti a pomůže jim učit se nové věci. Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!

7. Ve složce `pages` vytvořte i komponenty pro stránky `About` a `Contact`.

    Stránka *About* bude obsahovat nadpis a odstavec s textem:

    > O nás  
    > Jsme tým mladých nadšenců do vzdělávání a zábavy pro děti. Naše poslání je vytvářet podnětné a zábavné aktivity pro děti, které podporují jejich rozvoj a učení nových dovedností. Vytvořili jsme dětský koutek jako místo, kde se děti cítí v bezpečí, mohou objevovat a zároveň se něco nového naučit. Doufáme, že se k nám vydáte a budete s námi sdílet své zážitky a nápady na další aktivity!

    Stránka *Contact* bude obsahovat:

    > Kontakt  
    > Pokud máte jakékoliv otázky, nápady nebo nám chcete prostě jen napsat, zanechte nám zprávu přes náš kontaktní formulář a my se vám co nejdříve ozveme. Pokud preferujete jiný způsob komunikace, můžete nám také napsat e-mail na adresu info@detskykoutek.cz nebo nás kontaktovat přes naše sociální sítě. Děkujeme vám za vaši zpětnou vazbu a těšíme se na vaše zprávy!

8. V souboru `index.jsx` si naimportujte všechny vytvořené stránky a přidejte je jako `children` vašeho routeru pod cesty `/`, `about` a `contact`.

9. V komponentě `App` vytvořte navigaci pomocí `Link` komponent a dejte do ní odkazy na všechny výše uvedené stránky. Použijte komponentu `Outlet` na vyznačení místa, kam se maji vkládat jednotlivé stránky.

10. Vyzkoušejte, že aplikace správně naviguje - mění adresu a obsah podle klikání na odkazy.

11. Pokud máte čas a chuť, přidejte na web zajímavější obsah dle libosti a nastylujte jednotlivé stránky i navigaci.

## Pobočky dětského koutku

Přidejte do projektu dětského detail jednotlivých poboček.

Budeme pokračovat v projektu dětského koutku. Přidáme možnost zobrazit seznam poboček a každou pobočku rozkliknout pro získání více informaci.

1. Pokračujte v projektu z předchozího cvičení.
2. Nejprve do projektu přidejte stránku, která správně ošetří přístup na neexistující stránku, tedy chybu 404.
3. Dále přidejte do navigace stránku *Pobočky* a vytvořte pro ni samostatnou komponentu `CentersPage`. Na této stránce budeme chtít zobrazit jednotlivé pobočky našeho dětského koutku (viz další bod).
4. Rozjeďte si API server s daty. Naklonujte si k sobě repozitář [api-centers](https://github.com/Czechitas-podklady-WEB/api-centers) a spusťte v něm `jsonhost` dle instrukcí v README. Prohlédněte si data na endpointu `/api/centers`.
5. V komponentě `CentersPage` si vytvořte stav `center` a do něj pomocí klasického postupu s `useEffect` a `fetch` stáhněte pole dat z API. Pomocí mapování zobrazte seznam odkazů na jednotlivé pobočky. Odkaz bude vždy cesta `/pobocky/id-pobocky`. Zatím nezobrazujte detail pobočky, pouze její název a adresu. Tento seznam bude sloužit jako navigace mezi jednotlivými pobočkami.
6. Vytvořte komponentu `CenterDetail` pro zobrazení detailu pobočky. Tato komponenta bude sídlit pod cestou `/pobocky/:id`. Pomocí useParams a API endpointu `/api/centers/:id` získejte položku podle parametru `:id`. Zobrazte detail pobočky s otvíracími hodinami i popisem.
7. Komponentu `CenterDetail` zobrazte jako `<Outlet />` uvnitř komponenty `CentersPage`.
8. Nyní by měla stránka správně fungovat. Po kliknutí na pobočku se uživatel dostane na stránku s detailem každé pobočky. Zároveň na stránce uvidí hlavní navigaci i seznam ostatních poboček.

### Bonus
1. Přidejte zajímavé featury z dokumentace. Například stylování odkazů podle toho, která stránka je zrovna aktivní. S tím nám pomůže komponenta [NavLink](https://reactrouter.com/en/6.10.0/start/tutorial#active-link-styling).