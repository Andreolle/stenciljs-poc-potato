/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HappyPotato {
    'dizzy': string;
    'normal': string;
    'yey': string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLHappyPotatoElement extends Components.HappyPotato, HTMLStencilElement {}
  var HTMLHappyPotatoElement: {
    prototype: HTMLHappyPotatoElement;
    new (): HTMLHappyPotatoElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'happy-potato': HTMLHappyPotatoElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface HappyPotato {
    'dizzy'?: string;
    'normal'?: string;
    'yey'?: string;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'happy-potato': HappyPotato;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'happy-potato': LocalJSX.HappyPotato & JSXBase.HTMLAttributes<HTMLHappyPotatoElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


