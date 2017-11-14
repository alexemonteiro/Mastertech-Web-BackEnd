class Pessoa {
  constructor(nome, funcao) {
    console.log(`instanciando pessoa ${nome} ${funcao}`); //ES6
    this._nome = nome;
    this._funcao = funcao;
  }


}

//new Pessoa('Fulano', 18);

class Ninja extends Pessoa {
  // sobrescrita de construtor
  constructor(apelido, corCamisa) {
    super(apelido, 'ninja');
    this._corCamisa = 'camisa: ' + corCamisa;
    console.log(`este é o ninja ${this._nome} ${this._corCamisa}`);
  }
}

new Ninja('Ciclano', 'cinza');
