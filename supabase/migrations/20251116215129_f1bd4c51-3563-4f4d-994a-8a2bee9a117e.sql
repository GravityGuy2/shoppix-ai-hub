-- Update default currency to NGN (Nigerian Naira)
ALTER TABLE public.orders ALTER COLUMN currency SET DEFAULT 'NGN';