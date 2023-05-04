import './src/module-a.mjs'
console.log(`loading index.mjs`)

await import(`./src/module-b.mjs`)
