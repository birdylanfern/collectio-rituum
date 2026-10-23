import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'apostolic-blessing-death',
  titleEnglish: 'Apostolic Blessing at the Hour of Death',
  titleLatin: 'Benedictio Apostolica in Articulo Mortis',
  category: 'sick_dying',
  categoryLabel: 'Care of the Sick & Dying',
  page: 59,
  tags: ['apostolic blessing', 'plenary indulgence', 'death', 'articulo mortis'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Benedictio cum Indulgentia Plenaria',
      textEnglish: 'Blessing with Plenary Indulgence',
    },
    {
      speakerLatin: '℣.',
      speakerEnglish: '℣.',
      textLatin: 'Adjutórium nostrum in nómine Dómini.',
      textEnglish: 'Our help is in the name of the Lord.',
    },
    {
      speakerLatin: '℟.',
      speakerEnglish: '℟.',
      textLatin: 'Qui fecit cælum et terram.',
      textEnglish: 'Who made heaven and earth.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Ant. Ne reminiscáris, Dómine, delícta fámuli tui (ancíllæ tuæ), neque vindíctam sumas de peccátis ejus.',
      textEnglish: 'Ant. Remember not, O Lord, the offenses of Thy servant, and take not revenge for his/her sins.',
    },
    {
      isRubric: true,
      textLatin: 'Post confessionem generalem Sacerdos dicit:',
      textEnglish: 'After the general confession the priest says:',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      isSacramental: true,
      textLatin: 'Dóminus noster Jesus Christus, Fílius Dei vivi... per suam piíssimam misericórdiam recípiat confessiónem tuam et restítuat tibi stolam primam... Et ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.',
      textEnglish: 'May our Lord Jesus Christ, the Son of the living God, in His most loving mercy receive your confession and restore to you the robe of grace... And I, by the faculty granted me by the Apostolic See, grant you a plenary indulgence and remission of all your sins. In the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.',
    },
  ],
};

export default ritual;
