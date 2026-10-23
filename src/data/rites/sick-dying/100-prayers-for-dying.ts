import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'prayers-for-dying',
  titleEnglish: 'Prayers for the Dying',
  titleLatin: 'De Exspiratione',
  category: 'sick_dying',
  categoryLabel: 'Care of the Sick & Dying',
  page: 101,
  tags: ['dying', 'death', 'subvenite', 'in manus tuas', 'exspiratione'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Invocatiónes in Agóne Mortis',
      textEnglish: 'Invocations in the Last Agony',
    },
    {
      isRubric: true,
      textLatin: 'Ipse moriens, si potest, dicat, vel Sacerdos pro eo clara voce pronuntiet: JESU, JESU, JESU.',
      textEnglish: 'The dying person, if able, or the priest in his name says clearly: JESUS, JESUS, JESUS.',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'In manus tuas, Dómine, comméndo spíritum meum.',
      textEnglish: 'Into Thy hands, O Lord, I commend my spirit.',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Dómine Jesu Christe, súscipe spíritum meum.',
      textEnglish: 'Lord Jesus Christ, receive my spirit.',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Sancta María, mater grátiæ, mater misericórdiæ, tu me ab hoste prótege, et hora mortis súscipe.',
      textEnglish: 'Holy Mary, mother of grace, mother of mercy, protect me from the enemy, and receive me at the hour of death.',
    },
    {
      isHeading: true,
      textLatin: 'Egressa Ánima de Córpore',
      textEnglish: 'At the Moment of Death',
    },
    {
      speakerLatin: '℟.',
      speakerEnglish: '℟.',
      textLatin: 'Subveníte, Sancti Dei, occúrrite, Ángeli Dómini, * Suscipiéntes ánimam ejus, * Offeréntes eam in conspéctu Altíssimi.',
      textEnglish: 'Come to his (her) aid, O saints of God; hasten to meet him (her), angels of the Lord: * Taking up his (her) soul, * Presenting it in the sight of the Most High.',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Suscípiat te Christus, qui vocávit te, et in sinum Abrahæ Ángeli dedúcant te.',
      textEnglish: 'May Christ who called you receive you, and may the angels lead you to Abraham\'s bosom.',
    },
  ],
};

export default ritual;
