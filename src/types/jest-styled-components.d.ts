/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { NewPlugin } from 'pretty-format'
import { css } from 'styled-components'

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: Symbol
      sample?: string | RegExp | object | Array<any> | Funcion
    }

    type Value = string | number | RegExp | AssymetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string | ReturnType<typeof css>
      supports?: string
    }

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export interface StyledComponentsSerializerOption {
  addStyles?: boolean
  classNameFormatter?: (index: number) => string
}

export declare const styleSheetSerializer: NewPlugin & {
  setStyleSheetSerializerOptions: (
    options?: StyledComponentsSerializerOption
  ) => void
}
