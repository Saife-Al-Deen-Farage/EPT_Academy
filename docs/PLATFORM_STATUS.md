# EPT Academy platform setup

## Frontend environment
Set these variables in the hosting provider's project settings (not in committed source files):

- `VITE_SUPABASE_URL`: the Supabase project URL.
- `VITE_SUPABASE_PUBLISHABLE_KEY`: the Supabase publishable/anon key.

Never put a Supabase `service_role` key or database password in a Vite variable or browser code. Variables prefixed with `VITE_` are exposed to visitors.

## Current implementation status
- Supabase JS dependency and browser client foundation are present.
- Student auth helper functions are present for sign-up, sign-in, profile lookup, sign-out, and access-code redemption.
- The existing public marketing site and localStorage-based admin dashboard still exist. They have not yet been fully migrated to database-backed operations.
- Production deployment, build verification, and end-to-end student/admin testing are not yet confirmed.

## Required before launch
1. Configure the two public environment variables in the hosting provider.
2. Apply and review the Supabase schema/migrations in the target project.
3. Provision the first administrator through a trusted, owner-controlled process. Do not make a user an administrator merely because their email matches a configured address.
4. Replace/disable the legacy demo admin login before exposing the admin dashboard publicly.
5. Test sign-up, email confirmation settings, sign-in, pending account restrictions, code redemption, RLS policies, and sign-out using test accounts.
6. Configure SPA fallback / routing and run the production build in CI.
7. Re-run Supabase Security Advisor and address findings before storing real student records.

## Student access codes
The database redemption function expects the stored `code_hash` to be the lowercase hex SHA-256 digest of the UTF-8 bytes of the uppercased, trimmed access code. Raw access codes should not be stored in the database. Codes should be high-entropy, rate-limited, optionally bound to email/phone, expiry-limited, and usage-limited.

## Release gate
Do not use this platform for real student data, fees, exam answers, or certificate issuance until the admin authentication and all data operations are server-authorized and verified end to end.
