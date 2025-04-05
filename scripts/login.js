// Adicionando animação de foco nos campos do formulário
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', () => {
      input.style.transition = '0.3s';
      input.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.6)';
    });
    input.addEventListener('blur', () => {
      input.style.boxShadow = 'none';
    });
  });
  
  // Efeito ao clicar no botão de login
  const loginButton = document.querySelector('.login-button');
  loginButton.addEventListener('click', () => {
    loginButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      loginButton.style.transform = 'scale(1)';
    }, 150);
  });
  
  // Animação para os ícones sociais ao passar o mouse
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transition = '0.3s';
      icon.style.color = '#ffd700'; // Cor dourada
    });
    icon.addEventListener('mouseout', () => {
      icon.style.color = '#fff';
    });
  });
  
  // Exemplo de alerta para verificar o clique no botão de login
  loginButton.addEventListener('click', () => {
    alert('Tentando fazer login...');
  });