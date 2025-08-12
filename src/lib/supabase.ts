
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://puwbmsavutwyeeryaskd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1d2Jtc2F2dXR3eWVlcnlhc2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTgyNTYsImV4cCI6MjA3MDU5NDI1Nn0.ds3Pv-SnxNOrXQfOIFtZ_1I_n5un443VoKt-aIMBroY'

export const supabase = createClient(supabaseUrl, supabaseKey)