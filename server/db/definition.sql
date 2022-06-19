ALTER TABLE brews ALTER COLUMN created_at TYPE timestamp without time zone using to_timestamp(created_at) AT TIME ZONE 'UTC';
ALTER TABLE brews ALTER COLUMN created_at SET DEFAULT NOW();

ALTER TABLE brews ALTER COLUMN updated_at TYPE timestamp without time zone using to_timestamp(updated_at) AT TIME ZONE 'UTC';
ALTER TABLE brews ALTER COLUMN updated_at SET DEFAULT NOW();