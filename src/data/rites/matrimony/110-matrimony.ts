import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'matrimony',
  titleEnglish: 'Sacrament of Matrimony',
  titleLatin: 'Ordo Celebrandi Matrimonii Sacramentum',
  category: 'matrimony',
  categoryLabel: 'Holy Matrimony',
  page: 107,
  tags: ['marriage', 'matrimony', 'vows', 'rings', 'nuptial blessing', 'wedding'],
  variants: [
    { id: 'two-rings', label: 'Two Rings' },
    { id: 'one-ring', label: 'One Ring' },
  ],
  defaultVariant: 'two-rings',
  lines: [
    {
      isHeading: true,
      textLatin: 'Exhortatio Ante Matrimonium',
      textEnglish: 'Instruction Before Marriage',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Caríssimi in Christo: Initúri estis sanctam et gravíssimam uniónem quam Deus ipse instítuit...',
      textEnglish: 'Dear friends in Christ: As you know, you are about to enter into a union which is most sacred and most serious, a union which was established by God Himself. Henceforth you belong entirely to each other; you will be one in mind, one in heart, and one in affections.',
    },
    {
      isHeading: true,
      textLatin: 'Consensus Mutuus',
      textEnglish: 'The Mutual Consent',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'N., vis accípere N. hic præséntem in tuam legítimam uxórem juxta ritum sanctæ Matris Ecclésiæ?',
      textEnglish: 'N., will you take N., here present, for your lawful wife according to the rite of our holy Mother, the Church?',
    },
    {
      speakerLatin: 'Sponsus:',
      speakerEnglish: 'Groom:',
      textLatin: 'Volo.',
      textEnglish: 'I will.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'N., vis accípere N. hic præséntem in tuum legítimum marítum juxta ritum sanctæ Matris Ecclésiæ?',
      textEnglish: 'N., will you take N., here present, for your lawful husband according to the rite of our holy Mother, the Church?',
    },
    {
      speakerLatin: 'Sponsa:',
      speakerEnglish: 'Bride:',
      textLatin: 'Volo.',
      textEnglish: 'I will.',
    },
    {
      isRubric: true,
      textLatin: 'Mutuo consensu intellecto, Sacerdos dicit: Now join your right hands. Et stolam circumvolvens jubet eos dicere:',
      textEnglish: 'Having declared their mutual consent, the priest bids: "Now join your right hands." Wrapping his stole around their hands, they recite:',
    },
    {
      speakerLatin: 'Sponsus:',
      speakerEnglish: 'Groom:',
      textLatin: 'Ego, N., accípio te, N., in meam uxórem...',
      textEnglish: 'I, N., take you, N., for my lawful wife, to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until death do us part.',
    },
    {
      speakerLatin: 'Sponsa:',
      speakerEnglish: 'Bride:',
      textLatin: 'Ego, N., accípio te, N., in meum marítum...',
      textEnglish: 'I, N., take you, N., for my lawful husband, to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until death do us part.',
    },
    {
      isHeading: true,
      textLatin: 'Confirmatio Matrimonii',
      textEnglish: 'Confirmation of the Marriage Bond',
    },
    {
      latinOnly: true,
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      isSacramental: true,
      textLatin: 'Ego conjúngo vos in matrimónium: In nómine Patris, ✠ et Fílii, et Spíritus Sancti. ℟. Amen.',
      textEnglish: 'I join you in matrimony: In the name of the Father, ✠ and of the Son, and of the Holy Ghost. ℟. Amen.',
    },
    {
      isHeading: true,
      textLatin: 'Benedíctio Anulorum',
      textEnglish: 'Blessing of the Wedding Rings',
    },
    {
      variant: 'two-rings',
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Béne ✠ dic, Dómine, ánulos istos, quos nos in tuo nómine bene ✠ dícimus, ut, qui eos gestáverint, fidelitátem íntegram ínvicem tenéntes, in pace et voluntáte tua permáneant atque in mútua caritáte semper vivant. Per Christum Dóminum nostrum. ℟. Amen.',
      textEnglish: 'Bless, ✠ O Lord, these rings, which we are blessing ✠ in Thy name, so that they who wear them, keeping faith with each other in unbroken loyalty, may ever remain at peace with Thee, obedient to Thy will, and may live together always in mutual love. Through Christ our Lord. ℟. Amen.',
    },
    {
      latinOnly: true,
      variant: 'one-ring',
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Béne ✠ dic, Dómine, ánulum hunc, quem nos in tuo nómine bene ✠ dícimus: ut, quæ eum gestáverit, fidelitátem íntegram suo sponso tenens, in pace et voluntáte tua permáneat. Per Christum Dóminum nostrum. ℟. Amen.',
      textEnglish: 'Bless, ✠ O Lord, this ring, which we are blessing ✠ in Thy name, so that she who wears it, keeping faith with her husband in unbroken loyalty, may ever remain at peace with Thee and obedient to Thy will. Through Christ our Lord. ℟. Amen.',
    },
  ],
};

export default ritual;
