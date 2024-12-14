import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // @ts-expect-error
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
