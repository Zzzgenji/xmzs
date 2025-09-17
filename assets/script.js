document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const buttons = [...document.querySelectorAll('.icon-btn')];
  const panels = [...document.querySelectorAll('.panel')];

  function showPanel(panelId) {
    panels.forEach(panel => {
      panel.classList.toggle('hidden', panel.id !== panelId);
    });
    buttons.forEach(btn => {
      const isSelected = (btn.dataset.panel || '') === panelId;
      btn.classList.toggle('active', isSelected);
    });
    document.getElementById(panelId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.panel || '';
      if (id) showPanel(id);
    });
  });

  // 默认显示申报书
  showPanel('panel-proposal');
});
