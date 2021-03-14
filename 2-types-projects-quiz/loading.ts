{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  function printLoginState(res: ResourceLoadState): void {
    switch (res.state) {
      case "loading":
        return console.log("👀 loading...");
      case "success":
        return console.log(`😃 ${res.response.body}`);
      case "fail":
        return console.log(`😱 ${res.reason}`);
      default:
        throw new Error("what the hell");
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
