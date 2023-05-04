console.log(`module-b: ${import.meta.url}`)

await import(`./module-c.mjs`)
