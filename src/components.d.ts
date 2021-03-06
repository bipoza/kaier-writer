/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TEXT_EDITOR } from "@interfaces";
export namespace Components {
    interface KaierCounter {
        "character_counter": number;
        "word_counter": number;
    }
    interface KaierEditor {
        "content_text": TEXT_EDITOR;
    }
    interface KaierToolbar {
        "icons": { bold: string; heading: string; italic: string; link: string; list_ol: string; list_ul: string; quote_right: string; underline: string; };
    }
    interface KaierWriter {
        "text": string;
    }
}
declare global {
    interface HTMLKaierCounterElement extends Components.KaierCounter, HTMLStencilElement {
    }
    var HTMLKaierCounterElement: {
        prototype: HTMLKaierCounterElement;
        new (): HTMLKaierCounterElement;
    };
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
    interface HTMLElementTagNameMap {
        "kaier-counter": HTMLKaierCounterElement;
        "kaier-editor": HTMLKaierEditorElement;
        "kaier-toolbar": HTMLKaierToolbarElement;
        "kaier-writer": HTMLKaierWriterElement;
    }
}
declare namespace LocalJSX {
    interface KaierCounter {
        "character_counter"?: number;
        "word_counter"?: number;
    }
    interface KaierEditor {
        "content_text"?: TEXT_EDITOR;
        "onContextTextChanges"?: (event: CustomEvent<TEXT_EDITOR>) => void;
    }
    interface KaierToolbar {
        "icons"?: { bold: string; heading: string; italic: string; link: string; list_ol: string; list_ul: string; quote_right: string; underline: string; };
    }
    interface KaierWriter {
        "text"?: string;
    }
    interface IntrinsicElements {
        "kaier-counter": KaierCounter;
        "kaier-editor": KaierEditor;
        "kaier-toolbar": KaierToolbar;
        "kaier-writer": KaierWriter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kaier-counter": LocalJSX.KaierCounter & JSXBase.HTMLAttributes<HTMLKaierCounterElement>;
            "kaier-editor": LocalJSX.KaierEditor & JSXBase.HTMLAttributes<HTMLKaierEditorElement>;
            "kaier-toolbar": LocalJSX.KaierToolbar & JSXBase.HTMLAttributes<HTMLKaierToolbarElement>;
            "kaier-writer": LocalJSX.KaierWriter & JSXBase.HTMLAttributes<HTMLKaierWriterElement>;
        }
    }
}
