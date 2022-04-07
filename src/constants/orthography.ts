import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'd',
  'é',
  'f',
  'g',
  'ġ',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ö',
  "p'",
  "r'",
  's',
  "t'",
  'ü',
  'v'
  'w'
  'y'
  'z'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
