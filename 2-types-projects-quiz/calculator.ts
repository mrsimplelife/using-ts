{
  /**
   * Let's make a calculator 🧮
   */
  type Commend = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate(commend: Commend, n1: number, n2: number): number {
    switch (commend) {
      case "add":
        return n1 + n2;
      case "substract":
        return n1 - n2;
      case "multiply":
        return n1 * n2;
      case "divide":
        return n1 / n2;
      case "remainder":
        return n1 * n2;
      default:
        throw new Error("너 틀렸어");
    }
  }
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
