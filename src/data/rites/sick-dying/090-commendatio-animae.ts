import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'commendatio-animae',
  titleEnglish: 'Recommendation of the Departing Soul',
  titleLatin: 'Ex Ordine Commendationis Animæ',
  category: 'sick_dying',
  categoryLabel: 'Care of the Sick & Dying',
  page: 82,
  tags: ['commendatio', 'proficiscere', 'litany for the dying', 'departing soul'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Litania pro Agonizantibus',
      textEnglish: 'The Litany for the Dying',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Kýrie, eléison. Christe, eléison. Kýrie, eléison.',
      textEnglish: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Sancta María, ora pro eo (ea).',
      textEnglish: 'Holy Mary, pray for him (her).',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Omnes sancti Ángeli et Archángeli, oráte pro eo (ea).',
      textEnglish: 'All you holy Angels and Archangels, pray for him (her).',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Sancte Joseph, ora pro eo (ea).',
      textEnglish: 'St. Joseph, pray for him (her).',
    },
    {
      isHeading: true,
      textLatin: 'Proficíscere, Ánima Christiána',
      textEnglish: 'Go Forth, O Christian Soul',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Proficíscere, ánima christiána, de hoc mundo, in nómine Dei Patris omnipoténtis, qui te creávit: in nómine Jesu Christi, Fílii Dei vivi, qui pro te passus est: in nómine Spíritus Sancti, qui in te effúsus est... hódie sit in pace locus tuus, et habitátio tua in sancta Sion. Per eúndem Christum Dóminum nostrum. ℟. Amen.',
      textEnglish: 'Go forth from this world, O Christian soul, in the name of God the Father almighty, who created you; in the name of Jesus Christ, the Son of the living God, who suffered for you; in the name of the Holy Spirit, who has been poured forth upon you... May your dwelling today be in peace, and your home in holy Sion. Through the same Christ our Lord. ℟. Amen.',
    },
  ],
};

export default ritual;
