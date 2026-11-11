# Synthetic health app (test target)

A deliberately small patient-records service used to test the AI SDLC suite. **All data is synthetic.** No real people, identifiers or health information appear anywhere in this directory.

- `src/patients/records.ts`: in-memory record store with read and update functions
- `src/auth/access.ts`: role-based access check
- `src/audit/log.ts`: audit logger (currently records updates only, not reads)
