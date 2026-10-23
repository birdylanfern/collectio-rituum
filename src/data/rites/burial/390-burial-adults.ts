import { RitualItem } from '../../../types/liturgy';

const ritual: RitualItem = {
  id: 'burial-adults',
  titleEnglish: 'Burial of Adults',
  titleLatin: 'Ritus Sepeliendi Adultos',
  category: 'burial',
  categoryLabel: 'Burial Services',
  page: 193,
  tags: ['burial', 'funeral', 'adults', 'miserere', 'libera me', 'in paradisum'],
  lines: [
    {
      isHeading: true,
      textLatin: 'Ad Domum Defuncti',
      textEnglish: 'At the Home of the Deceased (Ps. 129)',
    },
    {
      latinOnly: true,
      speakerLatin: 'Antiphona:',
      speakerEnglish: 'Antiphon:',
      textLatin: 'Si iniquitátes observáveris, Dómine: Dómine, quis sustinébit?',
      textEnglish: 'If Thou, O Lord, dost mark iniquities, O Lord, who can stand?',
    },
    {
      latinOnly: true,
      speakerLatin: 'Omnes:',
      speakerEnglish: 'All:',
      textLatin: 'De profúndis clamo ad te, Dómine: * Dómine, audi vocem meam!\nFiant aures tuæ inténtæ * ad vocem obsecratiónis meæ...',
      textEnglish: 'Out of the depths I cry to Thee, O Lord; * Lord, hear my voice!\nLet Thine ears be attentive * to my voice in supplication...',
    },
    {
      isHeading: true,
      textLatin: 'Post Missam: Líbera Me',
      textEnglish: 'At the Catafalque: Deliver Me',
    },
    {
      latinOnly: true,
      speakerLatin: 'Chorus:',
      speakerEnglish: 'Choir:',
      textLatin: 'Líbera me, Dómine, de morte ætérna, in die illa treménda: * Quando cæli movéndi sunt et terra: † Dum véneris judicáre sǽculum per ignem.',
      textEnglish: 'Deliver me, O Lord, from everlasting death on that day of terror: * When the heavens and the earth shall be shaken: † As Thou comest to judge the world by fire.',
    },
    {
      isHeading: true,
      textLatin: 'In Cœmeterio: In Paradísum',
      textEnglish: 'At the Cemetery: In Paradisum',
    },
    {
      latinOnly: true,
      speakerLatin: 'Omnes:',
      speakerEnglish: 'All:',
      textLatin: 'In paradísum dedúcant te Ángeli: in tuo advéntu suscípiant te Mártyres, et perdúcant te in civitátem sanctam Jerúsalem. Chorus Angelórum te suscípiat, et cum Lázaro quóndam páupere ætérnam hábeas réquiem.',
      textEnglish: 'May the angels lead you into paradise: may the martyrs receive you at your coming, and bring you into the holy city, Jerusalem. May the choir of angels receive you, and with Lazarus, once poor, may you have everlasting rest.',
    },
    {
      latinOnly: true,
      speakerLatin: 'Sacerdos:',
      speakerEnglish: 'Priest:',
      textLatin: 'Deus, cujus miseratióne ánimæ fidélium requiéscunt, hunc túmulum bene ✠ dícere dignáre, eíque Ángelum tuum sanctum députa custódem... ℟. Amen.',
      textEnglish: 'O God, by whose mercy rest is given to the souls of the faithful, deign to bless ✠ this grave, and appoint your holy angel to guard it... ℟. Amen.',
    },
  ],
};

export default ritual;
