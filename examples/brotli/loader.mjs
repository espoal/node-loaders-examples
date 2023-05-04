import { readFile } from 'node:fs/promises'
import { brotliDecompressSync } from 'node:zlib'

export function resolve(specifier, context, nextResolve) {
    const { parentURL = null } = context;

    // Normally Node.js would error on specifiers starting with 'https://', so
    // this hook intercepts them and converts them into absolute URLs to be
    // passed along to the later hooks below.
    if (specifier.endsWith('.mjs.br')) {
        console.log({ specifier,context })
        return {
            shortCircuit: true,
            url: `file:///home/mamluk/Projects/generic/loader-example/brotli/index.mjs.br`,
        };
    }

    // Let Node.js handle all other specifiers.
    return nextResolve(specifier);
}

export async function load(url, context, nextLoad) {
    // For JavaScript to be loaded over the network, we need to fetch and
    // return it.
    if (url.endsWith('.mjs.br')) {
        return new Promise(async (resolve, reject) => {

            console.log({ url })

            const buffer = await readFile( `/home/mamluk/Projects/generic/loader-example/brotli/index.mjs.br`)
            const source = await brotliDecompressSync(buffer)

            resolve({
                format: 'module',
                shortCircuit: true,
                source,
            })
        });
    }

    // Let Node.js handle all other URLs.
    return nextLoad(url);
}
