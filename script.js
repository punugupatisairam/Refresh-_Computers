// <!-- ONLY include one bootstrap bundle -->
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */}

document.addEventListener('DOMContentLoaded', function () {
  // safety: ensure bootstrap is available
  if (typeof bootstrap === 'undefined') {
    console.error('Bootstrap is not loaded.');
    return;
  }

  // Update button text on expand/collapse (find the button inside the same card-body)
  document.querySelectorAll('.collapse').forEach(function (collapseDiv) {
    collapseDiv.addEventListener('shown.bs.collapse', function () {
      // Prefer the button inside the same parent (card-body)
      const btn = collapseDiv.parentElement?.querySelector(`[data-bs-target="#${this.id}"]`)
                || document.querySelector(`[data-bs-target="#${this.id}"]`);
      if (btn) btn.textContent = 'See Less';
    });

    collapseDiv.addEventListener('hidden.bs.collapse', function () {
      const btn = collapseDiv.parentElement?.querySelector(`[data-bs-target="#${this.id}"]`)
                || document.querySelector(`[data-bs-target="#${this.id}"]`);
      if (btn) btn.textContent = 'See More';
    });
  });

  // OPTIONAL: ensure only one card stays open at a time (accordion-like)
  document.querySelectorAll('.toggle-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const targetId = (this.getAttribute('data-bs-target') || '').replace('#','');
      document.querySelectorAll('.collapse.show').forEach(function (open) {
        if (open.id !== targetId) {
          const inst = bootstrap.Collapse.getInstance(open) || bootstrap.Collapse.getOrCreateInstance(open);
          inst.hide();
        }
      });
    });
  });
});

