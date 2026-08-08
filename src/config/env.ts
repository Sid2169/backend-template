import process from 'node:process';

function readEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function readEnvNumber(name: string, fallback: number): number {
  const raw = process.env[name];

  if (raw === undefined) {
    return fallback;
  }

  const parsed = Number(raw);

  if (Number.isNaN(parsed)) {
    throw new Error(`Environment variable ${name} must be a number, received: "${raw}"`);
  }

  return parsed;
}

export const env = {
  nodeEnv: readEnv('NODE_ENV', 'development'),
  port: readEnvNumber('PORT', 3000),
} as const;
