document.addEventListener('DOMContentLoaded', () => { // Pastikan DOM siap

    // --- Data Milestone ---
    // Ganti dengan data Anda: tahun, path gambar, dan deskripsi
    const milestones = [
        {
            year: 1994,
            image: "img/kantorlama.png",
            description: "Pada tahun 1994, Perusahaan Berpfish didirikan di Banten Cilegon. Kevin Ferguson sebagai Founder dan Yelina Lim serta Keni Gorden sebagai Co-Founder"
        },
        {
            year: 1998,
            image: "img/pabrikikan.png", 
            description: "Perluasan pertama dilakukan pada tahun 1998. Kami meresmikan pabrik pertama di Skibidicity Tuff, Namun krisis moneter 1998 sangat memukuli perusahaan kami"
        },
        {
            year: 2001,
            image: "img/interikan.png", 
            description: "Awal langkah Kancah Internasional di tahun 2001. Kami memulai ekspor dan mencapai angka singnifikan di Malaysia, Thailand, dan ekspor di berbagai negara regional lainnya"
        },
        {
            year: 2008,
            image: "img/kapal.png", 
            description: "Kami membuka pabrik baru di Malaysia dan Thailand secara bersamaan dan membuka beberapa pabrik di berbagai pulau, Perusahaan kami mulai ekspansi."
        },
        {
            year: 2015,
            image: "img/Xiandme.png", 
            description: "Ekspansi pasar global dimulai tahun 2015. Kami juga mulai menjalin kerja sama dengan lembaga serta berbagai perusahaan dan membangun pabrik di Asia timur seperti China dan Jepang."
        },
        {
            year: 2019,
            image: "img/berpteam.png",
            description: "Kami mendirikan sistem bernama Berpteam, sistem yang membuat nelayan independen dapat mendapatkan hidup yang lebih baik dengan transaksi langsung dengan kami, Dengan bantuan dari Pemerintah Pusat"
        },
        {
            year: 2025,
            image: "https://via.placeholder.com/300x200/cccccc/000000?text=2025", 
            description: "Rencana masa depan untuk tahun 2025 dan seterusnya. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
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