
type Traits = 'bold' | 'compressed' | 'condensed' | 'expanded' | 'fixedPitch' | 'italic' | 'narrow' | 'nonStandardCharacterSet' | 'poster' | 'smallCaps' | 'unbold' | 'unitalic'
export interface AvailableFontOptions {
  traits: Traits[]
}

export const getAvailableFonts: (options: AvailableFontOptions) => string[]

export const getAvailableFontFamilies: () => string[]

// export const getAvailableMembersOfFontFamily: (family: string) => string[]

// export const getAvailableFonts: () => string[]

