# card-game

![spincard](/images/ezgif-4-eef81e31d8.gif 'spinning card')

# [Trial pre alpha demo](https://antemortem.netlify.app/)

Currently implemented systems include deck functionality, basic camera setup and blackjack ruleset.

![blackjackalpha](/images/blackjack-demo.png 'blackjack')

# Working title is "Ante-mortem"

[Antemortem](https://medical-dictionary.thefreedictionary.com/ante+mortem) being the states preceeding death and a pun on the term [ante](https://www.thefreedictionary.com/ante) in poker.

Other trial names for the stages in play are puns involving ante and some olden word for preceeding an event.

## Brief

A game of [Mafia](<https://en.wikipedia.org/wiki/Mafia_(party_game)>) where every player is on both sides, driven through a game of poker. All players are assigning themselves roles and alligences as rounds progress and the game is both a task to not lose within poker (repeated passes/folds losing lives, going negative or having the worse hand) and to not incur suspicious or ire of other players while doing so.

Generally designed as a possible board game and moved into the digital arena, the point is to inspire interesting relationships and social dynamics rather than technical skill.

## Premise:

![fourthcircle](/images/9-circles-of-hell-dantes-inferno-4-circles-.jpg 'sinners in the fourth circle')

Background: A mystical games for money and souls in hell

Players are dammed entities that must gamble with their lives in order to be released from purgatory, the dammed

An endless loop of winning and losing time in hell

Game master is [Mammon](https://en.wikipedia.org/wiki/Mammon) - one of the biblical Princes of Hell and ruler of the circle of greed

![mammonface](/images/mammon-001.jpeg)

> Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal: But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal: For where your treasure is, there will your heart be also. No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon. — Matthew 6:19–21, 24 (KJV)`

Concept art designs are thus far a long, greasy haired boy with glowing red eyes, golden wings bound by heavy jewelery and tight rings that turn his skin blue and red. His model sits on a chandelier above the play area.

Mammon is many interpretations regretful of his status as a fallen angel and is also replaced by [Plutus](https://en.wikipedia.org/wiki/Plutus) at points usually depicted as youthful if not an infant which inspires this description

Current MVP design is simply a yellow version of the player model, can add lights around him for effect. Below is a rigging test for example:

![mammon](/images/ezgif-4-fd552bb483.gif 'mammon first try')

A full MVP would likely want to see a a better Mammon render as the "main character" of the "storyline"

# Enviroment

Generally inspired by depiction of the [Fourth Cicle of Hell](<https://en.wikipedia.org/wiki/Inferno_(Dante)#Fourth_Circle_(Greed)>) as a duelling ring

Dammed are watched by unseen entities in a dimly lit room as the surround a table with a flame under a chandelier

Light assets? Possibly actual eyes later but dim lights that move should be enough
The fire should represent the [Morning Star](https://en.wikipedia.org/wiki/Lucifer) as the symbol of Lucifer, King of Hell, and pride

Everything on the table comes from and dissapears into the fire - a simple asset (perhaps another bright light) but pivotal to the game structure as a major piece

Also important are the mechanics of the play table: The outer and inner layers of the table should eventually spin in opposite directions and differing speeds. A large sound and visual aid for distinct game phases, not a priority but still plannedt to be implemented in MVP.

Each player (refered to henceforth as the dammed) has different colours and possibly clothing (later build, easy to control material colour first via props)

When dammed lose they are burned by the flame in the center by Mammon pointing at them though MVP doesn't need burning animation, sfx and light flash is enough - Pride becoming [Wrath](https://en.wikipedia.org/wiki/Satan) as they drop out.

# Start game options

CURRENTLY BUILDING

All of these will be async options and built for MVP

Suspense in R3F

## Search for any game

Create a filtered list of ongoing open games

Database which updates based on queries szent and recieved as public rooms are made open and limited to MAX_PLAYERS

Allow users to click options and scroll through a map of buttons

## Create room

Clickable button to start a function that sends arequest to begin a lobby

Can be a database, also likely involves socket io

## Find specfic room

Same as above

Needs some sort of id

When something matches (select room_id in availible_rooms)

Primary key should a randomised password so every single room needs a password

# Game loop

## Matching ends

Preload animations here and an exit lobby onClick prior to this

Thinking of fog and walking damned in it that increase as time goes on

Mammon insulting the dammed from up high planned in later builds

When game loads the dammed sees their character emerge from the wandering avatars, gain a colour and walk in a "door" that is a shining hole in reality with the playroom on the other side

Essentially just a large black plane with a hole in it

## Notes on the playroom and players

Each should have a distinct colour to be easily remembered

Should be universal to the table in order to have a clear way for each player to rmember each other player other than name

Dammed should choose clothing and horn type, something that carries over in aesthetic so they feel connected to their character

Playroom has mammon above, a record player with an old horn and the table as well as several chairs, dimmly lit and dark

The table area is the most interesting thing and basically the only thing in the room that matters

Has a fire in the centre where everything comes from (origin point, hidden contructor and destroy box for models)

Each dammed is chained to the bottom of this table, doesn't affect anything but for enviromental storytelling purposes, chains in MVP don't need to exist or be animated but would help thematically

In later builds particle effects should tested so sparks fly when actions happen or cards brush against the table. In MVP and early builds whatever is least resource or time intensive is placeholder for fire and lighting effects

Also further chains could be added to break out to restrain dammed from the tabletop when trials occur in later builds (see below) but current build just needs a clear destignation of every game state rather than full theatre. All that is important is that Mammon drops down then every dammed is restrained

## losing

When a dammed loses the game they are removed from the designation of player in the database and their soul destroyeed by mammon

He usually hangs above and will point at losing players for drama and flow

![mammonpoint](/images/mammon-002.jpeg 'mammon pointing')

Destroys their physical presence completely leaving a floating blob (this is a spectator hearby refered to as a lost soul)

They can leave at this point or stay for the final round (see below)

## Animations to play during MVP

Dammed sit around table

    	Set a position and id during this

    	Position needs to change each round

    	id is a primary key/identifier that's constant for the game

General card animations

    	Can be mostly unseen or controlled via react three fibra basic controls

Deck is created from fire in center

    	The fire is our original point in the canvas for simplicity, the camera is offset so all animations should start and finish there and be offset to neat angles towards the ends of the table

    	Cards themeselves may float and not be visible by other players or touched by other models. Animations should general not include models interacting in complex ways for MVP at all.

    	When this happens we load 52 cards fresh and unaltered using createDeckArray() in deck.js

    	Can link this to a database that then links to an array or something from JSON data so players across a network use the same cards

    	Needs to be alterable over network so 52 entiries that are mapped out to a function that creates models and sets which texture goes where. A Card.JSX component.

Table spins and Dealer is chosen

    	Set dealerId from random selection of players

    	dealerId changes evbery round

Mammon "flight" and pointing

    	For loss and victory

# DEALING - Ante-brachium - before conflict

## Players options (under design)

Dealer is important as they technically cannot "cheat" in that round and are immune to accusations directly

Still can be put on trial however (explained below)

A dammed designated as Dealer should be able to:

remove certain cards from the deck

Up to a limit to store on their own person

This will be remembered by mammon

mark the cards

Up to a limit

this is visible to only the player who marks it originally

can be observed by those with the cards

insert new version of card (duplicate)

basically makes it easier to accuse a dammed of cheating if they have a good hand

low risk option

rig the shuffle

They can give certain dammed certain hands

The dealer needs certain protections otherwise it's too easy to accuse them

# IN PLAY - Antepartum - before birth

Need a certain amount of time given to allow actions and points to perform them:

Dammed can cheat further

Dammed can send each other hidden messages by purchasing the means from their shares

    	flies of beelezebub - hidden simple instructions, tracable, non-binding

    		Can send in order to create suggestions but they don't hold up in trials

    	letters from [Mephistopheles' pen](https://en.wikipedia.org/wiki/Mephistopheles) - Faustian bargains which must be upheld and kept secret

    		Dammed cannot accuse another they have signed a full contract with and must act in their favour until specified round

Dammed can watch other dammed for a chance to catch them

There's a period where no one can watch the dealer

No one can see the people directly in front of them due to the fire

Dammed can create distractions by interacting with the enviroment (later build, unnecessary for MVP)

Dammed can hide their actions more carefully

Need a sort of action point and chance of detection system

Dammed should also be allowed to force an end to a round

As usual a majority vote

In later builds dammed should be given random insecentives by kings and princes of hell to act in a certain way for more money (hidden from others) or cards or other tools

    	This of these as the extended roles in mafia

    	Not necessarily a crime to fulfil these tasks and dammed should be able to reveal their contracts but they should create a target on their backs in some way through game theory

        Current ideas include:

        Belphagor - playing without cheating for a few rounds in exchange for secret immunity from losing with a low hand
        Leviathan - particapating successful accusations in exchange for extra goods to cheat
        Lilith - making pacts in exchange for extra information
        Beelzebub - winning multiple rounds of poker in exchange for hard evidence

## BETTING

Unsure if betting is it's own period of play or something that occurs during regular "neutral"

The element that betting adds seems to up the stakes so endangers that neutral setting possibly

Needs a trial run at this point to understand dynamics in actual play - basically the point MVP ends

Current thoughts are no betting for the start of play, freely allowed betting for the rest and a deadlien to bet and not fold by default

    The crime of sloth

# REVEAL - antebellum - before war

All players reveal their hands

Winners are selected

Unless...

# ACCUSATION

In this a dammed is accused of cheating

There are three types of accusation planned:

## Opening - A dammed opens the floor to the accusation of another

Evidence can be falsified

Not all is availible

## Counter - The dammed respond to an opening with evidence pointing to another dammed

Hard evidence is required

Does not remove them from being voted but introduces a new player to the mix

Only one can be voted off at a time

Requires 2/3< of table to vote for a person or the losing hands are ejected

## Trial - Mammon is summoned to directly use hard evidence to convict a voted party of a certain crime

Evidence is unfalsifiable and guilt is proof of crime

Important to note which evidence is binding and viewable by Mammon in this way as some "crimes" can't be proven

Dammed have no input beyond the choice of what to look for and whether they believe someone is guilty or innocent before evidence is counted

Those who lose the bet lose half the pot

People who incorrectly vote pay the cost and may go bust

Only happens once per game

Has the chance to wipe out all players

Fewer people required to make it go

A dammed should only be able to be accused once per game in any singular way unless overwritten by a trial (double jeopardy) in order to avoid targetting a certain player repeatedly or encouraging random accusations

Accusations should come before revealed hands

# Final round - a final game before death - ANTE MORTEM

The final round should be a game between two dammed

This is not to be implemented within this MVP but is planned along with a spectator function for those who lose in earlier round

Essentially would want to have gaseous masses or lights floating and viewing the games

Both to learn from better players and also perhaps bet further amongst themselves on a winner

Lost souls would select a game by majority vote or randomly if not enough people or too late in response

Games would be a selection from outside card games

# Victory - Antephialtic - to end a nightmare

Experience of some kind and a change in rank

Requires implementation of some sort of ELO and ranking system

Again: much later on the project board, far beyond MVP terriotory but planned
