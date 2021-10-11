import { inspect } from "../decorators/inspect.js";
import { loginRuntime } from "../decorators/login-runtime.js";

export abstract class View<T> {
  protected element: HTMLElement;
  private _escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Selector ${selector} does not exist in the DOM. Check with the development team!`)
    }
    if (escape) {
      this._escape = escape;
    }
  }

  @loginRuntime(true)
  @inspect()
  public update(model: T): void {
    let template = this.template(model);
    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
