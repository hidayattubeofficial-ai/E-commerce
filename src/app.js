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


const aiForm=document.querySelector("#ai-chat");
if(aiForm){
  const aiMessages=document.querySelector("#ai-messages");
  const aiInput=document.querySelector("#ai-input");
  function aiAdd(text,role){
    const el=document.createElement("div"); el.className="ai-msg "+role; el.textContent=text;
    aiMessages.appendChild(el); aiMessages.scrollTop=aiMessages.scrollHeight;
  }
  aiForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const message=aiInput.value.trim(); if(!message)return;
    aiAdd(message,"user"); aiInput.value="";
    const button=aiForm.querySelector("button"); button.disabled=true;
    try{
      const r=await fetch("/api/ai",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({message})});
      const data=await r.json().catch(()=>({}));
      if(!r.ok||!data.ok)throw new Error(data.error||"AI unavailable");
      aiAdd(data.reply||"No response returned.","assistant");
    }catch(err){aiAdd("FM AI is temporarily unavailable. Please try again.","assistant");}
    finally{button.disabled=false;aiInput.focus();}
  });
}
