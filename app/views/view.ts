export class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
  template(model: T): string {
    throw Error("Child class needs to implement the template method");
  }
}
