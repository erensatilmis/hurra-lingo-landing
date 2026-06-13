import { mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const trDir = join(root, 'src/locales/tr')

mkdirSync(trDir, { recursive: true })

function importData(relativePath) {
  return import(pathToFileURL(join(root, relativePath)).href)
}

const content = await importData('src/data/content.js')
const faqPage = await importData('src/data/faqPage.js')
const pricingPage = await importData('src/data/pricingPage.js')
const certificationPage = await importData('src/data/certificationPage.js')
const referencesPage = await importData('src/data/referencesPage.js')
const teachersPage = await importData('src/data/teachersPage.js')

// languagePages.js and onboardingPage.js import SVG assets — loaded separately

function writeJson(name, data) {
  writeFileSync(
    join(trDir, `${name}.json`),
    `${JSON.stringify(data, null, 2)}\n`,
    'utf8',
  )
}

const {
  navLinks,
  corporateLinks,
  languages,
  mobileAppBanner,
  mobileAppModal,
  socialLinks,
  footer,
  footerCta,
  contact,
  contactPage,
  hero,
  mission,
  features,
  ctaBands,
  ageGroups,
  cefrLevels,
  testimonials,
  teachers,
  blog,
  gallery,
  educationPage,
  lessonsPage,
} = content

writeJson('common', {
  meta: {
    title: 'Hurra Lingo | Online Yabancı Dil Okulu',
    description:
      'Hurra Lingo ile yeni bir dil öğrenmenin en eğlenceli yolunu keşfedin. Canlı dersler, uzman öğretmenler ve yapay zekâ destekli içerikler.',
  },
  nav: {
    education: navLinks[0].label,
    lessons: navLinks[1].label,
    teachers: navLinks[2].label,
    blog: navLinks[3].label,
    pricing: navLinks[4].label,
    references: navLinks[5].label,
    contact: navLinks[6].label,
    corporate: 'Kurumsal',
    certification: corporateLinks[0].label,
    faq: corporateLinks[1].label,
    login: 'Giriş',
    signup: 'Kayıt',
    mainMenu: 'Ana menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
  },
  languages: languages.filter((l) => ['TR', 'EN'].includes(l.code)),
  mobileAppBanner,
  mobileAppModal,
  socialLinks: socialLinks.map(({ id, label }) => ({ id, label })),
  footer: {
    tagline:
      'Yeni nesil online dil okulu. Canlı dersler, uzman öğretmenler ve akıllı teknolojilerle dil öğrenin.',
    linksTitle: 'Bağlantılar',
    socialTitle: 'Sosyal Medya',
    rights: 'Tüm hakları saklıdır.',
    sites: footer.sites,
    legal: footer.legal,
  },
  footerCta,
  contact,
  contactPage: {
    ...contactPage,
    phones: contactPage.phones,
    email: contactPage.email,
    addresses: contactPage.addresses,
    map: { title: contactPage.map.title },
  },
  topBar: {
    whatsappAria: 'WhatsApp ile iletişime geç',
  },
  aria: {
    languageSelection: 'Dil seçimi',
    previousTestimonial: 'Önceki yorum',
    nextTestimonial: 'Sonraki yorum',
    enlargeImage: 'büyüt',
    galleryImage: 'Galeri görseli',
  },
})

writeJson('home', {
  hero: {
    title: hero.title,
    description: hero.description,
    cta: hero.cta,
    stats: [
      { value: '10.000+', label: 'Mutlu öğrenci' },
      { value: '50+', label: 'Uzman öğretmen' },
      { value: '7', label: 'Yabancı dil' },
    ],
    badge: {
      title: '7/24 Canlı Ders',
      subtitle: 'Her yaştan öğrenci',
    },
    imageAlt: 'Hurra Lingo online dil eğitimi',
    imageLabel: 'Hero görseli',
    welcomeMessages: [
      { lang: 'Türkçe', text: 'Merhaba!' },
      { lang: 'English', text: 'Hello!' },
      { lang: 'Deutsch', text: 'Hallo!' },
      { lang: 'Français', text: 'Bonjour!' },
      { lang: 'Español', text: '¡Hola!' },
      { lang: 'Русский', text: 'Привет!' },
      { lang: 'Azərbaycan', text: 'Salam!' },
    ],
    funKeyword: 'Eğlenceli',
  },
  mission: {
    eyebrow: mission.eyebrow,
    title: mission.title,
    offeredLanguages: mission.offeredLanguages.map(({ id, name, nativeName }) => ({
      id,
      name,
      nativeName,
    })),
  },
  features: {
    eyebrow: 'Neden Hurra Lingo?',
    title: 'Hurra Lingo ile Dil Öğrenmenin Avantajları',
    items: features.map(({ id, title, description }) => ({ id, title, description })),
  },
  ageGroups: {
    eyebrow: ageGroups.eyebrow,
    subtitle: ageGroups.subtitle,
    groups: ageGroups.groups.map(({ id, title, subtitle, description }) => ({
      id,
      title,
      subtitle,
      description,
    })),
  },
  cefrLevels: {
    eyebrow: cefrLevels.eyebrow,
    title: cefrLevels.title,
    video: { label: cefrLevels.video.label },
    levels: cefrLevels.levels.map(({ id, title, content }) => ({
      id,
      title,
      content,
    })),
  },
  testimonials: {
    eyebrow: testimonials.eyebrow,
    title: testimonials.title,
    subtitle: 'Velilerimizin ve öğrencilerimizin gerçek deneyimleri.',
    items: testimonials.items.map(({ id, name, lang, text }) => ({
      id,
      name,
      lang,
      text,
    })),
  },
  teachers: {
    eyebrow: teachers.eyebrow,
    title: teachers.title,
    cta: teachers.cta,
    items: teachers.items.map(({ id, name, role, highlights }) => ({
      id,
      name,
      role,
      highlights,
    })),
  },
  blog: {
    eyebrow: blog.eyebrow,
    title: blog.title,
    description: blog.description,
    cta: blog.cta,
    items: blog.items.map(({ id, category, readTime, title, excerpt }) => ({
      id,
      category,
      readTime,
      title,
      excerpt,
    })),
  },
  gallery,
  ctaBands,
})

writeJson('education', educationPage)
writeJson('lessons', lessonsPage)
writeJson('faq', faqPage.faqPage ?? faqPage)
writeJson('pricing', pricingPage.pricingPage ?? pricingPage)
writeJson('certification', certificationPage.certificationPage ?? certificationPage)
writeJson('references', {
  hero: referencesPage.referencesPage.hero,
  videos: {
    eyebrow: referencesPage.referencesPage.videos.eyebrow,
    title: referencesPage.referencesPage.videos.title,
    subtitle: referencesPage.referencesPage.videos.subtitle,
    watchVideo: 'videosunu izle',
    stats: {
      videoCount: '{{count}} video yorum',
      realExperiences: 'Gerçek veli deneyimleri',
      writtenFeedback:
        '{{count}} yazılı geri bildirimle birlikte Hurra Lingo’yu keşfedin.',
    },
  },
  reviews: referencesPage.referencesPage.reviews,
})

const tp = teachersPage.teachersPage ?? teachersPage
writeJson('teachers', {
  hero: tp.hero,
  showAllLabel: tp.showAllLabel,
  showLessLabel: tp.showLessLabel,
  groups: tp.groups.map(({ id, label, role, teachers: groupTeachers }) => ({
    id,
    label,
    role,
    teachers: groupTeachers.map(({ name, highlights }) => ({
      name,
      highlights,
    })),
  })),
  career: tp.career,
})

writeJson('cookie', {
  aria: { dialog: 'Çerez tercihleri', closePreferences: 'Tercih panelini kapat' },
  preferences: {
    title: 'Çerez Tercihleri',
    description: 'Hangi çerez kategorilerine izin vermek istediğinizi seçin.',
    required: {
      label: 'Zorunlu Çerezler',
      description: 'Sitenin temel işlevleri için gereklidir ve kapatılamaz.',
    },
    analytics: {
      label: 'Analitik Çerezler',
      description:
        'Ziyaret istatistiklerini anlamamıza ve siteyi geliştirmemize yardımcı olur.',
    },
    marketing: {
      label: 'Pazarlama Çerezleri',
      description:
        'Kişiselleştirilmiş içerik ve reklam deneyimi sunmak için kullanılır.',
    },
    save: 'Tercihleri Kaydet',
    acceptAll: 'Tümünü Kabul Et',
  },
  banner: {
    title: 'Çerez Kullanımı',
    description:
      'Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Zorunlu çerezler siteyi çalıştırmak için gereklidir. Analitik ve pazarlama çerezleri için tercihinizi belirleyebilirsiniz.',
    privacyPolicy: 'Gizlilik Politikası',
    accept: 'Kabul Et',
    reject: 'Reddet',
    manage: 'Tercihleri Yönet',
  },
})

writeJson('chatbot', {
  aria: {
    dialog: 'Hurra Lingo sohbet asistanı',
    close: 'Sohbeti kapat',
    send: 'Mesaj gönder',
    open: 'Sohbeti aç',
  },
  title: 'Hurra Lingo Asistan',
  status: 'Çevrimiçi',
  greeting: 'Merhaba! Ben Hurra Lingo asistanıyım. Size nasıl yardımcı olabilirim?',
  placeholder: 'Mesajınızı yazın...',
  comingSoon: 'Sohbet özelliği yakında aktif olacak.',
  quickReplies: [
    'Ders programı hakkında bilgi',
    'Ücretsiz deneme',
    'Fiyat bilgisi',
  ],
})

writeJson('payment', {
  billing: {
    title: 'Fatura Bilgileri',
    name: 'Ad Soyad',
    email: 'E-posta',
    phone: 'Telefon',
    address: 'Adres',
    city: 'Şehir',
    country: 'Ülke',
  },
  checkout: {
    processing: 'Ödeme işleniyor...',
    pay: 'Ödemeyi Tamamla',
    mockPay: 'Test Ödemesini Tamamla',
    secure: 'Ödemeniz güvenli altyapı ile alınır.',
    error: 'Ödeme sırasında bir hata oluştu. Lütfen tekrar deneyin.',
  },
})

console.log('TR locale files written to', trDir)
