import '@/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';
 
export default defineConfig({
  schema: './src/app/lib/drizzle.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString:process.env.POSTGRES_URL,
  },
});