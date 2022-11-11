// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const supabase = require('@supabase/supabase-js')
export default function handler(req, res) {
  supabase.from('countries').select()
  res.status(200).json({ name: 'John Doe' })
}
