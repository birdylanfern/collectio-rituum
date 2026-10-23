import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'anniversaries',
  titleEnglish: 'Blessing for Wedding Anniversaries',
  titleLatin: 'Benedictio in Nuptiis Jubilæis',
  category: 'anniversaries',
  categoryLabel: 'Appendix',
  page: 238,
  tags: ['anniversary', 'silver', 'golden', 'jubilee', 'vows renewal', 'te deum'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Renovatio Consensus',
      textEnglish: 'Renewal of Consent (25th or 50th Anniversary)',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'N., do you renew and confirm your taking of N. here present for your wedded wife?',
      textEnglish: 'N., do you renew and confirm your taking of N. here present for your wedded wife?',
    },
    {
      speakerLatin: 'Sponsus:',
      speakerEnglish: 'Groom:',
      textLatin: 'I do.',
      textEnglish: 'I do.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'N., do you renew and confirm your taking of N. here present for your wedded husband?',
      textEnglish: 'N., do you renew and confirm your taking of N. here present for your wedded husband?',
    },
    {
      speakerLatin: 'Sponsa:',
      speakerEnglish: 'Bride:',
      textLatin: 'I do.',
      textEnglish: 'I do.',
    },
    {
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Benedíctio Dei omnipoténtis, Patris, et Fílii, ✠ et Spíritus Sancti, descéndat super vos et máneat semper. ℟. Amen.',
      textEnglish: 'May the blessing of almighty God, Father, Son, ✠ and Holy Ghost, descend upon you and remain forever. ℟. Amen.',
    },
    {
      isHeading: true,
      textLatin: 'Te Deum Laudamus',
      textEnglish: 'Te Deum (Hymn of Thanksgiving)',
    },
    {
      speakerLatin: 'Omnes:',
      speakerEnglish: 'All:',
      textLatin: 'Te Deum laudámus: * te Dóminum confitémur.\nTe ætérnum Patrem * omnis terra venerátur.\nTibi omnes ángeli, * tibi cæli et univérsi potestátes:\nTibi Chérubim et Séraphim * incessábili voce proclámant:\nSanctus, Sanctus, Sanctus * Dóminus Deus Sábaoth.\nPleni sunt cæli et terra * majestátis glóriæ tuæ.',
      textEnglish: 'We praise Thee, O God: * we acknowledge Thee to be the Lord.\nAll the earth * doth worship Thee, the Father everlasting.\nTo Thee all angels, * to Thee the heavens and all the powers:\nTo Thee the Cherubim and Seraphim * cry aloud without ceasing:\nHoly, holy, holy * Lord God of Sabaoth.\nHeaven and earth are full * of the majesty of Thy glory.',
    },
  ],
};

export default ritual;
