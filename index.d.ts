import { Plugin } from 'vite';

declare const eslintPlugin: (options?: {
    include?: string[];
    exclude?: (string | RegExp)[];
}) => Plugin;

export default eslintPlugin;
