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
    ? cart.map(item => '<article class="card"><h3>' + item.name + '</h3><p>' + money(item.price, item.currency) + ' × <strong>' + item.qty + '</strong></p><button data-remove="' + item.id + '">Remove</button></article>').join("")
    : "<p>Your cart is empty.</p>";
  root.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      cart = cart.filter(item => item.id !== button.dataset.remove);
      saveCart();
    });
  });
}

function addToCart(product) {
  if (!product || product.stock < 1) return;
  const found = cart.find(item => item.id === product.id);
  if (found) found.qty = Math.min(found.qty + 1, product.stock);
  else cart.push({ ...product, qty: 1 });
  saveCart();
}

function renderCatalog() {
  const root = document.querySelector("#product-grid");
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
    (product.stock < 1 ? "disabled" : "") + '>Add to cart</button></article>'
  ).join("") || "<p>No matching products.</p>";
  root.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(catalog.find(p => p.id === button.dataset.add)));
  });
}

async function load() {
  const root = document.querySelector("#product-grid");
  root.textContent = "Loading…";
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("API " + response.status);
    catalog = await response.json();
    const select = document.querySelector("#category");
    const categories = [...new Set(catalog.map(product => product.category))].sort();
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
        headers: { "content-type": "application/json" },
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
