/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KaierEditor {
    }
    interface KaierToolbar {
        "icons": {
            bold: string;
            heading: string;
            italic: string;
            link: string;
            list_ol: string;
            list_ul: string;
            quote_right: string;
            underline: string;
        };
    }
    interface KaierWriter {
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLKaierEditorElement extends Components.KaierEditor, HTMLStencilElement {
    }
    var HTMLKaierEditorElement: {
        prototype: HTMLKaierEditorElement;
        new (): HTMLKaierEditorElement;
    };
    interface HTMLKaierToolbarElement extends Components.KaierToolbar, HTMLStencilElement {
    }
    var HTMLKaierToolbarElement: {
        prototype: HTMLKaierToolbarElement;
        new (): HTMLKaierToolbarElement;
    };
    interface HTMLKaierWriterElement extends Components.KaierWriter, HTMLStencilElement {
    }
    var HTMLKaierWriterElement: {
        prototype: HTMLKaierWriterElement;
        new (): HTMLKaierWriterElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "kaier-editor": HTMLKaierEditorElement;
        "kaier-toolbar": HTMLKaierToolbarElement;
        "kaier-writer": HTMLKaierWriterElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KaierEditor {
    }
    interface KaierToolbar {
        "icons"?: {
            bold: string;
            heading: string;
            italic: string;
            link: string;
            list_ol: string;
            list_ul: string;
            quote_right: string;
            underline: string;
        };
    }
    interface KaierWriter {
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "kaier-editor": KaierEditor;
        "kaier-toolbar": KaierToolbar;
        "kaier-writer": KaierWriter;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kaier-editor": LocalJSX.KaierEditor & JSXBase.HTMLAttributes<HTMLKaierEditorElement>;
            "kaier-toolbar": LocalJSX.KaierToolbar & JSXBase.HTMLAttributes<HTMLKaierToolbarElement>;
            "kaier-writer": LocalJSX.KaierWriter & JSXBase.HTMLAttributes<HTMLKaierWriterElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}