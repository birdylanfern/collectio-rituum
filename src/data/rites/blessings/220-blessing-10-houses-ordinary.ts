import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-10-houses-ordinary',
  titleEnglish: '10. Blessing of Houses Outside Easter',
  titleLatin: 'Benedictio Domorum (Extra Tempus Paschale)',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 145,
  tags: ['houses', 'homes', 'dwelling', 'asperges', '10'],
  lines: [
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Pax huic dómui.', textEnglish: 'Peace to this house.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et ómnibus habitántibus in ea.', textEnglish: 'And to all who live here.' },
    { isRubric: true, textLatin: 'Deinde, loca præcipua domus et habitantes in ea aspergens, dicit Antiphonam:', textEnglish: 'Then, sprinkling the main rooms of the house and those living in it, he says the Antiphon:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Aspérges me, Dómine, hyssópo, et mundábor: lavábis me, et super nivem dealbábor.', textEnglish: 'Sprinkle me, O Lord, with hyssop, and I shall be purified; wash me and I shall be whiter than snow.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Miserére mei, Deus, secúndum magnám misericórdiam tuam. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.', textEnglish: 'Have mercy on me, O God, according to Thy great mercy. Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.' },
    { isRubric: true, textLatin: 'Repetitur Antiphona: Aspérges me, etc.', textEnglish: 'The Antiphon is repeated: Sprinkle me, etc.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dómine, exáudi oratiónem meam.', textEnglish: 'O Lord, hear my prayer.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et clamor meus ad te véniat.', textEnglish: 'And let my cry come unto Thee.' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Exáudi nos, Dómine sancte, Pater omnípotens, ætérne Deus, et míttere dignéris sanctum Ángelum tuum de cælis, qui custódiat, fóveat, prótegat, vísitet atque deféndat omnes habitántes in hoc habitáculo. Per Christum Dóminum nostrum. ℟. Amen.', textEnglish: 'Let us pray. Hear us, O holy Lord, Father almighty, eternal God, and deign to send Thy holy Angel from heaven to guard, cherish, protect, visit, and defend all who dwell in this home. Through Christ our Lord. ℟. Amen.' }
  ]
};

export default ritual;
