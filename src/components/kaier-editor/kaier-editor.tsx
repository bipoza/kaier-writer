import { Component, ComponentInterface, Prop, Host, h, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'kaier-editor',
  styleUrl: 'kaier-editor.css',
  shadow: true,
})
export class KaierEditor implements ComponentInterface {
  @Element() private element: HTMLElement;
  @Prop() content_text: string = 'Once upon a time...✏️';
  // @Watch('content_text')
  // onNameChanged(value) {
  //   console.log("newValue: ", value);
  // }
  @Event() contextTextChanges: EventEmitter<string>;
  contextTextChangesHandler(todo: string) {
    console.log("TODO: ", todo)
    this.contextTextChanges.emit(todo);
  }
  componentDidLoad() {
    this.contentChangeEvent();
  }
  
  contentChangeEvent() {
    this.element.shadowRoot.getElementById("content").addEventListener("input", (event) => {
      this.content_text = event.target['innerHTML'];
      this.contextTextChangesHandler(this.content_text);
    });
  }
  render() {
    return (
      <Host>
        <slot>
          <div id="editor" class="editor" data-simplebar data-simplebar-auto-hide="false">
            <div id="content" class="content" contenteditable="true">
              <p>Once upon a time...✏️</p>
            </div>
          </div>
        </slot>
      </Host>
    );
  }

}
