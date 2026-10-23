import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'continuous-last-rites',
  titleEnglish: 'Last Rites Given Without Interruption',
  titleLatin: 'Ritus Continuus Infirmum Muniendi',
  category: 'sick_dying',
  categoryLabel: 'Care of the Sick & Dying',
  page: 64,
  tags: ['last rites', 'continuous', 'confession', 'unction', 'viaticum', 'blessing'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Ordo Continuus',
      textEnglish: 'Continuous Order of Last Rites',
    },
    {
      isRubric: true,
      textLatin: '1. Sacerdos ingreditur cubiculum dicens: Pax huic dómui. Aspergit infirmum aqua benedicta.',
      textEnglish: '1. The priest enters the sickroom saying: Peace to this house. He sprinkles the sick person with holy water.',
    },
    {
      isRubric: true,
      textLatin: '2. Audit confessionem sacramentalem et absolvit. Tunc fit confessio generalis, Misereatur et Indulgentiam.',
      textEnglish: '2. He hears sacramental confession and gives absolution. Then follows general confession, Misereatur, and Indulgentiam.',
    },
    {
      isRubric: true,
      textLatin: '3. Ministrat Sacramentum Extremae Unctionis ungendo sensus cum respectivis formis.',
      textEnglish: '3. He administers Extreme Unction by anointing the senses with their respective forms.',
    },
    {
      isRubric: true,
      textLatin: '4. Reassumit stolam albam et ministrat Sanctissimum Viaticum dicens: Accipe, frater (soror), Viáticum Córporis Dómini nostri...',
      textEnglish: '4. He resumes the white stole and administers Holy Viaticum, saying: Receive, brother (sister), the Viaticum of the Body of our Lord...',
    },
    {
      isRubric: true,
      textLatin: '5. Statim subjungit Benedictionem Apostolicam in articulo mortis cum plenaria indulgentia.',
      textEnglish: '5. Immediately he subjoins the Apostolic Blessing for the hour of death with plenary indulgence.',
    },
  ],
};

export default ritual;
