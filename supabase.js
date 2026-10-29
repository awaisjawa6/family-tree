
(() => {
  const SUPABASE_URL = "https://mwtpxlelqtlpwcmfqvmp.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WIJzdU1h4RdY4LgSitNLrA_Qbq8XPAp";
  const FAMILY_TREE_ADMIN_UID = "56877056-8ce4-4d0c-bbeb-537d3651968e";

  window.FAMILY_TREE_ADMIN_UID = FAMILY_TREE_ADMIN_UID;

  window.familyTreeSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
})();
