import fs from 'fs'
import os from 'os'
import path from 'path'

const htmlPath = path.join(os.tmpdir(), 'teachers.html')
const html = fs.readFileSync(htmlPath, 'utf8')

const videoBlocks = [...html.matchAll(
  /youtube_url&quot;:&quot;(https:\\\/\\\/www\.youtube\.com\\\/watch\?v=([A-Za-z0-9_-]+))&quot;[\s\S]*?image_overlay&quot;:\{&quot;url&quot;:&quot;https:\\\/\\\/www\.hurralingo\.com\\\/wp-content\\\/uploads\\\/[^&]+&quot;[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>/g,
)]

const results = videoBlocks.map((match) => ({
  name: match[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
  videoId: match[2],
  url: `https://www.youtube.com/watch?v=${match[2]}`,
}))

console.log(JSON.stringify(results, null, 2))
console.log('Total:', results.length)
