export type Role = 'clinician' | 'admin' | 'researcher';

export interface User {
  id: string;
  role: Role;
}

/** Clinicians and admins may read records. Researchers may read only consented records. */
export function canRead(user: User, consentToResearch: boolean): boolean {
  if (user.role === 'clinician' || user.role === 'admin') return true;
  return user.role === 'researcher' && consentToResearch;
}

export function canUpdate(user: User): boolean {
  return user.role === 'clinician';
}
