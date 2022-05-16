//so vai execultar a função "onScroll" QUANDO EXISTIR INTERAÇÃO COM DO USUARIO
window.addEventListener('scroll', onScroll);

onScroll();

function onScroll() {
  showNavigationOnScroll();
  showBackToTopOnScroll();

  activitymenuCurrentSection(home);
  activitymenuCurrentSection(services);
  activitymenuCurrentSection(about);
  activitymenuCurrentSection(contact);
}

function activitymenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeith = section.offsetHeight;

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeith;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine;
  
  const sectionId = section.getAttribute(`id`);
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

function showNavigationOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 400) {
    totop.classList.add('show');
  } else {
    totop.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expended');
}

function closeMenu() {
  document.body.classList.remove('menu-expended');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
  `);
