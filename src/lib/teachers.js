export const INITIAL_TEACHERS_VISIBLE = 3

export function getOrderedTeachers(teachers) {
  const foreign = teachers.filter((teacher) => teacher.isForeign)
  const local = teachers.filter((teacher) => !teacher.isForeign)
  return [...foreign, ...local]
}

export function getVisibleTeachers(teachers, expanded) {
  const ordered = getOrderedTeachers(teachers)
  return expanded ? ordered : ordered.slice(0, INITIAL_TEACHERS_VISIBLE)
}

export function getTeacherHighlights(teacher, role) {
  if (teacher.highlights?.length) return teacher.highlights

  const language = role?.replace(' Öğretmeni', '') ?? 'Dil'

  if (teacher.isForeign) {
    return [
      `Anadili ${language}`,
      'Uluslararası eğitim deneyimi',
      'Yüksek öğrenci memnuniyeti',
    ]
  }

  return [
    'Sertifikalı eğitmen',
    'CEFR uyumlu müfredat',
    'Kişiselleştirilmiş ders planı',
  ]
}
