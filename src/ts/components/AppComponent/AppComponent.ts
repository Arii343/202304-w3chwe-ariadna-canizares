import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    this.renderHtml();
  }

  renderHtml(): void {
    new HeaderComponent(this.element);
  }
}

export default AppComponent;
