/**
 * Kill the process listening on a port (Windows-friendly).
 * Usage: node scripts/kill-port.mjs 3000
 */
import { execSync } from 'node:child_process';

const port = process.argv[2] || '3000';

try {
  const out = execSync(`netstat -ano | findstr ":${port}"`, { encoding: 'utf8' });
  const pids = new Set();

  for (const line of out.split('\n')) {
    if (!line.includes('LISTENING')) continue;
    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];
    if (pid && pid !== '0') pids.add(pid);
  }

  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
      console.log(`Stopped process ${pid} on port ${port}`);
    } catch {
      /* already gone */
    }
  }

  if (pids.size === 0) console.log(`No listener on port ${port}`);
} catch {
  console.log(`No listener on port ${port}`);
}
