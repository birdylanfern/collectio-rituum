import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'formulae-brevissimae',
  titleEnglish: 'Emergency Short Formulas',
  titleLatin: 'Formulæ Brevíssimæ',
  category: 'brevissimae',
  categoryLabel: 'Emergency Forms',
  page: 4,
  tags: ['emergency', 'short', 'baptism', 'viaticum', 'absolution', 'extreme unction', 'articulo mortis'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Formula Baptismi in Periculo Mortis',
      textEnglish: 'Formula of Baptism in Danger of Death',
    },
    {
      isRubric: true,
      textLatin: 'Fundat aquam super caput in modum crucis dicens:',
      textEnglish: 'Pours water on the head in the form of a cross saying:',
    },
    {
      latinOnly: true,
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      isSacramental: true,
      textLatin: 'N., ego te baptízo in nómine Pa ✠ tris, et Fí ✠ lii, et Spíritus ✠ Sancti.',
      textEnglish: 'N., I baptize you in the name of the Father ✠, and of the Son ✠, and of the Holy ✠ Spirit.',
    },
    {
      isHeading: true,
      textLatin: 'Formula Absolutionis Sacramentalis',
      textEnglish: 'Formula of Sacramental Absolution',
    },
    {
      latinOnly: true,
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      isSacramental: true,
      textLatin: 'Ego te absólvo ab ómnibus censúris et peccátis, in nómine Patris, et Fílii, ✠ et Spíritus Sancti. Amen.',
      textEnglish: 'I absolve you from all censures and sins, in the name of the Father, and of the Son, ✠ and of the Holy Spirit. Amen.',
    },
    {
      isHeading: true,
      textLatin: 'Formula Extremæ Unctionis',
      textEnglish: 'Formula of Extreme Unction',
    },
    {
      latinOnly: true,
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      isSacramental: true,
      textLatin: 'Per istam sanctam Unctió ✠ nem indúlgeat tibi Dóminus quidquid deliquísti. Amen.',
      textEnglish: 'By this holy anoint ✠ ing may the Lord forgive you whatever wrong you have done. Amen.',
    },
    {
      isHeading: true,
      textLatin: 'Formula Benedictionis Apostolicæ',
      textEnglish: 'Formula of the Apostolic Blessing',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Ego, facultáte mihi ab Apostólica Sede tribúta, indulgéntiam plenáriam et remissiónem ómnium peccatórum tibi concédo. In nómine Patris, et Fílii, ✠ et Spíritus Sancti. ℟. Amen.',
      textEnglish: 'By the faculty granted me by the Apostolic See, I grant you a plenary indulgence and remission of all your sins. In the name of the Father, and of the Son, ✠ and of the Holy Spirit. ℟. Amen.',
    },
  ],
};

export default ritual;
