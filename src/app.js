let catalog = [];
let cart = JSON.parse(localStorage.getItem("fm-cart") || "[]");

const money = (n, c = "PKR") => c + " " + Number(n).toLocaleString();

function saveCart() {
  localStorage.setItem("fm-cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const root = document.querySelector("#cart-items");
  const total = document.querySelector("#cart-total");
  if (!root || !total) return;
  const totalValue = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  total.textContent = money(totalValue);
  root.innerHTML = cart.length
    ? cart.map(item => '<article class="card"><h3>' + item.name + '</h3><p>' + money(item.price, item.currency) + ' × <strong>' + item.qty + '</strong></p><div class="quantity-controls"><button type="button" data-dec="' + item.id + '" aria-label="Decrease ' + item.name + ' quantity">−</button><span>' + item.qty + '</span><button type="button" data-inc="' + item.id + '" aria-label="Increase ' + item.name + ' quantity">+</button><button type="button" data-remove="' + item.id + '">Remove</button></div></article>').join("")
    : "<p>Your cart is empty.</p>";

  root.querySelectorAll("[data-dec]").forEach(button => button.addEventListener("click", () => changeQty(button.dataset.dec, -1)));
  root.querySelectorAll("[data-inc]").forEach(button => button.addEventListener("click", () => changeQty(button.dataset.inc, 1)));
  root.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => {
    cart = cart.filter(item => item.id !== button.dataset.remove);
    saveCart();
  }));
}

function changeQty(id, delta) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty = Math.max(0, Math.min(item.qty + delta, Number(item.stock) || 0));
  if (item.qty === 0) cart = cart.filter(entry => entry.id !== id);
  saveCart();
}

function addToCart(product) {
  if (!product || Number(product.stock) < 1) return;
  const found = cart.find(item => item.id === product.id);
  if (found) found.qty = Math.min(found.qty + 1, Number(product.stock));
  else cart.push({ ...product, qty: 1 });
  saveCart();
}

function renderCatalog() {
  const root = document.querySelector("#product-grid");
  if (!root) return;
  const query = (document.querySelector("#search")?.value || "").toLowerCase();
  const category = document.querySelector("#category")?.value || "";
  const items = catalog.filter(product =>
    (!category || product.category === category) &&
    (!query || [product.name, product.category, product.slug].join(" ").toLowerCase().includes(query))
  );
  root.innerHTML = items.map(product =>
    '<article class="card"><h3>' + product.name + '</h3><p class="muted">' +
    product.category + ' · Stock ' + product.stock + '</p><p class="price">' +
    money(product.price, product.currency) + '</p><button data-add="' + product.id + '" ' +
    (Number(product.stock) < 1 ? "disabled" : "") + '>Add to cart</button></article>'
  ).join("") || "<p>No matching products.</p>";
  root.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(catalog.find(p => p.id === button.dataset.add)));
  });
}

async function load() {
  const root = document.querySelector("#product-grid");
  if (!root) return;
  root.textContent = "Loading…";
  try {
    const response = await fetch("/api/products", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("API " + response.status);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("Invalid catalog");
    catalog = data.filter(product => product && product.active !== false);
    const select = document.querySelector("#category");
    const categories = [...new Set(catalog.map(product => product.category).filter(Boolean))].sort();
    if (select) {
      select.innerHTML = '<option value="">All categories</option>';
      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
      });
    }
    renderCatalog();
  } catch {
    root.textContent = "Catalog unavailable. Check the store API.";
  }
}

document.querySelector("#refresh")?.addEventListener("click", load);
document.querySelector("#search")?.addEventListener("input", renderCatalog);
document.querySelector("#category")?.addEventListener("change", renderCatalog);
document.querySelector("#clear-cart")?.addEventListener("click", () => { cart = []; saveCart(); });
document.querySelector("#checkout")?.addEventListener("click", () => {
  alert("Checkout will activate after a payment provider and human approval are configured.");
});

const aiForm = document.querySelector("#ai-chat");
if (aiForm) {
  const aiMessages = document.querySelector("#ai-messages");
  const aiInput = document.querySelector("#ai-input");
  function aiAdd(text, role) {
    const el = document.createElement("div");
    el.className = "ai-msg " + role;
    el.textContent = text;
    aiMessages.appendChild(el);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }
  aiForm.addEventListener("submit", async event => {
    event.preventDefault();
    const message = aiInput.value.trim();
    if (!message) return;
    aiAdd(message, "user");
    aiInput.value = "";
    const button = aiForm.querySelector("button");
    button.disabled = true;
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "content-type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "AI unavailable");
      aiAdd(data.reply || "No response returned.", "assistant");
    } catch {
      aiAdd("FM AI is temporarily unavailable. Please try again.", "assistant");
    } finally {
      button.disabled = false;
      aiInput.focus();
    }
  });
}

renderCart();
load();
