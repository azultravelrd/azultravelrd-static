function renderSearchForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="section-padding container">
      <div class="custom-search-card text-center" style="background: #ffffff; padding: 35px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #eee;">
        <span class="badge-tag" style="background: #eef9fc; color: #0baddf; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; display: inline-block; margin-bottom: 10px;">
          Buscador en Tiempo Real
        </span>
        <h2 class="section-title" style="margin-bottom: 12px;">Busca tu Próximo Viaje</h2>
        <p style="max-width: 650px; margin: 0 auto 25px auto; color: #555; line-height: 1.5; font-size: 0.95rem;">
          Accede a nuestro motor de búsqueda interactivo para consultar disponibilidad de hoteles, actividades, traslados, circuitos y autos con tarifas en tiempo real.
        </p>
        
        <a href="./buscador.html" class="btn-search" style="display: inline-flex; align-items: center; gap: 8px; background: #0baddf; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.05rem; transition: background 0.3s ease; box-shadow: 0 4px 12px rgba(11, 173, 223, 0.3);">
          <i class="fa-solid fa-magnifying-glass"></i> Abrir Motor de Búsqueda
        </a>
      </div>
    </section>
  `;
}