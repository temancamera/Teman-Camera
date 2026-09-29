// Nomor WhatsApp belum tersedia. Isi dengan kode negara dan nomor tanpa tanda + jika sudah ada.
const WHATSAPP_NUMBER = '6281932977629';

const cameraProducts = [
  { id: 'canon-m100', name: 'Canon M100', category: 'kamera', image: 'canon-m100-24-jam-180k-48-jam-360k.jpeg', price24: 180000, price48: 360000 },
  { id: 'canon-a2500', name: 'Canon A2500', category: 'kamera', image: 'canon-a2500-24-jam-95k-48-jam-180k.jpeg', price24: 95000, price48: 180000 },
  { id: 'fujifilm-x-a5', name: 'Fujifilm X-A5', category: 'kamera', image: 'fujifilm-x-a5-24-jam-170k-48-jam-335k.jpeg', price24: 170000, price48: 335000 },
  { id: 'sony-dsc-w510', name: 'Sony DSC W510', category: 'kamera', image: 'sony-dsc-w510-24-jam-85k-48-jam-180k.jpeg', price24: 85000, price48: 180000 },
  { id: 'olympus-tg-320', name: 'Olympus TG 320', category: 'kamera', image: 'olympus-tg-320-24-jam-75k-48-jam-145k.jpeg', price24: 75000, price48: 145000 },
  { id: 'fujifilm-x-a3', name: 'Fujifilm X-A3', category: 'kamera', image: 'fujifilm-x-a3-24-jam-150k-48-jam-295k.jpeg', price24: 150000, price48: 295000 }
];

const cameraShotImages = {
  'canon-a2500': [
    'IMG_4343.PNG', 'IMG_4344.PNG', 'IMG_4347.PNG', 'IMG_4348.PNG', 'IMG_4349.PNG', 'IMG_4350.PNG', 'IMG_4351.PNG'
  ],
  'canon-m100': [
    '1d5cd187-3893-4167-8aca-c62520f2258c.jpg', '3621f0f9-5820-48a4-ba17-e32ee762c049.jpg',
    '4d7c47d5-9631-4d06-85b0-35b1440e2d87.jpg', '99df5628-1a46-4a61-ae85-0b3107d1e6c5.JPG',
    'acc85fa4-ba7d-4343-81fb-484c1a3222c6.JPG', 'c7e56915-68d2-442a-adec-608252cb5e0e.JPG',
    'e016a3b0-10dc-4e82-aea0-183bd5c117e0.jpg', 'eee7c283-5a72-44e3-b2c4-2b523016fa9f.jpg',
    'fb112cc4-b357-4ce4-abcf-fa0434a9b123.JPG', 'IMG_0990.JPG', 'IMG_2817.JPG', 'IMG_4340.PNG',
    'IMG_4341.PNG', 'IMG_4342.PNG', 'IMG_4346.PNG', 'IMG_4356.PNG', 'IMG_4357.PNG'
  ],
  'fujifilm-x-a3': [
    '0c814692-fd25-4935-8494-3dce5a45a11c.jpg', '16d49f78-ca0e-445f-93d1-af5d6d284b46.jpg',
    '27e07044-5cc5-45dc-9926-df8d4e971dcd.jpg', '327e6063-c31d-4696-aff8-0aea3a59deba.jpg',
    '36516db5-a71b-46a1-9da7-d748387d34ce.jpg', '47420608-9bde-42cc-8dcf-8838eaec7cc7.jpg',
    '62a6ac78-4485-490e-831f-ea82d683bb57.jpg', '663426c5-b0bb-42a8-9433-1e1ee76db553.jpg',
    '6c8e106e-83b6-4c0f-8b89-385a5a910f09.jpg', '7adbe834-39b6-4e1c-8967-59ab4dc42267.jpg',
    '8419fc68-5626-4d58-97f3-0b51efe84cc4.jpg', '8a0b7bde-2b1a-40bc-9f60-d238a2d9360a.jpg',
    '9968104a-1304-4919-911c-f00d013d036e.jpg', 'DSCF0178.JPG', 'DSCF0179.JPG', 'DSCF0183.JPG',
    'DSCF0193.JPG', 'DSCF0194.JPG', 'EDCBF1C0-6035-4483-B98E-1AB5DB318247.jpg',
    'f318d856-2594-4d07-a849-064b569072f1.jpg', 'IMG_1744.JPG', 'IMG_1745.JPG', 'IMG_1920.jpg',
    'IMG_2008.JPG', 'IMG_2009.JPG', 'IMG_2857.JPG', 'IMG_2858.JPG', 'IMG_2859.JPG', 'IMG_2860.JPG',
    'IMG_2865.JPG', 'IMG_4335.PNG', 'IMG_4336.PNG', 'IMG_4345.PNG'
  ],
  'fujifilm-x-a5': [
    '00B35AD9-6D75-4AF7-A5E2-39662197FA4A-2579-000000AB79ACF513.jpg',
    '00DB888D-82F3-4DC5-A692-E7F9AA676FB1-2579-000000ABC56D5BC8.jpg',
    '0b21efe5-5aa6-49da-a934-dd6a70bfb7f4.jpg', '159a944b-54ee-489f-9042-1490dbfb3b2e (1).jpg',
    '159a944b-54ee-489f-9042-1490dbfb3b2e.jpg',
    '1C479A89-DEA4-4B98-8D86-DD740C0C65D9-2579-000000A912FA02E9.jpg',
    '1F3C755F-6077-4D6B-AE0C-202347D7981E-2579-000000ABEB5F92C5.jpg',
    '2cba5761-dee2-4166-8775-e9d0678b7b2a.jpg', '52f9ab39-f86d-4236-81d4-5d862c469d8e (1).jpg',
    '52f9ab39-f86d-4236-81d4-5d862c469d8e.jpg',
    '633F2B78-17A8-4B4A-A0F1-6B600692504C-2579-000000ABB280F505.jpg',
    '6A0B6DBA-5B23-4846-B269-CA0CE38F4240-2579-000000A937F2227A.jpg',
    '70e51903-ccd1-44b4-b385-068b49f002f1 (1).jpg', '70e51903-ccd1-44b4-b385-068b49f002f1.jpg',
    '746aeb30-b58d-43e1-b8e6-10210ec96489.jpg', '7d436502-22d3-4e11-a8b6-8d51edf97e30.jpg',
    '813FA6F9-6944-47D6-B582-B1B87D34B915-2579-000000AB64BB13A4.jpg',
    '8A5DEC0C-F1F7-4E45-A2CC-FA416E1620F7-2579-000000AB4A0BEA8A (1).jpg',
    '8A5DEC0C-F1F7-4E45-A2CC-FA416E1620F7-2579-000000AB4A0BEA8A.jpg',
    '910F78D3-DCD0-4C11-A444-5705137D56C1-2579-000000AA010F4400.jpg',
    'DSCF6504.JPG', 'DSCF6559.JPG', 'DSCF6561.JPG', 'DSCF6562.JPG',
    'FBD2B452-82E6-4C54-BBE1-F4CDBE6D1DAC-2579-000000A9FBCC7CB6.jpg',
    'fd5f4870-9045-444f-8ab9-9e0a5ba4ac11.jpg', 'IMG_1085.JPG', 'IMG_3335.JPG', 'IMG_3336.JPG'
  ],
  'olympus-tg-320': [
    '149DEA6B-68ED-4C56-9301-EDBC8CCA5141.jpg', '45518C44-998F-4AB4-8CEF-0222AC24118A.jpg',
    '464172EC-6AA6-4C6B-9FF5-51123D92D1AF.jpg', '9A1BE72C-A1F5-47B0-A769-D94C2CB0DF08.jpg',
    'EBA3CF58-1530-4600-AA95-5B62CA1A144A.jpg', 'IMG_4358.PNG', 'IMG_4359.PNG'
  ],
  'sony-dsc-w510': [
    '165663d9-bc15-4cea-9378-118069b9d12f.jpg', '7889d726-35b6-4910-8251-4c60877ac190.jpg',
    '85d48fef-f650-472c-9f6d-7c31e8d845ff.jpg', '8c82259c-2e05-470a-b766-f254ebacae62.jpg',
    '92613e47-a649-4890-87ae-8df32a5fd8fc.jpg', 'd4e45c08-fe93-4b25-83d6-0187b229c08d.jpg',
    'DSC03661.JPG', 'DSC03734.JPG', 'IMG_3422.JPG', 'IMG_3423.JPG', 'IMG_3424.JPG',
    'IMG_3425.JPG', 'IMG_3426.JPG', 'IMG_3428.JPG', 'IMG_9465.JPG'
  ]
};

const extraProducts = [
  { id: 'instax-mini-13', name: 'Instax Mini 13', category: 'accessories', note: 'Camera only', price24: 45000, image: 'instax-mini-13-45k.jpeg', visual: 'INSTAX' },
  { id: 'paper-refill-putih', name: 'Paper Refill Fuji Polaroid', category: 'accessories', note: '1 pack', price24: 170000, image: 'paper-refill-fuji-polaroid-1-pack-170k.jpg', visual: 'PAPER' },
  { id: 'instax-bundle', name: 'Bundling Kamera + Paper Polaroid', category: 'accessories', note: '1 pack', price24: 210000, image: 'bundling-kamera-paper-polaroid-1-pack-210k.jpeg', visual: 'BUNDLE' },
  { id: 'jasa-pindahan-foto', name: 'Jasa Pindahan Foto', category: 'accessories', price24: 15000, image: 'jasa-pindahan-foto-15k.PNG' },
  { id: 'type-c-lighting', name: 'Type-C Lighting', category: 'accessories', price24: 20000, image: 'type-c-lighting-1-20k.JPG', visual: 'LIGHT' }
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
  'Katalog': 'Catalog', 'Layanan Kami': 'Our Services', 'Galeri Testimoni': 'Customer Gallery', 'Hasil Jepretan': 'Photo Gallery',
  'Rules Sewa': 'Rental Terms', 'Tentang Kami': 'About Us', 'Kontak': 'Contact',
  'Booking Sekarang': 'Book Now', 'Buka menu': 'Open menu', 'Tutup menu': 'Close menu',
  'A little camera friend': 'Your camera friend', 'Teman baik untuk cerita yang tak terulang.': 'A friend for stories that happen only once.',
  'Pilih teman ceritamu': 'Choose your story companion', 'Mulai dari yang kamu butuhkan': 'Start with what you need',
  'Jelajahi koleksi dan layanan temankamera_.': 'Explore temankamera_ cameras and services.',
  'Kamera': 'Camera', 'Temukan kamera untuk momenmu': 'Find a camera for your moments',
  'Ketersediaan melalui WhatsApp': 'Check availability on WhatsApp', 'Accessories': 'Accessories',
  'Instax dan layanan tambahan': 'Instax and extra services', 'Pilihan teman-teman': 'Customer favorites',
  'Siap ikut jalan-jalan': 'Ready for your next trip', 'Harga rental kamera jelas, untuk cerita yang beragam.': 'Clear rental prices for all kinds of stories.',
  'Lihat semua pilihan kamera': 'See all cameras', 'Kenapa temankamera_?': 'Why temankamera_?',
  'Teman yang siap menemani setiap momen.': 'A friend for every moment.',
  'Kami ingin bikin pengalaman sewa kamera terasa lebih mudah, hangat, dan menyenangkan.': 'We make camera rentals easy, welcoming, and fun.',
  'Bisa tanya dulu dan pilih kamera sesuai kebutuhanmu.': 'Ask us first and find the camera that fits.',
  'Harga jelas': 'Clear pricing', 'Daftar harga tersedia sebelum kamu booking.': 'See prices before you book.',
  'Praktis': 'Easy booking', 'Mulai tanya ketersediaan lewat WhatsApp.': 'Ask about availability on WhatsApp.',
  'Siap berangkat': 'Ready to go', 'Kamera dipersiapkan sebelum digunakan.': 'Cameras are prepared before use.',
  'Your next story starts here': 'Your next story starts here', 'Siap menangkap momenmu?': 'Ready to capture your moments?',
  'Pilih kamera favorit dan ngobrol dengan temankamera_ lewat WhatsApp.': 'Pick your favorite camera and chat with temankamera_ on WhatsApp.',
  'Renting out gear, capturing memories.': 'Renting out gear, capturing memories.',
  'Pilih teman ceritamu': 'Find your camera friend', 'Katalog Rental': 'Rental Catalog',
  'Daftar kamera dan aksesori dengan harga yang jelas. Ketersediaan menyesuaikan tanggal sewamu.': 'Browse cameras and accessories with clear pricing. Availability depends on your dates.',
  'Semua': 'All', 'Lensa': 'Lenses', 'Cek ketersediaan': 'Check availability',
  'Lihat Detail': 'View Details', 'Booking': 'Book', '24 Jam': '24 Hours', '48 Jam': '48 Hours',
  'Belum ada daftar lensa.': 'No lenses listed yet.', 'Belum ada produk di kategori ini.': 'No products in this category yet.',
  'Pilih produk dari katalog.': 'Choose a product from the catalog.', 'Kembali ke Katalog': 'Back to Catalog',
  'Dari teman, untuk kenangan': 'From our customers, with love',
  'Belum ada foto hasil jepretan untuk kamera ini.': 'No sample photos have been added for this camera yet.',
  'Foto momen yang dibagikan pelanggan temankamera_.': 'Moments shared by temankamera_ customers.',
  'Cerita dalam setiap frame': 'Stories in every frame', 'momen pelanggan': 'customer moments',
  'Terima kasih sudah mempercayakan momenmu kepada temankamera_.': 'Thank you for trusting temankamera_ with your moments.',
  'Kenalan lebih dekat': 'Get to know us', 'Teman untuk momen-momen yang ingin disimpan lebih lama.': 'Your friend for moments worth keeping.',
  'Your friend to capture every moment.': 'Your friend to capture every moment.',
  'temankamera_ adalah usaha penyewaan kamera yang hadir untuk menjadi teman dalam mengabadikan berbagai momen.': 'temankamera_ is a camera rental business here to help you capture life’s moments.',
  'Mulai dari liburan, acara, content creation, hingga kebutuhan dokumentasi pribadi, kami menyediakan pilihan kamera yang dapat disesuaikan dengan kebutuhan kamu.': 'From holidays and events to content creation and personal projects, find a camera to fit your needs.',
  'Kami ingin membuat pengalaman sewa kamera menjadi lebih mudah, praktis, dan menyenangkan. Kamu bisa melihat harga di katalog, lalu menanyakan ketersediaan tanggal melalui WhatsApp.': 'We make renting a camera easy and enjoyable. Browse prices in the catalog, then ask us about your dates on WhatsApp.',
  'Jelajahi Katalog': 'Browse the Catalog', 'Yang kami jaga': 'What matters to us',
  'Hangat, jelas, dan praktis': 'Friendly, clear, and easy',
  'Informasi harga tersedia di katalog dan ketentuan sewa dapat dibaca sebelum booking.': 'Prices are listed in the catalog, and rental terms are available before booking.',
  'Klien telah mempercayakan momen mereka kepada temankamera_.': 'Customers have trusted temankamera_ with their moments.',
  'Siap membantu memilih kamera.': 'Here to help you choose a camera.',
  'Harga sewa ditampilkan di katalog.': 'Rental prices are listed in the catalog.',
  'Kamera untuk cerita yang ingin kamu simpan.': 'Cameras for stories you want to keep.',
  'Kenapa temankamera_?': 'Why temankamera_?', 'Friendly': 'Friendly', 'Transparan': 'Transparent',
  'Teman momen': 'Your moment companion', 'Kami siap ngobrol': 'Let’s talk',
  'Kontak & Booking': 'Contact & Booking', 'Tanyakan ketersediaan kamera atau detail proses sewa kepada temankamera_.': 'Ask temankamera_ about camera availability or rental details.',
  'Semudah itu': 'It’s that easy', 'Cara Booking': 'How to Book',
  'Mulai percakapan, lalu bersiap mengabadikan momenmu.': 'Start a chat, then get ready to capture your moments.',
  'Pilih kamera': 'Choose a camera', 'Cari yang cocok di katalog.': 'Find one in the catalog.',
  'Cek tanggal': 'Check your dates', 'Tanya ketersediaan melalui WhatsApp.': 'Ask about availability on WhatsApp.',
  'Konfirmasi booking': 'Confirm your booking', 'Ikuti rules dan format sewa.': 'Follow the rental rules and booking steps.',
  'Ambil kameramu': 'Pick up your camera', 'Kamera siap menemani ceritamu.': 'Your camera is ready for the story.',
  'Mulai dari sini': 'Get in touch', 'Hubungi temankamera_': 'Contact temankamera_',
  'Kirim pesan untuk cek jadwal dan mulai proses booking. Ketersediaan bergantung pada tanggal rental.': 'Message us to check dates and start your booking. Availability depends on your rental dates.',
  'Booking dan cek ketersediaan dilakukan melalui chat WhatsApp.': 'Book and check availability through WhatsApp.',
  'Ikuti cerita dan kabar dari temankamera_.': 'Follow temankamera_ for updates and stories.',
  'Lihat cerita temankamera_ di TikTok.': 'See temankamera_ stories on TikTok.',
  'Opsi COD': 'Meet-up options', 'Area pengambilan': 'Pickup locations',
  'Pilihan titik COD yang tersedia sesuai rules sewa.': 'Available meet-up points are listed in the rental terms.',
  'Cibubur': 'Cibubur', 'Bekasi': 'Bekasi', 'Baca Rules Sewa sebelum booking →': 'Read the rental terms before booking →',
  'Lebih banyak cara menyimpan cerita': 'More ways to keep your memories', 'Layanan Kami': 'Our Services',
  'Dari kamera dan foto instan sampai bantuan tambahan untuk momenmu.': 'From cameras and instant photos to helpful extras for your moments.',
  'Teman untuk setiap momen': 'A friend for every moment', 'Pilihan layanan': 'Services',
  'Harga tambahan mengikuti pricelist temankamera_.': 'Prices follow the temankamera_ price list.',
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
  'Chat dengan temankamera_': 'Chat with temankamera_', 'Info rental kamera': 'Rental help',
  'Hai! Aku asisten temankamera_. Tanyakan harga, booking, jam buka, atau area layanan.': 'Hi! I’m the temankamera_ assistant. Ask me about prices, bookings, opening hours, or service areas.',
  'Hai! Aku temankamera_ Assistant. Ada yang bisa kubantu?': 'Hi! I’m the temankamera_ assistant. How can I help?',
  'Saya belum punya detail itu. Tim kami bisa bantu lewat WhatsApp.': 'I don’t have that detail yet. Our team can help on WhatsApp.',
  'Buka WhatsApp': 'Continue on WhatsApp', 'Harga kamera 24 jam / 48 jam:': 'Camera prices for 24 / 48 hours:',
  'Untuk booking, pilih kamera lalu hubungi kami untuk cek tanggal. DP 50% mengunci tanggal; pelunasan saat pengambilan.': 'To book, choose a camera and ask us to check your dates. A 50% deposit secures the booking; the balance is due at pickup.',
  'Jam buka 10.00–22.00.': 'We are open from 10:00 to 22:00.',
  'Area layanan Cibubur dan Bekasi. Tersedia COD, self pick up, dan self delivery.': 'We serve Cibubur and Bekasi, with meet-up, self-pickup, and self-delivery options.',
  'Kami menyediakan Instax Mini 13, Paper Refill Fuji Polaroid, Bundling Kamera + Paper Polaroid, jasa pindahan foto, dan Type-C Lighting.': 'We offer Instax Mini 13, Paper Refill Fuji Polaroid, Bundling Kamera + Paper Polaroid, photo transfer, and Type-C Lighting.',
  'Baca rules sewa di halaman Rules Sewa. Untuk detail lainnya, tim kami siap membantu lewat WhatsApp.': 'Read the rental terms on the Rental Terms page. Our team can help with anything else on WhatsApp.',
  'Ikuti cerita kami': 'Follow our stories', 'Area layanan': 'Service area', 'Opsi layanan': 'Service options',
  'Kontak & Booking': 'Contact & Booking', 'Rules Sewa': 'Rental Terms',
  'Biar nyaman untuk semua': 'For everyone’s comfort',
  'Mohon baca ketentuan ini sebelum booking agar proses sewa berjalan dengan jelas dan nyaman.': 'Please read these terms before booking so the rental process is clear and comfortable.',
  'Booking & Pembayaran': 'Booking & Payment', 'Durasi Sewa': 'Rental Duration',
  'Pengiriman & Pengembalian': 'Delivery & Returns', 'Persyaratan': 'Requirements',
  'Kondisi & Penggunaan Kamera': 'Camera Condition & Use', 'Kerusakan Kamera': 'Camera Damage',
  'Pengembalian Barang': 'Returning Equipment', 'Kerahasiaan Identitas': 'Identity & Privacy', 'Konsekuensi': 'Consequences',
  'Cancel secara sepihak = DP hangus dan tidak dapat di-refund.': 'Unilateral cancellation means the deposit is forfeited and non-refundable.',
  'Durasi sewa dihitung per 24 jam.': 'Rental time is calculated in 24-hour periods.',
  'Contoh: pengambilan tanggal 5 Januari pukul 08.00 dan pengembalian tanggal 6 Januari pukul 08.00 dihitung 1 hari.': 'Example: pickup on January 5 at 08:00 and return on January 6 at 08:00 counts as one day.',
  'Penyewa kurang dari 1 hari tetap dikenakan biaya sewa 1 hari penuh.': 'Rentals shorter than one day are still charged as a full day.',
  'Self delivery menggunakan harga sesuai aplikasi.': 'Self-delivery is charged at the price shown in the delivery app.',
  'Self pick up tersedia di Bukit Golf Cibubur, Gunung Putri, dan Duta Harapan, Bekasi.': 'Self-pickup is available at Bukit Golf Cibubur, Gunung Putri, and Duta Harapan, Bekasi.',
  'Barang harus diterima langsung oleh penyewa dan tidak dapat dititipkan.': 'The renter must receive the equipment in person; it cannot be left with someone else.',
  'Jam pengembalian kamera menjadi acuan awal perhitungan masa sewa.': 'The agreed return time is used to calculate the rental period.',
  'Penyewa wajib menitipkan identitas asli resmi: KTP, KTM, KK, atau SIM.': 'Renters must leave an original official ID: KTP, KTM, KK, or SIM.',
  'Tidak diperbolehkan menggunakan fotokopi dan tidak menerima alasan untuk tidak memenuhi jaminan.': 'Photocopies are not accepted. The required guarantee must be provided.',
  'Wajib mengisi data diri dan format sewa.': 'Personal details and the rental form must be completed.',
  'Wajib memberikan screenshot akun Instagram (bukan second account) dan follow @temankamera_.': 'A screenshot of your Instagram account (not a secondary account) and a follow of @temankamera_ are required.',
  'Nama penyewa harus sama dengan nama KTP dan nama rekening.': 'The renter’s name must match the name on their ID and bank account.',
  'Kamera harus dipastikan dalam kondisi baik saat diserahkan dan dikembalikan.': 'The camera must be in good condition when received and returned.',
  'Wajib dicek/difoto saat barang diterima.': 'Check and photograph the equipment upon receipt.',
  'Gunakan kamera dengan hati-hati dan hindari jatuh atau terkena air.': 'Handle the camera carefully and keep it away from drops and water.',
  'Masukkan baterai dengan pelan dan jangan sampai salah pasang.': 'Insert the battery carefully and make sure it is oriented correctly.',
  'Jika body kamera lecet karena penyewa, penyewa wajib mengganti sesuai harga.': 'The renter must pay for scratches to the camera body caused during the rental.',
  'Kerusakan atau kehilangan menjadi tanggung jawab penyewa 100%.': 'The renter is fully responsible for damage or loss.',
  'Untuk kamera selfie, hindari terlalu sering memegang bagian layar flip.': 'For selfie cameras, avoid holding the flip screen frequently.',
  'Wajib mengganti kerusakan sesuai harga pasar.': 'Damage must be compensated at market value.',
  'Kerusakan minor': 'Minor damage', 'Noda yang tidak dapat dihilangkan pada body kamera atau case kamera.': 'Permanent stains on the camera body or case.',
  'Kerusakan major': 'Major damage', 'Kehilangan aksesori seperti baterai, case, atau pouch kamera.': 'Loss of accessories such as a battery, case, or camera pouch.',
  'Kerusakan body kamera yang mengubah bentuk fisik seperti baret parah, bekas benturan, atau retakan.': 'Physical body damage such as deep scratches, impact marks, or cracks.',
  'Penyewa wajib mengganti kerugian sebesar 100% dari harga kamera.': 'The renter must compensate 100% of the camera price.',
  'Kerusakan fatal': 'Severe damage',
  'Apabila kamera tidak dapat beroperasi secara normal, penyewa wajib mengganti kerugian sebesar harga kamera atau mengganti dengan kamera yang sama persis dan masih berfungsi dengan baik.': 'If the camera cannot operate normally, the renter must pay its full value or replace it with the exact same model in working condition.',
  'Penggantian wajib diselesaikan maksimal 3 hari kerja setelah tanggal sewa terakhir.': 'Replacement must be completed within 3 working days after the final rental date.',
  'Pengembalian sesuai waktu mendapatkan toleransi 1 jam.': 'Returns have a one-hour grace period.',
  'Lebih dari 1 jam dikenakan denda Rp20.000/jam.': 'Returns over one hour late incur a Rp20,000 per hour fee.',
  'Barang harus dikembalikan sesuai kelengkapan unit.': 'Return the equipment with all included items.',
  'Tote bag yang hilang dikenakan denda.': 'A fee applies if the tote bag is lost.',
  'KTP dikembalikan setelah barang diterima dan dicek aman.': 'The KTP is returned after the equipment is received and checked.',
  'temankamera_ sangat menjaga kepercayaan penyewa.': 'temankamera_ values the trust of every renter.',
  'Seluruh informasi dan data yang diberikan melalui WhatsApp hanya digunakan untuk keperluan penyewaan dan tidak akan disalahgunakan.': 'Information shared through WhatsApp is used only for the rental and will not be misused.',
  'Posting penyewa saat menggunakan kamera maupun hasil foto dari kamera @temankamera_ dapat di-repost hanya apabila penyewa menandai akun @temankamera_ pada postingan dan mengirimkan foto secara langsung kepada pihak @temankamera_.': 'Posts or photos from a rental may be reposted only when the renter tags @temankamera_ and sends the photo directly to @temankamera_.',
  'Pastikan tanggal, pilihan kamera, dan proses booking dikonfirmasi melalui WhatsApp. Ketersediaan produk mengikuti jadwal rental.': 'Confirm your dates, camera choice, and booking via WhatsApp. Product availability depends on the rental schedule.',
  'Tanya & Booking via WhatsApp ↗': 'Ask & Book on WhatsApp ↗'
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
    'temankamera_ — Your friend to capture every moment': 'temankamera_ — Your friend to capture every moment',
    'Katalog Rental Kamera — temankamera_': 'Camera Rentals — temankamera_',
    'Layanan Kami — temankamera_': 'Our Services — temankamera_',
    'Galeri Testimoni — temankamera_': 'Customer Gallery — temankamera_',
    'Hasil Jepretan — temankamera_': 'Photo Gallery — temankamera_',
    'Rules Sewa — temankamera_': 'Rental Terms — temankamera_',
    'Tentang Kami — temankamera_': 'About Us — temankamera_',
    'Kontak & Booking — temankamera_': 'Contact & Booking — temankamera_',
    'Detail Produk — temankamera_': 'Product Details — temankamera_'
  };
  document.title = language === 'en' ? titleTranslations[initialPageTitle] || initialPageTitle : initialPageTitle;
}

function getAssistantReply(question) {
  const query = question.toLowerCase();
  if (/harga|price|biaya|cost|tarif/.test(query)) {
    const duration24 = currentLanguage === 'en' ? '24 hours' : '24 jam';
    const duration48 = currentLanguage === 'en' ? '48 hours' : '48 jam';
    const rows = cameraProducts.map((product) => `${product.name}: ${money.format(product.price24)} / ${duration24}, ${money.format(product.price48)} / ${duration48}`);
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
    return currentLanguage === 'en' ? 'temankamera_ is open daily from 10:00 to 22:00.' : 'temankamera_ buka pukul 10.00–22.00.';
  }
  if (/lokasi|area|cod|pickup|pick up|delivery|antar|cibubur|bekasi/.test(query)) {
    return currentLanguage === 'en'
      ? 'Service areas are Cibubur and Bekasi. Meet-up, self-pickup, and self-delivery are available. Ask us on WhatsApp for locations and details.'
      : 'Area layanan Cibubur dan Bekasi. Tersedia COD, self pick up, dan self delivery. Tanyakan lokasi serta detailnya melalui WhatsApp.';
  }
  if (/instax|paper|pindah|transfer|lighting|layanan|service|accessor/.test(query)) {
    const serviceList = extraProducts.map(({ name, note, price24 }) =>
      `${name}${note ? ` (${note})` : ''} (${money.format(price24)})`
    );
    return currentLanguage === 'en'
      ? `Services include ${serviceList.join(', ')}.`
      : `Layanan kami: ${serviceList.join(', ')}.`;
  }
  if (/rules|syarat|ketentuan|deposit|dp|denda|damage|return/.test(query)) {
    return currentLanguage === 'en'
      ? 'Rental terms cover deposits, rental duration, pickup and delivery, renter requirements, camera care, damage, and returns. Please read the Rental Terms page before booking.'
      : 'Rules sewa mencakup DP, durasi, pengambilan dan pengiriman, persyaratan, penggunaan kamera, kerusakan, serta pengembalian. Baca halaman Rules Sewa sebelum booking.';
  }
  return currentLanguage === 'en'
    ? 'I don’t have that detail yet. Our team can help you on WhatsApp.'
    : 'Aku belum punya detail itu. Tim temankamera_ bisa bantu lewat WhatsApp.';
}

function renderChatWidget() {
  if (document.querySelector('.chat-widget')) return;
  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <section class="chat-panel" aria-label="Chat temankamera_ai" hidden>
      <header class="chat-header"><img src="${root}/aset/LOGO%20temankamera_.png" alt=""><div><strong>temankamera_ Assistant</strong><small>Info rental kamera</small></div><button class="chat-close" type="button" aria-label="Tutup chat">×</button></header>
      <div class="chat-messages" role="log" aria-live="polite"><p class="chat-message chat-message-bot" data-chat-greeting></p><div class="chat-prompts"><button type="button" data-chat-prompt="harga">Harga kamera</button><button type="button" data-chat-prompt="booking">Cara booking</button><button type="button" data-chat-prompt="jam buka">Jam buka</button><button type="button" data-chat-prompt="area COD">Area COD</button></div></div>
      <form class="chat-form"><label class="visually-hidden" for="chat-question">Pertanyaan</label><input class="chat-input" id="chat-question" name="question" autocomplete="off" placeholder="Tulis pertanyaan..." required><button type="submit" aria-label="Kirim">➤</button></form>
    </section>
    <button class="chat-launch" type="button" aria-label="Buka temankamera_ai" aria-expanded="false"><img src="${root}/aset/LOGO%20temankamera_.png" alt=""><span>temankamera_ai</span></button>`;
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
      link.href = assistantWhatsAppUrl();
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

  widget.querySelector('[data-chat-greeting]').textContent = 'Hai! Aku asisten temankamera_. Tanyakan harga, booking, jam buka, atau area layanan.';
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
    ? `Halo temankamera_! Saya ingin menyewa ${productName}. Apakah tersedia untuk tanggal yang saya inginkan?`
    : 'Halo temankamera_! Saya ingin bertanya tentang ketersediaan dan proses booking.';
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  const destination = number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  return destination;
}

function assistantWhatsAppUrl() {
  const message = currentLanguage === 'en'
    ? 'Hello temankamera_! I have a question about renting a camera.'
    : 'Halo temankamera_! Saya ingin bertanya tentang penyewaan kamera.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderNavigation() {
  const header = document.querySelector('#site-header');
  if (!header) return;
  const links = [
    ['Home', `${root}/index.html`, 'index.html'],
    ['Katalog', pagePath('katalog'), 'katalog.html'],
    ['Layanan Kami', pagePath('layanan'), 'layanan.html'],
    ['Galeri Testimoni', pagePath('galeri'), 'galeri.html'],
    ['Hasil Jepretan', pagePath('hasil-jepretan'), 'hasil-jepretan.html'],
    ['Rules Sewa', pagePath('rules'), 'rules.html'],
    ['Tentang Kami', pagePath('tentang'), 'tentang.html'],
    ['Kontak', pagePath('kontak'), 'kontak.html']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  header.innerHTML = `
    <nav class="nav-shell" aria-label="Navigasi utama">
      <a class="brand" href="${root}/index.html" aria-label="temankamera_, ke halaman utama"><span class="brand-mark"><img src="${root}/aset/LOGO%20temankamera_.png" alt=""></span><span>temankamera_</span></a>
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
        <div><a class="brand footer-brand" href="${root}/index.html"><span class="brand-mark"><img src="${root}/aset/LOGO%20temankamera_.png" alt=""></span><span>temankamera_</span></a><p class="footer-tagline">Your friend to capture every moment.</p></div>
        <ul class="footer-links" aria-label="Navigasi footer"><li><a href="${root}/index.html">Home</a></li><li><a href="${pagePath('katalog')}">Katalog</a></li><li><a href="${pagePath('layanan')}">Layanan Kami</a></li><li><a href="${pagePath('galeri')}">Galeri Testimoni</a></li><li><a href="${pagePath('hasil-jepretan')}">Hasil Jepretan</a></li><li><a href="${pagePath('rules')}">Rules Sewa</a></li><li><a href="${pagePath('tentang')}">Tentang Kami</a></li><li><a href="${pagePath('kontak')}">Kontak</a></li></ul>
        <div class="footer-social"><strong>Ikuti cerita kami</strong><div class="social-links"><a class="social-link" href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp temankamera_"><img src="${root}/aset/LOGO%20WA.jpg" alt=""><span>WhatsApp</span></a><a class="social-link" href="https://www.instagram.com/temankamera_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @temankamera_"><img src="${root}/aset/LOGO%20IG.jpg" alt=""><span>Instagram</span></a><a class="social-link" href="https://www.tiktok.com/@temankamera_" target="_blank" rel="noopener noreferrer" aria-label="TikTok @temankamera_"><img src="${root}/aset/LOGO%20TIKTOK.jpg" alt=""><span>TikTok</span></a></div></div>
      </div>
      <div class="footer-bottom"><p>© ${new Date().getFullYear()} temankamera_</p><p>Your friend to capture every moment.</p></div>
    </div>`;
}

function productCard(product) {
  const isCamera = product.category === 'kamera';
  const photo = product.image
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

  const services = document.querySelector('[data-service-products]');
  if (services) services.innerHTML = extraProducts.map(productCard).join('');

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
  const image = product.image
    ? `<img src="${root}/PRODUK%20YANG%20DI%20SEWA/${encodeURIComponent(product.image)}" alt="${product.name}">`
    : `<span class="no-photo-tile">${product.visual}</span>`;
  const priceRows = isCamera
    ? `<div class="price-line"><span>24 Jam</span><strong>${money.format(product.price24)}</strong></div><div class="price-line"><span>48 Jam</span><strong>${money.format(product.price48)}</strong></div>`
    : `<div class="price-line"><span>${product.note || 'Harga'}</span><strong>${money.format(product.price24)}</strong></div>`;
  target.innerHTML = `<div class="detail-layout"><div class="detail-photo">${image}</div><div class="detail-copy"><span class="product-kind">${isCamera ? 'Kamera' : 'Accessories'}</span><h1>${product.name}</h1><p>${isCamera ? 'Pilihan kamera rental temankamera_. Tanyakan ketersediaan untuk tanggal yang kamu inginkan.' : 'Layanan atau perlengkapan tambahan dari temankamera_. Hubungi kami untuk menanyakan detail dan ketersediaannya.'}</p><div class="detail-price">${priceRows}</div><div class="detail-spec"><h2>Durasi / detail</h2><p>${isCamera ? 'Pilihan durasi 24 jam atau 48 jam.' : product.note || 'Konfirmasi detail saat booking.'}</p></div><div class="detail-spec"><h2>Isi paket</h2><p>Konfirmasi kelengkapan paket saat booking melalui WhatsApp.</p></div><div class="detail-spec"><h2>Syarat sewa</h2><p>Baca rules sewa lengkap sebelum booking.</p></div><div class="detail-actions"><a class="button button-primary" data-booking="${product.name}" href="${whatsappUrl(product.name)}">Booking via WhatsApp ↗</a><a class="button button-secondary" href="${pagePath('rules')}">Baca Rules</a></div></div></div>`;
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
    return `<figure class="gallery-photo"><img src="${source}" alt="Foto pelanggan temankamera_ ${index + 1}" loading="lazy" decoding="async"></figure>`;
  }).join('');
  const count = document.querySelector('[data-gallery-count]');
  if (count) count.textContent = images.length;

  initGalleryLightbox();
}

function renderCameraShots() {
  const target = document.querySelector('[data-camera-shots]');
  if (!target) return;

  target.innerHTML = cameraProducts.map((product) => {
    const images = cameraShotImages[product.id] || [];
    const photos = images.map((filename, index) => {
      const source = `${root}/HASIL%20JEPRETAN/${encodeURIComponent(product.id)}/${encodeURIComponent(filename)}`;
      return `<figure class="gallery-photo"><img src="${source}" alt="Hasil jepretan ${product.name} ${index + 1}" loading="lazy" decoding="async"></figure>`;
    }).join('');
    const content = images.length
      ? `<div class="gallery-grid">${photos}</div>`
      : '<p class="camera-shot-empty">Belum ada foto hasil jepretan untuk kamera ini.</p>';
    return `<section class="camera-shot-group"><h2>${product.name}</h2>${content}</section>`;
  }).join('');

  initGalleryLightbox();
}

function initGalleryLightbox() {
  const gallery = document.querySelector('[data-customer-gallery], [data-camera-shots]');
  if (!gallery) return;

  let lightbox = document.querySelector('.gallery-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'gallery-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.hidden = true;
    lightbox.innerHTML = `
      <div class="gallery-lightbox-panel">
        <button class="gallery-lightbox-close" type="button" aria-label="Tutup foto">×</button>
        <img src="" alt="Foto galeri yang diperbesar">
      </div>
    `;
    document.body.appendChild(lightbox);

    const close = () => {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('gallery-lightbox-open');
    };

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.closest('.gallery-lightbox-close')) {
        close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) {
        close();
      }
    });
  }

  const imageList = gallery.querySelectorAll('.gallery-photo img');
  imageList.forEach((image) => {
    const open = () => {
      const modalImg = lightbox.querySelector('img');
      modalImg.src = image.src;
      modalImg.alt = image.alt;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('gallery-lightbox-open');
    };

    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Perbesar ${image.alt}`);
    image.addEventListener('click', open);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
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
  renderCameraShots();
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
