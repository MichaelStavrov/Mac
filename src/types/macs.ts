
export const MAC_FAMILIES = <const>[
  'MacBook',
  'MacBook Air',
  'MacBook Pro 13',
  'MacBook Pro 16',
  'iMac',
  'iMac Pro',
  'Mac mini',
  'Mac Pro'
];

export type IMacFamily = typeof MAC_FAMILIES[number];
export type IMacModelId = string;

export interface IMacModel {
  model: IMacModelId;
  intro: string;
  disc: string;
  family: string;
  titles: string[];
}

export type IMacModelDict = { [key in IMacModelId]: IMacModel }








