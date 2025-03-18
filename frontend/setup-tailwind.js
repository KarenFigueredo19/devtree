// setup-tailwind.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual (porque estamos usando ES Modules)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Crear tailwind.config.ts
const tailwindConfigContent = `import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;`;

fs.writeFileSync(path.join(__dirname, 'tailwind.config.ts'), tailwindConfigContent);
console.log('tailwind.config.ts creado correctamente.');

// Crear postcss.config.ts
const postcssConfigContent = `import type { Config } from 'postcss-load-config';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
} satisfies Config;`;

fs.writeFileSync(path.join(__dirname, 'postcss.config.ts'), postcssConfigContent);
console.log('postcss.config.ts creado correctamente.');

// Crear src/input.css
const inputCssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const srcDir = path.join(__dirname, 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

fs.writeFileSync(path.join(srcDir, 'input.css'), inputCssContent);
console.log('src/input.css creado correctamente.');