import { createClient } from '@supabase/supabase-js';
import { PROJECTS } from '../src/data/portfolioData';

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.',
  );
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function seedProjects() {
  const rows = PROJECTS.map((project, index) => {
    const {
      id,
      title,
      category,
      filterGroup,
      ...projectData
    } = project;

    return {
      id,
      title,
      category,
      filter_group: filterGroup,
      project_data: projectData,
      is_published: true,
      sort_order: index,
    };
  });

  const { error } = await supabase
    .from('projects')
    .upsert(rows, { onConflict: 'id' });

  if (error) {
    throw error;
  }

  console.log(
    `Successfully synced ${rows.length} projects to Supabase.`,
  );
}

seedProjects().catch((error) => {
  console.error('Failed to seed projects:', error);
  process.exitCode = 1;
});