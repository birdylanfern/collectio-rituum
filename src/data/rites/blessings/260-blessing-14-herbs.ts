import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-14-herbs',
  titleEnglish: '14. Blessing of Herbs (Aug. 15)',
  titleLatin: 'Benedictio Herbarum in Festo Assumptionis B.V.M.',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 153,
  tags: ['herbs', 'fruits', 'assumption', 'august 15', 'harvest', '14'],
  lines: [
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Adjutórium nostrum in nómine Dómini.', textEnglish: 'Our help is in the name of the Lord.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Qui fecit cælum et terram.', textEnglish: 'Who made heaven and earth.' },
    { isRubric: true, textLatin: 'Recitatur Psalmus 64: Te decet hymnus, Deus in Sion...', textEnglish: 'Psalm 64 is recited: To Thee we owe our hymn of praise, O God, in Sion...' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus dabit benignitátem.', textEnglish: 'The Lord will give His blessing.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et terra nostra dabit fructum suum.', textEnglish: 'And our land will produce its fruit.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens sempitérne Deus, qui cælum, terram, mare, visibília et invisibília solo Verbo creásti, quique ad usus hóminum et animálium herbas lignáque produxísti, et unicuíque iuxta seminis sui natúram proprias vires distribuísti: has divérsi géneris herbas et fructus tua cleméntia bene ✠ dícas et benedictiónis tuæ novæ grátiam infúndas, ut sint ad præsídium córporis et ánimæ. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Almighty and everlasting God, Who didst create heaven, earth, sea, and all things visible and invisible by Thy Word alone, and Who didst bring forth plants and trees for the use of men and animals, giving to each its own properties according to its seed: bless ✠ in Thy mercy these herbs and fruits of various kinds, and pour into them the grace of Thy fresh blessing, so that they may serve as a defense for body and soul. Through Christ our Lord. ℟. Amen.' },
    { isRubric: true, textLatin: 'Et aspergantur aqua benedicta.', textEnglish: 'And let them be sprinkled with holy water.' }
  ]
};

export default ritual;
