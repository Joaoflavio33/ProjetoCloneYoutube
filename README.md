# Clone do YouTube - Projeto Responsivo

Este é um clone do YouTube desenvolvido com HTML, CSS e JavaScript, com foco especial em responsividade para diferentes dispositivos.

## 🚀 Características

### Responsividade Completa
- **Mobile (até 576px)**: Layout otimizado para smartphones
- **Tablet (577px - 768px)**: Interface adaptada para tablets
- **Desktop pequeno (769px - 1024px)**: Layout para notebooks
- **Desktop médio (1025px - 1440px)**: Monitores padrão
- **Desktop grande (1441px+)**: Monitores grandes e 4K

### Tecnologias Utilizadas
- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript para interatividade
- Fontes do Google Fonts (Roboto)
- Ícones do Material Icons

## 📱 Breakpoints de Responsividade

### Mobile (≤ 576px)
- Layout em coluna única
- Botões compactos
- Texto otimizado para leitura
- Thumbnails menores
- Top-bar simplificada

### Tablet (577px - 768px)
- Layout adaptativo
- Elementos redimensionados
- Melhor aproveitamento do espaço

### Desktop (≥ 769px)
- Layout em duas colunas
- Vídeo principal + sidebar
- Elementos em tamanho completo
- Melhor experiência de navegação

## 🎨 Recursos Visuais

### Design System
- **Cores**: Paleta baseada no YouTube
- **Tipografia**: Roboto para melhor legibilidade
- **Espaçamentos**: Sistema consistente de gaps e padding
- **Bordas**: Border-radius moderno
- **Sombras**: Efeitos sutis para profundidade

### Interatividade
- Hover effects suaves
- Transições animadas
- Estados ativos para botões
- Feedback visual para interações

## 🌙 Modo Escuro
Suporte automático para modo escuro baseado nas preferências do sistema:
- Cores adaptadas automaticamente
- Contraste otimizado
- Transições suaves

## ♿ Acessibilidade
- Suporte para `prefers-reduced-motion`
- Contraste adequado
- Navegação por teclado
- Textos alternativos

## 📁 Estrutura do Projeto

```
ProjetoCloneYoutube/
├── assets/
│   ├── CSS/
│   │   └── Styles.css          # Estilos responsivos
│   ├── Fonts/                  # Fontes Roboto
│   └── Images/                 # Imagens e ícones
├── index.html                  # Estrutura HTML
├── Function.js                 # JavaScript
└── README.md                   # Documentação
```

## 🚀 Como Usar

1. Clone o repositório
2. Abra `index.html` no navegador
3. Teste a responsividade redimensionando a janela
4. Use as ferramentas de desenvolvedor para simular diferentes dispositivos

## 🎯 Funcionalidades Implementadas

### Top-Bar Responsiva
- Logo do YouTube adaptativo
- Barra de pesquisa flexível
- Botões de ação otimizados
- Notificações responsivas

### Área Principal
- Vídeo principal com aspect ratio 16:9
- Descrição do vídeo adaptativa
- Botões de interação responsivos
- Estatísticas do vídeo

### Sidebar
- Lista de vídeos relacionados
- Thumbnails responsivos
- Informações dos vídeos
- Layout flexível

## 🔧 Personalização

### Cores
As cores podem ser facilmente alteradas no CSS:
```css
:root {
  --primary-color: #0f0f0f;
  --secondary-color: #606060;
  --background-color: #f9f9f9;
  --hover-color: #e5e5e5;
}
```

### Breakpoints
Os breakpoints podem ser ajustados conforme necessário:
```css
/* Mobile */
@media (max-width: 576px) { ... }

/* Tablet */
@media (min-width: 577px) and (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 769px) { ... }
```

## 📈 Performance

- CSS otimizado com seletores eficientes
- Imagens responsivas com `object-fit`
- Transições suaves com `transform`
- Layout flexível sem JavaScript

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ para demonstrar técnicas modernas de responsividade web.**
