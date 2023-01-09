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
  curve: ['straight', 'curled', 'spiral', 'sharp'],
  length: ['large', 'medium', 'short']
};

class Player {
  public playerColour: string;
  public playerHorns: { curve: string; length: string };

  public constructor(
    playerColour: string,
    playerHorns: { curve: string; length: string }
  ) {
    this.playerColour = playerColour;
    this.playerHorns = playerHorns;
  }
}

function createRandomPlayer() {
  return new Player(
    differentColours[Math.round(Math.random() * differentColours.length - 1)],
    {
      curve:
        differentAttributes.curve[
          Math.round(Math.random() * differentAttributes.curve.length - 1)
        ],
      length:
        differentAttributes.length[
          Math.round(Math.random() * differentAttributes.length.length - 1)
        ]
    }
  );
}

console.log(createRandomPlayer);

export default Player;
