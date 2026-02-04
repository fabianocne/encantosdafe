<?php
require_once 'config/data.php';
require_once 'config/icons.php';
?>
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Catálogo São José no Atacado | Encantos da Fé</title>
    <meta name="description" content="Solicite o Catálogo São José no Atacado. Artigos religiosos católicos para lojistas, livrarias e paróquias. Atendimento via WhatsApp." />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (CDN para facilidade) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                gold: '#B08D57',
                goldLight: '#E8DDCF',
                dark: '#1C1C1C',
                gray: '#5A5A5A',
                offWhite: '#F8F7F4',
                border: '#D9D9D9',
              }
            },
            fontFamily: {
              serif: ['"Playfair Display"', 'serif'],
              sans: ['"Inter"', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <style>
      .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      .faq-content {
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }
    </style>
</head>
<body class="bg-brand-offWhite text-brand-dark antialiased selection:bg-brand-gold selection:text-white">

    <?php include 'components/navbar.php'; ?>

    <main>
        <?php include 'components/hero.php'; ?>
        <?php include 'components/why.php'; ?>
        <?php include 'components/deliverables.php'; ?>
        <?php include 'components/audience.php'; ?>
        <?php include 'components/process.php'; ?>
        <?php include 'components/social_proof.php'; ?>
        <?php include 'components/history.php'; ?>
        <?php include 'components/rosary.php'; ?>
        <?php include 'components/prayer.php'; ?>
        <?php include 'components/faq.php'; ?>
        <?php include 'components/form.php'; ?>
    </main>

    <?php include 'components/footer.php'; ?>

    <!-- Scripts do Site -->
    <script src="assets/js/app.js"></script>
</body>
</html>