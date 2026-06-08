export const pricingPage = {
  hero: {
    eyebrow: 'Ücretlendirme',
    title: 'Size en uygun planı seçin',
    description:
      'Birebir, mini grup veya yoğun programlarla bütçenize ve hedeflerinize uygun esnek paketler. Tüm planlar canlı dersler, kayıtlı ders bankası ve yapay zekâ destekli pratiklerle gelir.',
    campaign: 'Kampanya: Seçili paketlerde %15 indirim',
  },
  languages: [
    'İngilizce',
    'Almanca',
    'Fransızca',
    'İspanyolca',
    'Rusça',
    'Türkçe',
  ],
  tiers: [
    {
      id: 'mini-group',
      name: 'Mini Grup Dersleri',
      price: '459',
      unit: 'ders başına',
      note: 'başlayan ücretlerle',
      highlight: false,
      features: [
        '2 – 4 kişilik butik sınıflar',
        'Eğlenceli ve interaktif öğrenme ortamı',
        'Kayıtlı dersler ile sınırsız tekrar',
        'Bireysel uygulama etkinlikleri',
      ],
    },
    {
      id: 'individual',
      name: 'Bireysel Dersler',
      price: '656',
      unit: 'ders başına',
      note: 'başlayan ücretlerle',
      highlight: true,
      badge: 'En Popüler',
      features: [
        'Mini Grup Derslerindeki tüm imkanlar',
        'Tamamen kişiselleştirilmiş ders planı',
        'İhtiyaca yönelik birebir içerik',
        'Kişiselleştirilmiş geri bildirim sistemi',
      ],
    },
    {
      id: 'individual-plus',
      name: 'Bireysel Dersler+',
      price: '925',
      unit: 'ders başına',
      note: 'başlayan ücretlerle',
      highlight: false,
      features: [
        'Bireysel Derslerdeki tüm imkanlar',
        'Ana dili İngilizce olan öğretmenler',
        'Akıcı konuşma ve telaffuz düzeltme',
        'İleri seviye kariyer/akademik odak',
      ],
    },
  ],
  packages: {
    eyebrow: 'Paket Detayları',
    title: 'Aylık veya üç aylık paket seçenekleri',
    subtitle:
      'Haftalık ders yoğunluğunu ve paket sürenizi ihtiyacınıza göre seçin. Kampanyalı fiyatlar seçili dönemler için geçerlidir.',
    periods: [
      { id: 'monthly', label: 'Aylık' },
      { id: 'quarterly', label: 'Üç Aylık' },
    ],
    plans: [
      {
        id: 'individual',
        name: 'Bireysel Dersler',
        highlight: true,
        options: {
          monthly: [
            { lessons: 'Haftada 1 Ders', old: '3.116', now: '2.648,60' },
            { lessons: 'Haftada 2 Ders', old: '5.768', now: '4.902,80' },
          ],
          quarterly: [
            { lessons: 'Haftada 1 Ders', old: '9.072', now: '7.711,20' },
            { lessons: 'Haftada 2 Ders', old: '16.776', now: '14.259,60' },
          ],
        },
      },
      {
        id: 'individual-plus',
        name: 'Bireysel Dersler+',
        highlight: false,
        options: {
          monthly: [
            { lessons: 'Haftada 1 Ders', old: '4.396', now: '3.736,60' },
            { lessons: 'Haftada 2 Ders', old: '8.136', now: '6.915,60' },
          ],
          quarterly: [
            { lessons: 'Haftada 1 Ders', old: '12.792', now: '10.873,20' },
            { lessons: 'Haftada 2 Ders', old: '23.664', now: '20.114,40' },
          ],
        },
      },
    ],
  },
  benefits: {
    eyebrow: 'Neden Hurra Lingo?',
    title: 'Her plana dahil olan ayrıcalıklar',
    items: [
      {
        title: 'Uzman Eğitmen Kadrosu',
        text: 'Ana dil yetkinliğine sahip, sertifikalı ve online eğitimde deneyimli uzmanlarla hedeflerinize ulaşın.',
      },
      {
        title: 'CEFR Standartlarında Müfredat',
        text: 'A1’den C1 seviyesine kadar, uluslararası dil yeterlilik kriterlerine tam uyumlu eğitim programı.',
      },
      {
        title: 'Sürdürülebilir Öğrenme',
        text: 'Güçlü eğitmen-öğrenci bağı ve motivasyon odaklı içeriklerle kesintisiz dil gelişimi.',
      },
      {
        title: 'Bütüncül Eğitim Ekosistemi',
        text: 'Canlı dersleri destekleyen interaktif uygulamalar ve yapay zekâ destekli etkinliklerle 7/24 öğrenme.',
      },
      {
        title: 'Uluslararası Sertifikasyon',
        text: 'Dil yetkinliğinizi global geçerliliği olan resmi belgelerle taçlandırma fırsatı.',
      },
    ],
  },
  cta: {
    eyebrow: 'Hurra Lingo Ailesine Katılın',
    title: 'Önce ücretsiz tanışma dersinizi planlayın',
    description:
      'Seviyenizi ölçelim, hedeflerinizi belirleyelim ve size en uygun paketi birlikte seçelim. Karar vermeden önce deneyimleyin.',
    cta: 'Ücretsiz Deneyin',
    variant: 'primary',
  },
}
