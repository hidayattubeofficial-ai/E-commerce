import products from "../../data/products.json";
export async function onRequestGet(){return new Response(JSON.stringify(products.filter(p=>p.active)),{headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})}
