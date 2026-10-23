import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-18-place',
  titleEnglish: '18. Blessing of Any Place',
  titleLatin: 'Benedictio Loci',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 165,
  tags: ['place', 'room', 'ground', 'loci', 'location', '18'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Béne ✠ dic, Dómine Deus omnípotens, locum istum (domum istam): ut sit in eo sánitas, cástitas, victória, virtus, humílitas, bónitas, et mansuetúdo, plenitúdo legis, et gratiárum áctio Deo Patri, et Fílio, et Spirítui Sancto; et hæc benedíctio máneat super hunc locum et super habitántes in eo. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Bless ✠, Lord God almighty, this place (this house): that in it there may be health, chastity, victory, virtue, humility, goodness, and gentleness, the fullness of the law, and thanksgiving to God the Father, and to the Son, and to the Holy Spirit; and may this blessing remain upon this place and upon those who dwell in it. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And let it be sprinkled with holy water.' }
  ]
};

export default ritual;
