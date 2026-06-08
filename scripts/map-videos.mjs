import fs from 'fs'
import os from 'os'
import path from 'path'

const html = fs.readFileSync(path.join(os.tmpdir(), 'teachers.html'), 'utf8')
const videoRe =
  /youtube_url&quot;:&quot;https:\\\/\\\/www\.youtube\.com\\\/watch\?v=([A-Za-z0-9_-]+)/g

const ids = [...html.matchAll(videoRe)].map((m) => m[1])
const map = {}

for (const id of ids) {
  const idx = html.indexOf(id)
  const before = html.slice(Math.max(0, idx - 2500), idx)
  const after = html.slice(idx, idx + 2500)
  const namesBefore = [...before.matchAll(/<strong>([^<]+)<\/strong>/g)].map((m) =>
    m[1].trim(),
  )
  const namesAfter = [...after.matchAll(/<strong>([^<]+)<\/strong>/g)].map((m) =>
    m[1].trim(),
  )
  map[id] = namesAfter[0] || namesBefore[namesBefore.length - 1] || null
}

console.log(JSON.stringify(map, null, 2))
