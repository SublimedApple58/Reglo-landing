// Porta la classe `Component extends DCLogic` del design in un componente
// React. DCLogic espone la stessa API di React.Component (state, setState,
// componentDidMount/DidUpdate/WillUnmount), quindi il corpo passa verbatim:
// l'unica aggiunta è render(), che il runtime forniva dall'esterno.
import fs from 'node:fs';
import path from 'node:path';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const raw = fs.readFileSync(path.join(REPO, 'design-reference/sito-finale-v1.html'), 'utf8');
const lines = raw.split('\n');

// lo script dc va da <script type="text/x-dc"> fino a </script>
const start = lines.findIndex((l) => l.includes('data-dc-script'));
const end = lines.length - 1 - [...lines].reverse().findIndex((l) => l.trim() === '</script>');
let body = lines.slice(start + 1, end).join('\n');

const HEADER = 'class Component extends DCLogic {';
if (!body.includes(HEADER)) throw new Error('intestazione della classe non trovata');

// viste generate -> import + catena di render
const viewsDir = path.join(REPO, 'src/site/generated/views');
const views = fs.readdirSync(viewsDir).map((f) => f.replace(/\.tsx$/, ''));
const condOf = JSON.parse(fs.readFileSync(path.join(REPO, 'src/site/generated/conditions.json'), 'utf8'));

const imports = views.map((n) => `import ${n} from './generated/views/${n}';`).join('\n');
const chain = condOf.map(({ name, cond }) => `        {v.${cond} ? ${name}(v) : null}`).join('\n');

body = body.replace(HEADER, 'class RegloSite extends React.Component<Record<string, never>, any> {');

const out = `// @ts-nocheck
/* eslint-disable */
/**
 * Porting fedele della logica di design-reference/sito-finale-v1.html.
 *
 * Il corpo della classe è quello originale, invariato: DCLogic espone la
 * stessa API di React.Component, quindi state / setState / lifecycle
 * funzionano identici. L'unica aggiunta è render(), che nel runtime dc
 * veniva fornito dall'esterno compilando il template.
 *
 * Non modificare a mano per cambiare il design: la fonte di verità resta
 * il file di riferimento. Questo file verrà sostituito da componenti veri
 * nella fase di componentizzazione.
 */
import React from 'react';
${imports}

${body.trimEnd().replace(/\}\s*$/, '')}
  render() {
    const v = this.renderVals();
    return (
      <>
${chain}
      </>
    );
  }
}

export default RegloSite;
`;

fs.writeFileSync(path.join(REPO, 'src/site/RegloSite.tsx'), out);
console.log('logic portata: ' + body.split('\n').length + ' righe, ' + views.length + ' viste');
