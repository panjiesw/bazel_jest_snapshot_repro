import { sayHello } from "./say-hello";

describe("sayHello", () => {
  it("should match snapshot", () => {
    const result = sayHello();

    expect(result).toMatchSnapshot();
  });
});
