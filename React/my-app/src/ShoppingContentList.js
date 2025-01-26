import React from 'react';
import ItemList from './ItemList';

const ShoppingContentList = ({items, handleCheck, handleCheck_impartive, handleDelete, isLoading, searchInput}) => {

  const empyListPStyling = {
    marginTop: '2rem',
    backgroundColor: '#9c27b0',
    borderRadius: '5px',
    padding: '0.5rem',
    color: 'white',
    border: '1px solid #f5f5f5'
  };  


  return (
    <>
      {items.length ? (
        <ItemList
          items = {items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleCheck_impartive={handleCheck_impartive}
        />
        ) : (
          <p style = {empyListPStyling}>{isLoading ? "items are loading ..." : searchInput.length ? "no matching results" : "You have a empty list"}</p>
        )}
    </>
  )
}

export default ShoppingContentList


/**
 * <> </> fragment syntax is needed for a correct html return trough jsx as a parent container
 */

    /*
 * Wat is `localStorage`?
 * -----------------------
 * `localStorage` is een API in JavaScript waarmee je key-value-pairs kunt opslaan in de webbrowser.
 * De opgeslagen gegevens blijven beschikbaar, zelfs als de gebruiker de pagina herlaadt of de browser sluit.
 * Het is handig voor kleine hoeveelheden gegevens die persistent moeten blijven, zoals voorkeuren, sessie-informatie of een winkelmandje.
 * 
 * Hoe werkt het?
 * --------------
 * - Gegevens worden opgeslagen in de vorm van strings.
 * - Je kunt JSON gebruiken om complexere gegevens (zoals objecten of arrays) op te slaan.
 * - Enkele belangrijke methoden:
 *   - `localStorage.setItem(key, value)` : Slaat een item op met de opgegeven sleutel en waarde.
 *   - `localStorage.getItem(key)` : Haalt een item op met de opgegeven sleutel.
 *   - `localStorage.removeItem(key)` : Verwijdert een item met de opgegeven sleutel.
 *   - `localStorage.clear()` : Leegt alle gegevens in `localStorage`.
 * 
 * Voorbeeld:
 * ----------
 * // Opslaan van een lijst in localStorage
 * const shoppingList = ['Appels', 'Bananen', 'Sinaasappels'];
 * localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
 * 
 * // Ophalen van de lijst
 * const savedList = JSON.parse(localStorage.getItem('shoppingList'));
 * console.log(savedList); // ['Appels', 'Bananen', 'Sinaasappels']
 * 
 * Do's:
 * -----
 * 1. Gebruik `localStorage` voor kleine, niet-gevoelige gegevens.
 *    Bijvoorbeeld: instellingen, UI-preferenties, of een gebruikersnaam.
 * 2. Converteer objecten/arrays naar strings met `JSON.stringify` bij het opslaan.
 * 3. Controleer altijd of de waarde beschikbaar is voordat je deze gebruikt:
 *    const data = localStorage.getItem('key');
 *    if (data) {
 *        // Verwerken van de gegevens
 *    }
 * 4. Beheer `localStorage` items door ze te verwijderen als ze niet meer nodig zijn.
 *    Gebruik `localStorage.removeItem('key')` of `localStorage.clear()`.
 * 
 * Don'ts:
 * -------
 * 1. Sla **geen gevoelige informatie** zoals wachtwoorden of API-tokens op.
 *    Gegevens in `localStorage` zijn gemakkelijk toegankelijk via de browserconsole.
 * 2. Gebruik `localStorage` niet voor grote hoeveelheden gegevens. 
 *    De limiet is ongeveer 5-10 MB, afhankelijk van de browser.
 * 3. Gebruik `localStorage` niet voor complexe gegevens die regelmatig worden bijgewerkt.
 *    Gebruik in plaats daarvan IndexedDB of server-side opslag.
 * 4. Verlies het overzicht niet: zorg ervoor dat je sleutelnamen uniek zijn, bijvoorbeeld met een prefix (`'appName_key'`).
 * 5. Denk aan browsercompatibiliteit: `localStorage` werkt niet in oudere browsers of als cookies/cache zijn uitgeschakeld.
 * 
 * Alternatieven:
 * --------------
 * - Voor tijdelijk opslaan: gebruik `sessionStorage`. Gegevens worden verwijderd zodra de tabblad/sessie wordt gesloten.
 * - Voor grootschalige en complexe opslag: gebruik IndexedDB of een servergebaseerde database.
 * 
 * Samenvatting:
 * -------------
 * `localStorage` is een eenvoudige en krachtige tool voor kleine, niet-gevoelige gegevens.
 * Gebruik het verstandig en denk aan veiligheid en schaalbaarheid!
 */