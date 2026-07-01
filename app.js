// ===========================
// AQUA VISTA VILLAS — APP.JS
// ===========================

const R2 = 'https://pub-5bb5c8088cdd4b5d83de5ef601a7f359.r2.dev';

const VILLAS = [
  {
    id: 'aqu25',
    name: 'Aqua Vista 25',
    thaiName: 'Villa 25',
    slug: 'aqua-vista-25',
    tagline: 'Luxury Pool Villa',
    description: 'Aqua Vista 25 is a beautifully designed luxury villa within the prestigious Kanda Residence estate. Featuring a private pool, tropical gardens, and sophisticated interiors, this villa offers the perfect Koh Samui escape.',
    longDescription: 'Set within a secure, manicured compound, Aqua Vista 25 combines contemporary design with the warmth of Thai hospitality. The villa features generously proportioned living areas that open seamlessly to the outdoor pool terrace, creating a fluid indoor-outdoor lifestyle. Ideal for families or groups seeking privacy, comfort, and the natural beauty of Samui.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '280 sqm',
    amenities: ['Private Pool', 'Tropical Garden', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Outdoor Dining', 'Sunbeds', 'Smart TV', 'Safe Parking'],
    hero: `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(1).jpg`,
    images: [
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(1).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(2).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(3).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(4).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(5).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(6).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(7).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(8).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(9).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(10).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(11).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(12).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(13).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(14).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(15).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(16).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(17).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(18).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(19).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(20).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(21).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(22).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(23).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(24).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(25).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(26).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(27).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(28).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(29).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(30).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(31).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(32).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(33).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(34).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(35).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(36).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(37).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(38).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(39).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(40).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(41).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(42).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(43).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(44).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(45).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(46).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(47).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(48).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(49).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(50).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(51).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(52).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(53).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(54).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(55).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(56).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(57).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(58).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(59).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(60).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(61).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(62).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(63).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(64).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(65).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(66).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(67).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(68).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(69).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(70).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(71).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(72).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(73).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(74).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(75).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(76).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(77).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(78).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(79).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(80).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(81).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(82).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(83).jpg`,
      `${R2}/Aqua%20Vista%2025%20(AQU25)/AQU25%20(All)/Kanda%20-%20Villa%2025%20-%20December%202019%20(84).jpg`,
    ]
  },
  {
    id: 'aqu26',
    name: 'Aqua Vista 26',
    thaiName: 'Villa 26',
    slug: 'aqua-vista-26',
    tagline: 'Private Estate Villa',
    description: 'Aqua Vista 26 is a stunning private villa set within the Kanda Residence compound. With its sparkling pool, lush surroundings, and elegant interiors, it offers an unrivalled retreat on Koh Samui.',
    longDescription: 'Thoughtfully designed for those who value privacy and space, Aqua Vista 26 delivers a seamless holiday experience from the moment you arrive. The open-plan living areas connect directly to the pool terrace, where you can lounge in complete seclusion. Premium furnishings, a fully equipped kitchen, and attentive housekeeping ensure everything is taken care of throughout your stay.',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: '275 sqm',
    amenities: ['Private Pool', 'Tropical Garden', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Outdoor Dining', 'Sunbeds', 'Smart TV', 'Safe Parking'],
    hero: `${R2}/Aqua%20Vista%2026%20(AQU26)/AQU26%20(All)/1.jpg`,
    images: Array.from({length: 81}, (_, i) => `${R2}/Aqua%20Vista%2026%20(AQU26)/AQU26%20(All)/${i + 1}.jpg`)
  },
  {
    id: 'aqu28',
    name: 'Aqua Vista 28',
    thaiName: 'Villa 28',
    slug: 'aqua-vista-28',
    tagline: 'Signature Residence Villa',
    description: 'Aqua Vista 28 is the flagship villa of the Kanda Residence estate — a signature property of exceptional size and style. With over 234 professional photographs, every corner of this villa has been crafted to impress.',
    longDescription: 'The largest and most photographed of the Aqua Vista collection, Villa 28 sets the benchmark for luxury living on Koh Samui. Expansive living spaces, a statement pool, and resort-quality amenities come together in a property designed to be as impressive as it is comfortable. Whether hosting a family gathering or a milestone celebration, Aqua Vista 28 delivers an experience that will not be forgotten.',
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    size: '400 sqm',
    amenities: ['Private Pool', 'Tropical Garden', 'Air Conditioning', 'Full Kitchen', 'WiFi', 'Daily Housekeeping', 'Outdoor Sala', 'BBQ Area', 'Sunbeds', 'Smart TV', 'Safe Parking', 'Pool Table'],
    hero: `${R2}/Aqua%20Vista%2028%20(AQU28)/Kanda%2028%20-%20Sep%202024%20HD/Kanda%20Residence%20-%20Villa%2028%20-%20September%202024%20(1).jpg`,
    images: Array.from({length: 100}, (_, i) => `${R2}/Aqua%20Vista%2028%20(AQU28)/Kanda%2028%20-%20Sep%202024%20HD/Kanda%20Residence%20-%20Villa%2028%20-%20September%202024%20(${i + 1}).jpg`)
  },
];

// ===== LIGHTBOX =====
let lbImages = [];
let lbIndex = 0;

function openLightbox(images, index) {
  lbImages = images;
  lbIndex = index;
  document.getElementById('lbImg').src = lbImages[lbIndex];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  document.getElementById('lbImg').src = lbImages[lbIndex];
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
  if (e.key === 'Escape') closeLightbox();
});

// ===== NAVIGATION =====
function navigate(page, villaId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  if (page === 'villa-detail' && villaId) {
    renderVillaDetail(villaId);
    document.getElementById('page-villa-detail').classList.add('active');
    window.location.hash = villaId;
  } else {
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    window.location.hash = page === 'home' ? '' : page;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

// ===== RENDER VILLA CARDS (HOME) =====
function renderHomeCards() {
  const container = document.getElementById('homeVillaCards');
  container.innerHTML = VILLAS.map(v => `
    <div class="villa-card" onclick="navigate('villa-detail', '${v.id}')">
      <img class="villa-card-img" src="${v.hero}" alt="${v.name}" loading="lazy" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="villa-card-body">
        <span class="villa-card-tag">${v.tagline}</span>
        <h3>${v.name}</h3>
        <p>${v.description.substring(0, 100)}...</p>
        <div class="villa-card-link">View Villa</div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER VILLA CARDS (VILLAS PAGE) =====
function renderVillasPage() {
  const container = document.getElementById('villasPageCards');
  container.innerHTML = VILLAS.map(v => `
    <div class="villa-card-full" onclick="navigate('villa-detail', '${v.id}')">
      <img class="villa-card-full-img" src="${v.hero}" alt="${v.name}" loading="lazy" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="villa-card-full-body">
        <span class="villa-card-tag">${v.tagline} · ${v.thaiName}</span>
        <h3>${v.name}</h3>
        <div class="villa-meta">
          <div class="villa-meta-item"><strong>${v.bedrooms}</strong><span>Bedrooms</span></div>
          <div class="villa-meta-item"><strong>${v.bathrooms}</strong><span>Bathrooms</span></div>
          <div class="villa-meta-item"><strong>${v.guests}</strong><span>Guests</span></div>
          <div class="villa-meta-item"><strong>${v.size}</strong><span>Size</span></div>
        </div>
        <p>${v.description}</p>
        <button class="btn-outline">View Villa →</button>
      </div>
    </div>
  `).join('');
}

// ===== RENDER VILLA DETAIL =====
let galleryShown = 9;

function renderVillaDetail(id) {
  const v = VILLAS.find(x => x.id === id);
  if (!v) return;
  galleryShown = 9;

  const content = document.getElementById('villaDetailContent');
  content.innerHTML = `
    <div class="detail-hero">
      <img src="${v.hero}" alt="${v.name}" onerror="this.src='${v.images[1] || v.hero}'" />
      <div class="detail-hero-overlay">
        <div class="detail-hero-text">
          <button class="back-btn" onclick="navigate('villas')">← Back to Villas</button>
          <span class="villa-unit">${v.thaiName} · ${v.tagline}</span>
          <h1>${v.name}</h1>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-grid">
        <div class="detail-desc">
          <h2>About This Villa</h2>
          <p>${v.description}</p>
          <p>${v.longDescription}</p>
          <div class="villa-meta" style="margin-top:2rem">
            <div class="villa-meta-item"><strong>${v.bedrooms}</strong><span>Bedrooms</span></div>
            <div class="villa-meta-item"><strong>${v.bathrooms}</strong><span>Bathrooms</span></div>
            <div class="villa-meta-item"><strong>${v.guests}</strong><span>Guests</span></div>
            <div class="villa-meta-item"><strong>${v.size}</strong><span>Size</span></div>
          </div>
          <div class="detail-amenities">
            <h3>Amenities</h3>
            <div class="amenity-list">
              ${v.amenities.map(a => `<div class="amenity-item">${a}</div>`).join('')}
            </div>
          </div>
        </div>
        <div class="detail-sidebar">
          <div class="enquiry-box">
            <h3>Book This Villa</h3>
            <p>Contact us to check availability and rates for ${v.name}.</p>
            <a href="mailto:harvey@sunshinesamuivillas.com?subject=Enquiry: ${encodeURIComponent(v.name)}" class="btn-hero" style="text-decoration:none;display:block;text-align:center">Send Enquiry</a>
          </div>
        </div>
      </div>
      <div class="gallery-section">
        <h2>Gallery</h2>
        <div class="gallery-grid" id="galleryGrid-${v.id}"></div>
        ${v.images.length > 9 ? `<button class="load-more-btn" id="loadMoreBtn" onclick="loadMoreGallery('${v.id}')">Load More Photos</button>` : ''}
      </div>
    </div>
  `;
  renderGallery(v.id);
}

function renderGallery(id) {
  const v = VILLAS.find(x => x.id === id);
  if (!v) return;
  const grid = document.getElementById('galleryGrid-' + id);
  if (!grid) return;
  const toShow = v.images.slice(0, galleryShown);
  grid.innerHTML = toShow.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox(${JSON.stringify(v.images)}, ${i})">
      <img src="${img}" alt="${v.name} photo ${i+1}" loading="lazy" onerror="this.parentElement.style.display='none'" />
    </div>
  `).join('');
}

function loadMoreGallery(id) {
  const v = VILLAS.find(x => x.id === id);
  if (!v) return;
  galleryShown = Math.min(galleryShown + 24, v.images.length);
  renderGallery(id);
  if (galleryShown >= v.images.length) {
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.style.display = 'none';
  }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
function closeMobileMenu() {
  document.querySelector('.nav-links').classList.remove('open');
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  renderHomeCards();
  renderVillasPage();

  const hash = window.location.hash.replace('#', '');
  if (hash && VILLAS.find(v => v.id === hash)) {
    navigate('villa-detail', hash);
  } else if (hash === 'villas' || hash === 'location' || hash === 'contact') {
    navigate(hash);
  } else {
    navigate('home');
  }
});
