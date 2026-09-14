# Karteikarten-Projekt

## 1. Projektidee

Ich möchte eine webbasierte Karteikarten-Anwendung entwickeln, mit der Lerninhalte in Form von digitalen Karteikarten gelernt und wiederholt werden können.

Das Projekt soll bewusst mit den grundlegenden Webtechnologien umgesetzt werden:

* **HTML**
* **CSS**
* **TypeScript**

Zunächst werden die Daten direkt im TypeScript-Code hinterlegt. Eine Datenbank und weitere Funktionen sollen erst in späteren Entwicklungsphasen ergänzt werden.

Das Projekt soll von Anfang an so aufgebaut werden, dass es später erweitert werden kann, ohne die gesamte Anwendung neu strukturieren zu müssen.

Die Anwendung soll zunächst als statische Website über **GitHub Pages** veröffentlicht werden können.

---

# 2. Grundidee der Anwendung

Die Anwendung besteht aus Karteikarten-Sets.

Ein Set enthält mehrere Karteikarten, die nacheinander gelernt werden können.

Später soll eine Karte auch in mehreren Sets vorkommen können, ohne dass die Karte dafür dupliziert werden muss.

Beispiel:

```text
Set: TypeScript Grundlagen
 ├── Karte 1
 ├── Karte 2
 └── Karte 3

Set: Meine Prüfung
 ├── Karte 2
 ├── Karte 7
 ├── Karte 12
 └── Karte 15
```

Dadurch kann ein neues, persönliches Set aus bereits vorhandenen Karten verschiedener Sets zusammengestellt werden.

---

# 3. Erste Version – MVP

Die erste Version soll bewusst nur die wichtigsten Funktionen enthalten.

## Ziel der ersten Version

Es gibt:

* eine einzelne Seite
* ein fest definiertes Karteikarten-Set
* mehrere hartcodierte Karteikarten
* immer nur eine Karte im Vordergrund
* weitere Karten liegen dahinter
* Klick auf die Karte → nächste Karte
* Linksklick → nächste Karte
* Rechtsklick → vorherige Karte
* Animation beim Wechsel der Karte
* Karten können zunächst einen einfachen Fragetext und Lösungstext enthalten
* keine Datenbank
* kein Backend
* keine Benutzerkonten
* keine CRUD-Verwaltung
* noch keine Favoriten
* noch keine benutzerdefinierten Sets

Diese Funktionen sollen erst in späteren Entwicklungsphasen hinzukommen.

---

# 4. Darstellung der Karten

## Kartenstapel

Die Karten sollen übereinander liegen.

Vereinfacht:

```text
       ┌────────────────────────────┐
       │                            │
       │        AKTUELLE KARTE      │
       │                            │
       │                       ⋮    │
       └────────────────────────────┘
        ┌──────────────────────────┐
        │      nächste Karte       │
        └──────────────────────────┘
         ┌────────────────────────┐
         │     weitere Karte      │
         └────────────────────────┘
```

Die aktuelle Karte befindet sich visuell ganz oben.

Die Karten dahinter können leicht versetzt dargestellt werden, damit erkennbar ist, dass sich dort weitere Karten befinden.

---

# 5. Drei-Punkte-Menü einer Karte

Später soll jede Karte einen **Drei-Punkte-Button (`⋮`)** besitzen.

Dieser Button öffnet ein Menü mit Aktionen, die sich auf die jeweilige Karte beziehen.

Beispielsweise:

```text
┌─────────────────────────────────┐
│                                 │
│        Was ist TypeScript?      │
│                                 │
│                             ⋮   │
└─────────────────────────────────┘
```

Beim Klick:

```text
┌──────────────────────────────┐
│ ☆ Zu Favoriten hinzufügen    │
│ + Zu Set hinzufügen          │
│ ✎ Bearbeiten                 │
│ ⋮ Weitere Aktionen           │
└──────────────────────────────┘
```

Die konkreten Aktionen können später erweitert werden.

Wichtig ist, dass die Aktionen immer eindeutig zur jeweiligen Karte gehören.

---

# 6. Mögliche Aktionen des Drei-Punkte-Menüs

Das Menü soll langfristig beispielsweise folgende Funktionen anbieten können:

## Favorisieren

```text
☆ Zu Favoriten hinzufügen
```

bzw.

```text
★ Aus Favoriten entfernen
```

Eine Karte kann dadurch als besonders wichtig markiert werden.

---

## Zu Set hinzufügen

```text
+ Zu Set hinzufügen
```

Danach könnte beispielsweise eine Auswahl erscheinen:

```text
Zu Set hinzufügen

☐ TypeScript Grundlagen
☐ Prüfungsvorbereitung
☐ Meine schwierigen Karten

[Neues Set erstellen]
```

Die Karte kann dabei mehreren Sets gleichzeitig angehören.

---

## Bearbeiten

```text
✎ Karte bearbeiten
```

Diese Funktion wird vor allem zusammen mit dem späteren CRUD-System relevant.

---

# 7. Favoriten

Später soll jede Karte als **Favorit** markiert werden können.

Beispiel:

```text
☆ Nicht favorisiert

★ Favorisiert
```

Favoriten sollen anschließend als eigener Filter verwendet werden können.

Beispielsweise:

```text
Meine Karten

[x] Favoriten
[ ] Alle Karten
```

Dann werden nur die favorisierten Karten angezeigt.

---

# 8. Favoriten als Lernliste

Favoriten sollen nicht nur visuell markiert werden.

Sie sollen später auch als eigene Lernmenge verwendet werden können.

Beispiel:

```text
Meine Favoriten

12 Karten
```

Der Benutzer kann anschließend:

```text
[ Favoriten lernen ]
```

auswählen.

Die Anwendung erzeugt daraus eine eigene Lernsession.

Die ursprünglichen Sets werden dadurch nicht verändert.

---

# 9. Benutzerdefinierte Sets

Neben den ursprünglichen Sets sollen später eigene Sets erstellt werden können.

Beispiel:

```text
Meine Sets

TypeScript Grundlagen
React Basics
Prüfungsvorbereitung
Meine schwierigen Karten
Favoriten
```

Der Benutzer soll den Namen eines eigenen Sets selbst bestimmen können.

Beispiel:

```text
+ Neues Set

Name:
[ Prüfungsvorbereitung 2026 ]

[Erstellen]
```

---

# 10. Sets aus Karten verschiedener Sets

Eine besonders wichtige spätere Funktion ist das Zusammenstellen eines neuen Sets aus bereits existierenden Karten.

Eine Karte soll deshalb **mehreren Sets gleichzeitig zugeordnet werden können**.

Beispiel:

```text
Originale Sets

TypeScript
├── Karte 1
├── Karte 2
└── Karte 3

JavaScript
├── Karte 4
├── Karte 5
└── Karte 6

React
├── Karte 7
├── Karte 8
└── Karte 9
```

Daraus kann ein eigenes Set entstehen:

```text
Prüfungsvorbereitung

├── Karte 2      ← TypeScript
├── Karte 5      ← JavaScript
├── Karte 7      ← React
├── Karte 8      ← React
└── Karte 3      ← TypeScript
```

Die Karten werden dabei nicht kopiert.

Sie werden lediglich dem neuen Set zugeordnet.

---

# 11. Karten und Sets

Eine wichtige konzeptionelle Eigenschaft ist daher:

**Eine Karte gehört nicht zwingend zu genau einem Set.**

Stattdessen kann eine Karte zu mehreren Sets gehören.

Beispiel:

```text
Karte 42
│
├── TypeScript Grundlagen
├── Prüfungsvorbereitung
└── Favoriten
```

Das bedeutet, dass ein Set im Grunde eine Sammlung von Karten referenziert.

Dadurch können sehr flexible persönliche Lernsets entstehen.

---

# 12. Sets bearbeiten

Eigene Sets sollen später verwaltet werden können.

Mögliche Funktionen:

* Set erstellen
* Set umbenennen
* Set löschen
* Karten hinzufügen
* Karten entfernen
* Reihenfolge der Karten verändern

Beispiel:

```text
Prüfungsvorbereitung

[Set bearbeiten]

Karten:
1. Karte A
2. Karte F
3. Karte C
4. Karte H

[+ Karte hinzufügen]
```

Das Löschen einer Karte aus einem Set soll dabei nicht automatisch die Karte selbst löschen.

Die Karte existiert weiterhin und kann beispielsweise noch in einem anderen Set enthalten sein.

---

# 13. Unterschied zwischen Karte löschen und Karte aus Set entfernen

Diese Unterscheidung ist für die spätere Anwendung wichtig.

## Aus Set entfernen

```text
Prüfungsvorbereitung
        ↓
Karte entfernen
```

Die Karte wird nur aus diesem Set entfernt.

Sie kann weiterhin in anderen Sets existieren.

---

## Karte löschen

```text
Karte vollständig löschen
```

Die Karte wird aus dem gesamten Kartensystem entfernt.

Wenn sie in mehreren Sets enthalten ist, muss die Anwendung entsprechend darauf reagieren.

Diese Funktion sollte deshalb später eine Sicherheitsabfrage erhalten.

---

# 14. Angepasste Lernliste

Durch die Kombination aus:

* Sets
* Favoriten
* Lernstatus
* Filtern
* Sortierung
* Kartentypen

kann später eine individuelle Lernliste erstellt werden.

Beispiel:

```text
Set:
Prüfungsvorbereitung

Filter:
Nur Favoriten
+
Nur Karten, die ich noch nicht kann

Sortierung:
Zufällig
```

Daraus entsteht eine temporäre Lernliste:

```text
Karte 17
Karte 4
Karte 23
Karte 8
Karte 31
```

Nur diese Karten werden gelernt.

Das ursprüngliche Set wird dadurch nicht verändert.

---

# 15. Lernstatus einer Karte

Eine wichtige Funktion ist die Möglichkeit, den eigenen Lernstand für jede einzelne Karte festzuhalten.

Der Benutzer soll beispielsweise markieren können:

```text
☐ Kann ich noch nicht

☑ Kann ich
```

Damit kann der Benutzer selbst entscheiden, ob er eine Karte bereits beherrscht oder noch weiter lernen muss.

Der Status gehört zum persönlichen Lernfortschritt und nicht zwingend zum eigentlichen Karteninhalt.

---

# 16. Lernfortschritt

Aus den einzelnen Kartenstatus soll automatisch ein Lernfortschritt berechnet werden können.

Beispiel:

```text
8 von 20 Karten gelernt

████████░░░░░░░░░░░░ 40 %
```

Der Lernfortschritt kann später pro Set angezeigt werden.

Beispiel:

```text
TypeScript Grundlagen
18 / 25 gelernt
72 %

Prüfungsvorbereitung
12 / 40 gelernt
30 %
```

---

# 17. Lernfortschritt bei mehreren Sets

Da eine Karte in mehreren Sets vorkommen kann, muss der Lernfortschritt sinnvoll von der Karte getrennt betrachtet werden.

Beispiel:

```text
Karte:
"Was ist ein Interface?"

Sets:
- TypeScript Grundlagen
- Prüfungsvorbereitung
```

Der persönliche Lernstatus der Karte kann grundsätzlich derselbe sein, unabhängig davon, aus welchem Set sie gelernt wird.

Das Set selbst bestimmt, **welche Karten gelernt werden**.

Die Karte bestimmt, **welchen Inhalt und welchen persönlichen Lernstatus** sie besitzt.

Diese Trennung soll bei der späteren Datenmodellierung berücksichtigt werden.

---

# 18. Datenmodell

Die Karten sollen nicht direkt in HTML geschrieben werden.

Stattdessen sollen die Daten zunächst in TypeScript definiert werden.

Beispiel:

```ts
type CardType = "flip" | "info";

type LearningStatus = "unknown" | "known";

interface Card {
  id: number;
  type: CardType;
  question?: string;
  answer?: string;
  content?: string;
  learningStatus: LearningStatus;
  isFavorite: boolean;
}
```

Ein Set könnte später beispielsweise so aussehen:

```ts
interface CardSet {
  id: number;
  title: string;
  cardIds: number[];
}
```

Beispiel:

```ts
const cardSets: CardSet[] = [
  {
    id: 1,
    title: "TypeScript Grundlagen",
    cardIds: [1, 2, 3, 4],
  },
  {
    id: 2,
    title: "Prüfungsvorbereitung",
    cardIds: [2, 4, 7, 9],
  },
];
```

Dabei wird Karte `2` nicht dupliziert.

Sie wird lediglich in mehreren Sets referenziert.

Die konkrete Struktur kann während der Entwicklung noch verbessert werden.

---

# 19. Warum Karten nicht dupliziert werden sollen

Wenn eine Karte in mehreren Sets verwendet wird, soll möglichst nur eine eigentliche Karte existieren.

Beispiel:

```text
Karte 42
"Was ist TypeScript?"
```

Diese Karte kann enthalten sein in:

```text
TypeScript Grundlagen
Prüfungsvorbereitung
Favoriten
Meine schwierigen Karten
```

Wenn die Antwort der Karte geändert wird, soll diese Änderung überall dieselbe Karte betreffen.

Das verhindert doppelte Daten und unterschiedliche Versionen derselben Karte.

---

# 20. Spätere Datenbank

In einer späteren Entwicklungsphase sollen die Kartensets und Karten in einer **PostgreSQL-Datenbank** gespeichert werden.

Die Beziehungen könnten konzeptionell beispielsweise so aussehen:

```text
Card
 │
 ├──────────────┐
 │              │
 ↓              ↓
Set A          Set B
```

Da eine Karte zu mehreren Sets gehören kann, ist langfristig eine **Many-to-Many-Beziehung** zwischen Karten und Sets sinnvoll.

Vereinfacht:

```text
cards
----------------
id
type
question
answer
content
difficulty


card_sets
----------------
id
title
description


card_set_cards
----------------
card_id
set_id
position
```

Die Tabelle `card_set_cards` verbindet Karten und Sets.

Dadurch kann beispielsweise:

```text
Karte 5 → Set 1
Karte 5 → Set 3
Karte 5 → Set 7
```

möglich sein.

---

# 21. Favoriten in der Datenbank

Favoriten können später ebenfalls gespeichert werden.

Wenn es irgendwann mehrere Benutzer gibt, sollte ein Favorit nicht einfach als globale Eigenschaft einer Karte betrachtet werden.

Beispielsweise:

```text
user
  ↓
favorite
  ↓
card
```

Vereinfacht:

```text
favorites
----------------
user_id
card_id
```

Dadurch kann jeder Benutzer seine eigenen Favoriten haben.

---

# 22. Drei-Punkte-Menü und CRUD

Das Drei-Punkte-Menü soll langfristig als zentrale Aktionsschnittstelle für eine Karte dienen.

Beispielsweise:

```text
⋮
│
├── ★ Favorisieren
├── + Zu Set hinzufügen
├── ✎ Bearbeiten
├── ⧉ Karte duplizieren
└── 🗑 Löschen
```

Nicht alle Funktionen müssen sofort vorhanden sein.

Das Menü kann mit dem Projekt wachsen.

Dadurch muss die Kartenoberfläche nicht für jede neue Aktion um einen weiteren sichtbaren Button erweitert werden.

---

# 23. Technische Entwicklung

## Phase 1 – Grundlagen

Ziel:

Eine funktionierende einzelne Karteikarten-Seite.

Technologien:

* HTML
* CSS
* TypeScript

Funktionen:

* ein Kartenset
* hartcodierte Karten
* Kartenstapel
* aktuelle Karte
* nächste Karte
* vorherige Karte
* Kartenanimation

---

## Phase 2 – Kartenlogik

Erweiterung um:

* Flip-Karten
* Informationskarten
* unterschiedliche Darstellung je nach Kartentyp
* 3D-Flip-Animation
* bessere Kartenverwaltung im TypeScript-Code

---

## Phase 3 – Lernstatus

Erweiterung um:

* Karte als „kann ich“ markieren
* Karte als „kann ich noch nicht“ markieren
* Lernfortschritt berechnen
* Lernstatus anzeigen
* Karten nach Lernstatus filtern
* lokale Speicherung des Lernstatus

---

## Phase 4 – Lernansicht verbessern

Erweiterung um:

* Kartenposition
* Fortschrittsanzeige
* aktuelle Kartennummer
* Animationen verbessern
* Anfang / Ende des Sets behandeln
* Tastatursteuerung

---

## Phase 5 – Kartenübersicht

Neue Ansicht:

* alle Karten eines Sets anzeigen
* Lernstatus anzeigen
* Karten filtern
* einzelne Karte auswählen
* ausgewählte Karte als Startpunkt verwenden
* Drei-Punkte-Menü pro Karte

---

## Phase 6 – Favoriten

Neue Funktionen:

* Karte favorisieren
* Favorit entfernen
* Favoriten anzeigen
* Favoriten als Lernset verwenden

---

## Phase 7 – mehrere Sets

Neue Funktionen:

* mehrere Sets
* Set-Auswahl
* Set-Übersicht
* Kartenanzahl
* Lernfortschritt pro Set
* Set-Beschreibung
* eigene Sets erstellen
* eigene Sets benennen
* Sets umbenennen
* Karten zu mehreren Sets hinzufügen
* Karten aus einem Set entfernen

---

## Phase 8 – Lernsystem erweitern

Erweiterung um:

* Zufallsmodus
* einfach → schwer
* schwer → einfach
* kombinierbare Filter
* individuelle Lernlisten
* individuelle Lernsessions
* letzte Lernposition
* Filter nach Favoriten
* Filter nach Lernstatus

---

## Phase 9 – Verwaltung / CRUD

Danach:

* Sets erstellen
* Sets bearbeiten
* Sets löschen
* Karten erstellen
* Karten bearbeiten
* Karten löschen
* Karten aus Sets entfernen
* Karten zu Sets hinzufügen
* Reihenfolge ändern
* Kartentyp ändern
* Schwierigkeitsgrad ändern

---

## Phase 10 – Backend & PostgreSQL

Erst in dieser Phase soll ein Backend hinzugefügt werden.

Geplant:

```text
Frontend
HTML + CSS + TypeScript
        │
        ↓
     API
        │
        ↓
   PostgreSQL
```

Das Frontend soll nicht direkt mit PostgreSQL kommunizieren.

---

# 24. Geplante Architektur

Die Anwendung soll zunächst möglichst einfach bleiben.

Eine mögliche spätere Struktur:

```text
src/
│
├── data/
│   ├── cards.ts
│   └── card-sets.ts
│
├── models/
│   ├── card.ts
│   ├── card-set.ts
│   └── learning-progress.ts
│
├── components/
│   ├── card/
│   ├── card-stack/
│   ├── card-menu/
│   ├── card-list/
│   ├── card-filter/
│   ├── card-set/
│   ├── progress/
│   └── navigation/
│
├── pages/
│   ├── learning/
│   ├── overview/
│   └── management/
│
├── services/
│   └── ...
│
├── styles/
│   └── ...
│
└── main.ts
```

Diese Struktur ist zunächst nur eine Orientierung.

Die tatsächliche Struktur soll sich aus dem Projekt entwickeln und nicht künstlich kompliziert gemacht werden.

---

# 25. GitHub Pages

Die erste Version soll über GitHub Pages erreichbar sein.

Da GitHub Pages statische Dateien bereitstellt, eignet sich die erste Version sehr gut dafür.

Der grundsätzliche Aufbau ist:

```text
HTML
CSS
TypeScript
        ↓
TypeScript wird kompiliert
        ↓
JavaScript
        ↓
GitHub Pages
```

Wichtig:

Die erste Version benötigt deshalb:

* kein Backend
* keine Datenbank
* keinen Server
* keine Benutzerverwaltung

Spätere Datenbankfunktionen werden allerdings ein Backend benötigen und können nicht direkt über eine reine GitHub-Pages-Seite mit PostgreSQL umgesetzt werden.

---

# 26. Ziel des Projekts

Das Projekt soll nicht nur eine fertige Anwendung werden.

Ein wichtiges Ziel ist es, die Entwicklung einer Webanwendung von Grund auf zu verstehen.

Dazu gehören insbesondere:

* HTML-Struktur
* CSS Layout
* responsive Design
* CSS-Animationen
* TypeScript
* Typisierung
* DOM-Manipulation
* Events
* Zustandsverwaltung
* Datenmodelle
* Trennung von Daten und Darstellung
* Filtern und Sortieren von Daten
* lokale Speicherung
* API-Kommunikation
* Datenbanken
* CRUD
* Beziehungen zwischen Daten
* Git
* GitHub
* Deployment

Die einzelnen Funktionen sollen möglichst selbst implementiert und verstanden werden.

---

# 27. Grundprinzipien bei der Entwicklung

## Einfachheit

Neue Funktionen sollen erst dann hinzugefügt werden, wenn die vorherige Funktion verstanden und stabil funktioniert.

Nicht direkt die komplette Anwendung bauen.

---

## Daten und Darstellung trennen

Die Karteninformationen sollen nicht mit der UI-Logik vermischt werden.

Beispielsweise:

```text
Daten
 ↓
Card[]
 ↓
Sets / Filter
 ↓
Kartenlogik
 ↓
Lernsession
 ↓
DOM
 ↓
Anzeige
```

Dadurch wird es später einfacher, die hartcodierten Daten durch Daten aus einer API zu ersetzen.

---

## Karten und Sets getrennt betrachten

Eine Karte ist ein eigenständiges Objekt.

Ein Set ist eine Sammlung bzw. Zusammenstellung von Karten.

Dadurch kann dieselbe Karte in mehreren Sets verwendet werden.

```text
             ┌── Set A
             │
Karte ───────┼── Set B
             │
             └── Set C
```

---

## Lernstatus getrennt vom Karteninhalt betrachten

Der Karteninhalt und der persönliche Lernfortschritt sollen konzeptionell getrennt sein.

```text
Karte
├── Frage
├── Antwort
├── Typ
└── Schwierigkeit

Lernstatus
├── kann ich
├── zuletzt gelernt
└── weitere Lerninformationen
```

---

## Keine unnötige Abhängigkeit

Zu Beginn sollen möglichst keine Frameworks oder UI-Bibliotheken verwendet werden.

Der Schwerpunkt liegt auf:

```text
HTML
CSS
TypeScript
```

Dadurch soll verstanden werden, was tatsächlich im Browser passiert.

---

# 28. Nicht zu früh überoptimieren

Die Anwendung soll nicht von Anfang an für 100.000 Karten, mehrere Millionen Benutzer oder eine riesige Datenbank optimiert werden.

Zunächst soll eine saubere kleine Anwendung entstehen.

Erst wenn konkrete Probleme auftreten, sollen komplexere Lösungen eingeführt werden.

---

# 29. Entwicklungsreihenfolge

Die Entwicklung soll ungefähr so erfolgen:

```text
1. HTML
   ↓
2. CSS
   ↓
3. TypeScript
   ↓
4. Karte anzeigen
   ↓
5. mehrere Karten
   ↓
6. Kartenstapel
   ↓
7. nächste Karte
   ↓
8. vorherige Karte
   ↓
9. Animation
   ↓
10. responsive Design
   ↓
11. Flip-Karte
   ↓
12. Informationskarte
   ↓
13. Lernstatus
   ↓
14. Lernfortschritt
   ↓
15. Karten filtern
   ↓
16. lokale Speicherung
   ↓
17. Kartenübersicht
   ↓
18. Drei-Punkte-Menü
   ↓
19. Favoriten
   ↓
20. mehrere Sets
   ↓
21. eigene Sets erstellen
   ↓
22. Karten Sets zuordnen
   ↓
23. Sortierung / Zufall
   ↓
24. individuelle Lernsessions
   ↓
25. CRUD
   ↓
26. Backend
   ↓
27. PostgreSQL
```

---

# 30. Aktueller Funktionsumfang

## Version 0.1

### Muss

* [ ] HTML-Grundstruktur
* [ ] CSS-Grundlayout
* [ ] TypeScript einrichten
* [ ] ein hartcodiertes Kartenset
* [ ] mehrere Karten
* [ ] Kartenstapel
* [ ] aktuelle Karte sichtbar
* [ ] weitere Karten hinter der aktuellen Karte erkennbar
* [ ] Linksklick → nächste Karte
* [ ] Rechtsklick → vorherige Karte
* [ ] Browser-Kontextmenü verhindern
* [ ] Kartenwechsel animieren
* [ ] einfache responsive Darstellung

### Noch nicht notwendig

* [ ] Datenbank
* [ ] Backend
* [ ] CRUD
* [ ] mehrere Sets
* [ ] eigene Sets
* [ ] Favoriten
* [ ] Karten zu mehreren Sets hinzufügen
* [ ] Drei-Punkte-Menü
* [ ] Login
* [ ] Benutzerkonten
* [ ] Kartenübersicht
* [ ] Lernstatus
* [ ] Lernfortschritt
* [ ] Sortierung
* [ ] Schwierigkeitsgrade

---

# 31. Spätere Funktionen

## Karten

* [ ] Flip-Karte
* [ ] Informationskarte
* [ ] 3D-Flip
* [ ] unterschiedliche Inhalte
* [ ] Schwierigkeitsgrad
* [ ] Drei-Punkte-Menü
* [ ] Karte favorisieren
* [ ] Karte zu einem oder mehreren Sets hinzufügen

## Navigation

* [ ] nächste Karte
* [ ] vorherige Karte
* [ ] Tastatursteuerung
* [ ] Start / Ende
* [ ] Fortschrittsanzeige

## Lernstatus

* [ ] Karte als „kann ich“ markieren
* [ ] Karte als „kann ich noch nicht“ markieren
* [ ] Lernstatus anzeigen
* [ ] Lernstatus speichern
* [ ] Lernfortschritt berechnen
* [ ] nur bekannte Karten anzeigen
* [ ] nur unbekannte Karten anzeigen
* [ ] eigene Lernliste erstellen

## Favoriten

* [ ] Karte favorisieren
* [ ] Favorit entfernen
* [ ] Favoriten anzeigen
* [ ] nur Favoriten lernen
* [ ] Favoriten filtern
* [ ] Favoriten später dauerhaft speichern

## Sets

* [ ] mehrere Sets
* [ ] Set-Auswahl
* [ ] Set-Übersicht
* [ ] Set-Beschreibung
* [ ] Kartenanzahl
* [ ] Lernfortschritt pro Set
* [ ] eigenes Set erstellen
* [ ] Set selbst benennen
* [ ] Set umbenennen
* [ ] Karten aus verschiedenen Sets kombinieren
* [ ] Karte mehreren Sets zuordnen
* [ ] Karte aus einem Set entfernen

## Übersicht

* [ ] alle Karten anzeigen
* [ ] Lernstatus anzeigen
* [ ] Karten filtern
* [ ] Karte auswählen
* [ ] ausgewählte Karte als Startpunkt
* [ ] Drei-Punkte-Menü

## Lernen

* [ ] Lernposition speichern
* [ ] Zufallsreihenfolge
* [ ] einfach → schwer
* [ ] schwer → einfach
* [ ] kombinierbare Filter
* [ ] individuelle Lernsession
* [ ] individuelle Lernliste

## Verwaltung / CRUD

* [ ] Create
* [ ] Read
* [ ] Update
* [ ] Delete
* [ ] Karten erstellen
* [ ] Karten bearbeiten
* [ ] Karten löschen
* [ ] Sets erstellen
* [ ] Sets bearbeiten
* [ ] Sets löschen
* [ ] Karten zu Sets hinzufügen
* [ ] Karten aus Sets entfernen
* [ ] Reihenfolge verändern

## Daten

* [ ] lokale Speicherung
* [ ] Backend
* [ ] API
* [ ] PostgreSQL
* [ ] Daten dauerhaft speichern
* [ ] Lernfortschritt dauerhaft speichern
* [ ] Favoriten dauerhaft speichern
