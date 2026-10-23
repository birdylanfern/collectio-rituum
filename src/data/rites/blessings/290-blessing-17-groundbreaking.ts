import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-17-groundbreaking',
  titleEnglish: '17. Groundbreaking or Laying of First Stone',
  titleLatin: 'Benedictio Inchoatione Ædificii Danda',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 164,
  tags: ['building', 'foundation', 'stone', 'groundbreaking', 'construction', '17'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Deus, a quo omne bonum sumit inítium et semper ad potióra progrédiens pércipit increméntum: concéde, quǽsumus, supplicántibus nobis ut quod ad laudem nóminis tui inchoáre aggredímur, ætérno tuæ patérnæ sapiéntiæ múnere perducátur ad términum. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. O God, from Whom every good takes its beginning and advancing to greater growth receives increase: grant, we beseech Thee, to our supplications that what we undertake to begin for the praise of Thy name may be brought to completion by the eternal gift of Thy paternal wisdom. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur aqua benedicta.', textEnglish: 'And let the place or stone be sprinkled with holy water.' }
  ]
};

export default ritual;
