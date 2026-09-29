export function requireAdminRole(request) {
  const email = request.headers.get('CF-Access-Authenticated-User-Email');
  const role = request.headers.get('X-FM-Admin-Role');
  if (!email || role !== 'admin') return new Response(JSON.stringify({ok:false,error:'Admin role required'}), {status:403,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
  return null;
}
