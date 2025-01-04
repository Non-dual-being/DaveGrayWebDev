import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ShoppingContentList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"

    },

    {
      id: 2,
      checked: false,
      item: "Olliebollen"
    },

    {
      id: 3,
      checked: false,
      item: "Foufke"
    }


  ]);

  /**declaratieve manier van schrijven, je scrijf wat je wilt zien */

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)

    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));


     
  }
/**wat meer impartief, dus lijn voor lijn manier van schrijf zou als volgt zijn  */

const handleCheck_impartive = (id) => {
  setItems((prevItems) => {
    const updateItems = [...prevItems]; //list of items which are objects

    const index = updateItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      updateItems[index] = {
        ...updateItems[index],
        checked: !updateItems[index].checked

      };
    }

    return updateItems; //this within the setItems

  })
}

const handleDelete = (id) => {
  const listItems = items.filter(item => item.id !== id)
  setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

}
  
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox"
              checked={item.checked}
              onChange={() => {typeof(handleCheck) === "function" ? handleCheck(item.id) : handleCheck_impartive(item.id)}} /**voor je klikt is het hier tijdens de eerste render al ingesteld op handlecheck(1, 2 of 3) */
              >
              </input>
              <label
                style={(item.checked) ? { textDecoration: 'line-through'} : {fontWeight: 'bold'} }
                onDoubleClick={()=>{typeof(handleCheck) === "function" ? handleCheck(item.id) : handleCheck_impartive(item.id)}}

              >{item.item}</label>
              <FaTrashAlt 
                onClick={() => {handleDelete(item.id)}}
                role='button' 
                tabIndex='0' //focus volgorde in de dom via tab (0 is regulier)
              />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ShoppingContentList




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