/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text) - Contact's phone number
      - `business_type` (text) - Type of business (e.g., tradies, service business)
      - `message` (text) - Additional message or details from the contact
      - `created_at` (timestamptz) - Timestamp when the submission was created
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert submissions (for public form submissions)
    - Add policy for authenticated admin users to read all submissions
  
  3. Important Notes
    - This table stores contact form submissions from the website
    - RLS is enabled to protect submission data
    - Public users can submit through the application (using service role or anon key with proper policy)
    - Default values are set for timestamps
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_type text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all submissions (for admin dashboard)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
