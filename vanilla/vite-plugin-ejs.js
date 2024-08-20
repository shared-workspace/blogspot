import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

export default function ejsPlugin() {
  return {
    name: 'vite-plugin-ejs',
    transformIndexHtml(html) {
      const templatePath = path.resolve(__dirname, 'src/index.ejs');
      const template = fs.readFileSync(templatePath, 'utf-8');
      return ejs.render(template, { html });
    }
  };
}