import { env } from './config/env.ts';

console.log(`[backend-template] starting in "${env.nodeEnv}" mode`);
console.log(`[backend-template] configured port: ${env.port}`);
console.log(
  '[backend-template] environment loaded successfully — ready for Lesson 4 (HTTP server).',
);
