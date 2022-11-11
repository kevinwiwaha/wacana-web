// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {supabase} = require('../service/supabase.js') 
const {useState} = require('react')
export default function handler(req, res) {
    supabase.from('links').select().then(e => {
        res.status(200).json(e)
    }).catch(e => console.log(e))
    
}
