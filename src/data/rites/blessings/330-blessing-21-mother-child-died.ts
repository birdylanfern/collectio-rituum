import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-21-mother-child-died',
  titleEnglish: '21. Blessing of a Mother When Child Has Died',
  titleLatin: 'Benedictio Mulieris Post Partum, Infante Jam Mortuo',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 176,
  tags: ['mother', 'bereavement', 'consolation', 'loss of child', 'comfort', '21'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens sempitérne Deus, sanctæ puritátis amátor, qui infántem hujus mulíeris ad cælórum regnum vocáre dignátus es: dignéris étiam, Dómine, ita cum fámula tua misericórditer ágere ut, ejúsdem infántis méritis et intercessióne, offícia sua dolóris víctrix fórtiter súbeat, et in eódem regno cum prole sua semper congáudeat. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Almighty, everlasting God, lover of holy purity, Who hast deigned to call the child of this woman into Thy heavenly kingdom: grant also in Thy mercy to deal so kindly with Thy handmaid that, through the merits and intercession of this same child, she may courageously overcome her sorrow, fulfill her duties, and rejoice forever with her child in the same heavenly kingdom. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And let her be sprinkled with holy water.' }
  ]
};

export default ritual;
