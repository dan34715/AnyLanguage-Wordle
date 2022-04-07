import { CONFIG } from './config'

export const VALIDGUESSES = [
‘Fridé’,
‘Anglé’,
‘Chris’,
‘Lüisö’,
‘Nüéva’,
‘Yorké’,
‘Rianö’,
‘Abütö’,
‘Abüvé’,
‘Akrüs’,
‘Aktrö’,
‘Hémés’,
‘Chétü’,
‘Langé’’,
‘Nükts’,
‘Salüt’,
‘Billé’,
‘Sünin’,
‘Éstis’,

]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
