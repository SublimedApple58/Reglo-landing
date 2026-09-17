/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Tema azzerato: i token del nuovo design vanno definiti qui quando
    // arriva l'HTML approvato. Vecchia palette/ombre/animazioni: commit 23ef4f0.
    extend: {},
  },
  plugins: [],
};
