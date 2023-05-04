import { readFile } from 'node:fs/promises'
import { brotliDecompressSync } from 'node:zlib'

const buffer = await readFile(`./index.mjs.br`)
console.log({ buffer })
const source = await brotliDecompressSync(buffer)
console.log({ source })
