// Nomor WhatsApp belum tersedia. Isi dengan kode negara dan nomor tanpa tanda + jika sudah ada.
const WHATSAPP_NUMBER = '6281932977629';

const cameraProducts = [
  { id: 'canon-m100', name: 'Canon M100', category: 'kamera', image: 'CAM 1.jpeg', price24: 180000, price48: 360000 },
  { id: 'canon-a2500', name: 'Canon A2500', category: 'kamera', image: 'CAM 2.jpeg', price24: 95000, price48: 180000 },
  { id: 'fujifilm-xa5', name: 'Fujifilm XA5', category: 'kamera', image: 'CAM 3.jpeg', price24: 170000, price48: 335000 },
  { id: 'sony-dsc-w510', name: 'Sony DSC W510', category: 'kamera', image: 'CAM 4.jpeg', price24: 85000, price48: 165000 },
  { id: 'fujifilm-xa3', name: 'Fujifilm XA3', category: 'kamera', image: 'CAM 5.jpeg', price24: 150000, price48: 295000 },
  { id: 'olympus-tg-320', name: 'Olympus TG 320', category: 'kamera', image: 'CAM 6.jpeg', price24: 75000, price48: 145000 }
];

const extraProducts = [
  { id: 'instax-mini-13', name: 'Instax Mini 13', category: 'accessories', note: 'Camera only', price24: 45000, visual: 'INSTAX' },
  { id: 'paper-refill-putih', name: 'Paper Refill Putih Polos', category: 'accessories', note: '1 pack', price24: 170000, visual: 'PAPER' },
  { id: 'instax-bundle', name: 'Bundling Kamera + Paper', category: 'accessories', note: 'Putih polos, 1 pack', price24: 210000, visual: 'BUNDLE' },
  { id: 'jasa-pindahan-foto', name: 'Jasa Pindahan Foto', category: 'accessories', price24: 15000, visual: 'TRANSFER' },
  { id: 'type-c-lighting', name: 'Type-C Lighting', category: 'accessories', price24: 20000, visual: 'LIGHT' }
];

const galleryImageSets = [
  ['16.01.36', 1], ['16.01.37', 2], ['16.01.38', 2], ['16.01.39', 2], ['16.01.40', 2],
  ['16.01.41', 0], ['16.01.42', 3], ['16.01.43', 2], ['16.01.44', 2], ['16.01.45', 3],
  ['16.01.46', 2], ['16.01.47', 2], ['16.01.48', 3], ['16.01.49', 2], ['16.01.50', 3],
  ['16.01.51', 2], ['16.01.52', 2], ['16.01.53', 2], ['16.01.54', 2], ['16.01.55', 2],
  ['16.01.56', 2], ['16.01.57', 3], ['16.01.58', 2], ['16.01.59', 1], ['16.02.00', 3],
  ['16.02.01', 2], ['16.02.02', 2], ['16.02.03', 3], ['16.02.04', 1], ['16.02.05', 2],
  ['16.02.06', 3], ['16.02.07', 0], ['16.02.08', 0]
];

const products = [...cameraProducts, ...extraProducts];
const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const root = document.body.dataset.root || '.';
const pagePath = (name) => `${root}/pages/${name}.html`;

function whatsappUrl(productName = '') {
  const message = productName
    ? `Halo Teman Camera! Saya ingin menyewa ${productName}. Apakah tersedia untuk tanggal yang saya inginkan?`
    : 'Halo Teman Camera! Saya ingin bertanya tentang ketersediaan dan proses booking.';
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  const destination = number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  return destination;
}

function renderNavigation() {
  const header = document.querySelector('#site-header');
  if (!header) return;
  const links = [
    ['Home', `${root}/index.html`, 'index.html'],
    ['Katalog', pagePath('katalog'), 'katalog.html'],
    ['Layanan Kami', pagePath('layanan'), 'layanan.html'],
    ['Galeri Testimoni', pagePath('galeri'), 'galeri.html'],
    ['Rules Sewa', pagePath('rules'), 'rules.html'],
    ['Tentang Kami', pagePath('tentang'), 'tentang.html'],
    ['Kontak', pagePath('kontak'), 'kontak.html']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  header.innerHTML = `
    <nav class="nav-shell" aria-label="Navigasi utama">
      <a class="brand" href="${root}/index.html" aria-label="TEMAN CAMERA, ke halaman utama"><span class="brand-mark"><img src="${root}/aset/logo%20temankamera.jpeg" alt=""></span><span>TEMAN CAMERA</span></a>
      <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="main-menu"><span aria-hidden="true">☰</span></button>
      <ul class="nav-links" id="main-menu">${links.map(([label, href, file]) => `<li><a href="${href}"${current === file ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}<li><a class="mobile-book" data-booking href="${whatsappUrl()}">Booking Sekarang</a></li></ul>
      <a class="button button-primary nav-book" data-booking href="${whatsappUrl()}">Booking Sekarang <span aria-hidden="true">↗</span></a>
    </nav>`;

  const menuButton = header.querySelector('.menu-toggle');
  const menu = header.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Buka menu' : 'Tutup menu');
    menu.classList.toggle('is-open', !open);
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Buka menu');
      menu.classList.remove('is-open');
    }
  });
}

function renderFooter() {
  const footer = document.querySelector('#site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="page-wrap">
      <div class="footer-main">
        <div><a class="brand footer-brand" href="${root}/index.html"><span class="brand-mark"><img src="${root}/aset/logo%20temankamera.jpeg" alt=""></span><span>TEMAN CAMERA</span></a><p class="footer-tagline">Your friend to capture every moment.</p></div>
        <ul class="footer-links" aria-label="Navigasi footer"><li><a href="${root}/index.html">Home</a></li><li><a href="${pagePath('katalog')}">Katalog</a></li><li><a href="${pagePath('layanan')}">Layanan Kami</a></li><li><a href="${pagePath('galeri')}">Galeri Testimoni</a></li><li><a href="${pagePath('rules')}">Rules Sewa</a></li><li><a href="${pagePath('tentang')}">Tentang Kami</a></li><li><a href="${pagePath('kontak')}">Kontak</a></li></ul>
        <div class="footer-social"><strong>Ikuti cerita kami</strong><div class="social-links"><a class="social-link" href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Teman Camera"><img src="${root}/aset/LOGO%20WA.jpg" alt=""><span>WhatsApp</span></a><a class="social-link" href="https://www.instagram.com/temankamera_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @temankamera_"><img src="${root}/aset/LOGO%20IG.jpg" alt=""><span>Instagram</span></a><a class="social-link" href="https://www.tiktok.com/@temankamera_" target="_blank" rel="noopener noreferrer" aria-label="TikTok @temankamera_"><img src="${root}/aset/LOGO%20TIKTOK.jpg" alt=""><span>TikTok</span></a></div></div>
      </div>
      <div class="footer-bottom"><p>© ${new Date().getFullYear()} TEMAN CAMERA</p><p>Your friend to capture every moment.</p></div>
    </div>`;
}

function productCard(product) {
  const isCamera = product.category === 'kamera';
  const photo = isCamera
    ? `<img src="${root}/PRODUK%20YANG%20DI%20SEWA/${encodeURIComponent(product.image)}" alt="${product.name}" loading="lazy">`
    : `<span class="no-photo-tile" aria-hidden="true">${product.visual}</span>`;
  const secondPrice = isCamera ? `<div class="price-line"><span>48 Jam</span><strong>${money.format(product.price48)}</strong></div>` : '';
  const href = `${pagePath('detail')}?id=${encodeURIComponent(product.id)}`;
  return `<article class="product-card ${isCamera ? '' : 'accessory-card'}" data-category="${product.category}">
    <div class="product-photo"><span class="availability">Cek ketersediaan</span>${photo}</div>
    <div class="product-body"><span class="product-kind">${isCamera ? 'Kamera' : 'Accessories'}</span><h3>${product.name}</h3>
      <div class="price-lines"><div class="price-line"><span>${isCamera ? '24 Jam' : product.note || 'Harga'}</span><strong>${money.format(product.price24)}</strong></div>${secondPrice}</div>
      <div class="product-actions"><a class="button button-secondary" href="${href}">Lihat Detail</a><a class="button button-primary" data-booking="${product.name}" href="${whatsappUrl(product.name)}">Booking</a></div>
    </div>
  </article>`;
}

function renderProducts() {
  const featured = document.querySelector('[data-featured-products]');
  if (featured) featured.innerHTML = cameraProducts.slice(0, 3).map(productCard).join('');

  const catalog = document.querySelector('[data-catalog-products]');
  if (!catalog) return;
  catalog.innerHTML = products.map(productCard).join('');
  const empty = document.querySelector('[data-empty-state]');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];

  function filterProducts(category) {
    filterButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    let visibleCount = 0;
    catalog.querySelectorAll('.product-card').forEach((card) => {
      const show = category === 'semua' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    empty.hidden = visibleCount > 0;
    empty.querySelector('strong').textContent = category === 'lensa' ? 'Belum ada daftar lensa.' : 'Belum ada produk di kategori ini.';
  }

  filterButtons.forEach((button) => button.addEventListener('click', () => filterProducts(button.dataset.filter)));
  const requested = new URLSearchParams(location.search).get('category');
  filterProducts(['kamera', 'lensa', 'accessories'].includes(requested) ? requested : 'semua');
}

function renderProductDetail() {
  const target = document.querySelector('[data-product-detail]');
  if (!target) return;
  const product = products.find((item) => item.id === new URLSearchParams(location.search).get('id'));
  if (!product) {
    target.innerHTML = `<div class="empty-state"><strong>Pilih produk dari katalog.</strong><p>Detail produk akan tampil setelah kamu memilih kamera atau layanan.</p><a class="button button-primary" href="${pagePath('katalog')}">Kembali ke Katalog</a></div>`;
    return;
  }

  const isCamera = product.category === 'kamera';
  const image = isCamera
    ? `<img src="${root}/PRODUK%20YANG%20DI%20SEWA/${encodeURIComponent(product.image)}" alt="${product.name}">`
    : `<span class="no-photo-tile">${product.visual}</span>`;
  const priceRows = isCamera
    ? `<div class="price-line"><span>24 Jam</span><strong>${money.format(product.price24)}</strong></div><div class="price-line"><span>48 Jam</span><strong>${money.format(product.price48)}</strong></div>`
    : `<div class="price-line"><span>${product.note || 'Harga'}</span><strong>${money.format(product.price24)}</strong></div>`;
  target.innerHTML = `<div class="detail-layout"><div class="detail-photo">${image}</div><div class="detail-copy"><span class="product-kind">${isCamera ? 'Kamera' : 'Accessories'}</span><h1>${product.name}</h1><p>${isCamera ? 'Pilihan kamera rental Teman Camera. Tanyakan ketersediaan untuk tanggal yang kamu inginkan.' : 'Layanan atau perlengkapan tambahan dari Teman Camera. Hubungi kami untuk menanyakan detail dan ketersediaannya.'}</p><div class="detail-price">${priceRows}</div><div class="detail-spec"><h2>Durasi / detail</h2><p>${isCamera ? 'Pilihan durasi 24 jam atau 48 jam.' : product.note || 'Konfirmasi detail saat booking.'}</p></div><div class="detail-spec"><h2>Isi paket</h2><p>Konfirmasi kelengkapan paket saat booking melalui WhatsApp.</p></div><div class="detail-spec"><h2>Syarat sewa</h2><p>Baca rules sewa lengkap sebelum booking.</p></div><div class="detail-actions"><a class="button button-primary" data-booking="${product.name}" href="${whatsappUrl(product.name)}">Booking via WhatsApp ↗</a><a class="button button-secondary" href="${pagePath('rules')}">Baca Rules</a></div></div></div>`;
}

function renderCustomerGallery() {
  const gallery = document.querySelector('[data-customer-gallery]');
  if (!gallery) return;
  const images = galleryImageSets.flatMap(([time, lastCopy]) =>
    Array.from({ length: lastCopy + 1 }, (_, copy) => {
      const suffix = copy === 0 ? '' : ` (${copy})`;
      return `WhatsApp Image 2026-09-28 at ${time}${suffix}.jpeg`;
    })
  );

  gallery.innerHTML = images.map((filename, index) => {
    const source = `${root}/Galery/${encodeURIComponent(filename)}`;
    return `<figure class="gallery-photo"><img src="${source}" alt="Foto pelanggan Teman Camera ${index + 1}" loading="lazy" decoding="async"></figure>`;
  }).join('');
  const count = document.querySelector('[data-gallery-count]');
  if (count) count.textContent = images.length;
}

function initCountUp() {
  const counters = [...document.querySelectorAll('[data-count-to]')];
  if (!counters.length) return;

  const finish = (counter) => {
    counter.textContent = `${counter.dataset.countTo}${counter.dataset.suffix || ''}`;
  };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    counters.forEach(finish);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.countTo);
      const suffix = counter.dataset.suffix || '';
      const start = performance.now();
      const duration = 1300;
      observer.unobserve(counter);

      function animate(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        counter.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    });
  }, { threshold: 0.65 });

  counters.forEach((counter) => observer.observe(counter));
}

function init() {
  renderNavigation();
  renderFooter();
  renderProducts();
  renderProductDetail();
  renderCustomerGallery();
  initCountUp();
  document.querySelectorAll('[data-booking]').forEach((link) => {
    if (link.hasAttribute('data-booking') && !link.getAttribute('href')?.startsWith('https://')) {
      link.href = whatsappUrl(link.dataset.booking || '');
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
