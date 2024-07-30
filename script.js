// Exemplo: Adicionar um efeito de hover aos links do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#ccc';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '';
  });
});

// Adicione mais scripts para outras funcionalidades (ex: formulário de contato, compartilhamento em redes sociais)
