import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'mixed-marriage',
  titleEnglish: 'Rite for Assisting at Mixed Marriages',
  titleLatin: 'Ritus Assistendi in Matrimoniis Mixtis',
  category: 'matrimony',
  categoryLabel: 'Holy Matrimony',
  page: 124,
  tags: ['mixed marriage', 'dispensation', 'marriage', 'vows'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Ritus Extra Missam',
      textEnglish: 'Rite Outside of Mass',
    },
    {
      isRubric: true,
      textLatin: 'Omnibus de dispensatione persolutis, Sacerdos interrogat utrumque singillatim sermone vulgari:',
      textEnglish: 'All requirements and dispensations having been fulfilled, the priest questions each individually in the vernacular:',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'N., will you take N., here present, for your lawful wife?',
      textEnglish: 'N., will you take N., here present, for your lawful wife?',
    },
    {
      speakerLatin: 'Sponsus:',
      speakerEnglish: 'Groom:',
      textLatin: 'I will.',
      textEnglish: 'I will.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'By the authority committed to me I declare you to be man and wife.',
      textEnglish: 'By the authority committed to me I declare you to be man and wife.',
    },
  ],
};

export default ritual;
