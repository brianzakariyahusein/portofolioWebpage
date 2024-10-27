const text = "Brian Zakariya";
        let index = 0;
        const speed = 150; // kecepatan mengetik dalam milidetik

        function typeEffect() {
            if (index < text.length) {
                document.getElementById("text").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            }
        }

        typeEffect(); // Mulai efek mengetik saat halaman dimuat