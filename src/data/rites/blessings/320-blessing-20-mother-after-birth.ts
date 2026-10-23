import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'blessing-20-mother-after-birth',
  titleEnglish: '20. Blessing of Mother & Child (Churching)',
  titleLatin: 'Benedictio Mulieris Post Partum et Infantis',
  category: 'blessings',
  categoryLabel: 'Titulus V: Benedictionale',
  page: 171,
  tags: ['churching', 'mother', 'post partum', 'magnificat', 'thanksgiving', '20'],
  lines: [
    { isRubric: true, textLatin: 'Sacerdos ad ingressum Ecclesiæ mulierem cum infante accipit, dicens:', textEnglish: 'The priest receives the mother with her baby at the entrance of the church, saying:' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Ingrédere in templum Dei; adóra Fílium beátæ Maríæ Vírginis, qui tibi fecunditátem tríbuit prolis.', textEnglish: 'Enter into the temple of God; adore the Son of the Blessed Virgin Mary, Who has granted you the fruitfulness of children.' },
    { isRubric: true, textLatin: 'Recitatur Canticum B. Maríæ Vírginis (Magnificat), deinde sequitur benedictio:', textEnglish: 'The Canticle of Our Lady (Magnificat) is prayed, followed by the blessing:' },
    { speakerLatin: '℣.', speakerEnglish: '℣.', textLatin: 'Dóminus vobíscum.', textEnglish: 'The Lord be with you.' },
    { speakerLatin: '℟.', speakerEnglish: '℟.', textLatin: 'Et cum spíritu tuo.', textEnglish: 'And with your spirit.' },
    { speakerLatin: 'Sacerdos:', speakerEnglish: 'Priest:', textLatin: 'Orémus. Omnípotens sempitérne Deus, qui per beátæ Maríæ Vírginis partum fidélium matrum dolóres in gáudium vertísti: réspice propítius super hanc fámulam tuam, ad templum sanctum tuum pro gratiárum actióne lætam veniéntem... Pax et benedíctio Dei omnipoténtis, Patris, et Fílii, ✠ et Spíritus Sancti, descéndat super vos et máneat semper. ℟. Amen.', textEnglish: 'Let us pray. Almighty and everlasting God, Who through the childbirth of the Blessed Virgin Mary hast turned the pains of faithful mothers into joy: look with favor upon this Thy servant, who comes joyfully to Thy holy temple to offer thanks... May the peace and blessing of almighty God, Father, Son ✠, and Holy Spirit, descend upon you and remain forever. ℟. Amen.' }
  ]
};

export default ritual;
