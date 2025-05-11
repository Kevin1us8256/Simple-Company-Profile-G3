document.addEventListener('DOMContentLoaded', () => { // Pastikan DOM siap

    // --- Data Milestone ---
    // Ganti dengan data Anda: tahun, path gambar, dan deskripsi
    const milestones = [
        {
            year: 1994,
            image: "img/kantorlama.png",
            description: "Pada tahun 1994, Perusahaan Berpfish didirikan di Banten Cilegon. Kevin Ferguson sebagai Founder dan Yelina Lim serta Keni Gorden sebagai Co-Founder. Berpfish meraih kontrak kerja sama pertamanya dengan distributor makanan lokal di Jakarta. Ini menjadi tonggak awal perluasan jaringan distribusi perusahaan di Pulau Jawa."
        },
        {
            year: 1998,
            image: "img/pabrikikan.png", 
            description: "Berpfish melakukan langkah besar dengan meresmikan pabrik pertamanya di Skibidicity Tuff sebagai bagian dari strategi ekspansi produksi. Namun, tahun ini juga menjadi salah satu masa tersulit dalam sejarah perusahaan. Krisis moneter 1998 yang melanda Indonesia secara signifikan memukul stabilitas finansial perusahaan. Nilai tukar yang anjlok dan biaya produksi yang melonjak menyebabkan gangguan pada rantai pasok, operasional pabrik dan menghambat jalan ekspor kami. Meski demikian, manajemen tetap berkomitmen untuk mempertahankan seluruh tenaga kerja dan fokus pada efisiensi agar perusahaan dapat bertahan di tengah badai ekonomi."
        },
        {
            year: 2001,
            image: "img/interikan.png", 
            description: "Berpfish mengambil langkah awal menuju pasar internasional dengan memulai kegiatan ekspor produk hasil laut ke negara-negara tetangga di kawasan Asia Tenggara. Malaysia dan Thailand menjadi dua pasar utama pertama yang menunjukkan respons positif, dengan volume ekspor yang tumbuh signifikan dalam waktu singkat. Keberhasilan ini membuka jalan bagi ekspor ke negara-negara regional lainnya seperti Singapura, Vietnam, dan Filipina. Momentum ini menjadi fondasi penting dalam membangun reputasi Berpfish sebagai produsen terpercaya di pasar Asia, sekaligus menandai dimulainya perjalanan global perusahaan"
        },
        {
            year: 2008,
            image: "img/kapal.png", 
            description: "Berpfish menerima sertifikasi ISO 22000 untuk keamanan pangan, memperkuat reputasinya sebagai produsen makanan laut berkualitas tinggi. Kami meresmikan pabrik baru di Malaysia dan Thailand secara bersamaan, Kami membangun Whaling Station pertama kami, dan berhasil membangun beberapa pabrik di berbagai pulau, Perusahaan kami mulai ekspansi."
        },
        {
            year: 2015,
            image: "img/berpteam.png",
            description: "Sebagai wujud komitmen jangka panjang terhadap keberlanjutan dan pemberdayaan komunitas lokal, Berpfish memperkenalkan Berpteam—sebuah platform digital yang menghubungkan nelayan independen langsung dengan perusahaan sebagai distributor penengah. Sistem ini memangkas rantai distribusi yang panjang dan tidak efisien, memastikan harga jual yang lebih adil serta transparansi produk sejak dari sumbernya. Inisiatif ini mendapat dukungan penuh dari Pemerintah Pusat sebagai bagian dari program strategis ketahanan pangan laut dan penguatan ekonomi pesisir. Untuk memperluas dampak sistem ini, Berpfish mengintegrasikan Berpteam dengan jaringan distribusi digital Toko Ipsum, mitra e-commerce internasional sejak 2015. Kolaborasi ini memungkinkan hasil laut dari komunitas lokal menjangkau pasar global secara langsung, dengan jaminan kualitas dan pengiriman cepat. Sinergi ini memperkuat posisi Berpfish sebagai pelopor ekosistem pangan laut digital yang adil, inklusif, dan berkelanjutan."
        },
        {
            year: 2019,
            image: "img/Xiandme.png",
            description: "Berpfish resmi memulai ekspansi pasar global secara agresif dengan memperluas jaringan distribusi ke Asia Timur, Eropa, dan Amerika Utara. Tahun ini menandai awal dari transformasi perusahaan menjadi pemain internasional di industri hasil laut. Kami mulai menjalin kerja sama dengan berbagai lembaga serta perusahaan multinasional untuk memperkuat posisi di pasar global. Sebagai bagian dari strategi ekspansi, Berpfish membangun fasilitas produksi dan pusat distribusi di China dan Jepang untuk mendekatkan rantai pasok dengan konsumen Asia Timur, sekaligus meningkatkan efisiensi logistik dan kecepatan pengiriman."
        },
        {
            year: 2025,
            image: "img/research.png", 
            description: "Memasuki era baru, Berpfish menegaskan posisinya sebagai pemimpin industri pangan laut berkelanjutan di Asia. Di tahun ini, perusahaan meluncurkan Berpfish BlueTech Initiative, sebuah program inovasi berbasis teknologi ramah lingkungan yang fokus pada efisiensi energi, pengurangan limbah laut, dan digitalisasi proses distribusi. Kami juga membuka pusat riset dan pengembangan baru di Bandung yang berkolaborasi dengan universitas-universitas terkemuka untuk mendorong inovasi pangan berbasis kelautan. Dengan ekspansi ke pasar Timur Tengah dan kemitraan distribusi di Afrika Timur, Berpfish semakin memperkuat jaringan globalnya sambil tetap menjaga akar lokal dan komitmen terhadap komunitas nelayan Indonesia."
        }
    ];

    // --- Variabel Global & Referensi DOM ---
    let currentMilestoneIndex = 0;
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    const milestoneContentDiv = document.getElementById('milestone-content');
    const milestoneImage = document.getElementById('milestone-image');
    const milestoneYear = document.getElementById('milestone-year');
    const milestoneDescription = document.getElementById('milestone-description');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let milestoneDots = []; // Untuk menyimpan elemen dot DOM

    // --- Fungsi untuk Menampilkan Milestone ---
    function showMilestone(index) {
        if (index < 0 || index >= milestones.length || !milestoneDots[index]) {
            console.error("Index milestone tidak valid:", index);
            return; 
        }

        const milestone = milestones[index];

        // Tambahkan efek fade out sebelum ganti konten
        milestoneContentDiv.classList.add('fade-out');

        // Tunggu transisi fade out selesai, baru ganti konten
        setTimeout(() => {
            // Update konten
            milestoneImage.src = milestone.image;
            milestoneImage.alt = `Gambar Milestone ${milestone.year}`;
            milestoneYear.textContent = `Tahun ${milestone.year}`;
            milestoneDescription.textContent = milestone.description;

            // Hapus kelas fade-out untuk memunculkan konten (fade-in via CSS)
             milestoneContentDiv.classList.remove('fade-out');

             // Update state aktif pada dot
            milestoneDots.forEach((dot, i) => {
                 // Periksa apakah dot ada sebelum mencoba mengakses classList
                if(dot) {
                    dot.classList.toggle('active', i === index);
                }
            });

            // Update index saat ini
            currentMilestoneIndex = index;

            // Update status tombol navigasi
            prevBtn.disabled = (index === 0);
            nextBtn.disabled = (index === milestones.length - 1);

        }, 300); // Sesuaikan durasi timeout dengan transisi CSS (0.3s = 300ms)

    }

    // --- Fungsi untuk Membuat Timeline Visual ---
    function createTimeline() {
        timelineWrapper.innerHTML = '';
        milestoneDots = []; // Reset array dot

        milestones.forEach((milestone, index) => {
            // Kontainer untuk dot dan label tahun
            const dotContainer = document.createElement('div');
            dotContainer.classList.add('timeline-milestone');

            // Titik (dot)
            const dot = document.createElement('div');
            dot.classList.add('timeline-dot');
            dot.dataset.index = index; // Simpan index di data attribute

            // Label Tahun
            const yearLabel = document.createElement('span');
            yearLabel.classList.add('milestone-year-label');
            yearLabel.textContent = milestone.year;

            // Tambahkan event listener ke dot
            dot.addEventListener('click', () => {
                showMilestone(index);
            });

            // Susun elemen
            dotContainer.appendChild(dot);
            dotContainer.appendChild(yearLabel);
            timelineWrapper.appendChild(dotContainer);

            milestoneDots.push(dot); // Simpan referensi dot DOM ke array
        });

        // Tampilkan milestone pertama saat load awal
        if (milestones.length > 0) {
            // Hapus class fade-out agar tampil tanpa animasi saat pertama kali load
            milestoneContentDiv.classList.remove('fade-out');
            showMilestone(0);
        } else {
            // Handle jika tidak ada milestone
            milestoneContentDiv.innerHTML = '<p class="text-center">Tidak ada data timeline.</p>';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    }


    // --- Event Listener untuk Tombol Navigasi ---
    prevBtn.addEventListener('click', () => {
        if (currentMilestoneIndex > 0) {
            showMilestone(currentMilestoneIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentMilestoneIndex < milestones.length - 1) {
            showMilestone(currentMilestoneIndex + 1);
        }
    });

    // --- Inisialisasi Timeline ---
    createTimeline();

}); // Akhir dari DOMContentLoaded

// Partner
