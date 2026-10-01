CREATE TABLE IF NOT EXISTS orders (
  tx_ref TEXT PRIMARY KEY,
  amount INTEGER NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL CHECK (currency = 'UGX'),
  status TEXT NOT NULL CHECK (status IN ('pending', 'successful', 'failed')),
  network TEXT NOT NULL CHECK (network IN ('MTN', 'AIRTEL')),
  buyer_name TEXT NOT NULL,
  buyer_email TEXT NOT NULL,
  buyer_phone TEXT NOT NULL,
  items_json TEXT NOT NULL,
  flutterwave_transaction_id INTEGER UNIQUE,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS orders_status_created_idx
  ON orders (status, created_at);
