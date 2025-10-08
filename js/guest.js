// Tối giản Wedding Invitation Script - All-in-one
((window) => {
    'use strict';

    // ============ THEME ============
    const theme = {
        check: () => {
            const saved = localStorage.getItem('theme');
            if (saved) {
                document.documentElement.setAttribute('data-bs-theme', saved);
            } else {
                // Set default theme if not set
                document.documentElement.setAttribute('data-bs-theme', 'light');
            }
        },
        change: () => {
            const current = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            console.log('Theme changed to:', newTheme); // Debug log
        }
    };

    // ============ AUDIO ============
    const audio = {
        player: null,
        button: null,
        isPlaying: false,

        init: () => {
            const url = document.body.getAttribute('data-audio');
            if (!url) return;

            audio.player = new Audio(url);
            audio.player.loop = true;
            audio.button = document.getElementById('button-music');
            
            if (audio.button) {
                audio.button.addEventListener('click', audio.toggle);
            }
        },

        play: () => {
            if (!audio.player || !audio.button) return;
            
            audio.player.play().then(() => {
                audio.isPlaying = true;
                audio.button.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
            }).catch(err => console.log('Audio play failed:', err));
        },

        pause: () => {
            if (!audio.player || !audio.button) return;
            
            audio.player.pause();
            audio.isPlaying = false;
            audio.button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        },

        toggle: () => {
            audio.isPlaying ? audio.pause() : audio.play();
        }
    };

    // ============ COUNTDOWN ============
    const countdown = {
        init: () => {
            const weddingDate = new Date(document.body.getAttribute('data-time'));
            
            setInterval(() => {
                const now = new Date();
                const diff = weddingDate - now;

                if (diff <= 0) {
                    document.getElementById('day').textContent = '0';
                    document.getElementById('hour').textContent = '0';
                    document.getElementById('minute').textContent = '0';
                    document.getElementById('second').textContent = '0';
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('day').textContent = days;
                document.getElementById('hour').textContent = hours;
                document.getElementById('minute').textContent = minutes;
                document.getElementById('second').textContent = seconds;
            }, 1000);
        }
    };

    // ============ LAZY LOAD IMAGES ============
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    };

    // ============ MODAL IMAGE ============
    const modalImage = (img) => {
        const modal = document.getElementById('modal-image');
        const show = document.getElementById('show-modal-image');
        const click = document.getElementById('button-modal-click');
        const download = document.getElementById('button-modal-download');

        if (!modal || !show || !click || !download) return;

        const src = img.getAttribute('data-src') || img.src;
        show.src = src;
        click.href = src;

        download.onclick = () => {
            const a = document.createElement('a');
            a.href = src;
            a.download = src.split('/').pop() || 'image';
            a.click();
        };

        new bootstrap.Modal(modal).show();
    };

    // ============ STORY ============
    const showStory = (wrap) => {
        wrap.style.opacity = '0';
        wrap.style.transition = 'opacity 0.3s ease';
        setTimeout(() => wrap.style.display = 'none', 300);
    };

    // ============ COPY TO CLIPBOARD ============
    const copy = (button) => {
        const text = button.getAttribute('data-copy');
        if (!text) return;

        navigator.clipboard.writeText(text).then(() => {
            const original = button.innerHTML;
            button.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => button.innerHTML = original, 1500);
        });
    };

    // ============ OPEN INVITATION ============
    const openInvitation = (button) => {
        const root = document.getElementById('root');
        const welcome = document.getElementById('welcome');

        if (!root || !welcome) {
            console.error('Root or welcome element not found');
            return;
        }

        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Đang mở...';

        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Hide welcome
        welcome.style.opacity = '0';
        welcome.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            welcome.style.display = 'none';
            
            // Show main content
            root.classList.remove('opacity-0');
            root.style.opacity = '1';
            root.style.transition = 'opacity 0.5s ease';
            
            // Start audio
            audio.play();
            
            // Load video if exists
            loadVideo();
            
            // Show confetti (only if library is loaded)
            if (document.body.getAttribute('data-confetti') === 'true' && typeof confetti === 'function') {
                showConfetti();
            }
            
            // Show music button
            if (audio.button) {
                audio.button.classList.remove('d-none');
            }
        }, 500);
    };

    // ============ VIDEO ============
    const loadVideo = () => {
        const wrap = document.getElementById('video-love-stroy');
        if (!wrap || !wrap.hasAttribute('data-src')) return;

        const src = wrap.getAttribute('data-src');
        const vid = document.createElement('video');
        vid.className = wrap.getAttribute('data-vid-class');
        vid.loop = true;
        vid.muted = true;
        vid.controls = true;
        vid.playsInline = true;
        vid.src = src;

        wrap.appendChild(vid);
        document.getElementById('video-love-stroy-loading')?.remove();

        // Auto play on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.isIntersecting ? vid.play() : vid.pause();
            });
        });
        observer.observe(vid);
    };

    // ============ CONFETTI ============
    const showConfetti = () => {
        if (typeof confetti === 'function') {
            const duration = 3000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    };

    // ============ LOVE ANIMATION ============
    const startLoveAnimation = () => {
        document.querySelectorAll('[data-class="animate-love"]').forEach(el => {
            const time = parseInt(el.getAttribute('data-time')) || 0;
            setTimeout(() => {
                el.style.animation = 'heartbeat 1.5s infinite';
            }, time);
        });
    };

    // ============ GUEST NAME ============
    const setGuestName = () => {
        // Decode Base64 encoded guest name
        function decodeGuestName(encoded) {
            try {
                return decodeURIComponent(escape(atob(encoded)));
            } catch(e) {
                return null;
            }
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        const encodedName = urlParams.get('to');
        let guestName = encodedName ? decodeGuestName(encodedName) : null;
        
        // Default name if no parameter
        if (!guestName) {
            guestName = 'Bạn';
        }
        
        document.querySelectorAll('#guest-name').forEach(el => {
            if (el.hasAttribute('data-message')) {
                el.innerHTML = `<p class="mt-3 mb-1" style="font-size: 1rem">${el.getAttribute('data-message')}</p>
                    <h2 class="font-esthetic" style="font-size: 2rem">${guestName}</h2>`;
            } else {
                el.textContent = guestName;
            }
        });
    };

    // ============ WISH FORM ============
    const initWishForm = () => {
        const wishForm = document.getElementById('wishForm');
        if (!wishForm) return;

        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('wishName').value.trim();
            const presence = document.getElementById('wishPresence').value;
            const message = document.getElementById('wishMessage').value.trim();

            if (!name || !message) return;

            // Get decoded guest name
            function decodeGuestName(encoded) {
                try {
                    return decodeURIComponent(escape(atob(encoded)));
                } catch(e) {
                    return 'Unknown';
                }
            }
            
            const urlParams = new URLSearchParams(window.location.search);
            const encodedName = urlParams.get('to');
            const guestName = encodedName ? decodeGuestName(encodedName) : 'Unknown';

            // Create wish object
            const wish = {
                id: Date.now(),
                name: name,
                presence: presence,
                message: message,
                guestInvited: guestName,
                timestamp: new Date().toISOString(),
                createdAt: new Date().toLocaleString('vi-VN')
            };

            // Save to localStorage
            let wishes = JSON.parse(localStorage.getItem('weddingWishes')) || [];
            wishes.unshift(wish);
            localStorage.setItem('weddingWishes', JSON.stringify(wishes));

            // Show success message
            const successMsg = document.getElementById('wishSuccess');
            successMsg.classList.remove('d-none');

            // Clear form
            wishForm.reset();

            // Scroll to success message
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Hide success after 5 seconds
            setTimeout(() => {
                successMsg.classList.add('d-none');
            }, 5000);
        });
    };

    // ============ INIT ============
    const init = () => {
        // Hide loading, show welcome
        setTimeout(() => {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.style.opacity = '0';
                loading.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    loading.style.display = 'none';
                    const welcome = document.getElementById('welcome');
                    if (welcome) {
                        welcome.style.opacity = '1';
                        welcome.style.transition = 'opacity 0.5s ease';
                    }
                }, 500);
            }
        }, 1000);

        // Initialize features
        theme.check();
        audio.init();
        countdown.init();
        lazyLoadImages();
        startLoveAnimation();
        setGuestName();
        initWishForm();

        // Setup theme button
        const themeBtn = document.getElementById('button-theme');
        if (themeBtn) {
            themeBtn.classList.remove('d-none');
            // Don't add listener here - using onclick in HTML
        }
    };

    // ============ EXPOSE TO WINDOW ============
    window.undangan = {
        theme,
        guest: {
            open: openInvitation,
            modal: modalImage,
            showStory
        },
        util: {
            copy
        }
    };

    // Start when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window);
