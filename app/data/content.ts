const en = {
  meta: {
    title: 'Hruno — HR, with a copilot that does the work',
    description:
      'An AI-native HR suite for Indonesian teams. People, leave, attendance, payroll and hiring in one record, with a copilot that reads and acts across it.',
  },
  nav: {
    label: 'Primary',
    product: 'Product',
    copilot: 'Copilot',
    how: 'How it works',
    faq: 'FAQ',
  },
  locale: {
    label: 'Language',
    en: 'EN',
    id: 'ID',
  },
  hero: {
    railLabel: 'Hruno at a glance',
    statement:
      'HR, leave, attendance, payroll and hiring. One copilot does the admin across all of it.',
    audience: 'For Indonesian teams of 20–500 people.',
    primary: 'Join the waitlist',
    secondary: 'Book a demo',
    sample: 'Sample workspace',
    photoAlt:
      'Two people talking by a floor-to-ceiling window above a city, in black and white',
    photoCaption: 'The view from the 32nd floor. Photograph by Charles Forerunner.',
    facts: [
      'People and leave',
      'Attendance, payroll',
      'Hiring pipeline',
      'AI across the record',
      'Bilingual by default',
    ],
    rail: [
      { label: 'Modules', value: '5' },
      { label: 'Record', value: '1' },
      { label: 'Language', value: 'EN / ID' },
      { label: 'Status', value: 'Pre-launch' },
    ],
    actionTile: { label: 'Waitlist', value: 'Open' },
    copilot: {
      title: 'Hruno Copilot',
      promptLabel: 'Ask the record',
      prompts: [
        {
          q: "Who's out next week?",
          text: 'Three people are out next week. Thursday leaves the Jakarta support desk one person short.',
          rows: [
            { name: 'Ayu Lestari', tag: 'Leave', detail: '21–25 Oct' },
            { name: 'Bima Pratama', tag: 'Leave', detail: '22–24 Oct' },
            { name: 'Citra Dewi', tag: 'Remote', detail: '23 Oct' },
          ],
          action: 'Approve 2 requests',
        },
        {
          q: "What's blocking payroll?",
          text: 'Payroll is waiting on two things: one missing bank account and one unresolved overtime claim.',
          rows: [
            { name: 'Rani Kusuma', tag: 'Bank account', detail: 'Missing' },
            { name: 'Dimas Saputra', tag: 'Overtime', detail: '4.5 h' },
            { name: 'Hana Safitri', tag: 'Payroll', detail: 'Ready' },
          ],
          action: 'Open the payroll run',
        },
        {
          q: "Who's next to hire?",
          text: 'Two candidates are ready for a final interview. One offer is waiting on approval.',
          rows: [
            { name: 'Nadia Putri', tag: 'Final interview', detail: '28 Oct' },
            { name: 'Reza Maulana', tag: 'Final interview', detail: '29 Oct' },
            { name: 'Sarah Wijaya', tag: 'Offer', detail: 'Approval' },
          ],
          action: 'Open the pipeline',
        },
      ],
      foot: ['People · Leave · Attendance · Payroll · Hiring', 'Same record, same permissions'],
      approved: 'Approved in this sample',
      opened: 'Opened in this sample',
      actionNote: 'Sample only — no live data changes.',
      approvedShort: 'Approved',
    },
  },
  features: {
    heading: 'One board for the work',
    sampleNote: 'Product views below are sample data from one workspace.',
    items: [
      {
        title: 'Ask your HR record',
        body: 'Plain questions, answered from the same data your team works in.',
      },
      {
        title: 'Leave that keeps cover',
        body: 'See who is out before the team feels it. Approve with the week in view.',
      },
      {
        title: 'Attendance without the chase',
        body: 'Late, remote, overtime and exceptions, collected in one list.',
      },
      {
        title: 'Payroll that reconciles',
        body: 'Base, allowances and deductions in one run, with every line traceable.',
      },
      {
        title: 'Hiring in one pipeline',
        body: 'From first reply to signed offer, every candidate on the same board.',
      },
      {
        title: 'People records, not spreadsheets',
        body: 'Roles, contracts, documents and reporting lines in one place.',
      },
    ],
    fragments: {
      ask: {
        prompt: "Who's out next week?",
        answer: 'Three people are out. Cover drops to one on the Jakarta desk.',
      },
      leave: {
        name: 'Bima Pratama',
        dates: '22–24 Oct',
        days: ['M', 'T', 'W', 'T', 'F'],
        status: 'Pending',
        duration: '3 days',
        quarter: 'Q4',
      },
      attendance: {
        title: 'Exceptions',
        today: 'Today',
        rows: [
          { name: 'Citra Dewi', detail: 'Remote · 08:42', state: 'Logged' },
          { name: 'Dimas Saputra', detail: 'Overtime · 4.5 h', state: 'Review' },
          { name: 'Fajar Ramadhan', detail: 'Late · 09:18', state: 'Noted' },
        ],
      },
      payroll: {
        title: 'October run',
        rows: [
          { label: 'Base', value: 'Rp 126,400,000' },
          { label: 'Allowances', value: 'Rp 18,750,000' },
          { label: 'Deductions', value: '− Rp 9,150,000' },
        ],
        netLabel: 'Net pay',
        net: 'Rp 136,000,000',
        status: 'Blocked',
      },
      hiring: {
        title: 'Design pipeline',
        stages: [
          { label: 'Screened', value: '24' },
          { label: 'Interview', value: '6' },
          { label: 'Final', value: '2' },
        ],
        candidate: 'Nadia Putri',
        note: 'Final panel · 28 Oct',
      },
      people: {
        name: 'Ayu Lestari',
        role: 'Senior support lead',
        meta: 'Jakarta · Permanent',
        status: 'Active',
        fields: [
          { label: 'Reports to', value: 'Rani Kusuma' },
          { label: 'Joined', value: 'Mar 2023' },
        ],
      },
    },
  },
  records: {
    heading: 'Every record on one board',
    caption: 'Eight records from a sample workspace. Open a row to see the detail.',
    columns: ['Record', 'Area', 'Detail', 'Status'],
    rows: [
      {
        name: 'Ayu Lestari',
        module: 'People',
        detail: 'Jakarta · Joined 2023',
        status: 'Active',
        long: 'Senior support lead. Permanent contract. Reports to Rani Kusuma. Two documents are current; one review is due in November.',
      },
      {
        name: 'Bima Pratama',
        module: 'Leave',
        detail: '22–24 Oct · 3 days',
        status: 'Pending',
        long: 'Annual leave request from Bima. Cover is not yet assigned on the Jakarta support desk. Two leave requests overlap on Thursday.',
      },
      {
        name: 'Citra Dewi',
        module: 'Attendance',
        detail: 'Bandung · Today',
        status: 'Remote',
        long: 'Remote day, logged at 08:42. No exceptions. The Bandung team is at 4 of 6 on site this week.',
      },
      {
        name: 'Dimas Saputra',
        module: 'Payroll',
        detail: 'Overtime · 4.5 h',
        status: 'Needs review',
        long: 'Overtime claim for the October close, 4.5 hours at 1.5×. Waiting on a manager note before the run can be locked.',
      },
      {
        name: 'Eka Nugroho',
        module: 'Hiring',
        detail: 'Final · 28 Oct',
        status: 'In pipeline',
        long: 'Product designer, final panel on 28 October. Two interviewers confirmed; the take-home score is 4 of 5.',
      },
      {
        name: 'Fajar Ramadhan',
        module: 'People',
        detail: 'Jakarta · Day 3',
        status: 'Onboarding',
        long: 'Operations analyst, day 3 of 30. Laptop issued, payroll profile complete, two policy acknowledgements outstanding.',
      },
      {
        name: 'Gita Permata',
        module: 'Leave',
        detail: '2 days · Pending',
        status: 'Pending',
        long: 'Unpaid leave request for 29–30 October. Cover is not yet confirmed for the month-end close.',
      },
      {
        name: 'Hana Safitri',
        module: 'Payroll',
        detail: 'Jakarta · 28 Oct',
        status: 'Ready',
        long: 'October payroll line is complete: base, allowance and deduction reconcile to the net figure. Bank account verified.',
      },
    ],
  },
  how: {
    heading: 'From record to action',
    stages: [
      {
        duration: 'Import',
        title: 'Bring your people in',
        body: 'Import your team, roles and records. Your first board is built from that import.',
      },
      {
        duration: 'Ask',
        title: 'Ask across the suite',
        body: 'The copilot reads the same record your team does, then names what needs a decision.',
      },
      {
        duration: 'Approve',
        title: 'Approve the action',
        body: 'You stay in control of every change. The record updates in place.',
      },
    ],
  },
  marquee: 'One place for the unglamorous work.',
  faq: {
    heading: 'Questions',
    help: 'Still deciding? Book a demo',
    items: [
      {
        q: 'What is Hruno?',
        a: 'An HR suite with an AI copilot. People, leave, attendance, payroll and recruitment sit in one record, and the copilot can read and act across it.',
      },
      {
        q: 'Which HR work does it cover?',
        a: 'Five core areas: people records, leave, attendance, payroll and recruitment. Other modules are being shaped with waitlist teams, not announced yet.',
      },
      {
        q: 'Is the copilot just a chatbot?',
        a: 'No. It reads the same HR record your team works in and can carry out routine actions with role-aware access. You approve every change.',
      },
      {
        q: 'Can we use it now?',
        a: 'Not yet. Hruno is pre-launch. Join the waitlist or book a demo to see the early build and help shape what ships first.',
      },
      {
        q: 'Does it speak Indonesian?',
        a: 'Yes. This page and the product are available in English and Indonesian.',
      },
      {
        q: 'How is our data handled?',
        a: 'We will walk through roles, access and data handling one by one in the demo. We have not announced certifications or statutory compliance claims.',
      },
      {
        q: 'How much will it cost?',
        a: 'Pricing is not set. Waitlist teams will help shape the first packages and the price.',
      },
    ],
  },
  cta: {
    heading: 'Put your HR on one board',
    body: 'Join the waitlist for early access, or book a 20-minute walkthrough. We will show the copilot on your own HR scenarios.',
    primary: 'Join the waitlist',
    secondary: 'Book a demo',
    photoAlt: 'A white concrete structure against a black sky, in black and white',
    photoCaption: 'Concrete and sky. Photograph by Carl Nenzen Loven.',
  },
  footer: {
    navLabel: 'Footer',
    links: [
      { label: 'Product', href: '#product' },
      { label: 'Copilot', href: '#copilot' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactLabel: 'Talk to us',
    contact: 'hello@hruno.ai.id',
    legal: '© 2026 Hruno. Pre-launch.',
    sampleNote: 'Product views show a sample workspace.',
    credits:
      'Photographs: Charles Forerunner and Carl Nenzen Loven, Unsplash, via Lorem Picsum.',
    backToTop: 'Back to top',
  },
  mailto: {
    waitlist: {
      subject: 'Hruno waitlist',
      body: 'Hi Hruno, I would like to join the waitlist.\n\nName:\nCompany:\nTeam size:\nWhat we use today:\n',
    },
    demo: {
      subject: 'Hruno demo',
      body: 'Hi Hruno, I would like to book a 20-minute demo.\n\nName:\nCompany:\nTeam size:\nWhat we would like to see:\n',
    },
  },
}

export type Locale = 'en' | 'id'
export type Copy = typeof en

const id: Copy = {
  meta: {
    title: 'Hruno — SDM, dengan copilot yang mengerjakan administrasinya',
    description:
      'Suite SDM berbasis AI untuk tim Indonesia. Data orang, cuti, kehadiran, payroll, dan rekrutmen dalam satu catatan, dengan copilot yang membaca dan bertindak di atasnya.',
  },
  nav: {
    label: 'Utama',
    product: 'Produk',
    copilot: 'Copilot',
    how: 'Cara kerja',
    faq: 'FAQ',
  },
  locale: {
    label: 'Bahasa',
    en: 'EN',
    id: 'ID',
  },
  hero: {
    railLabel: 'Hruno sekilas',
    statement:
      'SDM, cuti, kehadiran, payroll, dan rekrutmen. Satu copilot mengerjakan administrasinya.',
    audience: 'Untuk tim Indonesia dengan 20–500 orang.',
    primary: 'Gabung waitlist',
    secondary: 'Jadwalkan demo',
    sample: 'Ruang kerja contoh',
    photoAlt:
      'Dua orang berbincang di dekat jendela besar dengan pemandangan kota, hitam putih',
    photoCaption: 'Pemandangan dari lantai 32. Foto oleh Charles Forerunner.',
    facts: [
      'Orang dan cuti',
      'Kehadiran, payroll',
      'Pipeline rekrutmen',
      'AI di seluruh catatan',
      'Dua bahasa sejak awal',
    ],
    rail: [
      { label: 'Modul', value: '5' },
      { label: 'Catatan', value: '1' },
      { label: 'Bahasa', value: 'EN / ID' },
      { label: 'Status', value: 'Pra-rilis' },
    ],
    actionTile: { label: 'Waitlist', value: 'Terbuka' },
    copilot: {
      title: 'Hruno Copilot',
      promptLabel: 'Tanya catatan',
      prompts: [
        {
          q: 'Siapa yang tidak masuk minggu depan?',
          text: 'Tiga orang tidak masuk minggu depan. Pada Kamis, tim support Jakarta kurang satu orang.',
          rows: [
            { name: 'Ayu Lestari', tag: 'Cuti', detail: '21–25 Okt' },
            { name: 'Bima Pratama', tag: 'Cuti', detail: '22–24 Okt' },
            { name: 'Citra Dewi', tag: 'Remote', detail: '23 Okt' },
          ],
          action: 'Setujui 2 pengajuan',
        },
        {
          q: 'Apa yang menahan payroll?',
          text: 'Payroll menunggu dua hal: satu rekening bank belum lengkap dan satu klaim lembur belum selesai.',
          rows: [
            { name: 'Rani Kusuma', tag: 'Rekening', detail: 'Belum lengkap' },
            { name: 'Dimas Saputra', tag: 'Lembur', detail: '4,5 jam' },
            { name: 'Hana Safitri', tag: 'Payroll', detail: 'Siap' },
          ],
          action: 'Buka proses payroll',
        },
        {
          q: 'Siapa kandidat berikutnya?',
          text: 'Dua kandidat siap interview akhir. Satu offer menunggu persetujuan.',
          rows: [
            { name: 'Nadia Putri', tag: 'Interview akhir', detail: '28 Okt' },
            { name: 'Reza Maulana', tag: 'Interview akhir', detail: '29 Okt' },
            { name: 'Sarah Wijaya', tag: 'Offer', detail: 'Persetujuan' },
          ],
          action: 'Buka pipeline',
        },
      ],
      foot: ['SDM · Cuti · Kehadiran · Payroll · Rekrutmen', 'Catatan sama, izin sama'],
      approved: 'Disetujui di contoh ini',
      opened: 'Dibuka di contoh ini',
      actionNote: 'Hanya contoh — tidak ada data aktif yang berubah.',
      approvedShort: 'Disetujui',
    },
  },
  features: {
    heading: 'Satu papan untuk pekerjaannya',
    sampleNote: 'Tampilan produk di bawah ini adalah data contoh dari satu workspace.',
    items: [
      {
        title: 'Tanya catatan SDM',
        body: 'Pertanyaan biasa, dijawab dari data yang sama dengan tim Anda.',
      },
      {
        title: 'Cuti tanpa kekosongan tim',
        body: 'Lihat siapa yang tidak masuk sebelum tim terganggu. Setujui dengan konteks minggu itu.',
      },
      {
        title: 'Kehadiran tanpa perlu mengejar',
        body: 'Terlambat, remote, lembur, dan pengecualian, terkumpul di satu daftar.',
      },
      {
        title: 'Payroll yang bisa dicocokkan',
        body: 'Gaji pokok, tunjangan, dan potongan dalam satu proses, setiap baris bisa ditelusuri.',
      },
      {
        title: 'Rekrutmen satu alur',
        body: 'Dari balasan pertama sampai offer, semua kandidat di papan yang sama.',
      },
      {
        title: 'Data karyawan, bukan spreadsheet',
        body: 'Peran, kontrak, dokumen, dan garis pelaporan di satu tempat.',
      },
    ],
    fragments: {
      ask: {
        prompt: 'Siapa yang tidak masuk minggu depan?',
        answer: 'Tiga orang tidak masuk. Tim support Jakarta kurang satu orang.',
      },
      leave: {
        name: 'Bima Pratama',
        dates: '22–24 Okt',
        days: ['S', 'S', 'R', 'K', 'J'],
        status: 'Menunggu',
        duration: '3 hari',
        quarter: 'Q4',
      },
      attendance: {
        title: 'Pengecualian',
        today: 'Hari ini',
        rows: [
          { name: 'Citra Dewi', detail: 'Remote · 08.42', state: 'Tercatat' },
          { name: 'Dimas Saputra', detail: 'Lembur · 4,5 jam', state: 'Tinjau' },
          { name: 'Fajar Ramadhan', detail: 'Terlambat · 09.18', state: 'Dicatat' },
        ],
      },
      payroll: {
        title: 'Proses Oktober',
        rows: [
          { label: 'Gaji pokok', value: 'Rp 126.400.000' },
          { label: 'Tunjangan', value: 'Rp 18.750.000' },
          { label: 'Potongan', value: '− Rp 9.150.000' },
        ],
        netLabel: 'Gaji bersih',
        net: 'Rp 136.000.000',
        status: 'Terhambat',
      },
      hiring: {
        title: 'Pipeline desain',
        stages: [
          { label: 'Seleksi', value: '24' },
          { label: 'Interview', value: '6' },
          { label: 'Final', value: '2' },
        ],
        candidate: 'Nadia Putri',
        note: 'Panel akhir · 28 Okt',
      },
      people: {
        name: 'Ayu Lestari',
        role: 'Senior support lead',
        meta: 'Jakarta · Tetap',
        status: 'Aktif',
        fields: [
          { label: 'Melapor ke', value: 'Rani Kusuma' },
          { label: 'Bergabung', value: 'Mar 2023' },
        ],
      },
    },
  },
  records: {
    heading: 'Semua catatan di satu papan',
    caption: 'Delapan catatan dari ruang kerja contoh. Buka satu baris untuk melihat detail.',
    columns: ['Catatan', 'Area', 'Detail', 'Status'],
    rows: [
      {
        name: 'Ayu Lestari',
        module: 'SDM',
        detail: 'Jakarta · Bergabung 2023',
        status: 'Aktif',
        long: 'Senior support lead. Kontrak tetap. Melapor ke Rani Kusuma. Dua dokumen masih berlaku; satu review jatuh tempo November.',
      },
      {
        name: 'Bima Pratama',
        module: 'Cuti',
        detail: '22–24 Okt · 3 hari',
        status: 'Menunggu',
        long: 'Pengajuan cuti tahunan dari Bima. Pengganti belum ditetapkan di tim support Jakarta. Dua pengajuan cuti bertumpuk pada Kamis.',
      },
      {
        name: 'Citra Dewi',
        module: 'Kehadiran',
        detail: 'Bandung · Hari ini',
        status: 'Remote',
        long: 'Hari remote, tercatat 08.42. Tidak ada pengecualian. Tim Bandung 4 dari 6 orang di kantor minggu ini.',
      },
      {
        name: 'Dimas Saputra',
        module: 'Payroll',
        detail: 'Lembur · 4,5 jam',
        status: 'Perlu tinjau',
        long: 'Klaim lembur untuk tutup buku Oktober, 4,5 jam di 1,5×. Menunggu catatan manajer sebelum proses dikunci.',
      },
      {
        name: 'Eka Nugroho',
        module: 'Rekrutmen',
        detail: 'Final · 28 Okt',
        status: 'Di pipeline',
        long: 'Product designer, panel akhir 28 Oktober. Dua pewawancara terkonfirmasi; skor take-home 4 dari 5.',
      },
      {
        name: 'Fajar Ramadhan',
        module: 'SDM',
        detail: 'Jakarta · Hari 3',
        status: 'Onboarding',
        long: 'Operations analyst, hari 3 dari 30. Laptop sudah diberikan, profil payroll lengkap, dua persetujuan kebijakan belum.',
      },
      {
        name: 'Gita Permata',
        module: 'Cuti',
        detail: '2 hari · Menunggu',
        status: 'Menunggu',
        long: 'Pengajuan cuti tanpa bayaran untuk 29–30 Oktober. Cover belum terkonfirmasi untuk tutup buku akhir bulan.',
      },
      {
        name: 'Hana Safitri',
        module: 'Payroll',
        detail: 'Jakarta · 28 Okt',
        status: 'Siap',
        long: 'Baris payroll Oktober lengkap: gaji pokok, tunjangan, dan potongan cocok dengan angka bersih. Rekening bank terverifikasi.',
      },
    ],
  },
  how: {
    heading: 'Dari catatan ke tindakan',
    stages: [
      {
        duration: 'Impor',
        title: 'Masukkan tim Anda',
        body: 'Impor tim, peran, dan catatan. Papan pertama dibangun dari impor itu.',
      },
      {
        duration: 'Tanya',
        title: 'Tanya lintas modul',
        body: 'Copilot membaca catatan yang sama dengan tim Anda, lalu menyebut apa yang butuh keputusan.',
      },
      {
        duration: 'Setujui',
        title: 'Setujui tindakan',
        body: 'Anda tetap memegang kendali atas setiap perubahan. Catatan diperbarui di tempat.',
      },
    ],
  },
  marquee: 'Satu tempat untuk kerja yang tak terlihat.',
  faq: {
    heading: 'Pertanyaan',
    help: 'Masih ragu? Jadwalkan demo',
    items: [
      {
        q: 'Apa itu Hruno?',
        a: 'Suite SDM dengan copilot AI. Data orang, cuti, kehadiran, payroll, dan rekrutmen ada di satu catatan, dan copilot bisa membaca serta bertindak di atasnya.',
      },
      {
        q: 'Pekerjaan SDM apa yang dicakup?',
        a: 'Lima area inti: data orang, cuti, kehadiran, payroll, dan rekrutmen. Modul lain sedang kami rancang bersama tim waitlist, belum diumumkan.',
      },
      {
        q: 'Apakah copilot hanya chatbot?',
        a: 'Bukan. Copilot membaca catatan SDM yang sama dan bisa menjalankan tindakan rutin dengan akses sesuai peran. Anda menyetujui setiap perubahan.',
      },
      {
        q: 'Apakah sudah bisa dipakai?',
        a: 'Belum. Hruno masih pra-rilis. Gabung waitlist atau jadwalkan demo untuk melihat versi awal dan ikut menentukan apa yang dirilis lebih dulu.',
      },
      {
        q: 'Apakah mendukung Bahasa Indonesia?',
        a: 'Ya. Halaman ini dan produk tersedia dalam bahasa Inggris dan Indonesia.',
      },
      {
        q: 'Bagaimana data kami ditangani?',
        a: 'Peran, akses, dan alur data akan kami jelaskan satu per satu saat demo. Kami belum mengumumkan sertifikasi atau klaim kepatuhan apa pun.',
      },
      {
        q: 'Berapa harganya?',
        a: 'Harga belum ditetapkan. Tim waitlist akan ikut membentuk paket dan harga awal.',
      },
    ],
  },
  cta: {
    heading: 'Tempatkan SDM di satu papan',
    body: 'Gabung waitlist untuk akses awal, atau jadwalkan walkthrough 20 menit. Kami akan menunjukkan copilot pada skenario SDM Anda.',
    primary: 'Gabung waitlist',
    secondary: 'Jadwalkan demo',
    photoAlt: 'Struktur beton putih dengan latar langit hitam, hitam putih',
    photoCaption: 'Beton dan langit. Foto oleh Carl Nenzen Loven.',
  },
  footer: {
    navLabel: 'Navigasi footer',
    links: [
      { label: 'Produk', href: '#product' },
      { label: 'Copilot', href: '#copilot' },
      { label: 'Cara kerja', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactLabel: 'Hubungi kami',
    contact: 'hello@hruno.ai.id',
    legal: '© 2026 Hruno. Pra-rilis.',
    sampleNote: 'Tampilan produk memakai ruang kerja contoh.',
    credits:
      'Foto: Charles Forerunner dan Carl Nenzen Loven, Unsplash, melalui Lorem Picsum.',
    backToTop: 'Kembali ke atas',
  },
  mailto: {
    waitlist: {
      subject: 'Waitlist Hruno',
      body: 'Halo Hruno, saya ingin bergabung dengan waitlist.\n\nNama:\nPerusahaan:\nJumlah tim:\nYang kami pakai sekarang:\n',
    },
    demo: {
      subject: 'Demo Hruno',
      body: 'Halo Hruno, saya ingin menjadwalkan demo 20 menit.\n\nNama:\nPerusahaan:\nJumlah tim:\nYang ingin kami lihat:\n',
    },
  },
}

export const content: Record<Locale, Copy> = { en, id }
