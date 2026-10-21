/**
 * MAISON DIODIO GLOW SKIN — APPLICATION LOGIC
 * Directives : Zéro émoji, 100% SVG épuré, Expérience e-commerce fluide
 */

// Données des 12 routines pour le diagnostic interactif
const ROUTINES_DATA = {
  1: {
    id: 1,
    nom: "Gamme Golden Men",
    cible: "Soin Homme & Teint Net",
    couleur: "#1A365D",
    desc: "Formule masculine fortifiante conçue pour unifier le teint, réguler le sébum et apporter éclat sans brillance.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Homme", prix: 5000, img: "assets/images/produits/gel_homme.jpg", role: "Nettoyage quotidien purifiant" },
      { step: "2. Exfolier", nom: "Gommage Corps", prix: 8000, img: "assets/images/produits/gommage_corps.jpg", role: "Élimine les cellules mortes" },
      { step: "3. Traiter", nom: "Huile Homme", prix: 8000, img: "assets/images/produits/huile_homme.jpg", role: "Nutrition & douceur intense" },
      { step: "4. Hydrater", nom: "Lait pour Homme (500ml)", prix: 10000, img: "assets/images/produits/lait_pour_homme_500ml.jpg", role: "Hydratation & protection 24h" }
    ]
  },
  2: {
    id: 2,
    nom: "Gamme Black Skin",
    cible: "Teint Noir Ébène & Lumineux",
    couleur: "#1A1A1A",
    desc: "Spécialement formulée pour sublimer les peaux noires, révéler leur éclat satiné sans les décaper.",
    steps: [
      { step: "1. Nettoyer", nom: "Savon Teint Noir", prix: 4000, img: "assets/images/produits/savon_teint_noir.jpg", role: "Soin lavant doux et éclat" },
      { step: "2. Exfolier", nom: "Gommage Teint Noir (300g)", prix: 8000, img: "assets/images/produits/gommage_teint_noir_300g.jpg", role: "Affine le grain de peau" },
      { step: "3. Traiter", nom: "Huile Teint Noir", prix: 6000, img: "assets/images/produits/huile_teint_noir.jpg", role: "Nutrition satinée & fermeté" },
      { step: "4. Hydrater", nom: "Lait Teint Noir (GM)", prix: 15000, img: "assets/images/produits/lait_teint_noir.jpg", role: "Hydratation profonde éclat" }
    ]
  },
  3: {
    id: 3,
    nom: "Gamme Caramel",
    cible: "Teint Marron Chaud & Doré",
    couleur: "#8B5A2B",
    desc: "Unifie et réchauffe les teints marrons en apportant une luminosité caramel uniforme et un glow naturel.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Caramel", prix: 5000, img: "assets/images/produits/gel_caramel.jpg", role: "Nettoyage soyeux et doux" },
      { step: "2. Exfolier", nom: "Gommage Caramel (300g)", prix: 8000, img: "assets/images/produits/gommage_caramel_300g.jpg", role: "Exfoliation veloutée" },
      { step: "3. Traiter", nom: "Huile Caramel", prix: 6000, img: "assets/images/produits/huile_caramel.jpg", role: "Booster d'éclat caramel" },
      { step: "4. Hydrater", nom: "Lait Caramel (GM)", prix: 15000, img: "assets/images/produits/lait_caramel.jpg", role: "Hydratation gourmande" }
    ]
  },
  4: {
    id: 4,
    nom: "Gamme VitC",
    cible: "Teint Marron Clair & Énergie",
    couleur: "#E67E22",
    desc: "Pleine d'antioxydants pour réveiller le teint terne, atténuer la fatigue et raviver la lumière cutanée.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Douche VitC", prix: 7000, img: "assets/images/produits/gel_de_douche_vitc.jpg", role: "Coup d'éclat vitaminé" },
      { step: "2. Exfolier", nom: "Gommage VitC (300g)", prix: 8000, img: "assets/images/produits/gommage_vitc_300g.jpg", role: "Élimination des toxines" },
      { step: "3. Traiter", nom: "Crème de Visage VitC", prix: 8000, img: "assets/images/produits/creme_de_visage_vitc_50g.jpg", role: "Action anti-oxydante" },
      { step: "4. Hydrater", nom: "Lait Vitamine C", prix: 12000, img: "assets/images/produits/lait_vitamine_c.jpg", role: "Uniformisation lumineuse" }
    ]
  },
  5: {
    id: 5,
    nom: "Gamme Collagène",
    cible: "Teint Clair & Régénération",
    couleur: "#E91E63",
    desc: "Enrichie en collagène marin et agents repulpants pour un teint radieux, rajeuni et visiblement plus ferme.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Collagène", prix: 6000, img: "assets/images/produits/gel_collagene.jpg", role: "Mousse anti-âge & pureté" },
      { step: "2. Exfolier", nom: "Gommage Collagène (300g)", prix: 8000, img: "assets/images/produits/gommage_collagene_300g.jpg", role: "Régénération cellulaire" },
      { step: "3. Traiter", nom: "Huile Collagène", prix: 8000, img: "assets/images/produits/huile_collagene.jpg", role: "Élixir tenseur et lissant" },
      { step: "4. Hydrater", nom: "Lait Collagène (GM)", prix: 20000, img: "assets/images/produits/lait_collagene.jpg", role: "Hydratation suprême teint clair" }
    ]
  },
  6: {
    id: 6,
    nom: "Gamme SuperGlow",
    cible: "Peaux Sensibles & Délicates",
    couleur: "#27AE60",
    desc: "Soin hypoallergénique ultra-doux formulé pour apaiser les rougeurs tout en restaurant l'éclat naturel.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel SuperGlow", prix: 5000, img: "assets/images/produits/gel_superglow.jpg", role: "Nettoyant apaisant dermo-calm" },
      { step: "2. Exfolier", nom: "Gommage Intense", prix: 8000, img: "assets/images/produits/gommage_intense.jpg", role: "Micro-grains non abrasifs" },
      { step: "3. Traiter", nom: "Huile SuperGlow", prix: 8000, img: "assets/images/produits/huile_superglow.jpg", role: "Bouclier lipidique protecteur" },
      { step: "4. Hydrater", nom: "Lait Super Glow (300ml)", prix: 8000, img: "assets/images/produits/lait_de_corps_super_glow_300ml.jpg", role: "Confort extrême sans tiraillement" }
    ]
  },
  7: {
    id: 7,
    nom: "Gamme Extra",
    cible: "Teint Super Clair & Curcuma",
    couleur: "#D4AF37",
    desc: "Action renforcée au curcuma pour clarifier intensément le teint et estomper les zones d'hyperpigmentation.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Extra Curcuma", prix: 5000, img: "assets/images/produits/gel_extra_curcuma.jpg", role: "Purification clarifiante" },
      { step: "2. Exfolier", nom: "Gommage Extra (300g)", prix: 8000, img: "assets/images/produits/gommage_extra_300g.jpg", role: "Désincruste les pores" },
      { step: "3. Traiter", nom: "Crème Visage Extra", prix: 8000, img: "assets/images/produits/creme_de_visage_extra.jpg", role: "Correction des taches" },
      { step: "4. Hydrater", nom: "Lait Extra (GM)", prix: 15000, img: "assets/images/produits/lait_extra.jpg", role: "Unification ultra-claire" }
    ]
  },
  8: {
    id: 8,
    nom: "Gamme Urgence",
    cible: "Teint Blanchissant & Intense",
    couleur: "#F39C12",
    desc: "Programme d'attaque haute efficacité pour un résultat visible et rapide sur l'homogénéité du teint.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Urgence", prix: 7000, img: "assets/images/produits/gel_urgence.jpg", role: "Nettoyage détoxifiant" },
      { step: "2. Exfolier", nom: "Gommage Urgence (500g)", prix: 10000, img: "assets/images/produits/gommage_urgence_500g.jpg", role: "Gommage haute performance" },
      { step: "3. Traiter", nom: "Huile Urgence", prix: 8000, img: "assets/images/produits/huile_urgence.jpg", role: "Concentré d'actifs unifiants" },
      { step: "4. Hydrater", nom: "Lait Urgence (GM)", prix: 20000, img: "assets/images/produits/lait_urgence.jpg", role: "Éclat maximal certifié" }
    ]
  },
  9: {
    id: 9,
    nom: "Gamme 3Jours",
    cible: "Spécial Événement / Mariage",
    couleur: "#C0392B",
    desc: "Le protocole express culte de la Maison Diodio pour illuminer le teint avant un grand événement.",
    steps: [
      { step: "1. Nettoyer", nom: "Savon Noir 3Jours", prix: 6000, img: "assets/images/produits/savon_noir_3jours.jpg", role: "Savon noir d'Alep enrichi" },
      { step: "2. Activer", nom: "Gel Douche 3Jours", prix: 10000, img: "assets/images/produits/gel_douche_3jours.jpg", role: "Effet peeling doux" },
      { step: "3. Traiter", nom: "Sérum 3Jours", prix: 8000, img: "assets/images/produits/serum_3jours.jpg", role: "Infusion lumière flash" },
      { step: "4. Hydrater", nom: "Lait 3Jours (500ml)", prix: 15000, img: "assets/images/produits/lait_3jours_500ml.jpg", role: "Glow spectaculaire" }
    ]
  },
  10: {
    id: 10,
    nom: "Gamme Peeling",
    cible: "Peaux Dures à Blanchir",
    couleur: "#2980B9",
    desc: "Soin dermo-exfoliant formulé aux acides de fruits pour débloquer les peaux résistantes aux soins classiques.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Peeling Fruity", prix: 8000, img: "assets/images/produits/gel_douche_peeling_fruity.jpg", role: "Mousse peeling enzymatique" },
      { step: "2. Exfolier", nom: "Savon Intense Peeling", prix: 6000, img: "assets/images/produits/savon_intense_peeling.jpg", role: "Gommage dermo-purifiant" },
      { step: "3. Traiter", nom: "Sérum Peeling", prix: 8000, img: "assets/images/produits/serum_peeling.jpg", role: "Rénovateur épidermique" },
      { step: "4. Hydrater", nom: "Lait Peeling (500ml)", prix: 15000, img: "assets/images/produits/lait_peeling_500ml.jpg", role: "Lissage et éclat profond" }
    ]
  },
  11: {
    id: 11,
    nom: "Gamme Réparateur",
    cible: "Éclaircissant (Peaux Abîmées)",
    couleur: "#16A085",
    desc: "Soin réparateur post-dermatite ou décoloration agressive pour régénérer la barrière cutanée tout en éclaircissant sainement.",
    steps: [
      { step: "1. Nettoyer", nom: "Gel Douche Réparateur", prix: 8000, img: "assets/images/produits/gel_douche_reparateur.jpg", role: "Base lavante réparatrice" },
      { step: "2. Apaiser", nom: "Savon Réparateur Shine", prix: 5000, img: "assets/images/produits/savon_reparateur_shine.jpg", role: "Soin cicatrisant et apaisant" },
      { step: "3. Traiter", nom: "Crème Visage Réparateur", prix: 10000, img: "assets/images/produits/creme_visage_reparateur_50g.jpg", role: "Reconstruction cellulaire" },
      { step: "4. Hydrater", nom: "Lait Réparateur (500ml)", prix: 25000, img: "assets/images/produits/lait_reparateur_500ml.jpg", role: "Régénération profonde" }
    ]
  },
  12: {
    id: 12,
    nom: "Gamme Baby Glow",
    cible: "Soin Bébé & Enfant",
    couleur: "#3498DB",
    desc: "Formule hypoallergénique ultra-pure pour hydrater, protéger et adoucir la peau fragile des tout-petits.",
    steps: [
      { step: "1. Nettoyer", nom: "Savon Bébé Douceur", prix: 3000, img: "assets/images/produits/savon_visage_babyface.jpg", role: "Toilette haute tolérance" },
      { step: "2. Protéger", nom: "Vaseline Nourrissante", prix: 4000, img: "assets/images/produits/vaseline_booster.jpg", role: "Barrière protectrice" },
      { step: "3. Apaiser", nom: "Huile de Soin Bébé", prix: 5000, img: "assets/images/produits/huile_glow.jpg", role: "Massage apaisant du soir" },
      { step: "4. Hydrater", nom: "Lait Hydratant Douceur", prix: 7000, img: "assets/images/produits/lait_hydratant_caramel_300ml.jpg", role: "Peau souple et satinée" }
    ]
  }
};

// ==========================================================================
// SYSTÈME DE GESTION DU PANIER (LOCALSTORAGE & UI)
// ==========================================================================
class CartManager {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('diodio_cart')) || [];
    this.drawer = document.getElementById('cart-drawer');
    this.overlay = document.getElementById('drawer-overlay');
    this.drawerBody = document.getElementById('drawer-body');
    this.subtotalEl = document.getElementById('drawer-subtotal-price');
    this.badges = document.querySelectorAll('.cart-count');
    this.checkoutBtn = document.getElementById('btn-checkout-drawer');

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    // Déclencheur panier
    const trigger = document.getElementById('cart-drawer-trigger');
    const closeBtn = document.getElementById('drawer-close-btn');

    if (trigger) trigger.addEventListener('click', () => this.open());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    // Navigation vers la page de commande / finalisation
    if (this.checkoutBtn) {
      this.checkoutBtn.addEventListener('click', (e) => {
        if (this.cart.length === 0) {
          this.showToast("Votre panier est vide. Choisissez d'abord un soin !");
          return;
        }
        if (window.location.pathname.endsWith('checkout.html')) {
          this.close();
        } else {
          window.location.href = 'checkout.html';
        }
      });
    }
  }

  open() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.add('active');
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.remove('active');
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  addItem(item) {
    // Vérifier si l'article existe déjà (même nom et même format)
    const existing = this.cart.find(i => i.nom === item.nom && i.format === item.format);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      this.cart.push({
        nom: item.nom,
        prix: item.prix,
        img: item.img,
        format: item.format || 'Standard',
        quantity: 1
      });
    }

    this.save();
    this.render();
    this.showToast(`« ${item.nom} » ajouté au panier !`);
    this.open();
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.save();
      this.render();
    }
  }

  removeItem(index) {
    if (this.cart[index]) {
      this.cart.splice(index, 1);
      this.save();
      this.render();
    }
  }

  save() {
    localStorage.setItem('diodio_cart', JSON.stringify(this.cart));
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.prix * (item.quantity || 1)), 0);
  }

  getCount() {
    return this.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  render() {
    const totalCount = this.getCount();
    const totalPrice = this.getTotal();

    // Badges
    this.badges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Total
    if (this.subtotalEl) {
      this.subtotalEl.textContent = `${totalPrice.toLocaleString('fr-FR')} FCFA`;
    }

    // Corps du panier
    if (!this.drawerBody) return;

    if (this.cart.length === 0) {
      this.drawerBody.innerHTML = `
        <div class="empty-cart-view">
          <div class="empty-cart-icon">
            <span class="svg-icon" style="width: 34px; height: 34px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </span>
          </div>
          <h4>Votre panier est vide</h4>
          <p>Découvrez nos 12 gammes et ajoutez vos soins préférés pour commander en un clic.</p>
        </div>
      `;
      if (this.checkoutBtn) this.checkoutBtn.disabled = true;
    } else {
      if (this.checkoutBtn) this.checkoutBtn.disabled = false;
      this.drawerBody.innerHTML = this.cart.map((item, index) => `
        <div class="cart-item-row">
          <div class="cart-item-img">
            <img src="${item.img}" alt="${item.nom}">
          </div>
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.nom}</h5>
            <div class="cart-item-meta">${item.format}</div>
            <div class="cart-item-price">${(item.prix * item.quantity).toLocaleString('fr-FR')} FCFA</div>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" onclick="window.cartApp.updateQuantity(${index}, -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="window.cartApp.updateQuantity(${index}, 1)">+</button>
            <button type="button" class="cart-remove-btn" onclick="window.cartApp.removeItem(${index})" title="Supprimer">
              <span class="svg-icon" style="width: 16px; height: 16px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <span class="svg-icon gold" style="width: 20px; height: 20px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span>${message}</span>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  processWhatsAppCheckout() {
    if (this.cart.length === 0) return;

    const orderId = `DG-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemsList = this.cart.map(item => `• ${item.quantity}x ${item.nom} (${item.format}) - ${(item.prix * item.quantity).toLocaleString('fr-FR')} FCFA`).join('%0A');
    const total = this.getTotal().toLocaleString('fr-FR');

    const message = `Bonjour Maison Diodio Glow Skin,%0A%0AJe souhaite valider ma commande *${orderId}* :%0A${itemsList}%0A%0A*Total à régler : ${total} FCFA*%0A%0APaiement souhaité : Wave Business / Orange Money%0AMerci de m'indiquer les modalités de livraison à Dakar / Région.`;

    window.open(`https://wa.me/221785466969?text=${message}`, '_blank');
  }
}

// ==========================================================================
// GESTION DU DIAGNOSTIC DES 12 CARNATIONS
// ==========================================================================
function initDiagnostic() {
  const navContainer = document.getElementById('carnations-nav');
  const resultCard = document.getElementById('diagnostic-result-card');

  if (!navContainer || !resultCard) return;

  // Création des 12 boutons onglets
  navContainer.innerHTML = Object.values(ROUTINES_DATA).map((g, idx) => `
    <button type="button" class="carnation-tab-btn ${idx === 1 ? 'active' : ''}" data-id="${g.id}">
      <span class="carnation-dot" style="background-color: ${g.couleur};"></span>
      <span>${g.nom}</span>
    </button>
  `).join('');

  // Fonction d'affichage d'une routine
  function displayRoutine(gammeId) {
    const data = ROUTINES_DATA[gammeId];
    if (!data) return;

    // Mise à jour de l'état actif des boutons
    document.querySelectorAll('.carnation-tab-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.id) === data.id);
    });

    // Rendu de la fiche routine
    resultCard.innerHTML = `
      <div class="diagnostic-header-box">
        <div class="diagnostic-title-group">
          <span class="section-tag" style="background: rgba(197, 160, 89, 0.15); color: var(--color-gold);">${data.cible}</span>
          <h3>${data.nom}</h3>
          <p>${data.desc}</p>
        </div>
        <a href="catalogue.html?carnation=${data.id}" class="btn-secondary-luxury" style="background: var(--color-marble); color: var(--color-dark); border-color: var(--color-border);">
          <span>Voir toute la gamme</span>
          <span class="svg-icon" style="width: 16px; height: 16px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </a>
      </div>

      <div class="routine-grid-4">
        ${data.steps.map(step => `
          <div class="routine-step-card">
            <span class="routine-step-badge">${step.step}</span>
            <div class="routine-step-img">
              <img src="${step.img}" alt="${step.nom}">
            </div>
            <h4 class="routine-step-name">${step.nom}</h4>
            <div class="routine-step-role">${step.role}</div>
            <div class="routine-step-price">${step.prix.toLocaleString('fr-FR')} FCFA</div>
            <button type="button" class="btn-add-step" onclick='window.cartApp.addItem(${JSON.stringify({ nom: step.nom, prix: step.prix, img: step.img, format: "Format Conseillé" })})'>
              <span class="svg-icon" style="width: 14px; height: 14px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              <span>Ajouter</span>
            </button>
          </div>
        `).join('')}
      </div>

      <div class="diagnostic-footer-cta">
        <div class="diagnostic-footer-text">
          <h5>Besoin d'un accompagnement personnalisé ?</h5>
          <p>Nos conseillères dermatologiques sont disponibles au standard Ouest-Foire au 33.844.15.15.</p>
        </div>
        <a href="https://wa.me/221785466969?text=Bonjour,%20je%20souhaite%20un%20conseil%20pour%20la%20gamme%20${encodeURIComponent(data.nom)}" target="_blank" rel="noopener noreferrer" class="btn-primary-luxury" style="padding: 0.75rem 1.5rem; font-size: 0.875rem;">
          <span>Conseil WhatsApp</span>
        </a>
      </div>
    `;
  }

  // Clics sur les onglets
  navContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.carnation-tab-btn');
    if (btn) {
      displayRoutine(parseInt(btn.dataset.id));
    }
  });

  // Affichage initial : Gamme Black Skin (index 2)
  displayRoutine(2);
}

// ==========================================================================
// GESTION DU CATALOGUE COMPLET (catalogue.html — 121 PRODUITS)
// ==========================================================================
function initCatalogue() {
  const gridEl = document.getElementById('catalogue-products-grid');
  const searchInput = document.getElementById('catalogue-search-input');
  const countEl = document.getElementById('results-count');
  const resetBtn = document.getElementById('btn-reset-filters');
  const categoryPillsContainer = document.getElementById('category-pills-container');
  const carnationChipsContainer = document.getElementById('carnation-chips-container');
  const modalOverlay = document.getElementById('product-detail-modal');

  if (!gridEl || typeof CATALOGUE_DIODIO === 'undefined') return;

  const CATEGORY_NAMES = {
    'all': 'Tous les Soins',
    'laits_corps': 'Laits de Corps',
    'gels_douche': 'Gels de Douche',
    'savons_corps': 'Savons Corps',
    'gommages': 'Gommages',
    'cremes_visage': 'Crèmes Visage',
    'savons_visage': 'Savons Visage',
    'lotions_visage': 'Lotions Visage',
    'huiles': 'Huiles de Corps',
    'serums': 'Sérums',
    'karite_vaseline': 'Karité & Vaseline',
    'anti_quintos': 'Anti-Quintos',
    'soins_specifiques': 'Soins Spécifiques'
  };

  // 1. Aplatir l'ensemble des 121 produits
  const allProducts = [];
  let pId = 1;

  for (const [catKey, prodList] of Object.entries(CATALOGUE_DIODIO.categories)) {
    prodList.forEach(item => {
      allProducts.push({
        id: pId++,
        nom: item.nom,
        image: item.image,
        categoryKey: catKey,
        categoryName: CATEGORY_NAMES[catKey] || catKey,
        pm: item.pm || null,
        gm: item.gm || null,
        prix: item.prix || item.pm || item.gm || 0,
        selectedFormat: item.pm ? 'PM' : (item.gm ? 'GM' : 'Standard'),
        selectedPrice: item.pm ? item.pm : (item.prix || item.gm || 0),
        desc: `Formule dermatologique premium de la Maison Diodio Glow Skin. Soin élaboré à Dakar pour unifier, adoucir et sublimer la peau.`
      });
    });
  }

  // 2. État des filtres
  let state = {
    search: '',
    category: 'all',
    carnationId: null
  };

  // Vérifier paramètre d'URL (ex: ?carnation=2)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCarnation = urlParams.get('carnation');
  if (paramCarnation) {
    state.carnationId = parseInt(paramCarnation);
  }

  // 3. Rendu des onglets de catégories
  if (categoryPillsContainer) {
    categoryPillsContainer.innerHTML = Object.entries(CATEGORY_NAMES).map(([key, label]) => `
      <button type="button" class="filter-pill ${state.category === key ? 'active' : ''}" data-cat="${key}">
        <span>${label}</span>
      </button>
    `).join('');
  }

  // 4. Rendu des puces de carnations
  if (carnationChipsContainer && CATALOGUE_DIODIO.gammes_carnations) {
    carnationChipsContainer.innerHTML = `
      <button type="button" class="carnation-filter-chip ${state.carnationId === null ? 'active' : ''}" data-carnation="all">
        <span>Toutes les Carnations</span>
      </button>
    ` + CATALOGUE_DIODIO.gammes_carnations.map(g => `
      <button type="button" class="carnation-filter-chip ${state.carnationId === g.id ? 'active' : ''}" data-carnation="${g.id}">
        <span class="carnation-dot" style="background-color: ${g.couleur_tag || '#C5A059'}; width: 8px; height: 8px;"></span>
        <span>${g.nom}</span>
      </button>
    `).join('');
  }

  // 5. Filtrage
  function getFilteredProducts() {
    return allProducts.filter(p => {
      // Filtre recherche
      if (state.search) {
        const query = state.search.toLowerCase();
        const matchName = p.nom.toLowerCase().includes(query);
        const matchCat = p.categoryName.toLowerCase().includes(query);
        if (!matchName && !matchCat) return false;
      }

      // Filtre catégorie
      if (state.category !== 'all' && p.categoryKey !== state.category) {
        return false;
      }

      // Filtre carnation
      if (state.carnationId !== null) {
        const gammeObj = CATALOGUE_DIODIO.gammes_carnations.find(g => g.id === state.carnationId);
        if (gammeObj) {
          // Mots-clés associés
          const kwMap = {
            1: ['homme'],
            2: ['noir', 'ebene'],
            3: ['caramel'],
            4: ['vitc', 'vitamine'],
            5: ['collagene'],
            6: ['superglow', 'super glow', 'sensible'],
            7: ['extra', 'curcuma'],
            8: ['urgence'],
            9: ['3jours', '3 jours'],
            10: ['peeling'],
            11: ['reparateur', 'shine'],
            12: ['bebe', 'baby']
          };
          const keywords = kwMap[state.carnationId] || [];
          const pNameLower = p.nom.toLowerCase();
          const matchesKw = keywords.some(kw => pNameLower.includes(kw));
          if (!matchesKw) return false;
        }
      }

      return true;
    });
  }

  // 6. Rendu de la grille
  function renderGrid() {
    const filtered = getFilteredProducts();

    if (countEl) {
      countEl.innerHTML = `<strong>${filtered.length}</strong> soin${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div class="empty-cart-icon" style="margin-bottom: 1rem;">
            <span class="svg-icon" style="width: 32px; height: 32px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem;">Aucun soin ne correspond à ces critères</h3>
          <p style="color: var(--color-dark-muted); font-size: 0.9375rem; margin-bottom: 1.5rem;">Modifiez vos filtres ou effectuez une autre recherche.</p>
          <button type="button" class="btn-primary-luxury" onclick="window.resetCatalogueFilters()">
            <span>Afficher tous les 121 soins</span>
          </button>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = filtered.map(p => {
      const hasFormats = (p.pm && p.gm);
      const curPrice = p.selectedPrice || (p.selectedFormat === 'GM' ? p.gm : (p.pm || p.prix));

      return `
        <article class="product-card" id="card-product-${p.id}">
          <div class="product-thumb-wrapper">
            <img src="${p.image}" alt="${p.nom}" loading="lazy">
          </div>
          <div class="product-details">
            <span class="product-category-tag">${p.categoryName}</span>
            <h3 class="product-title">${p.nom}</h3>
            
            ${hasFormats ? `
              <div class="format-switch-group">
                <button type="button" class="btn-format-toggle ${p.selectedFormat === 'PM' ? 'active' : ''}" onclick="window.switchProductFormat(${p.id}, 'PM', ${p.pm})">
                  PM (${p.pm.toLocaleString('fr-FR')} F)
                </button>
                <button type="button" class="btn-format-toggle ${p.selectedFormat === 'GM' ? 'active' : ''}" onclick="window.switchProductFormat(${p.id}, 'GM', ${p.gm})">
                  GM (${p.gm.toLocaleString('fr-FR')} F)
                </button>
              </div>
            ` : `
              <div style="font-size: 0.75rem; color: var(--color-dark-muted); margin-bottom: 0.75rem;">Format Unique</div>
            `}

            <div class="product-bottom-row">
              <div class="product-price-box">
                <span class="product-price-label">Prix</span>
                <span class="product-price-val" id="price-val-${p.id}">${curPrice.toLocaleString('fr-FR')} F</span>
              </div>
              <button type="button" class="btn-card-add" onclick="window.addProductToCart(${p.id})">
                <span class="svg-icon white" style="width: 14px; height: 14px;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                  </svg>
                </span>
                <span>Ajouter</span>
              </button>
            </div>

            <button type="button" class="product-detail-btn" onclick="window.openProductModal(${p.id})">
              <span>Conseils & Détails</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // 7. Actions globales attachées à window
  window.switchProductFormat = (id, format, price) => {
    const prod = allProducts.find(p => p.id === id);
    if (prod) {
      prod.selectedFormat = format;
      prod.selectedPrice = price;
      const priceEl = document.getElementById(`price-val-${id}`);
      if (priceEl) priceEl.textContent = `${price.toLocaleString('fr-FR')} F`;

      const card = document.getElementById(`card-product-${id}`);
      if (card) {
        card.querySelectorAll('.btn-format-toggle').forEach(btn => {
          btn.classList.toggle('active', btn.textContent.includes(format));
        });
      }
    }
  };

  window.addProductToCart = (id) => {
    const prod = allProducts.find(p => p.id === id);
    if (prod && window.cartApp) {
      window.cartApp.addItem({
        nom: prod.nom,
        prix: prod.selectedPrice,
        img: prod.image,
        format: prod.selectedFormat
      });
    }
  };

  window.openProductModal = (id) => {
    const prod = allProducts.find(p => p.id === id);
    if (!prod || !modalOverlay) return;

    const modalBody = document.getElementById('modal-card-body');
    if (modalBody) {
      modalBody.innerHTML = `
        <div class="modal-content-grid">
          <div class="modal-media-col">
            <img src="${prod.image}" alt="${prod.nom}">
          </div>
          <div class="modal-info-col">
            <span class="modal-cat-tag">${prod.categoryName}</span>
            <h3 class="modal-title">${prod.nom}</h3>
            <div class="modal-price">${prod.selectedPrice.toLocaleString('fr-FR')} FCFA</div>

            <h5 class="modal-section-title">Description du soin</h5>
            <p class="modal-desc-text">
              Soin authentique formulé avec rigueur dermatologique au sein de la Maison Diodio Glow Skin. Développé pour harmoniser et sublimer le teint sans agresser le film hydrolipidique de l'épiderme.
            </p>

            <div class="modal-tip-box">
              <strong>Conseil d'application officiel :</strong> Appliquer quotidiennement matin et soir sur une peau préalablement nettoyée avec le savon ou gel assorti de la gamme.
            </div>

            <button type="button" class="btn-primary-luxury" onclick="window.addProductToCart(${prod.id}); window.closeProductModal();">
              <span class="svg-icon white" style="width: 16px; height: 16px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                </svg>
              </span>
              <span>Ajouter au Panier (${prod.selectedFormat})</span>
            </button>
          </div>
        </div>
      `;
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProductModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.resetCatalogueFilters = () => {
    state.search = '';
    state.category = 'all';
    state.carnationId = null;
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === 'all');
    });

    document.querySelectorAll('.carnation-filter-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.carnation === 'all');
    });

    renderGrid();
  };

  // 8. Écouteurs d'événements
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      renderGrid();
    });
  }

  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (btn) {
        state.category = btn.dataset.cat;
        categoryPillsContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid();
      }
    });
  }

  if (carnationChipsContainer) {
    carnationChipsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.carnation-filter-chip');
      if (btn) {
        const val = btn.dataset.carnation;
        state.carnationId = (val === 'all') ? null : parseInt(val);
        carnationChipsContainer.querySelectorAll('.carnation-filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', window.resetCatalogueFilters);
  }

  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeProductModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) window.closeProductModal();
    });
  }

  // Premier rendu
  renderGrid();
}

// ==========================================================================
// GESTION DU SLIDER ÉGÉRIES À CARTES FLOTTANTES EXTENSIBLES (egeries.html)
// ==========================================================================
function initEgeriesSlider() {
  const sliderTrack = document.getElementById('egeries-slider-track');
  const prevBtn = document.getElementById('slider-prev-btn');
  const nextBtn = document.getElementById('slider-next-btn');
  const tabsContainer = document.getElementById('ambassador-tabs');
  const bundleContainer = document.getElementById('bundle-showcase-container');

  if (!sliderTrack) return;

  // Données des shootings officiels
  const EGERIES_DATA = {
    fatou: {
      id: 'fatou',
      name: "Fatou Ndiaye",
      role: "Égérie Officielle — Gamme Black Skin",
      tag: "Teint Noir Ébène & Éclat Royal",
      quote: "« Révéler la profondeur et l'éclat de ma peau ébène sans jamais l'agresser. La Maison Diodio m'apporte cette nutrition satinée incomparable. »",
      color: "#1A1A1A",
      bundlePrice: 33000,
      bundleOldPrice: 38000,
      bundleItems: [
        { nom: "Savon Teint Noir", prix: 4000, img: "assets/images/produits/savon_teint_noir.jpg", role: "Nettoyage quotidien purifiant" },
        { nom: "Gommage Teint Noir (300g)", prix: 8000, img: "assets/images/produits/gommage_teint_noir_300g.jpg", role: "Exfoliation soyeuse" },
        { nom: "Huile Teint Noir", prix: 6000, img: "assets/images/produits/huile_teint_noir.jpg", role: "Nutrition satinée" },
        { nom: "Lait Teint Noir (GM)", prix: 15000, img: "assets/images/produits/lait_teint_noir.jpg", role: "Hydratation profonde éclat" }
      ],
      slides: [
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_768310028_18097070144365689_4675408434423557091_n.jpg",
          badge: "Le Rituel du Bain Ébène",
          title: "L'Art du Soin <em>Teint Noir</em>",
          desc: "Un moment suspendu où les huiles précieuses et le savon noir d'Alep subliment chaque courbe.",
          product: { nom: "Lait Teint Noir (GM)", prix: 15000, img: "assets/images/produits/lait_teint_noir.jpg", format: "Grand Modèle (500ml)" }
        },
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_768391031_18097070126365689_7252073090591296704_n.jpg",
          badge: "Nutrition Satinée",
          title: "Le Velouté <em>Karité & Huile</em>",
          desc: "Infusion d'acides gras essentiels pour une peau douce comme de la soie africaine.",
          product: { nom: "Huile Teint Noir", prix: 6000, img: "assets/images/produits/huile_teint_noir.jpg", format: "Flacon Pompe" }
        },
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_768568113_18097070102365689_482143024194509886_n.jpg",
          badge: "Éclat Authentique",
          title: "La Pureté <em>du Savon Noir</em>",
          desc: "Nettoyage dermatologique haute tolérance conçu spécifiquement pour le climat dakarois.",
          product: { nom: "Savon Teint Noir", prix: 4000, img: "assets/images/produits/savon_teint_noir.jpg", format: "Pain Dermatologique" }
        },
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_769571080_18097070117365689_1236483423025056564_n.jpg",
          badge: "Grain de Peau Parfait",
          title: "L'Exfoliation <em>Régénérante</em>",
          desc: "Micro-grains exfoliants pour libérer les pores et intensifier la pénétration des soins.",
          product: { nom: "Gommage Teint Noir (300g)", prix: 8000, img: "assets/images/produits/gommage_teint_noir_300g.jpg", format: "Pot 300g" }
        },
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_769777470_18097070324365689_5092713076484568641_n.jpg",
          badge: "Confidence Beauté",
          title: "Le Secret <em>de Fatou Ndiaye</em>",
          desc: "« Mon rituel Diodio Glow Skin est devenu mon indispensable avant chaque apparition publique. »",
          product: { nom: "Lait Teint Noir (GM)", prix: 15000, img: "assets/images/produits/lait_teint_noir.jpg", format: "Grand Modèle (500ml)" }
        },
        {
          img: "assets/images/egeries/fatou_ndiaye/instasave.website_770355024_18097070192365689_6330386430923737677_n.jpg",
          badge: "Finition Royale",
          title: "Lumière & <em>Protection 24h</em>",
          desc: "Un glow subtil qui capte la lumière naturelle du soleil sénégalais sans effet gras.",
          product: { nom: "Huile Teint Noir", prix: 6000, img: "assets/images/produits/huile_teint_noir.jpg", format: "Flacon Pompe" }
        }
      ]
    },
    kine: {
      id: 'kine',
      name: "Kiné Ndiaye Rose",
      role: "Égérie Officielle — Gamme Collagène",
      tag: "Teint Clair & Régénération Suprême",
      quote: "« Le collagène est le secret d'une peau ferme et éclatante. Les formules Diodio protègent mon teint et révèlent sa fraîcheur jour après jour. »",
      color: "#E91E63",
      bundlePrice: 42000,
      bundleOldPrice: 48000,
      bundleItems: [
        { nom: "Gel Collagène", prix: 6000, img: "assets/images/produits/gel_collagene.jpg", role: "Nettoyage tenseur" },
        { nom: "Gommage Collagène (300g)", prix: 8000, img: "assets/images/produits/gommage_collagene_300g.jpg", role: "Régénération cellulaire" },
        { nom: "Huile Collagène", prix: 8000, img: "assets/images/produits/huile_collagene.jpg", role: "Soin repulpant" },
        { nom: "Lait Collagène (GM)", prix: 20000, img: "assets/images/produits/lait_collagene.jpg", role: "Hydratation suprême teint clair" }
      ],
      slides: [
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_752347376_18094902146365689_3677193129433762377_n.jpg",
          badge: "L'Élixir de Jeunesse",
          title: "La Pureté <em>du Collagène Marin</em>",
          desc: "Un teint clair d'une clarté cristalline, préservé des agressions extérieures et des taches.",
          product: { nom: "Lait Collagène (GM)", prix: 20000, img: "assets/images/produits/lait_collagene.jpg", format: "Grand Modèle (500ml)" }
        },
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_752534106_18094902107365689_1303043215888637495_n.jpg",
          badge: "Rituel de Douche Soyeux",
          title: "La Douceur <em>Tenseur & Fermeté</em>",
          desc: "Mousse onctueuse enrichie en collagène qui tonifie la peau dès la première minute sous la douche.",
          product: { nom: "Gel Collagène", prix: 6000, img: "assets/images/produits/gel_collagene.jpg", format: "Flacon Pompe" }
        },
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_752616709_18094901975365689_2230242764030452502_n.jpg",
          badge: "Éclat Précieux",
          title: "L'Huile <em>Régénératrice Intense</em>",
          desc: "Quelques gouttes matin et soir pour unifier les zones d'ombre et sceller l'hydratation.",
          product: { nom: "Huile Collagène", prix: 8000, img: "assets/images/produits/huile_collagene.jpg", format: "Élixir Concentré" }
        },
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_752642798_18094902038365689_7078877435729582193_n.jpg",
          badge: "Rénovation Épidermique",
          title: "Le Gommage <em>Collagène Pur</em>",
          desc: "Lisse le grain de peau et favorise le renouvellement cellulaire pour un teint éclatant de vitalité.",
          product: { nom: "Gommage Collagène (300g)", prix: 8000, img: "assets/images/produits/gommage_collagene_300g.jpg", format: "Pot 300g" }
        },
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_753205152_18094902011365689_8583017365099248101_n.jpg",
          badge: "Confidence de Kiné",
          title: "L'Harmonie <em>du Teint Parfait</em>",
          desc: "« Les soins Collagène de Diodio Glow Skin maintiennent mon teint lumineux et uniforme en toute saison. »",
          product: { nom: "Lait Collagène (GM)", prix: 20000, img: "assets/images/produits/lait_collagene.jpg", format: "Grand Modèle (500ml)" }
        },
        {
          img: "assets/images/egeries/kine_ndiaye/instasave.website_753206426_18094902020365689_3802999919182442414_n.jpg",
          badge: "Soin Signature",
          title: "L'Éclat <em>Haute Beauté</em>",
          desc: "Une texture fluide, non collante, qui pénètre instantanément et laisse un sillage poudré délicat.",
          product: { nom: "Gel Collagène", prix: 6000, img: "assets/images/produits/gel_collagene.jpg", format: "Flacon Pompe" }
        }
      ]
    }
  };

  let currentAmbassador = 'fatou';

  // Rendu des slides dans le track
  function renderSlider(ambassadorKey) {
    const data = EGERIES_DATA[ambassadorKey];
    if (!data) return;

    sliderTrack.innerHTML = data.slides.map(slide => `
      <div class="slider-item" style="background-image: url('${slide.img}');">
        <div class="slider-item-overlay">
          <div class="slider-item-content">
            <span class="slider-badge-gold">
              <span class="svg-icon" style="width: 14px; height: 14px; color: var(--color-gold);">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </span>
              <span>${slide.badge}</span>
            </span>
            <h2 class="slider-title">${slide.title}</h2>
            <p class="slider-quote">${slide.desc}</p>
            <button type="button" class="btn-primary-luxury" onclick='window.cartApp.addItem(${JSON.stringify(slide.product)})'>
              <span class="svg-icon white" style="width: 16px; height: 16px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                </svg>
              </span>
              <span>Shopper ce Soin (${slide.product.prix.toLocaleString('fr-FR')} F)</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Permettre le clic direct sur les cartes flottantes
    sliderTrack.querySelectorAll('.slider-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // Si ce n'est pas le bouton CTA et si l'élément n'est pas déjà le premier
        if (!e.target.closest('button')) {
          const items = sliderTrack.querySelectorAll('.slider-item');
          if (items[2] === item) {
            sliderTrack.appendChild(items[0]);
          } else if (items[3] === item) {
            sliderTrack.appendChild(items[0]);
            sliderTrack.appendChild(items[1]);
          }
        }
      });
    });

    // Rendu du coffret de l'égérie
    renderBundle(data);
  }

  function renderBundle(data) {
    if (!bundleContainer) return;

    bundleContainer.innerHTML = `
      <div class="bundle-card-box">
        <div class="bundle-header">
          <div class="bundle-title-group">
            <span class="section-tag" style="background: rgba(197, 160, 89, 0.15); color: var(--color-gold);">
              ${data.role}
            </span>
            <h3>Le Coffret Rituel Complet de ${data.name}</h3>
            <p>${data.quote}</p>
          </div>
          <div class="bundle-price-badge">
            <div class="old-price">${data.bundleOldPrice.toLocaleString('fr-FR')} FCFA</div>
            <div class="new-price">${data.bundlePrice.toLocaleString('fr-FR')} FCFA</div>
          </div>
        </div>

        <div class="routine-grid-4">
          ${data.bundleItems.map(item => `
            <div class="routine-step-card">
              <div class="routine-step-img">
                <img src="${item.img}" alt="${item.nom}">
              </div>
              <h4 class="routine-step-name">${item.nom}</h4>
              <div class="routine-step-role">${item.role}</div>
              <div class="routine-step-price">${item.prix.toLocaleString('fr-FR')} FCFA</div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 1rem;">
          <button type="button" class="btn-primary-luxury" style="padding: 1rem 2.75rem; font-size: 1rem;" onclick='window.buyAmbassadorBundle("${data.id}")'>
            <span class="svg-icon white" style="width: 18px; height: 18px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
              </svg>
            </span>
            <span>Commander le Coffret Complet (${data.bundlePrice.toLocaleString('fr-FR')} FCFA)</span>
          </button>
        </div>
      </div>
    `;
  }

  // Fonctions de défilement du slider (Expanded Card Stack)
  function slideNext() {
    const items = sliderTrack.querySelectorAll('.slider-item');
    if (items.length > 0) {
      sliderTrack.appendChild(items[0]);
    }
  }

  function slidePrev() {
    const items = sliderTrack.querySelectorAll('.slider-item');
    if (items.length > 0) {
      sliderTrack.prepend(items[items.length - 1]);
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', slideNext);
  if (prevBtn) prevBtn.addEventListener('click', slidePrev);

  // Support tactile (Touch Swipe sur mobile)
  let touchStartX = 0;
  let touchEndX = 0;

  sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      slideNext(); // Glissement vers la gauche
    } else if (touchEndX - touchStartX > 50) {
      slidePrev(); // Glissement vers la droite
    }
  }, { passive: true });

  // Changement d'égérie via les onglets
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-ambassador-tab');
      if (btn) {
        const amb = btn.dataset.ambassador;
        if (amb && amb !== currentAmbassador) {
          currentAmbassador = amb;
          tabsContainer.querySelectorAll('.btn-ambassador-tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderSlider(currentAmbassador);
        }
      }
    });
  }

  // Achat en 1 clic de tout le coffret
  window.buyAmbassadorBundle = (ambId) => {
    const data = EGERIES_DATA[ambId];
    if (data && window.cartApp) {
      data.bundleItems.forEach(item => {
        window.cartApp.addItem({
          nom: item.nom,
          prix: item.prix,
          img: item.img,
          format: "Pack Égérie"
        });
      });
      window.cartApp.showToast(`Coffret complet de ${data.name} ajouté au panier !`);
      window.cartApp.open();
    }
  };

  // Affichage initial : Fatou Ndiaye
  renderSlider('fatou');
}

// ==========================================================================
// GESTION DU FORMULAIRE DE RÉSERVATION EN CABINE (institut.html)
// ==========================================================================
function initBookingForm() {
  const form = document.getElementById('booking-form-element');
  const serviceCards = document.querySelectorAll('.service-option-card');

  if (!form) return;

  let selectedService = {
    title: "Diagnostic de Peau & Consultation",
    price: "Offert"
  };

  // Sélection visuelle de prestation
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedService = {
        title: card.dataset.title || "Soin en cabine",
        price: card.dataset.price || "Sur devis"
      };
    });
  });

  // Soumission vers WhatsApp Institut (70.616.71.19)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientName = document.getElementById('booking-name')?.value.trim() || "Cliente";
    const clientPhone = document.getElementById('booking-phone')?.value.trim() || "";
    const bookingDate = document.getElementById('booking-date')?.value || "Date à convenir";
    const bookingTime = document.getElementById('booking-time')?.value || "Matin (10h - 13h)";

    const message = `Bonjour Maison Diodio Glow Skin,%0A%0AJe souhaite réserver une séance à l'Institut d'Ouest-Foire :%0A• Prestation : *${selectedService.title}* (${selectedService.price})%0A• Date souhaitée : ${bookingDate}%0A• Créneau : ${bookingTime}%0A• Nom : ${clientName}%0A• Téléphone : ${clientPhone}%0A%0AMerci de bien vouloir me confirmer le rendez-vous.`;

    if (window.cartApp) {
      window.cartApp.showToast("Votre demande de réservation a été préparée !");
    }

    window.open(`https://wa.me/221706167119?text=${message}`, '_blank');
  });
}

// ==========================================================================
// TUNNEL DE COMMANDE & LIVRAISON GÉOLOCALISÉE (checkout.html)
// ==========================================================================
function initCheckout() {
  const form = document.getElementById('checkout-form');
  const itemsListEl = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal-val');
  const totalQtyEl = document.getElementById('checkout-total-qty');
  const feeEl = document.getElementById('checkout-delivery-fee');
  const grandTotalEl = document.getElementById('checkout-grand-total');
  const zoneNameEl = document.getElementById('checkout-zone-name');
  const refBadge = document.getElementById('order-ref-badge');
  const submitBtn = document.getElementById('btn-submit-order');
  const instructionsBox = document.getElementById('payment-instructions-box');

  if (!form || !itemsListEl) return;

  // 1. Référence de commande persistante pour la session
  let orderRef = sessionStorage.getItem('diodio_order_ref');
  if (!orderRef) {
    orderRef = `#DG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    sessionStorage.setItem('diodio_order_ref', orderRef);
  }
  if (refBadge) refBadge.textContent = orderRef;

  // 2. Gestion des zones de livraison
  const zoneCards = document.querySelectorAll('.delivery-zone-card');
  let currentZone = {
    key: 'dakar_centre',
    name: 'Dakar Zone 1 (Centre & Proximité)',
    fee: 1500
  };

  const ZONE_INFO = {
    'dakar_centre': { name: 'Dakar Zone 1', fee: 1500, phone: '785466969' },
    'dakar_periph': { name: 'Dakar Zone 2', fee: 2500, phone: '785466969' },
    'regions': { name: 'Régions Sénégal', fee: 3000, phone: '777784343' },
    'international': { name: 'International (DHL)', fee: 0, phone: '777784343' }
  };

  // 3. Gestion des modes de paiement
  const paymentCards = document.querySelectorAll('.payment-method-card');
  let currentPayment = 'Wave Business';

  const PAYMENT_INSTRUCTIONS = {
    'Wave Business': `
      <div class="instruction-content">
        <img src="assets/images/wave_official_icon.png" alt="Wave" width="24" height="24" style="border-radius: 6px; flex-shrink: 0;">
        <div>
          <strong>Paiement Wave Business :</strong> Après validation sur WhatsApp, il vous suffira de sélectionner <em>« Paiement Marchand »</em> dans votre application Wave et d'entrer <strong>Diodio GLOW Skin</strong> ou de scanner notre code QR officiel. Frais : 0 FCFA.
        </div>
      </div>
    `,
    'Orange Money': `
      <div class="instruction-content">
        <img src="assets/images/orange_money_official_icon.png" alt="Orange Money" width="24" height="24" style="border-radius: 6px; flex-shrink: 0;">
        <div>
          <strong>Paiement Orange Money :</strong> Effectuez votre dépôt ou transfert marchand vers le numéro officiel <strong>+221 78 451 09 09</strong>. Mentionnez la référence de commande dans le message de validation.
        </div>
      </div>
    `,
    'Paiement à la livraison': `
      <div class="instruction-content">
        <span class="svg-icon gold" style="width: 18px; height: 18px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </span>
        <div>
          <strong>Paiement en Espèces au Coursier :</strong> Préparez l'appoint exact en espèces lors de la remise de votre colis par le livreur Tiak-Tiak à Dakar.
        </div>
      </div>
    `
  };

  // 4. Fonction de rendu du panier dans le checkout
  function renderCheckoutSummary() {
    const cart = window.cartApp ? window.cartApp.cart : (JSON.parse(localStorage.getItem('diodio_cart')) || []);
    
    if (cart.length === 0) {
      itemsListEl.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <p style="color: var(--color-dark-muted); font-size: 0.9rem; margin-bottom: 1rem;">Votre panier est actuellement vide.</p>
          <a href="catalogue.html" class="btn-primary-luxury" style="padding: 0.65rem 1.25rem; font-size: 0.8125rem;">
            <span>Découvrir le catalogue</span>
          </a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '0 FCFA';
      if (totalQtyEl) totalQtyEl.textContent = '0';
      if (grandTotalEl) grandTotalEl.textContent = '0 FCFA';
      if (submitBtn) submitBtn.disabled = true;
      return;
    }

    if (submitBtn) submitBtn.disabled = false;

    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.prix * (item.quantity || 1)), 0);

    itemsListEl.innerHTML = cart.map(item => `
      <div class="summary-item-row">
        <img src="${item.img}" alt="${item.nom}" class="summary-item-thumb">
        <div class="summary-item-details">
          <h5 class="summary-item-name">${item.nom}</h5>
          <div class="summary-item-meta">${item.format} • Qté: ${item.quantity}</div>
        </div>
        <div class="summary-item-price">${(item.prix * item.quantity).toLocaleString('fr-FR')} F</div>
      </div>
    `).join('');

    if (totalQtyEl) totalQtyEl.textContent = totalQty;
    if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString('fr-FR')} FCFA`;

    // Calcul avec la livraison
    updateTotals(subtotal);
  }

  function updateTotals(subtotal) {
    if (zoneNameEl) zoneNameEl.textContent = currentZone.name;

    if (feeEl) {
      if (currentZone.key === 'international') {
        feeEl.textContent = 'Sur devis';
      } else {
        feeEl.textContent = `${currentZone.fee.toLocaleString('fr-FR')} FCFA`;
      }
    }

    if (grandTotalEl) {
      const grandTotal = subtotal + currentZone.fee;
      grandTotalEl.textContent = `${grandTotal.toLocaleString('fr-FR')} FCFA`;
    }
  }

  // 5. Écouteurs pour les zones de livraison
  zoneCards.forEach(card => {
    card.addEventListener('click', () => {
      zoneCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const zoneKey = card.dataset.zone;
      const feeVal = parseInt(card.dataset.fee) || 0;
      currentZone = {
        key: zoneKey,
        name: ZONE_INFO[zoneKey]?.name || 'Zone de livraison',
        fee: feeVal
      };

      const cart = window.cartApp ? window.cartApp.cart : [];
      const subtotal = cart.reduce((sum, item) => sum + (item.prix * (item.quantity || 1)), 0);
      updateTotals(subtotal);
    });
  });

  // 6. Écouteurs pour les modes de paiement
  paymentCards.forEach(card => {
    card.addEventListener('click', () => {
      paymentCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        currentPayment = radio.value;
      }
      if (instructionsBox && PAYMENT_INSTRUCTIONS[currentPayment]) {
        instructionsBox.innerHTML = PAYMENT_INSTRUCTIONS[currentPayment];
      }
    });
  });

  // 7. Validation & Transmission de la commande sur WhatsApp
  function submitOrder() {
    const cart = window.cartApp ? window.cartApp.cart : [];
    if (cart.length === 0) {
      if (window.cartApp) window.cartApp.showToast("Votre panier est vide !");
      return;
    }

    const fullname = document.getElementById('order-fullname')?.value.trim();
    const phone = document.getElementById('order-phone')?.value.trim();
    const address = document.getElementById('order-address')?.value.trim();
    const notes = document.getElementById('order-notes')?.value.trim();

    if (!fullname || !phone || !address) {
      alert("Veuillez renseigner votre Nom, votre Numéro WhatsApp et votre Adresse complète.");
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.prix * (item.quantity || 1)), 0);
    const totalGrand = subtotal + currentZone.fee;

    const itemsSummary = cart.map(item => `• ${item.quantity}x ${item.nom} (${item.format}) — ${(item.prix * item.quantity).toLocaleString('fr-FR')} FCFA`).join('%0A');

    const targetPhone = ZONE_INFO[currentZone.key]?.phone || '785466969';

    const message = `*COMMANDE OFFICIELLE MAISON DIODIO GLOW SKIN*%0A` +
      `Référence : *${orderRef}*%0A%0A` +
      `📋 *DÉTAIL DU PANIER :*%0A${itemsSummary}%0A%0A` +
      `💰 *Sous-total soins :* ${subtotal.toLocaleString('fr-FR')} FCFA%0A` +
      `🚚 *Frais de livraison :* ${currentZone.key === 'international' ? 'Sur Devis DHL' : currentZone.fee.toLocaleString('fr-FR') + ' FCFA'} (${currentZone.name})%0A` +
      `✨ *TOTAL GÉNÉRAL À RÉGLER :* *${totalGrand.toLocaleString('fr-FR')} FCFA*%0A%0A` +
      `📍 *COORDONNÉES DE LIVRAISON :*%0A` +
      `• Nom de la cliente : *${fullname}*%0A` +
      `• Téléphone joignable : *${phone}*%0A` +
      `• Adresse & Repère : ${address}%0A` +
      (notes ? `• Consignes livreur : ${notes}%0A` : '') +
      `%0A💳 *MODE DE RÈGLEMENT CHOISI :*%0A` +
      `• *${currentPayment}*%0A%0A` +
      `Merci de me confirmer la préparation de mon colis et l'expédition !`;

    if (window.cartApp) {
      window.cartApp.showToast("Votre commande officielle a été générée !");
    }

    window.open(`https://wa.me/221${targetPhone}?text=${message}`, '_blank');
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      submitOrder();
    });
  }

  // Initialisation du récapitulatif
  renderCheckoutSummary();
}

// ==========================================================================
// ESPACE GÉRANTE & DASHBOARD COMMERCIAL (admin.html)
// ==========================================================================
function initAdminDashboard() {
  const tbody = document.getElementById('admin-orders-tbody');
  const clockEl = document.getElementById('admin-live-clock');
  const injectBtn = document.getElementById('btn-inject-demo-order');
  const filterTabs = document.getElementById('admin-status-filters');
  const revenueValEl = document.getElementById('kpi-revenue-val');
  const ordersCountEl = document.getElementById('kpi-orders-count');
  const deliveriesValEl = document.getElementById('kpi-deliveries-val');

  if (!tbody) return;

  // 1. Horloge en temps réel de Dakar
  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Dakar', hour12: false });
    clockEl.textContent = `Dakar : ${timeStr}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Jeu de données des commandes du jour
  let adminOrders = [
    {
      id: "DG-2026-9281",
      heure: "14:22",
      client: "Aïda Ndiaye",
      phone: "+221 77 654 32 10",
      zone: "Ouest-Foire (VDN)",
      zoneType: "Dakar Zone 1",
      items: "1x Lait Teint Noir GM, 1x Savon Noir",
      gamme: "Black Skin",
      paiement: "Wave Business",
      paiementType: "wave",
      total: 19000,
      statut: "Remis au coursier"
    },
    {
      id: "DG-2026-9278",
      heure: "13:50",
      client: "Fatoumata Sow",
      phone: "+221 78 412 89 00",
      zone: "Almadies Zone 8",
      zoneType: "Dakar Zone 1",
      items: "1x Coffret Égérie Kiné Ndiaye Complet",
      gamme: "Collagène",
      paiement: "Wave Business",
      paiementType: "wave",
      total: 44000,
      statut: "En préparation"
    },
    {
      id: "DG-2026-9265",
      heure: "12:15",
      client: "Mariama Ba",
      phone: "+221 76 890 12 34",
      zone: "Mermoz Ancienne Piste",
      zoneType: "Dakar Zone 1",
      items: "2x Lait Caramel GM, 1x Gommage VitC",
      gamme: "Caramel",
      paiement: "Orange Money",
      paiementType: "om",
      total: 38000,
      statut: "Livré & Encaissé"
    },
    {
      id: "DG-2026-9254",
      heure: "11:40",
      client: "Coumba Traoré",
      phone: "+221 77 123 99 88",
      zone: "Thiès (Quartier Dixième)",
      zoneType: "Régions Sénégal",
      items: "1x Gamme SuperGlow Intégrale",
      gamme: "SuperGlow",
      paiement: "Wave Business",
      paiementType: "wave",
      total: 32000,
      statut: "Remis au coursier"
    },
    {
      id: "DG-2026-9241",
      heure: "10:30",
      client: "Aminata Kane",
      phone: "+33 6 12 34 56 78",
      zone: "Paris, France (DHL Express)",
      zoneType: "International",
      items: "3x Lait Collagène GM, 2x Savons 3Jours",
      gamme: "Collagène",
      paiement: "Wave Business",
      paiementType: "wave",
      total: 76000,
      statut: "En préparation"
    },
    {
      id: "DG-2026-9230",
      heure: "09:45",
      client: "Ndeye Astou Diop",
      phone: "+221 78 555 43 21",
      zone: "Plateau, Rue Carnot",
      zoneType: "Dakar Zone 2",
      items: "1x Pack Quintos Mains & Pieds, 1x Huile Shine",
      gamme: "Anti-Quintos",
      paiement: "Paiement à la livraison",
      paiementType: "cash",
      total: 21500,
      statut: "Livré & Encaissé"
    }
  ];

  let currentFilter = 'all';

  // 3. Calcul & Rendu des indicateurs
  function updateKPIs() {
    const totalRev = adminOrders.reduce((sum, o) => sum + o.total, 0) + 594500; // base cumulée du jour
    if (revenueValEl) revenueValEl.textContent = `${totalRev.toLocaleString('fr-FR')} FCFA`;

    const totalOrdersCount = adminOrders.length + 28;
    if (ordersCountEl) ordersCountEl.textContent = totalOrdersCount;

    const inDelivery = adminOrders.filter(o => o.statut === 'Remis au coursier').length + 8;
    if (deliveriesValEl) deliveriesValEl.textContent = `${inDelivery} en cours`;
  }

  // 4. Rendu du tableau
  function renderOrdersTable() {
    const filtered = currentFilter === 'all' 
      ? adminOrders 
      : adminOrders.filter(o => o.statut === currentFilter);

    tbody.innerHTML = filtered.map(order => {
      let statusClass = 'prep';
      if (order.statut === 'Remis au coursier') statusClass = 'delivery';
      if (order.statut === 'Livré & Encaissé') statusClass = 'delivered';

      return `
        <tr id="row-${order.id}">
          <td><span class="order-ref-code">#${order.id}</span></td>
          <td style="color: var(--color-dark-muted); font-size: 0.775rem;">${order.heure}</td>
          <td class="client-name-cell">
            <strong>${order.client}</strong>
            <span>${order.phone}</span>
          </td>
          <td>
            <div style="font-weight: 600; color: var(--color-dark);">${order.zone}</div>
            <span style="font-size: 0.725rem; color: var(--color-gold);">${order.zoneType}</span>
          </td>
          <td>
            <div style="font-size: 0.8rem; color: var(--color-dark);">${order.items}</div>
            <span style="font-size: 0.7rem; color: var(--color-dark-muted);">Gamme : ${order.gamme}</span>
          </td>
          <td>
            <span class="badge-payment-pill ${order.paiementType}" style="display: inline-flex; align-items: center; gap: 5px;">
              ${order.paiementType === 'wave' ? '<img src="assets/images/wave_official_icon.png" width="15" height="15" style="border-radius: 3px;">' : (order.paiementType === 'om' ? '<img src="assets/images/orange_money_official_icon.png" width="15" height="15" style="border-radius: 3px;">' : '')}
              <span>${order.paiement}</span>
            </span>
          </td>
          <td>
            <strong style="font-family: var(--font-serif); font-size: 0.95rem; color: var(--color-dark);">
              ${order.total.toLocaleString('fr-FR')} F
            </strong>
          </td>
          <td>
            <select class="status-select-custom ${statusClass}" onchange="window.adminApp.changeStatus('${order.id}', this.value)">
              <option value="En préparation" ${order.statut === 'En préparation' ? 'selected' : ''}>En préparation</option>
              <option value="Remis au coursier" ${order.statut === 'Remis au coursier' ? 'selected' : ''}>En livraison Tiak-Tiak</option>
              <option value="Livré & Encaissé" ${order.statut === 'Livré & Encaissé' ? 'selected' : ''}>Livré & Encaissé</option>
            </select>
          </td>
          <td>
            <a href="https://wa.me/221785466969?text=Bonjour%20Livreur%20Tiak-Tiak,%20voici%20la%20course%20%23${order.id}%20:%0A•%20Cliente%20:%20${encodeURIComponent(order.client)}%20(${encodeURIComponent(order.phone)})%0A•%20Adresse%20:%20${encodeURIComponent(order.zone)}%0A•%20Montant%20:%20${order.total}%20FCFA%20(${encodeURIComponent(order.paiement)})" target="_blank" rel="noopener noreferrer" class="btn-dispatch-coursier" title="Transmettre la fiche au coursier WhatsApp">
              <span class="svg-icon" style="width: 13px; height: 13px;">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.77C7.62 10.97 8.5 12.13 8.62 12.29C8.75 12.45 10.3 14.86 12.71 15.86C14.71 16.69 15.12 16.53 15.56 16.49C16 16.45 17 15.9 17.2 15.32C17.41 14.75 17.41 14.26 17.34 14.15C17.28 14.05 17.11 13.99 16.85 13.86C16.6 13.73 15.36 13.12 15.13 13.04C14.9 12.95 14.73 12.91 14.56 13.16C14.39 13.41 13.91 13.99 13.77 14.15C13.62 14.31 13.48 14.33 13.22 14.21C12.97 14.08 12.15 13.81 11.18 12.95C10.43 12.28 9.92 11.45 9.77 11.2C9.62 10.95 9.76 10.81 9.88 10.69C10 10.58 10.14 10.4 10.27 10.25C10.4 10.1 10.44 9.98 10.53 9.82C10.62 9.66 10.57 9.51 10.51 9.38C10.45 9.26 9.96 8.07 9.76 7.57C9.56 7.09 9.35 7.15 9.19 7.15L9.11 7.44Z"/>
                </svg>
              </span>
              <span>Transmettre</span>
            </a>
          </td>
        </tr>
      `;
    }).join('');

    updateKPIs();
  }

  // 5. Filtrage par onglets
  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-filter-pill');
      if (btn) {
        currentFilter = btn.dataset.filter;
        filterTabs.querySelectorAll('.admin-filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderOrdersTable();
      }
    });
  }

  // 6. Injection d'une commande simulée pour l'effet WOW
  if (injectBtn) {
    injectBtn.addEventListener('click', () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      const randomRef = `DG-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const demoPool = [
        { client: "Salimata Fall", phone: "+221 77 400 11 22", zone: "Yoff Tonghor", zoneType: "Dakar Zone 1", items: "1x Coffret Fatou Ndiaye Teint Noir", gamme: "Black Skin", total: 33000, paiement: "Wave Business", paiementType: "wave" },
        { client: "Khadija Cissé", phone: "+221 78 999 12 00", zone: "Sacré-Cœur 3", zoneType: "Dakar Zone 1", items: "2x Lait Collagène GM, 1x Gel Douche", gamme: "Collagène", total: 46000, paiement: "Orange Money", paiementType: "om" },
        { client: "Awa Gueye", phone: "+221 70 888 77 66", zone: "Saint-Louis (Ndar)", zoneType: "Régions Sénégal", items: "1x Gamme Caramel Complète", gamme: "Caramel", total: 37000, paiement: "Wave Business", paiementType: "wave" }
      ];

      const chosen = demoPool[Math.floor(Math.random() * demoPool.length)];

      const newOrder = {
        id: randomRef,
        heure: timeStr,
        client: chosen.client,
        phone: chosen.phone,
        zone: chosen.zone,
        zoneType: chosen.zoneType,
        items: chosen.items,
        gamme: chosen.gamme,
        paiement: chosen.paiement,
        paiementType: chosen.paiementType,
        total: chosen.total,
        statut: "En préparation"
      };

      adminOrders.unshift(newOrder);
      renderOrdersTable();

      if (window.cartApp) {
        window.cartApp.showToast(`Nouvelle commande en direct : #${randomRef} (${chosen.total.toLocaleString('fr-FR')} F) !`);
      }
    });
  }

  // 7. Méthodes exposées sur window.adminApp
  window.adminApp = {
    changeStatus: (orderId, newStatus) => {
      const order = adminOrders.find(o => o.id === orderId);
      if (order) {
        order.statut = newStatus;
        if (window.cartApp) {
          window.cartApp.showToast(`Statut de la commande #${orderId} : ${newStatus}`);
        }
        renderOrdersTable();
      }
    },
    exportDeliveriesSheet: () => {
      const win = window.open('', '_blank');
      const ordersHtml = adminOrders.map(o => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">#${o.id}</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>${o.client}</strong> (${o.phone})</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${o.zone}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${o.items}</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>${o.total.toLocaleString('fr-FR')} FCFA</strong> (${o.paiement})</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${o.statut}</td>
        </tr>
      `).join('');

      win.document.write(`
        <html>
        <head>
          <title>Feuille de Route Coursiers — Maison Diodio Glow Skin Dakar</title>
          <style>
            body { font-family: sans-serif; padding: 2rem; color: #333; }
            h2 { color: #B8236B; margin-bottom: 0.25rem; }
            table { width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: 0.85rem; }
            th { background: #FCF9F9; text-align: left; padding: 8px; border: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <h2>Maison Diodio Glow Skin Dakar — Feuille de Route Expéditions</h2>
          <p>Date : ${new Date().toLocaleDateString('fr-FR')} • Responsable Logistique Ouest-Foire • Standard : 33.844.15.15</p>
          <table>
            <thead>
              <tr>
                <th>Réf</th>
                <th>Cliente</th>
                <th>Adresse & Quartier</th>
                <th>Soins</th>
                <th>À Encaisser</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>${ordersHtml}</tbody>
          </table>
          <script>window.print();<\/script>
        </body>
        </html>
      `);
      win.document.close();
    }
  };

  // Initialisation du tableau
  renderOrdersTable();
}

// ==========================================================================
// GESTION DU MENU MOBILE (NAVIGATION TIROIR COULISSANT)
// ==========================================================================
window.openMobileNav = function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const triggerBtn = document.getElementById('mobile-menu-trigger');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};

window.closeMobileNav = function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const triggerBtn = document.getElementById('mobile-menu-trigger');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

window.toggleMobileNav = function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer && drawer.classList.contains('active')) {
    window.closeMobileNav(e);
  } else {
    window.openMobileNav(e);
  }
};

function initMobileNav() {
  const triggerBtn = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (triggerBtn) {
    triggerBtn.onclick = (e) => window.toggleMobileNav(e);
  }

  if (closeBtn) {
    closeBtn.onclick = (e) => window.closeMobileNav(e);
  }

  if (overlay) {
    overlay.onclick = (e) => window.closeMobileNav(e);
  }

  if (drawer) {
    const navLinks = drawer.querySelectorAll('.mobile-nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => window.closeMobileNav());
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMobileNav();
    }
  });
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
  window.cartApp = new CartManager();
  initMobileNav();
  initDiagnostic();
  initCatalogue();
  initEgeriesSlider();
  initBookingForm();
  initCheckout();
  initAdminDashboard();
});





