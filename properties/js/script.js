  // Ambil semua link navbar
  const navLinks = document.querySelectorAll('.nav-link');

  // Tambahkan event listener untuk setiap link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      // Tambahkan kelas 'active' pada link yang diklik
      link.classList.add('active');
    });
  });