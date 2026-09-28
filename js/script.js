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
const initialPageTitle = document.title;
let currentLanguage = 'id';
const originalTextNodes = new WeakMap();

const englishText = {
  'Katalog': 'Catalog', 'Layanan Kami': 'Our Services', 'Galeri Testimoni': 'Customer Gallery',
  'Rules Sewa': 'Rental Terms', 'Tentang Kami': 'About Us', 'Kontak': 'Contact',
  'Booking Sekarang': 'Book Now', 'Buka menu': 'Open menu', 'Tutup menu': 'Close menu',
  'A little camera friend': 'Your camera friend', 'Teman baik untuk cerita yang tak terulang.': 'A friend for stories that happen only once.',
  'Pilih teman ceritamu': 'Choose your story companion', 'Mulai dari yang kamu butuhkan': 'Start with what you need',
  'Jelajahi koleksi dan layanan Teman Camera.': 'Explore Teman Camera cameras and services.',
  'Kamera': 'Camera', 'Temukan kamera untuk momenmu': 'Find a camera for your moments',
  'Ketersediaan melalui WhatsApp': 'Check availability on WhatsApp', 'Accessories': 'Accessories',
  'Instax dan layanan tambahan': 'Instax and extra services', 'Pilihan teman-teman': 'Customer favorites',
  'Siap ikut jalan-jalan': 'Ready for your next trip', 'Harga rental kamera jelas, untuk cerita yang beragam.': 'Clear rental prices for all kinds of stories.',
  'Lihat semua pilihan kamera': 'See all cameras', 'Kenapa TEMAN CAMERA?': 'Why TEMAN CAMERA?',
  'Teman yang siap menemani setiap momen.': 'A friend for every moment.',
  'Kami ingin bikin pengalaman sewa kamera terasa lebih mudah, hangat, dan menyenangkan.': 'We make camera rentals easy, welcoming, and fun.',
  'Bisa tanya dulu dan pilih kamera sesuai kebutuhanmu.': 'Ask us first and find the camera that fits.',
  'Harga jelas': 'Clear pricing', 'Daftar harga tersedia sebelum kamu booking.': 'See prices before you book.',
  'Praktis': 'Easy booking', 'Mulai tanya ketersediaan lewat WhatsApp.': 'Ask about availability on WhatsApp.',
  'Siap berangkat': 'Ready to go', 'Kamera dipersiapkan sebelum digunakan.': 'Cameras are prepared before use.',
  'Your next story starts here': 'Your next story starts here', 'Siap menangkap momenmu?': 'Ready to capture your moments?',
  'Pilih kamera favorit dan ngobrol dengan Teman Camera lewat WhatsApp.': 'Pick your favorite camera and chat with us on WhatsApp.',
  'Renting out gear, capturing memories.': 'Renting out gear, capturing memories.',
  'Pilih teman ceritamu': 'Find your camera friend', 'Katalog Rental': 'Rental Catalog',
  'Daftar kamera dan aksesori dengan harga yang jelas. Ketersediaan menyesuaikan tanggal sewamu.': 'Browse cameras and accessories with clear pricing. Availability depends on your dates.',
  'Semua': 'All', 'Lensa': 'Lenses', 'Cek ketersediaan': 'Check availability',
  'Lihat Detail': 'View Details', 'Booking': 'Book', '24 Jam': '24 Hours', '48 Jam': '48 Hours',
  'Belum ada daftar lensa.': 'No lenses listed yet.', 'Belum ada produk di kategori ini.': 'No products in this category yet.',
  'Pilih produk dari katalog.': 'Choose a product from the catalog.', 'Kembali ke Katalog': 'Back to Catalog',
  'Galeri Testimoni': 'Customer Gallery', 'Dari teman, untuk kenangan': 'From our customers, with love',
  'Foto momen yang dibagikan pelanggan Teman Camera.': 'Moments shared by Teman Camera customers.',
  'Cerita dalam setiap frame': 'Stories in every frame', 'momen pelanggan': 'customer moments',
  'Terima kasih sudah mempercayakan momenmu kepada Teman Camera.': 'Thank you for trusting us with your moments.',
  'Kenalan lebih dekat': 'Get to know us', 'Teman untuk momen-momen yang ingin disimpan lebih lama.': 'Your friend for moments worth keeping.',
  'Your friend to capture every moment.': 'Your friend to capture every moment.',
  'Teman Camera adalah usaha penyewaan kamera yang hadir untuk menjadi teman dalam mengabadikan berbagai momen.': 'Teman Camera is a camera rental business here to help you capture life’s moments.',
  'Mulai dari liburan, acara, content creation, hingga kebutuhan dokumentasi pribadi, kami menyediakan pilihan kamera yang dapat disesuaikan dengan kebutuhan kamu.': 'From holidays and events to content creation and personal projects, find a camera to fit your needs.',
  'Kami ingin membuat pengalaman sewa kamera menjadi lebih mudah, praktis, dan menyenangkan. Kamu bisa melihat harga di katalog, lalu menanyakan ketersediaan tanggal melalui WhatsApp.': 'We make renting a camera easy and enjoyable. Browse prices in the catalog, then ask us about your dates on WhatsApp.',
  'Jelajahi Katalog': 'Browse the Catalog', 'Yang kami jaga': 'What matters to us',
  'Hangat, jelas, dan praktis': 'Friendly, clear, and easy',
  'Informasi harga tersedia di katalog dan ketentuan sewa dapat dibaca sebelum booking.': 'Prices are listed in the catalog, and rental terms are available before booking.',
  'Klien telah mempercayakan momen mereka kepada Teman Camera.': 'Customers have trusted Teman Camera with their moments.',
  'Siap membantu memilih kamera.': 'Here to help you choose a camera.',
  'Harga sewa ditampilkan di katalog.': 'Rental prices are listed in the catalog.',
  'Kamera untuk cerita yang ingin kamu simpan.': 'Cameras for stories you want to keep.',
  'Kenapa TEMAN CAMERA?': 'Why TEMAN CAMERA?', 'Friendly': 'Friendly', 'Transparan': 'Transparent',
  'Teman momen': 'Your moment companion', 'Kami siap ngobrol': 'Let’s talk',
  'Kontak & Booking': 'Contact & Booking', 'Tanyakan ketersediaan kamera atau detail proses sewa kepada Teman Camera.': 'Ask us about camera availability or rental details.',
  'Semudah itu': 'It’s that easy', 'Cara Booking': 'How to Book',
  'Mulai percakapan, lalu bersiap mengabadikan momenmu.': 'Start a chat, then get ready to capture your moments.',
  'Pilih kamera': 'Choose a camera', 'Cari yang cocok di katalog.': 'Find one in the catalog.',
  'Cek tanggal': 'Check your dates', 'Tanya ketersediaan melalui WhatsApp.': 'Ask about availability on WhatsApp.',
  'Konfirmasi booking': 'Confirm your booking', 'Ikuti rules dan format sewa.': 'Follow the rental rules and booking steps.',
  'Ambil kameramu': 'Pick up your camera', 'Kamera siap menemani ceritamu.': 'Your camera is ready for the story.',
  'Mulai dari sini': 'Get in touch', 'Hubungi Teman Camera': 'Contact Teman Camera',
  'Kirim pesan untuk cek jadwal dan mulai proses booking. Ketersediaan bergantung pada tanggal rental.': 'Message us to check dates and start your booking. Availability depends on your rental dates.',
  'Booking dan cek ketersediaan dilakukan melalui chat WhatsApp.': 'Book and check availability through WhatsApp.',
  'Ikuti cerita dan kabar dari Teman Camera.': 'Follow Teman Camera for updates and stories.',
  'Lihat cerita Teman Camera di TikTok.': 'See Teman Camera stories on TikTok.',
  'Opsi COD': 'Meet-up options', 'Area pengambilan': 'Pickup locations',
  'Pilihan titik COD yang tersedia sesuai rules sewa.': 'Available meet-up points are listed in the rental terms.',
  'Cibubur': 'Cibubur', 'Bekasi': 'Bekasi', 'Baca Rules Sewa sebelum booking →': 'Read the rental terms before booking →',
  'Lebih banyak cara menyimpan cerita': 'More ways to keep your memories', 'Layanan Kami': 'Our Services',
  'Dari kamera dan foto instan sampai bantuan tambahan untuk momenmu.': 'From cameras and instant photos to helpful extras for your moments.',
  'Teman untuk setiap momen': 'A friend for every moment', 'Pilihan layanan': 'Services',
  'Harga tambahan mengikuti pricelist Teman Camera.': 'Prices follow the Teman Camera price list.',
  'Camera only': 'Camera only', '1 pack': '1 pack', 'Putih polos, 1 pack': 'Plain white, 1 pack',
  'Per layanan': 'Per service', 'Pengambilan & pengiriman': 'Pickup & delivery',
  'Pilih cara yang nyaman': 'Choose what works for you',
  'Opsi yang tersedia: COD, self pick up, dan self delivery. Titik pengambilan tersedia di Cibubur dan Bekasi. Detail lokasi dan ketentuan ada di halaman kontak dan rules sewa.': 'Available options: meet-up, self pickup, and self delivery. Pickup points are in Cibubur and Bekasi. See Contact and Rental Terms for details.',
  'Lihat Area Layanan': 'View Service Areas', 'Tanya via WhatsApp ↗': 'Ask on WhatsApp ↗',
  'Rules Sewa': 'Rental Terms', 'Pilih kamera yang sesuai dengan kebutuhan kamu.': 'Choose a camera that fits your needs.',
  'Booking hanya melalui chat WhatsApp.': 'Bookings are made through WhatsApp chat.',
  'Wajib membayar DP 50% untuk mengunci tanggal yang diinginkan.': 'A 50% deposit is required to secure your dates.',
  'Pelunasan dilakukan saat hari pengambilan kamera.': 'The remaining balance is due on pickup day.',
  'Booking tanpa DP berarti belum fix.': 'A booking is not confirmed until the deposit is paid.',
  'Pengembalian sesuai waktu mendapatkan toleransi 1 jam.': 'Returns have a one-hour grace period.',
  'Lebih dari 1 jam dikenakan denda Rp20.000/jam.': 'Returns over one hour late incur a Rp20,000/hour fee.',
  'Jam buka': 'Opening hours', 'Cek ketersediaan': 'Check availability', 'Bahasa': 'Language',
  'Harga kamera': 'Camera prices', 'Cara booking': 'How to book', 'Jam buka': 'Opening hours', 'Area COD': 'Pickup areas',
  'Tulis pertanyaan...': 'Type your question...', 'Kirim': 'Send', 'Tutup chat': 'Close chat',
  'Chat dengan Teman Camera': 'Chat with Teman Camera', 'Hai! Aku Teman Camera Assistant. Ada yang bisa kubantu?': 'Hi! I’m the Teman Camera assistant. How can I help?',
  'Saya belum punya detail itu. Tim kami bisa bantu lewat WhatsApp.': 'I don’t have that detail yet. Our team can help on WhatsApp.',
  'Buka WhatsApp': 'Continue on WhatsApp', 'Harga kamera 24 jam / 48 jam:': 'Camera prices for 24 / 48 hours:',
  'Untuk booking, pilih kamera lalu hubungi kami untuk cek tanggal. DP 50% mengunci tanggal; pelunasan saat pengambilan.': 'To book, choose a camera and ask us to check your dates. A 50% deposit secures the booking; the balance is due at pickup.',
  'Jam buka 10.00–22.00.': 'We are open from 10:00 to 22:00.',
  'Area layanan Cibubur dan Bekasi. Tersedia COD, self pick up, dan self delivery.': 'We serve Cibubur and Bekasi, with meet-up, self-pickup, and self-delivery options.',
  'Kami menyediakan Instax Mini 13, paper refill, bundling Instax, jasa pindahan foto, dan Type-C Lighting.': 'We offer the Instax Mini 13, paper refills, an Instax bundle, photo transfer, and Type-C lighting.',
  'Baca rules sewa di halaman Rules Sewa. Untuk detail lainnya, tim kami siap membantu lewat WhatsApp.': 'Read the rental terms on the Rental Terms page. Our team can help with anything else on WhatsApp.'
};

function translateText(rootElement = document.body) {
  const walker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, textNode.nodeValue);
    const source = originalTextNodes.get(textNode);
    const trimmed = source.trim();
    if (!trimmed) continue;
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    const translated = currentLanguage === 'en' ? englishText[trimmed] || trimmed : trimmed;
    const nextValue = `${leading}${translated}${trailing}`;
    if (textNode.nodeValue !== nextValue) textNode.nodeValue = nextValue;
  }
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  try { localStorage.setItem('teman-camera-language', language); } catch {}
  translateText();
  document.querySelectorAll('[data-language-choice]').forEach((button) => {
    const active = button.dataset.languageChoice === language;
    button.setAttribute('aria-pressed', String(active));
  });
  const chatInput = document.querySelector('.chat-input');
  if (chatInput) chatInput.placeholder = language === 'en' ? 'Type your question...' : 'Tulis pertanyaan...';
  const titleTranslations = {
    'TEMAN CAMERA — Your friend to capture every moment': 'TEMAN CAMERA — Your friend to capture every moment',
    'Katalog Rental Kamera — TEMAN CAMERA': 'Camera Rentals — TEMAN CAMERA',
    'Layanan Kami — TEMAN CAMERA': 'Our Services — TEMAN CAMERA',
    'Galeri Testimoni — TEMAN CAMERA': 'Customer Gallery — TEMAN CAMERA',
    'Rules Sewa — TEMAN CAMERA': 'Rental Terms — TEMAN CAMERA',
    'Tentang Kami — TEMAN CAMERA': 'About Us — TEMAN CAMERA',
    'Kontak & Booking — TEMAN CAMERA': 'Contact & Booking — TEMAN CAMERA',
    'Detail Produk — TEMAN CAMERA': 'Product Details — TEMAN CAMERA'
  };
  document.title = language === 'en' ? titleTranslations[initialPageTitle] || initialPageTitle : initialPageTitle;
}

function getAssistantReply(question) {
  const query = question.toLowerCase();
  if (/harga|price|biaya|cost|tarif/.test(query)) {
    const rows = cameraProducts.map((product) => `${product.name}: ${money.format(product.price24)} / 24 jam, ${money.format(product.price48)} / 48 jam`);
    return currentLanguage === 'en'
      ? `Camera prices (24 / 48 hours):\n${rows.join('\n')}`
      : `Harga kamera (24 / 48 jam):\n${rows.join('\n')}`;
  }
  if (/booking|pesan|sewa|book|rent/.test(query)) {
    return currentLanguage === 'en'
      ? 'Choose a camera, ask us to check your dates on WhatsApp, then follow the rental terms. A 50% deposit secures your dates; the remaining balance is due on pickup day.'
      : 'Pilih kamera, hubungi kami untuk cek tanggal melalui WhatsApp, lalu ikuti rules sewa. DP 50% mengunci tanggal; pelunasan dilakukan saat pengambilan.';
  }
  if (/jam|buka|open|hours/.test(query)) {
    return currentLanguage === 'en' ? 'We are open daily from 10:00 to 22:00.' : 'Teman Camera buka pukul 10.00–22.00.';
  }
  if (/lokasi|area|cod|pickup|pick up|delivery|antar|cibubur|bekasi/.test(query)) {
    return currentLanguage === 'en'
      ? 'Service areas are Cibubur and Bekasi. Meet-up, self-pickup, and self-delivery are available. Ask us on WhatsApp for locations and details.'
      : 'Area layanan Cibubur dan Bekasi. Tersedia COD, self pick up, dan self delivery. Tanyakan lokasi serta detailnya melalui WhatsApp.';
  }
  if (/instax|paper|pindah|transfer|lighting|layanan|service|accessor/.test(query)) {
    return currentLanguage === 'en'
      ? 'Services include Instax Mini 13 (Rp45,000), plain Instax paper refill (Rp170,000), camera + paper bundle (Rp210,000), photo transfer (Rp15,000), and Type-C lighting (Rp20,000).'
      : 'Layanan kami: Instax Mini 13 (Rp45.000), paper refill (Rp170.000), bundling kamera + paper (Rp210.000), jasa pindahan foto (Rp15.000), dan Type-C Lighting (Rp20.000).';
  }
  if (/rules|syarat|ketentuan|deposit|dp|denda|damage|return/.test(query)) {
    return currentLanguage === 'en'
      ? 'Rental terms cover deposits, rental duration, pickup and delivery, renter requirements, camera care, damage, and returns. Please read the Rental Terms page before booking.'
      : 'Rules sewa mencakup DP, durasi, pengambilan dan pengiriman, persyaratan, penggunaan kamera, kerusakan, serta pengembalian. Baca halaman Rules Sewa sebelum booking.';
  }
  return currentLanguage === 'en'
    ? 'I don’t have that detail yet. Our team can help you on WhatsApp.'
    : 'Aku belum punya detail itu. Tim Teman Camera bisa bantu lewat WhatsApp.';
}

function renderChatWidget() {
  if (document.querySelector('.chat-widget')) return;
  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <section class="chat-panel" aria-label="Chat Teman Camera" hidden>
      <header class="chat-header"><img src="${root}/aset/logo%20temankamera.jpeg" alt=""><div><strong>Teman Camera Assistant</strong><small>Info rental kamera</small></div><button class="chat-close" type="button" aria-label="Tutup chat">×</button></header>
      <div class="chat-messages" role="log" aria-live="polite"><p class="chat-message chat-message-bot" data-chat-greeting></p><div class="chat-prompts"><button type="button" data-chat-prompt="harga">Harga kamera</button><button type="button" data-chat-prompt="booking">Cara booking</button><button type="button" data-chat-prompt="jam buka">Jam buka</button><button type="button" data-chat-prompt="area COD">Area COD</button></div></div>
      <form class="chat-form"><label class="visually-hidden" for="chat-question">Pertanyaan</label><input class="chat-input" id="chat-question" name="question" autocomplete="off" placeholder="Tulis pertanyaan..." required><button type="submit" aria-label="Kirim">➤</button></form>
    </section>
    <button class="chat-launch" type="button" aria-label="Chat dengan Teman Camera" aria-expanded="false"><img src="${root}/aset/logo%20temankamera.jpeg" alt=""><span>Chat</span></button>`;
  document.body.append(widget);

  const panel = widget.querySelector('.chat-panel');
  const launcher = widget.querySelector('.chat-launch');
  const input = widget.querySelector('.chat-input');
  const messages = widget.querySelector('.chat-messages');
  const setOpen = (open) => {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  };
  const appendMessage = (text, sender = 'bot', showWhatsApp = false) => {
    const message = document.createElement('p');
    message.className = `chat-message chat-message-${sender}`;
    message.textContent = text;
    messages.append(message);
    if (showWhatsApp) {
      const link = document.createElement('a');
      link.className = 'chat-whatsapp-link';
      link.href = whatsappUrl();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = currentLanguage === 'en' ? 'Continue on WhatsApp ↗' : 'Lanjut ke WhatsApp ↗';
      messages.append(link);
    }
    messages.scrollTop = messages.scrollHeight;
  };
  const ask = (question) => {
    const text = question.trim();
    if (!text) return;
    appendMessage(text, 'user');
    const answer = getAssistantReply(text);
    const unknown = /belum punya detail|don’t have that detail/.test(answer);
    appendMessage(answer, 'bot', unknown);
  };

  widget.querySelector('[data-chat-greeting]').textContent = currentLanguage === 'en'
    ? 'Hi! I’m the Teman Camera assistant. Ask me about prices, booking, hours, or service areas.'
    : 'Hai! Aku asisten Teman Camera. Tanyakan harga, booking, jam buka, atau area layanan.';
  launcher.addEventListener('click', () => setOpen(panel.hidden));
  widget.querySelector('.chat-close').addEventListener('click', () => setOpen(false));
  widget.querySelector('.chat-form').addEventListener('submit', (event) => {
    event.preventDefault();
    ask(input.value);
    input.value = '';
    input.focus();
  });
  widget.querySelectorAll('[data-chat-prompt]').forEach((button) => button.addEventListener('click', () => ask(button.dataset.chatPrompt)));
}

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
      <div class="nav-controls"><div class="language-switch" role="group" aria-label="Bahasa"><button type="button" data-language-choice="id" aria-pressed="true">ID</button><button type="button" data-language-choice="en" aria-pressed="false">EN</button></div><button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="main-menu"><span aria-hidden="true">☰</span></button></div>
      <ul class="nav-links" id="main-menu">${links.map(([label, href, file]) => `<li><a href="${href}"${current === file ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}<li><a class="mobile-book" data-booking href="${whatsappUrl()}">Booking Sekarang</a></li></ul>
      <a class="button button-primary nav-book" data-booking href="${whatsappUrl()}">Booking Sekarang <span aria-hidden="true">↗</span></a>
    </nav>`;

  const menuButton = header.querySelector('.menu-toggle');
  const menu = header.querySelector('.nav-links');
  header.querySelectorAll('[data-language-choice]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.languageChoice));
  });
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
  renderChatWidget();
  document.querySelectorAll('[data-booking]').forEach((link) => {
    if (link.hasAttribute('data-booking') && !link.getAttribute('href')?.startsWith('https://')) {
      link.href = whatsappUrl(link.dataset.booking || '');
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  let preferredLanguage = 'id';
  try { preferredLanguage = localStorage.getItem('teman-camera-language') || 'id'; } catch {}
  setLanguage(preferredLanguage === 'en' ? 'en' : 'id');
}

document.addEventListener('DOMContentLoaded', init);
