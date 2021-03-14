{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.fillCoffeeBeans(coffeeBeans);
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    static getBeansGramPerShot(): number {
      return CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    fillCoffeeBeans(coffeeBeans: number): void {
      if (coffeeBeans < 0) throw new Error("beans should be");
      this.coffeeBeans += coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT)
        throw new Error("not enough coffee beans!");
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }

  const coffeeMachine = CoffeeMachine.makeMachine(
    3 * CoffeeMachine.getBeansGramPerShot()
  );
  console.log(CoffeeMachine);
  console.log(coffeeMachine);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);
}
