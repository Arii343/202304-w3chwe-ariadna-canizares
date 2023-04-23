import HeaderComponent from "./HeaderComponent.js";

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given a HeaderComponent component", () => {
  describe("When HeaderComponent is called with a parentElement", () => {
    test("Then img logo should has alt propertie with text 'logo Pokémon'", () => {
      new HeaderComponent(container);

      const tagImage = container.querySelector("img");

      expect(tagImage?.alt).toBe("logo Pokémon");
    });

    test("Then img logo should has src propertie set to 'pokemon-logo.svg'", () => {
      new HeaderComponent(container);

      const tagImage = container.querySelector("img");

      expect(tagImage?.src).toContain("pokemon-logo.svg");
    });

    test("Then it should has first navbar link with text 'Todos los Pokémon'", () => {
      new HeaderComponent(container);

      const navbarLink = container.querySelector(".navbar__link");

      expect(navbarLink?.textContent).toBe("Todos los Pokémon");
    });

    test("Then it should has first navbar link with text 'Mis Pokémon'", () => {
      new HeaderComponent(container);

      const navbarLink = container.querySelectorAll(".navbar__link")[1];

      expect(navbarLink?.textContent).toBe("Mis Pokémon");
    });

    test("Then it should has first navbar link with text 'Detalle de Pokémon'", () => {
      new HeaderComponent(container);

      const navbarLink = container.querySelectorAll(".navbar__link")[2];

      expect(navbarLink?.textContent).toBe("Detalle de Pokémon");
    });
  });
});
