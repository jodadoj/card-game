//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)

const differentColours: string[] = [
  'red',
  'blue',
  'yellow',
  'green',
  'purple',
  'orange',
  'white',
  'black',
  'brown'
];
const differentAttributes: { curve: string[]; length: string[] } = {
  curve: ['stright', 'curled', 'spiral', 'sharp'],
  length: ['large', 'medium', 'short']
};

class Player {
  public playerColour: string;
  public playerHorns: object;

  public constructor(playerColour: string, playerHorns: object) {
    this.playerColour = playerColour;
    this.playerHorns = playerHorns;
  }
}

export default Player;
