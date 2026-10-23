import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-3-all-things',
  titleEnglish: '3. General Blessing for All Things',
  titleLatin: 'Benedictio ad Omnia',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 134,
  tags: ['general blessing', 'omnia', 'objects', 'all things', '3'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Deus, cujus verbo sanctificántur ómnia, béne ✠ dictiónem tuam effúnde super creatúram istam (creatúras istas): et præsta ut quisquis ea (eis) secúndum legem et voluntátem tuam cum gratiárum actióne usus fúerit, per invocatiónem sanctíssimi nóminis tui, córporis sanitátem et ánimæ tutélam te auctóre percípiat. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. O God, by Whose word all things are made holy, pour down Thy blessing ✠ upon this creature (these creatures); and grant that whoever makes use of it (them) with thanksgiving, according to Thy law and Thy will, may through the invocation of Thy most holy name receive from Thee health of body and protection of soul. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergatur (aspergantur) aqua benedicta.', textEnglish: 'And let it (them) be sprinkled with holy water.' }
  ]
};

export default ritual;
