
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)


Ik heb een responsive, mobile first en dynamische DDA website gemaakt, dit is een site voor het tonen van de vacatures die uit de database komen. De vacatures hebben een aparte detailpagina en er kunnen vacatures worden toegevoegd door opdrachtgevers.

[Bekijk hier de live website](https://user-experience-enhanced-website-9lma.onrender.com/)

<img width="293" alt="Scherm­afbeelding 2025-05-07 om 11 44 00" src="https://github.com/user-attachments/assets/7245eac4-aa3b-4daa-836c-4fddcb193a41" />
<img width="298" alt="Scherm­afbeelding 2025-05-07 om 12 19 30" src="https://github.com/user-attachments/assets/583fa154-7f2b-4429-8897-25d332d67952" />

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->
Op de vacature site (de main pagina) staat een overzicht van alle geplaatste vacatures van dat moment. Per vacature staat er een vacature titel, de taal, het bedrijf, het aantal uren en de locatie. Ook is er een mogelijkheid om de vacature te "bekijken" om er meer van te zien. Dit stuurt je dan naar de detailpagina van de vacature.

https://github.com/user-attachments/assets/bc603de4-fe45-4e67-9697-c220de975b15

Op de detailpagina staat dan wat meer uitleg over de vacature en de mogelijk heid om te solliciteren!

https://github.com/user-attachments/assets/3467891b-c93c-404a-9111-2943a0a0cfb4

De website is mobile first gebouwd. Op het kleinste formaat is het een one-column-layout. Hoe groter de pagina word, hoe meer er naast elkaar komt en ruimte ontstaat en word uitgelijnd.

<img width="882" alt="Scherm­afbeelding 2025-05-07 om 12 28 11" src="https://github.com/user-attachments/assets/d592c990-3ca3-4aec-bfba-7d27a4d0c7ab" />


**Lighthouse:**
De pagina scoort heel hoog, op een paar dingetjes na die het weerhouden van 100 te zijn.

<img width="309" alt="Scherm­afbeelding 2025-05-07 om 12 33 43" src="https://github.com/user-attachments/assets/1a973957-232e-4e68-8ac0-c089af668a4b" />

## Ontwerp

Ik heb het ontwerp van de huisstijl aangehouden. Deze was erg uitgebreid en duidelijk. Alles draaide om "8", dus afstanden en alles werden steeds vermenigvuldigd met 8. Een heel strak design met veel lijnen, weinig kleur en heel strak.

<img width="500" alt="Scherm­afbeelding 2025-05-07 om 12 30 41" src="https://github.com/user-attachments/assets/50435a25-c240-4feb-9529-34c0b57b7004" />


De website heeft amper kleur dus voldoet ook makkelijk aan de contrast analyser

<img width="218" alt="Scherm­afbeelding 2025-05-07 om 12 31 33" src="https://github.com/user-attachments/assets/3cf2277c-79ee-4123-bdf9-4807a8ccb4ad" />

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Als werk zoekende, wil ik een overzicht kunnen zien van de aangeboden vacatures. Wat snelle belangrijke informatie en een manier om meer te zien. Dit is mogelijk door het mooie responsive duidelijke design wat de vacatures mooi toont, met snelle informatie over de vacature en een mogelijkheid om meer informatie te lezen op de detailpagina.

Als opdrachtgever wil ik een vacature kunnen plaatsen, zodat ik mensen kan werven voor mijn bedrijf. Ik kan dit gemakkelijk doen, door op "vacature toevoegen" te klikken. Hier vul ik de belangrijke informatie in voor mijn vacacture en zie in real-time of die goed geplaatst is.

<img width="1068" alt="Scherm­afbeelding 2025-05-07 om 11 48 28" src="https://github.com/user-attachments/assets/f61a69a5-ef77-4a0b-b57f-e8389d103802" />


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

De website is een dynamische, responsive & mobile first website. Gemaakt met Liquid.JS, Node.JS, JavaScript en CSS. 

De website is dynamisch door het ophalen van de data uit de database:

* [`await fetch(`https://fdnd-agency.directus.app/items/dda_agencies?fields=id,title,vacancies.*`)`](https://github.com/Matthijs217/user-experience-enhanced-website/blob/main/server.js#L33): Haalt alle gegevens op van de vacatures die ik nodig heb.

* [`app.get('/')]`(https://github.com/Matthijs217/user-experience-enhanced-website/blob/main/server.js#L27C1-L41):
Zorgt ervoor dat de opgehaalde data uit de database goed word verwerkt met eventuele filters en stuurt dit dan naar de liquid om het uiteindelijk te kunnen tonen.

* [`document.addEventListener('submit')]`(https://github.com/Matthijs217/user-experience-enhanced-website/blob/main/views/vacatures.liquid#L138-L227)
Een client side script dat ervoor zorgt dat als jij de vacature wil plaatsen dat je dan op de pagina blijft zonder een reload, met een loading state en een succes melding als de vacature goed is geplaatst.

* [`{% for vacature in agency.vacancies %}]`(https://github.com/Matthijs217/user-experience-enhanced-website/blob/main/views/vacatures.liquid#L83-L105):
Die zorgt ervoor dat de vacatures uit de database worden omgezet in html form, door middel van de liquid template. Die toont dan de vacatures in een list.




## Installatie
Zoals beschreven bij Kenmerken is bij dit project gebruik gemaakt van NodeJS. Om aan dit project te werken moet NodeJS geïnstalleerd zijn. Eenmal geïnstalleerd kan het project geopend worden in de code editor.

Voer in de terminal `npm install` uit om alle benodigdheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga in je browser naar [http://localhost:8000](http://localhost:8000/) om het project te bekijken.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
