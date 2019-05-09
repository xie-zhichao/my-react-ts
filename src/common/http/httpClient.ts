/**
 * http请求工具类
 * @author xzc
 */
import axios from 'axios';


class Animal {
  
}

class Bee extends Animal {
 
}

class Lion extends Animal {
  
}

class AnimalFactory {
  private static instance: AnimalFactory;

  private constructor() {};

  static getInstance(): AnimalFactory {
    if(!AnimalFactory.instance) {
      AnimalFactory.instance = new AnimalFactory();
    }

    return AnimalFactory.instance;
  }

  create<A extends Animal>(c: new () => A): A {
    return new c();
  }
}
