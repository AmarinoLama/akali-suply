/* ============================================================
   Akali — lógica de la tienda
   ------------------------------------------------------------
   ⚠️  CONFIGURA TU NÚMERO DE WHATSAPP AQUÍ ABAJO
   Formato: prefijo de país + número, sin "+", sin espacios.
   Ejemplo España: "34612345678"
   ============================================================ */

const CONFIG = {
  whatsappNumber: "34612478437", // +34 612 47 84 37
  brand: "Akali Suply",
  cartKey: "akali-cart-v1",
};

/* ---------- Catálogo ---------- */

const CATEGORY_LABELS = {
  dados: "Dados",
  deckboxes: "Deckboxes",
  fundas: "Fundas",
  tapetes: "Tapetes",
};

const PRODUCTS = [
  {
    id: "fundas-negras",
    name: "Fundas negras · 100",
    cat: "fundas",
    price: 5,
    img: "assets/p-fundas-negras.svg",
    desc: "Mate, opacas y con la sensación de siempre. El negro clásico de Liliana.",
    badge: "Precio top",
    badgeType: "value",
  },
  {
    id: "fundas-color",
    name: "Fundas de color · 100",
    cat: "fundas",
    price: 6,
    img: "assets/p-fundas-color.svg",
    desc: "Seis tonos para que tu mazo se reconozca desde la otra punta de la mesa.",
    badge: "6 colores",
    colors: ["#ff8fb8", "#7ee7ff", "#a9f7a4", "#ffe07a", "#c3a4ff", "#ff7a6b"],
  },
  {
    id: "dado-d20",
    name: "D20 · unidad",
    cat: "dados",
    price: 2,
    unit: true,
    img: "assets/p-dado-d20.svg",
    desc: "Veinte caras, colores surtidos y ese golpe seco que se nota al tirar.",
    badge: "2 €/ud",
  },
  {
    id: "dados-mtg",
    name: "Dados MTG +1/+1 · unidad",
    cat: "dados",
    price: 1.5,
    unit: true,
    img: "assets/p-dados-mtg.svg",
    desc: "+1/+1, -1/-1 y contadores. Se venden sueltos: elige cuántos necesitas.",
    badge: "1,50 €/ud",
    badgeType: "value",
  },
  {
    id: "deckbox-transparente",
    name: "Deckbox transparente",
    cat: "deckboxes",
    price: 6,
    img: "assets/p-deckbox-transparente.svg",
    desc: "Metacrilato rígido: cabe el mazo de 100 fundado, un separador y los dados.",
    badge: "6 €",
  },
  {
    id: "tapetes",
    type: "soon",
    name: "Tapetes Yuriko y Liliana",
    cat: "tapetes",
    img: "assets/p-tapete-yuriko.svg",
    desc: "Los estamos cocinando: luna, lirios y morado hasta el borde. Déjanos tu aviso y te escribimos el primero.",
    badge: "Próximamente",
  },
];

/* ---------- Iconos ---------- */

const ICONS = {
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 1.9 2.9 4.6 4 .6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13"/><path d="M13 6l6 6-6 6"/></svg>',
  sparkle:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7L12 2z"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  truck:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
};

/* ---------- Utilidades ---------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const byId = (id) => PRODUCTS.find((p) => p.id === id);

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
const money = (n) => eur.format(n);

function injectIcons(root = document) {
  $$("[data-icon]", root).forEach((el) => {
    const svg = ICONS[el.dataset.icon];
    if (svg && !el.firstElementChild) el.innerHTML = svg;
  });
}

function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/* ---------- WhatsApp ---------- */

const WA_PLACEHOLDER = "34600000000";
const waConfigured = () =>
  /^\d{9,15}$/.test(CONFIG.whatsappNumber) && CONFIG.whatsappNumber !== WA_PLACEHOLDER;

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function wireWhatsAppLinks(root = document) {
  $$(".wa-link", root).forEach((el) => {
    const text = el.dataset.waText || `Hola! Os escribo desde la web de ${CONFIG.brand}.`;
    if (waConfigured()) {
      el.setAttribute("href", waLink(text));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.setAttribute("href", "#contacto");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        toast("Añade tu número de WhatsApp en app.js para activar este botón.");
      });
    }
  });
}

/* ---------- Carrito ---------- */

const cart = new Map();
const els = {
  grid: $("#productGrid"),
  empty: $("#emptyState"),
  filters: $("#filters"),
  count: $("#cartCount"),
  panel: $("#cartPanel"),
  body: $("#cartBody"),
  total: $("#cartTotal"),
  note: $("#cartNote"),
  checkout: $("#checkoutBtn"),
  cartBtn: $("#cartBtn"),
  cartClose: $("#cartClose"),
  overlay: $("#overlay"),
  clear: $("#clearCart"),
  toast: $("#toast"),
};

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CONFIG.cartKey) || "[]");
    if (Array.isArray(raw)) {
      raw.forEach((entry) => {
        if (entry && byId(entry.id) && Number(entry.qty) > 0) {
          cart.set(entry.id, Math.min(99, Math.floor(Number(entry.qty))));
        }
      });
    }
  } catch (err) {
    /* carrito corrupto: empezamos limpio */
  }
}

function saveCart() {
  try {
    localStorage.setItem(
      CONFIG.cartKey,
      JSON.stringify(Array.from(cart, ([id, qty]) => ({ id, qty })))
    );
  } catch (err) {
    /* modo privado: seguimos sin persistencia */
  }
}

const cartCount = () => Array.from(cart.values()).reduce((a, b) => a + b, 0);
const subtotal = () =>
  Array.from(cart, ([id, qty]) => (byId(id)?.price || 0) * qty).reduce((a, b) => a + b, 0);

function addToCart(id, qty = 1) {
  const product = byId(id);
  if (!product || product.type === "soon") return;
  cart.set(id, Math.min(99, (cart.get(id) || 0) + qty));
  saveCart();
  renderCart();
  bumpBadge();
  toast(`${product.name} añadido al carrito`);
}

function setQty(id, qty) {
  if (qty <= 0) cart.delete(id);
  else cart.set(id, Math.min(99, qty));
  saveCart();
  renderCart();
}

/* ---------- Render: catálogo ---------- */

let activeFilter = "todo";

function productCard(p) {
  if (p.type === "soon") {
    return `
      <article class="product product-soon">
        <div class="product-media">
          <span class="badge soon">${escapeHtml(p.badge)}</span>
          <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" width="480" height="360" />
        </div>
        <div class="product-body">
          <span class="product-cat">${escapeHtml(CATEGORY_LABELS[p.cat] || p.cat)}</span>
          <h3>${escapeHtml(p.name)}</h3>
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          <div class="product-foot">
            <span class="price price-soon">Muy pronto</span>
            <a class="btn-add wa-link" data-wa-text="Hola! Avisadme cuando lleguen los tapetes de Akali Suply." href="#">
              Avisadme
              <span class="icon" data-icon="arrow"></span>
            </a>
          </div>
        </div>
      </article>`;
  }

  const badge = p.badge
    ? `<span class="badge ${p.badgeType ? escapeHtml(p.badgeType) : ""}">${escapeHtml(p.badge)}</span>`
    : "";
  const swatches = p.colors
    ? `<div class="product-swatches" aria-hidden="true">${p.colors
        .map((c) => `<span class="dot-swatch" style="background:${c}"></span>`)
        .join("")}</div>`
    : "";

  return `
    <article class="product" data-id="${p.id}">
      <div class="product-media">
        ${badge}
        <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" width="480" height="360" />
      </div>
      <div class="product-body">
        <span class="product-cat">${escapeHtml(CATEGORY_LABELS[p.cat] || p.cat)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.desc)}</p>
        ${swatches}
        <div class="product-foot">
          <span class="price">${money(p.price)}${p.unit ? "<small> / ud.</small>" : ""}</span>
          <button class="btn-add" type="button" data-add="${p.id}">
            Añadir
            <span class="icon" data-icon="arrow"></span>
          </button>
        </div>
      </div>
    </article>`;
}

function requestCard() {
  return `
    <article class="product product-request">
      <div class="request-glow"></div>
      <span class="request-plus">+</span>
      <span class="request-kicker">Pedidos a la carta</span>
      <h3>¿Falta justo lo que buscas?</h3>
      <p>Pídelo y lo buscamos: un color de fundas, dados raros, una deckbox concreta, cartas sueltas… Si se puede conseguir, te lo conseguimos.</p>
      <a class="btn btn-primary wa-link" data-wa-text="Hola! Quiero pedir stock de algo que no está en la web de Akali Suply: " href="#">
        <span class="icon" data-icon="whatsapp"></span>
        Pedir stock
      </a>
      <small class="request-note">Cuéntanoslo y te decimos precio sin compromiso.</small>
    </article>`;
}

function renderCatalog() {
  const list = activeFilter === "todo" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeFilter);
  const cards = list.map(productCard);
  const mid = Math.ceil(cards.length / 2);
  els.grid.innerHTML = [...cards.slice(0, mid), requestCard(), ...cards.slice(mid)].join("");
  els.empty.hidden = list.length > 0;
  injectIcons(els.grid);
  wireWhatsAppLinks(els.grid);
}

function applyFilter(filter) {
  activeFilter = filter;
  $$(".chip", els.filters).forEach((chip) => {
    const on = chip.dataset.filter === filter;
    chip.classList.toggle("is-active", on);
    chip.setAttribute("aria-selected", String(on));
  });
  renderCatalog();
}

/* ---------- Render: carrito ---------- */

function cartItemHtml(id, qty) {
  const p = byId(id);
  if (!p) return "";
  return `
    <div class="cart-item" data-id="${id}">
      <img src="${p.img}" alt="" width="64" height="64" />
      <div class="cart-item-info">
        <h4>${escapeHtml(p.name)}</h4>
        <small>${money(p.price)} / ud.</small>
        <div class="qty">
          <button type="button" data-qty="-1" data-id="${id}" aria-label="Quitar una unidad">−</button>
          <span>${qty}</span>
          <button type="button" data-qty="1" data-id="${id}" aria-label="Añadir una unidad">+</button>
        </div>
      </div>
      <div class="cart-item-side">
        <span class="cart-line-price">${money(p.price * qty)}</span>
        <button class="remove-btn" type="button" data-remove="${id}">Quitar</button>
      </div>
    </div>`;
}

function renderCart() {
  const items = Array.from(cart, ([id, qty]) => ({ id, qty }));
  const count = cartCount();

  els.count.textContent = count;
  els.count.hidden = count === 0;

  if (!items.length) {
    els.body.innerHTML = `
      <div class="cart-empty">
        <span class="icon">${ICONS.bag}</span>
        <p>Tu carrito está vacío. Dale un repaso al catálogo, hay cosas muy ricas.</p>
      </div>`;
  } else {
    els.body.innerHTML = items.map(({ id, qty }) => cartItemHtml(id, qty)).join("");
  }

  const total = subtotal();
  els.total.textContent = money(total);

  if (!items.length) {
    els.checkout.setAttribute("aria-disabled", "true");
    els.checkout.removeAttribute("href");
    els.checkout.removeAttribute("target");
  } else {
    els.checkout.removeAttribute("aria-disabled");
    if (waConfigured()) {
      els.checkout.setAttribute("href", waLink(orderMessage(items, total)));
      els.checkout.setAttribute("target", "_blank");
      els.checkout.setAttribute("rel", "noopener");
    } else {
      els.checkout.setAttribute("href", "#contacto");
    }
  }
}

function orderMessage(items, total) {
  const lines = items.map(({ id, qty }) => {
    const p = byId(id);
    return `• ${qty} × ${p.name} — ${money(p.price * qty)}`;
  });
  return [
    `¡Hola ${CONFIG.brand}! Quiero hacer este pedido:`,
    "",
    ...lines,
    "",
    `Total: ${money(total)}`,
    "",
    "¿Me confirmáis stock y plazo de entrega? ¡Gracias!",
  ].join("\n");
}

function bumpBadge() {
  els.count.classList.remove("bump");
  void els.count.offsetWidth;
  els.count.classList.add("bump");
}

/* ---------- UI: drawer, menú, toast ---------- */

let toastTimer;

function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 3000);
}

function openCart() {
  els.panel.classList.add("is-open");
  els.panel.setAttribute("aria-hidden", "false");
  els.cartBtn.setAttribute("aria-expanded", "true");
  els.overlay.hidden = false;
  requestAnimationFrame(() => els.overlay.classList.add("is-visible"));
  document.body.classList.add("no-scroll");
  els.cartClose.focus({ preventScroll: true });
}

function closeCart() {
  els.panel.classList.remove("is-open");
  els.panel.setAttribute("aria-hidden", "true");
  els.cartBtn.setAttribute("aria-expanded", "false");
  els.overlay.classList.remove("is-visible");
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    if (!els.panel.classList.contains("is-open")) els.overlay.hidden = true;
  }, 380);
}

function closeMenu() {
  const nav = $("#nav");
  const btn = $("#menuBtn");
  nav.classList.remove("is-open");
  btn.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
}

/* ---------- Eventos ---------- */

function bindEvents() {
  // Añadir desde el catálogo
  els.grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (btn) addToCart(btn.dataset.add);
  });

  // Filtros
  els.filters.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if (chip) applyFilter(chip.dataset.filter);
  });

  // Enlaces de nav que filtran
  $$("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      applyFilter(link.dataset.filterLink);
      closeMenu();
      const catalog = $("#catalogo");
      const top = catalog.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  // Carrito
  els.cartBtn.addEventListener("click", openCart);
  els.cartClose.addEventListener("click", closeCart);
  els.overlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeMenu();
    }
  });

  els.body.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest("[data-qty]");
    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      setQty(id, (cart.get(id) || 0) + Number(qtyBtn.dataset.qty));
      return;
    }
    const removeBtn = e.target.closest("[data-remove]");
    if (removeBtn) {
      cart.delete(removeBtn.dataset.remove);
      saveCart();
      renderCart();
      toast("Producto quitado del carrito");
    }
  });

  els.clear.addEventListener("click", () => {
    if (!cart.size) return;
    cart.clear();
    saveCart();
    renderCart();
    toast("Carrito vaciado");
  });

  els.checkout.addEventListener("click", (e) => {
    if (!cart.size) {
      e.preventDefault();
      return;
    }
    if (!waConfigured()) {
      e.preventDefault();
      closeCart();
      $("#contacto").scrollIntoView({ behavior: "smooth" });
      toast("Configura tu número de WhatsApp en app.js para enviar el pedido.");
    }
  });

  // Pack de fundas de la sección destacada
  $$("[data-add-bundle]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.addBundle));
  });

  // Menú móvil
  $("#menuBtn").addEventListener("click", () => {
    const btn = $("#menuBtn");
    const open = !$("#nav").classList.contains("is-open");
    $("#nav").classList.toggle("is-open", open);
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  });

  // Nav móvil: cerrar al pulsar
  $$("#nav a").forEach((a) => a.addEventListener("click", closeMenu));

  // Header con fondo al hacer scroll
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$(".reveal").forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-visible"));
  }
}


/* ---------- Ambiente: partículas, luz y parallax ---------- */

function initAmbient() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particles = $("#bgParticles");

  if (particles && !reduce) {
    const glyphs = ["✦", "✧", "❖", "·", "✶"];
    const count = window.innerWidth < 760 ? 10 : 22;
    for (let i = 0; i < count; i += 1) {
      const star = document.createElement("span");
      star.className = "particle";
      star.textContent = glyphs[i % glyphs.length];
      star.style.left = `${Math.random() * 100}%`;
      star.style.fontSize = `${7 + Math.random() * 15}px`;
      star.style.animationDuration = `${16 + Math.random() * 24}s`;
      star.style.animationDelay = `${-Math.random() * 34}s`;
      star.style.setProperty("--dx", `${(Math.random() - 0.5) * 180}px`);
      particles.appendChild(star);
    }
  }

  initSparks(reduce);

  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const glow = $("#cursorGlow");
  if (!finePointer || !glow || reduce) return;

  document.body.classList.add("has-pointer");

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let posX = targetX;
  let posY = targetY;

  window.addEventListener("pointermove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  }, { passive: true });

  const tick = () => {
    posX += (targetX - posX) * 0.08;
    posY += (targetY - posY) * 0.08;
    glow.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();
}

/* Escenario: la intro queda fijada; el scroll abre la imagen y sube el catálogo */

function initScene() {
  const hero = $("#escena");
  const pin = hero && hero.closest(".intro-pin");
  if (!hero || !pin) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let target = 0;
  let current = 0;
  let rafId = 0;

  const measure = () => {
    const introTop = pin.getBoundingClientRect().top + window.scrollY;
    const stickyTop = parseFloat(getComputedStyle(hero).top) || 0;
    const end = Math.max(1, introTop + pin.offsetHeight - hero.offsetHeight - stickyTop);
    target = Math.min(1, Math.max(0, window.scrollY / end));
  };

  const paint = () => {
    // La escena persigue al scroll con una inercia corta: nada de saltos.
    current += (target - current) * 0.14;
    if (Math.abs(target - current) < 0.0008) current = target;
    hero.style.setProperty("--scene", current.toFixed(4));
    hero.classList.toggle("is-revealed", current > 0.58);
    rafId = current === target ? 0 : requestAnimationFrame(paint);
  };

  const update = () => {
    measure();
    if (reduce) {
      current = target;
      hero.style.setProperty("--scene", current.toFixed(4));
      hero.classList.toggle("is-revealed", current > 0.58);
      return;
    }
    if (!rafId) rafId = requestAnimationFrame(paint);
  };

  window.addEventListener("scroll", update, { passive: true });
  document.addEventListener("scroll", update, { passive: true, capture: true });
  window.addEventListener("wheel", update, { passive: true });
  window.addEventListener("touchmove", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  // Red de seguridad: algunos navegadores embebidos no emiten "scroll" al
  // desplazar por código. Solo escribimos cuando la posición cambia.
  let lastY = window.scrollY;
  window.setInterval(() => {
    if (window.scrollY !== lastY) {
      lastY = window.scrollY;
      update();
    }
  }, 180);
}

/* Chispas mágicas al pulsar: ambiente interactivo */

function initSparks(reduce) {
  const layer = $("#sparkLayer");
  if (!layer || reduce) return;

  const glyphs = ["✦", "✧", "✶", "❖"];
  const colors = ["#c9b6ff", "#ff9ec9", "#9df3e5", "#ffd27a"];
  let last = 0;

  const burst = (x, y, amount) => {
    for (let i = 0; i < amount; i += 1) {
      const spark = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 26 + Math.random() * 72;
      spark.className = "spark";
      spark.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
      spark.style.setProperty("--ty", `${Math.sin(angle) * distance - 18}px`);
      spark.style.setProperty("--rot", `${Math.round(Math.random() * 320 - 160)}deg`);
      spark.style.setProperty("--size", `${9 + Math.random() * 10}px`);
      spark.style.setProperty("--dur", `${0.7 + Math.random() * 0.5}s`);
      spark.style.setProperty("--spark-color", colors[Math.floor(Math.random() * colors.length)]);
      layer.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove(), { once: true });
    }
  };

  document.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const now = performance.now();
    if (now - last < 120) return;
    last = now;
    burst(e.clientX, e.clientY, window.innerWidth < 760 ? 7 : 12);
  }, { passive: true });
}

/* ---------- Init ---------- */

function init() {
  injectIcons();
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  loadCart();
  renderCatalog();
  renderCart();
  wireWhatsAppLinks();
  bindEvents();
  initScene();
  initAmbient();

  if (!waConfigured()) {
    console.info(
      "[Akali] Sustituye CONFIG.whatsappNumber en app.js por tu número real (ej. 34612345678)."
    );
  }
}

document.addEventListener("DOMContentLoaded", init);
