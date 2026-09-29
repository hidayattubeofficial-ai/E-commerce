async function load(){
  const root=document.querySelector("#product-grid");
  root.textContent="Loading…";
  try{
    const r=await fetch("/api/products");
    if(!r.ok) throw new Error("API "+r.status);
    const items=await r.json();
    root.innerHTML=items.map(p=>`<article class="card"><h3>${p.name}</h3><p class="muted">${p.category} · Stock ${p.stock}</p><p class="price">${p.currency} ${Number(p.price).toLocaleString()}</p></article>`).join("")||"<p>No products yet.</p>";
  }catch(e){
    root.textContent="Catalog unavailable. Check the local API.";
  }
}
document.querySelector("#refresh").addEventListener("click",load);
load();
