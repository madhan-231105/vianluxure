import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const nextDir = join(root, '.next');

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true, maxRetries: 8, retryDelay: 250 });
  console.log('Removed .next/');
} else {
  console.log('.next/ already absent');
}
