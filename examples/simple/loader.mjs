// https-loader.mjs
import { get } from 'node:https';

export function resolve(specifier, context, nextResolve) {
    console.log({ specifier })
    return nextResolve(specifier);
}

export function load(url, context, nextLoad) {
    console.log({ url })

    // Let Node.js handle all other URLs.
    return nextLoad(url);
} 
