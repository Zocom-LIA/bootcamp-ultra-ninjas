![poster](./poster.jpg)

# Bootcamp project YumYum Gimmie Sum

**Bootcamp project for ZoCom LIA**

## Syfte

Syftet med ZoCom LIA Bootcamp är:

- Lära känna andra LIA-studenter

- Lära dig de _tekniker_ vi använder i vår egen stack samt göra dig (och oss) trygg i att utveckla skarpa uppdrag senare under LIAn

- Visa dina _tekniska skills_ och _driv_ för att ge oss en bild om med vad och var du passar bäst framåt i LIAn

- Drilla dig i _konsultmässighet_ och i hur du blir duktig på att fungera i rollen som utvecklare - både som konsult och anställd

## Case

**Grattis!**

Ni är nya utvecklare på ZoCom code magic AB! Ert första uppdrag är att utveckla ett system till food trucken **Yum yum gimmi sum**.

Systemet är en webbapplikation som skall tillgodose några olika behov ( se user stories ).

## Kravspec

### Teknisk kravspec

**Frontend** skall vara byggd med React, Typescript, SCSS och Framer motion enligt _monorepo-arkitekturen_.

För att bättre förstå denna arkitektur så finns [boilerplate-projektet](/bolierplate) där några olika packages finns samt [denna film](https...).

**Backend**
Backenden skall byggas i AWS med serverlessteknik. API:et skall säkras med en _API-nyckel_ vid deployment.

- API-gateway
- Lambda
- DynamoDb

### User stories

#### Must have

- Som _kund_ vill jag kunna se en meny för att inspiereras och kunna välja vad jag vill äta.
- Som _kund_ vill jag enkelt kunna klicka ihop en beställning
- Som _personal_ vill jag kunna se beställningarna tydligt för att veta vad vi ska tillbereda
- Som _personal_ vill jag ha beställningarna sorterade på tid ( äldst > nyast ) för att veta i vilken ordning dom skall tillberedas
- Som _personal_ vill jag kunna makera när en beställning är redo att serveras för att meddela kunden att hämta den i luckan
- Som _kund_ vill jag få en notis av något slag för att veta

#### Nice to have

Som _kund_ vill jag få en ETA baserat på hur många och hur stora beställningar som är före mig i kön, så att jag kan avgöra om jag hinner köpa tuggummi på närliggande affären så länge
Som _kund_ vill jag få en notis från min telefon ( Notification API ) så att jag inte behöver hålla stenkoll på hemsidan konstant.
