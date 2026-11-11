export interface AuditEntry {
  at: string;
  userId: string;
  action: 'update';
  recordId: string;
}

const entries: AuditEntry[] = [];

/** Records updates. Reads are not recorded yet. */
export function recordUpdate(userId: string, recordId: string): void {
  entries.push({ at: new Date().toISOString(), userId, action: 'update', recordId });
}

export function auditEntries(): readonly AuditEntry[] {
  return entries;
}
