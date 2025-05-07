
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

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->
Ik heb een responsive, mobile first en dynamische DDA website gemaakt, dit is een site voor het tonen van de vacatures die uit de database komen. De vacatures hebben een aparte detailpagina en er kunnen vacatures worden toegevoegd door opdrachtgevers.

https://user-experience-enhanced-website-9lma.onrender.com/
<img width="1103" alt="Scherm­afbeelding 2025-05-07 om 11 44 00" src="https://github.com/user-attachments/assets/7245eac4-aa3b-4daa-836c-4fddcb193a41" />


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
