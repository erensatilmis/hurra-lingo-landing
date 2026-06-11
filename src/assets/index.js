import logoLingo from './logo_lingo.png'
import hurraLingoKids from './brand/hurra-lingo-kids.png'
import english from './languages/english.svg'
import german from './languages/german.svg'
import french from './languages/french.svg'
import spanish from './languages/spanish.svg'
import russian from './languages/russian.svg'
import chinese from './languages/chinese.svg'
import turkish from './languages/turkish.svg'
import azerbaijani from './languages/azerbaijani.svg'

const teacherPhotoModules = import.meta.glob('./teachers/*.{jpg,png,jpeg,JPG,PNG}', {
  eager: true,
  import: 'default',
})

export const teacherPhotoMap = Object.fromEntries(
  Object.entries(teacherPhotoModules).map(([path, url]) => {
    const slug = path.split('/').pop().replace(/\.(jpg|png|jpeg)$/i, '')
    return [slug, url]
  }),
)

export function getTeacherPhoto(slug) {
  return slug ? teacherPhotoMap[slug] ?? null : null
}

export const languageFlagByCode = {
  TR: turkish,
  EN: english,
  DE: german,
  AZ: azerbaijani,
}

export const assets = {
  logo: logoLingo,
  hurraLingoKids,
  heroIllustration: null,
  missionDecor: [],
  languageFlags: [turkish, english, german, french, spanish, russian, chinese],
  teacherPhotos: [
    getTeacherPhoto('adeniyi-peace'),
    getTeacherPhoto('busra-agca'),
    getTeacherPhoto('sibel-bulut'),
  ],
  blogCovers: [null, null, null, null, null, null],
  galleryImages: [null, null, null, null],
}
