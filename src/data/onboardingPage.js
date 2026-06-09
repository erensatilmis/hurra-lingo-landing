import english from '../assets/languages/english.svg'
import german from '../assets/languages/german.svg'
import french from '../assets/languages/french.svg'
import spanish from '../assets/languages/spanish.svg'
import russian from '../assets/languages/russian.svg'
import chinese from '../assets/languages/chinese.svg'
import turkish from '../assets/languages/turkish.svg'

export const onboardingPage = {
  languageStep: {
    title: 'Hangi dili öğrenmek istersin?',
    subtitle:
      'Hurra Lingo ile yeni bir maceraya başlamak için ilk hedefini seç.',
  },
  audienceStep: {
    title: 'Sizin için en uygun program hangisi?',
    subtitle: 'Öğrenme yolculuğunuzu kişiselleştirmemize yardımcı olun.',
  },
  birthYearStep: {
    title: 'Çocuğunuz hangi yıl doğdu?',
    subtitle:
      'Yaş grubuna en uygun müfredatı ve öğretmeni eşleştirebilmemiz için doğum yılını seçin.',
  },
  levelStep: {
    title: 'Şu anki dil seviyesi nedir?',
    subtitle:
      'Doğru başlangıç noktasını belirleyelim; her zaman ücretsiz tanışma dersinde birlikte teyit edeceğiz.',
  },
  goalStep: {
    title: 'Öğrenme hedefin nedir?',
    subtitle:
      'Programını hedefine göre şekillendirelim; içerik ve pratikleri buna göre seçelim.',
  },
  personalStep: {
    title: 'Son bir adım kaldı!',
    subtitle:
      'Size özel programınızı oluşturup ücretsiz tanışma dersinizi planlayabilmemiz için iletişim bilgilerinizi paylaşın.',
  },
  payment: {
    title: 'Ödeme bilgileri',
    subtitle:
      'Programınızı güvence altına almak için son adımı tamamlayın. Ödemeniz güvenli altyapı ile alınır.',
  },
  success: {
    title: 'Harika, her şey hazır!',
    subtitle:
      'Ödemeniz alındı ve talebiniz bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçerek programınızı başlatacak.',
  },
  languages: [
    { id: 'tr', name: 'Türkçe', native: 'Türkçe', flag: turkish },
    { id: 'en', name: 'İngilizce', native: 'English', flag: english },
    { id: 'de', name: 'Almanca', native: 'Deutsch', flag: german },
    { id: 'fr', name: 'Fransızca', native: 'Français', flag: french },
    { id: 'es', name: 'İspanyolca', native: 'Español', flag: spanish },
    { id: 'ru', name: 'Rusça', native: 'Русский', flag: russian },
    { id: 'zh', name: 'Çince', native: '中文', flag: chinese },
  ],
  audiences: [
    {
      id: 'child',
      title: 'Çocuğum için',
      subtitle: '4 - 18 yaş',
      description: 'Oyun tabanlı, yaş grubuna özel ve eğlenceli bir müfredat.',
      icon: 'Baby',
    },
    {
      id: 'self',
      title: 'Kendim için',
      subtitle: '18 yaş ve üzeri',
      description: 'Kariyer, seyahat ve günlük hayat odaklı esnek programlar.',
      icon: 'GraduationCap',
    },
  ],
  goals: [
    {
      id: 'business',
      title: 'İş Hayatı',
      description: 'Kariyer ve profesyonel iletişim odaklı.',
      icon: 'Briefcase',
    },
    {
      id: 'daily',
      title: 'Günlük İletişim',
      description: 'Gündelik konuşma ve sosyal hayat.',
      icon: 'MessageCircle',
    },
    {
      id: 'travel',
      title: 'Kültür ve Seyahat',
      description: 'Seyahat ve farklı kültürleri keşif.',
      icon: 'Plane',
    },
    {
      id: 'exam',
      title: 'Sınav Hazırlığı',
      description: 'IELTS, TOEFL ve akademik sınavlar.',
      icon: 'FileText',
    },
  ],
  levels: {
    child: [
      { id: 'none', title: 'Hiç bilmiyor', description: 'Bu dille ilk kez tanışacak.' },
      { id: 'little', title: 'Az biliyor', description: 'Birkaç kelime ve kalıbı tanıyor.' },
      { id: 'medium', title: 'Orta seviye', description: 'Basit cümlelerle iletişim kurabiliyor.' },
      { id: 'advanced', title: 'İleri seviye', description: 'Akıcıya yakın, rahat anlaşabiliyor.' },
    ],
    self: [
      { id: 'true-beginner', title: 'Gerçek Başlangıç', description: 'Sıfırdan başlıyorum.' },
      { id: 'beginner', title: 'Başlangıç', description: 'Temel kelime ve kalıpları biliyorum.' },
      { id: 'intermediate', title: 'Orta', description: 'Günlük konularda anlaşabiliyorum.' },
      { id: 'upper-intermediate', title: 'Orta-üst', description: 'Çoğu konuda rahatça konuşabiliyorum.' },
      { id: 'advanced', title: 'İleri', description: 'Akıcı ve özgüvenli iletişim kurabiliyorum.' },
    ],
  },
}
