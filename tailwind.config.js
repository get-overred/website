import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve(
    '@skeletonlabs/skeleton'),
    '../**/*.{html,js,svelte,ts}'
  )],
  theme: {
    extend: {
      colors: {
        'overred-red': '#f75e50',
        'overred-variant-blue': '#032b42',
        'overred-text-blue': '#08496d',
        'overred-accent-blue': '#3392ff',
        'background': '#f9f8f7',

        // Shadow:
        'overred-shadow-yellow': '#fce153',
        'overred-shadow-orange': '#fe9446',
        'overred-shadow-pink': '#b32df6',
      },
      boxShadow: {
        // ([horizontal offset] [vertical offset] [blur radius] [color, opacity] [spread radius] [color, opacity])
        'centered-sm': '0 0 10px 2px rgb(0 0 0 / 0.1), 0 0 5px 1px rgb(0 0 0 / 0.1)',
        'centered-md': '0 0 15px 2px rgb(0 0 0 / 0.1), 0 0 5px 1px rgb(0 0 0 / 0.1)',
        'centered-lg': '0 0 20px 2px rgb(0 0 0 / 0.1), 0 0 10px 1px rgb(0 0 0 / 0.1)',
        'centered-xl': '0 0 25px 2px rgb(0 0 0 / 0.1), 0 0 15px 1px rgb(0 0 0 / 0.1)',
        'centered-2xl': '0 0 30px 2px rgb(0 0 0 / 0.1), 0 0 20px 1px rgb(0 0 0 / 0.1)',
      }
    }
  },
  plugins: [skeleton]
};