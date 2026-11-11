'use strict';

// CSS resolves Auto against prefers-color-scheme, including live system changes.
const themeSelect = document.querySelector('#theme-select');
const validThemes = ['auto', 'light', 'dark'];
const initialTheme = document.documentElement.dataset.theme;
themeSelect.value = validThemes.includes(initialTheme) ? initialTheme : 'auto';
document.documentElement.dataset.theme = themeSelect.value;
themeSelect.addEventListener('change', () => {
  document.documentElement.dataset.theme = themeSelect.value;
  try { localStorage.setItem('portfolio-theme', themeSelect.value); } catch (_) { /* Storage may be unavailable in private contexts. */ }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('is-open', expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

const dialog = document.querySelector('#detail-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDate = document.querySelector('#dialog-date');
const dialogBody = document.querySelector('#dialog-body');
function showDetails(title, date) {
  dialogTitle.textContent = title;
  dialogDate.textContent = date;
  dialogBody.replaceChildren();
}
function openDetails() {
  dialog.showModal();
  document.body.classList.add('dialog-lock');
}
document.querySelectorAll('.project-open').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.project];
    showDetails(project.title, project.timeline);
    const list = document.createElement('ul');
    project.details.forEach(detail => {
      const item = document.createElement('li');
      item.textContent = detail;
      list.append(item);
    });
    dialogBody.append(list);
    if (project.projectLink) {
      const link = document.createElement('a');
      link.href = project.projectLink;
      link.textContent = project.linkLabel || 'View project ↗';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'button';
      dialogBody.append(link);
    }
    openDetails();
  });
});
document.querySelectorAll('[data-publication]').forEach(button => {
  button.addEventListener('click', () => {
    const publication = publicationData[button.dataset.publication];
    showDetails(publication.title, publication.date);
    const paragraph = document.createElement('p');
    paragraph.textContent = publication.abstract;
    const link = document.createElement('a');
    link.textContent = 'Read the paper ↗';
    link.href = publication.paperLink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'button';
    dialogBody.append(paragraph, link);
    openDetails();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-lock'));

const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
    document.querySelector('#filter-status').textContent = `${cards.filter(card => !card.hidden).length} projects shown`;
  });
});
const certButton = document.querySelector('#view-more-certs');
const additionalCerts = document.querySelector('#additional-certs');
certButton.addEventListener('click', () => {
  const expanded = certButton.getAttribute('aria-expanded') !== 'true';
  certButton.setAttribute('aria-expanded', String(expanded));
  additionalCerts.hidden = !expanded;
  certButton.querySelector('span').textContent = expanded ? 'Show fewer certifications' : 'View more certifications';
  certButton.querySelector('i').className = `icon solid fa-angle-${expanded ? 'up' : 'down'}`;
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.section-heading, .project-card, .job, .publication, .cert-card').forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) nav.querySelectorAll('a').forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section));
}
