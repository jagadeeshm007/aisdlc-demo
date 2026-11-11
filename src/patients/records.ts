import { readFileSync } from 'node:fs';
import { canRead, canUpdate, type User } from '../auth/access.ts';
import { recordUpdate } from '../audit/log.ts';

export interface PatientRecord {
  id: string;
  displayName: string;
  conditions: string[];
  consentToResearch: boolean;
}

const records = new Map<string, PatientRecord>(
  (JSON.parse(readFileSync(new URL('../data/synthetic-patients.json', import.meta.url), 'utf8')) as PatientRecord[]).map((r) => [r.id, r]),
);

export function getRecord(user: User, id: string): PatientRecord | null {
  const r = records.get(id);
  if (!r || !canRead(user, r.consentToResearch)) return null;
  return r;
}

export function updateConditions(user: User, id: string, conditions: string[]): boolean {
  const r = records.get(id);
  if (!r || !canUpdate(user)) return false;
  r.conditions = conditions;
  recordUpdate(user.id, id);
  return true;
}
