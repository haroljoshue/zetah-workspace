// Cargar videos e imágenes desde JSON
async function loadData() {
    try {
        const response = await fetch('./recursos/datos.json?v=2');
        const data = await response.json();

        const videoContainer = document.getElementById("video-container");
        const gallery = document.getElementById("gallery");

        videoContainer.innerHTML = "";
        gallery.innerHTML = "";

        // videos
        data.videos.forEach(video => {
            const card = document.createElement("div");
            card.className = "video";
            card.innerHTML = `
        <div class="video-inner">
          <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
            videoContainer.appendChild(card);
        });

        // fotos
        data.imagenes.forEach(img => {
            const frame = document.createElement("div");
            frame.className = "photo-frame";
            frame.innerHTML = `
        <img src="${img.url}" alt="Fotografía" class="photo">
      `;
            gallery.appendChild(frame);
        });

    } catch (error) {
        console.error("Error cargando datos:", error);
    }
}

// cargar datos al iniciar
document.addEventListener("DOMContentLoaded", loadData);

// Cambio de imagen en el footer al hacer clic en redes sociales
// (las imágenes están dentro de <a>, el link se abre solo)
document.querySelectorAll(".social-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        const mainImage = document.getElementById("main-icon");
        const big = this.getAttribute("data-img");
        if (big) {
            mainImage.src = big;
        }
    });
});

// Funcionalidad de la ventana lateral
function openSideWindow(option) {
    const sideWindow = document.getElementById('side-window');
    const sideContent = document.getElementById('side-content');

    if (option === 'quien') {
        sideContent.innerHTML = `
      <h2>¿Quién es ZetaH?</h2>
      <img src="./recursos/harol.png" alt="ZetaH" class="zetah-img">
      <p>Mi nombre es Harol Joshue, conocido artísticamente como ZetaH. Soy de Ibarra, Ecuador.</p>
      <p>Apasionado por la música y el mundo visual: cine, fotografía y edición. Aprendiz de manera autónoma, siempre explorando nuevas ideas.</p>
      <p>Si te interesa lo que hago, puedes ponerte en contacto conmigo mediante los canales disponibles.</p>
    `;
    } else if (option === 'contacto') {
        sideContent.innerHTML = `
      <h2>Contacto</h2>
      <p>Para más información, puedes comunicarte a través de los siguientes medios:</p>
      <p><strong>Teléfono:</strong> <a href="tel:+593992323613">+593 99 232 3613</a></p>
      <p><strong>Correo electrónico:</strong> <a href="mailto:harolzambrano2005@gmail.com">harolzambrano2005@gmail.com</a></p>
      <p><strong>WhatsApp:</strong> <a href="https://w.app/l469ab" target="_blank">Abrir conversación</a></p>
      <img src="./recursos/codigo.jpg" alt="Código QR" class="zetah-img">
    `;
    } else if (option === 'redes') {
        sideContent.innerHTML = `
      <h2>Redes sociales</h2>
      <img src="./recursos/ico.png" alt="ZetaH" class="zetah-img">
      <p>Sigue mi trabajo y contenido en las siguientes plataformas:</p>
      <ul class="side-links">
        <li><a href="https://www.instagram.com/haroljoshue/" target="_blank">Instagram</a></li>
        <li><a href="https://www.facebook.com/Zambrano2005" target="_blank">Facebook</a></li>
        <li><a href="https://w.app/l469ab" target="_blank">WhatsApp</a></li>
      </ul>
    `;
    }

    sideWindow.style.right = "0";
}

function closeSideWindow() {
    const sideWindow = document.getElementById('side-window');
    sideWindow.style.right = "-100%";
}
