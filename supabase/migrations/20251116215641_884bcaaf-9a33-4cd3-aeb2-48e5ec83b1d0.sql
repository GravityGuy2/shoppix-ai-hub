-- Add INSERT policy for orders table
CREATE POLICY "Users can create their own orders"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Add UPDATE policy for orders table (allow updates to pending orders only)
CREATE POLICY "Users can update their pending orders"
ON public.orders
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id AND status = 'pending')
WITH CHECK (auth.uid() = user_id);

-- Add INSERT policy for order_items table
CREATE POLICY "Users can add items to their orders"
ON public.order_items
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.orders
    WHERE orders.id = order_items.order_id
    AND orders.user_id = auth.uid()
  )
);