Use the composables/ directory to auto-import your Vue composables into your application.

*composables/useFoo.ts*

export const useFoo = () => {
  return useState('foo', () => 'bar')
}

Usage: You can now use auto imported composable in .js, .ts and .vue files
