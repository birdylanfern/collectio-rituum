import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'burial-children',
  titleEnglish: 'Burial of Children',
  titleLatin: 'Ordo Sepeliendi Parvulos',
  category: 'burial',
  categoryLabel: 'Burial Services',
  page: 227,
  tags: ['children', 'infant', 'burial', 'parvulos', 'angels', 'white'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Ritus Sepeliendi Parvulos',
      textEnglish: 'Rite for the Burial of Children',
    },
    {
      isRubric: true,
      textLatin: 'Sacerdos induitur superpelliceo et stola alba atque pluviali ejusdem coloris. Coronatur infans floribus in signum integritatis et virginitatis.',
      textEnglish: 'The priest vests in surplice, white stole, and white cope. The child is crowned with flowers as a sign of purity and innocence.',
    },
    {
      latinOnly: true,
      speakerLatin: 'Antiphona:',
      speakerEnglish: 'Antiphon:',
      textLatin: 'Sit nomen Dómini benedíctum, ex hoc nunc et usque in sǽculum.',
      textEnglish: 'Blessed be the name of the Lord, from this time forth and forevermore.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Omnípotens et mitíssime Deus, qui ómnibus párvulis renátis fonte baptísmatis, dum migrant a sǽculo, sine ullis eórum méritis vitam íllico largíris ætérnam... fac nos in paradíso cum beátis párvulis perénniter sociári. Per Christum Dóminum nostrum. ℟. Amen.',
      textEnglish: 'Almighty and most loving God, who to all little children reborn in the baptismal font, as soon as they leave this world, dost give life everlasting without any merit of their own... grant that we may join the company of blessed children forever in paradise. Through Christ our Lord. ℟. Amen.',
    },
  ],
};

export default ritual;
