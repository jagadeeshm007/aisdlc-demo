import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canRead } from '../src/auth/access.ts';

test('test harness loads TypeScript sources', () => {
  assert.equal(canRead({ id: 'u1', role: 'clinician' }, false), true);
});
