# card-game

# Working title is "Ante-mortem"

[Antemortem](https://medical-dictionary.thefreedictionary.com/ante+mortem) being the states preceeding death and a pun on the term [ante](https://www.thefreedictionary.com/ante) in poker.

Other trial names for the stages in play are puns involving ante and some olden word for preceeding an event.

## Premise:

Background: A mystical games for money and souls in hell

Players are dammed entities that must gamble with their lives in order to be released from purgatory

An endless loop of winning and losing time in hell

Game master is [Mammon](https://en.wikipedia.org/wiki/Mammon) - one of the biblical Princes of Hell and ruler of the circle of greed

> Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal: But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal: For where your treasure is, there will your heart be also. No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon. — Matthew 6:19–21, 24 (KJV)`

Concept art designs are thus far a long, greasy haired boy with glowing red eyes, golden wings bound by heavy jewelery and tight rings that turn his skin blue and red. His model sits on a chandelier above the play area. 

  Mammon is many interpretations regretful of his status as a fallen angel and is also replaced by [Plutus](https://en.wikipedia.org/wiki/Plutus) at points usually depicted as youthful if not an infant which inspires this description
  
  Current design is simply a yellow version of the player model, can add lights around him for effect
  
  A full MVP would likely want to see a a better Mammon render as the "main character" of the "storyline"

# Enviroment

Generally inspired by depiction of the [Fourth Cicle of Hell](https://en.wikipedia.org/wiki/Inferno_(Dante)#Fourth_Circle_(Greed))as a duelling ring

Player are watched by unseen entities in a dimly lit room as the surround a table with a flame under a chandelier

Light assets? Maybe actual eyes later but dim lights that move should be enough
	
  The fire represent the [Morning Star](https://en.wikipedia.org/wiki/Lucifer) as the symbol of Lucifer, King of Hell, and pride
  
Everything on the table comes from and dissapears into the fire

  A simple asset (perhaps another bright light) but pivotal to the game structure as a major piece
  
Also important are the mechanics of the play table 

  The outer and inner sections of the table should eventually spin in opposite directions and differing speeds
  
  A large sound and visual aid for distinct game phases, not a priority but still should be implemented in MVP
 
Each player (refered to henceforth as the dammed) has different colours and possibly clothing (later build, easy to control material colour first via props)

  When players lose they are burned by the flame in the center by Mammon pointing at them
  
MVP doesn't need burning animation, sfx and light flash is enough
    
Symbolism is a of Pride becoming [Wrath](https://en.wikipedia.org/wiki/Satan) as they drop out

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

Mammon insulting the player from up high planned in later builds

When game loads the dammed sees their character emerge from the wandering avatars, gain a colour and walk in a "door" that is a shining hole in reality with the playroom on the other side

Essentially just a large black plane with a hole in it


## Notes on the playroom and players

Each should have a distinct colour to be easily remembered

Should be universal to the table

Perhaps players should choose clothing and horn type, something that carries over in aesthetic

Playroom has mammon above, a record player with an old horn and the table as well as several chairs

The table is the most interesting thing

Has a fire in the centre where everything comes from

Each player is chained to the bottom

Sparks fly when actions happen or cards brush against

chains break out to restrain players from the tabletop when trials occur

If Mammon drops down then every player is restrained

He usually hangs above and will pull out a pocket watch with an eye to sine on losing players

Destroys their physical presence completely leaving a floating blob (spectator)

They can leave at this point or stay for the final round

## Animations to play 

Players sit around table

Set a position and id during this

Position needs to change each round

id is a primary key/identifier that's constant for the game

Deck is created from fire in center

Load 52 cards fresh and unaltered

I believe this also can be a database that then links to an array or something from JSON data

Needs to be alterable over network so 52 entiries that are mapped out to a function that creates models and sets which model goes where

Table spins and Dealer is chosen

Set dealerId from random selection of players

dealerId changes evbery round

# DEALING - Antebrachium - before conflict

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

basically makes it easier to accuse a player of cheating if they have a good hand

low risk option

rig the shuffle

They can give certain players certain hands

The dealer needs certain protections otherwise it's too easy to accuse them

# IN PLAY - Antepartum - before birth

Need a certain amount of time given to allow actions

Players can cheat further

Players can send each other hidden messages by purchasing the means from their shares

flies of beelezebub - hidden simple instructions, tracable, non-binding

letters from [Mephistopheles' pen](https://en.wikipedia.org/wiki/Mephistopheles) - Faustian bargains which must be upheld and kept secret

Players can watch other players for a chance to catch them

There's a period where no one can watch the dealer 

No one can see the people directly in front of them due to the fire

Players can create distractions by interacting with the enviroment

later build, unnecessary for MVP

Players can hide their actions more carefully

Need a sort of action point and chance of detection system

Players should also be allowed to force an end to a round

As usual a majority vote

In later builds players should be given random insecentives by kings and princes of hell to act in a certain way for more money (hidden from others) or cards or other tools

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

In this a player is accused of cheating

There are three types of accusation planned:

Opening - A player opens the floor to the accusation of another player

Evidence can be falsified

Not all is availible

Counter - The player responds to an opening with evidence pointing to another player

Hard evidence is required

Does not remove them from being voted but introduces a new player to the mix

Only one can be voted off at a time

Requires 2/3< players to vote for a person

Trial - Mammon is summoned to directly used hard evidence to convict a voted party of a certain crime

Evidence is unfalsifiable and guilt is proof of crime

Important to note which evidence is binding and viewable by Mammon in this way as some "crimes" can't be proven

Players have no input beyond the choice of what to look for

Lose half the pot

People who incorrectly vote pay the cost and may go bust

Only happens once per game

Fewer people required to make it go

A player should only be able to be accused once per game in any singular way unless overwritten by a trial (double jeopardy)

Accusations should come before revealed hands

# Final round - a final game before death - ANTE MORTEM

The final round should be a game between two players

This is not to be implemented within this MVP but is planned along with a spectator function for those who lose in earlier round

Essentially would want to have gaseous masses or lights floating and viewing the games 

Both to learn from better players and also perhaps bet further amongst themselves on a winner

Spectators would select a game by majority vote or randomly if not enough people or too late in response

Games would be a selection from outside card games]

Spectators would have dealer like abilities to affect the games, essentially cheating in favour of someone

Would require expanding the scope outside of card game

Mainly done as most of the cheating elements would become stale between two people and one on one would make the game eventually too focused on a PvP competitive rather than a party/PvE/group based game as is intended

The act of considering the people who lose can either act randomly to some extent 

Also is a reward for those who continue to stay involved in games beyond their own loss

Encourages people to see games through and see correct play for establishing metas


Victory - Antephialtic - to end a nightmare

Experience of some kind and a change in rank

Requires implementation of some sort of ELO and ranking system

Again: much later on the project board, far beyond MVP terriotory but planned
