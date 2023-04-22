import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    this.renderHtml();
  }

  renderHtml(): void {}
}

export default AppComponent;
