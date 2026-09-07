import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
    ...nextCoreWebVitals,
    ...nextTypescript,
    globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts']),
    {
        // next.config.js sets images.unoptimized, so next/image adds nothing here.
        rules: { '@next/next/no-img-element': 'off' },
    },
]);
