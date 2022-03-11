export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string, 
    protected ataque: number, 
    protected vida: number 
  ) {}

  atacar(personagem: Personagem): void {
    personagem.perderVida(this.ataque);
    console.log(`${this.nome} está atacando...`);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Ahhh Guerreiraaaa aaooo atackkkkk')
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' Arrru.. monstroouu atackkkk')
  }
}

const guerreira = new Guerreira('Guerreira', 150, 1000);
const monstro = new Monstro('Monstro', 87, 5000);

console.log('Guerreira -- ')
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
console.log('Monstro -- ')
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

