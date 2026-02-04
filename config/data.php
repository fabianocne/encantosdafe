<?php

// Configurações Gerais
define('WHATSAPP_NUMBER', '554491220092');
define('WHATSAPP_DISPLAY', '(44) 9122-0092');
define('EMAIL', 'contato.encantosdafe@gmail.com');
define('ADDRESS', 'Avenida Rio Branco 634 — Zona de Armazém — Cianorte/PR');

// Imagens
$images = [
    'logo' => 'encantos da fé oficial.jpg',
    'catalog_hero' => 'catálogo sao josé.jpg',
    'sao_jose_illustration' => 'https://picsum.photos/800/1000?grayscale&blur=1',
    'social_proof_1' => 'https://picsum.photos/400/500?random=1&grayscale',
    'social_proof_2' => 'https://picsum.photos/400/500?random=2&grayscale'
];

// Conteúdos
$content = [
    'hero' => [
        'badge' => 'Campanha 19 de Março',
        'title' => 'Catálogo São José',
        'subtitle' => 'no Atacado',
        'description' => 'Receba o catálogo e fale com nossa equipe para montar seu pedido de São José com rapidez e segurança.',
        'bullets' => ['Mix campeão', 'Condições de atacado', 'Entrega rápida'],
        'cta' => 'Quero comprar no atacado',
        'note' => '*Exclusivo para lojistas e paróquias'
    ],
    'why' => [
        'title_prefix' => 'Por que a devoção a',
        'title_highlight' => 'São José',
        'title_suffix' => 'move sua loja?',
        'description' => 'Uma das datas mais tradicionais do calendário católico, o dia de São José mobiliza fiéis em todo o Brasil. Preparar seu estoque é essencial.',
        'reasons' => [
            ['title' => 'Data forte e previsível', 'text' => 'O dia 19 de março é fixo e tradicional, garantindo fluxo certo de procura nas semanas anteriores.'],
            ['title' => 'Presente e devoção', 'text' => 'Artigos de São José são excelentes opções de presente para pais, avôs e devotos do padroeiro das famílias.'],
            ['title' => 'Giro de balcão', 'text' => 'Desde imagens grandes até terços e chaveiros. Um mix bem montado aumenta o ticket médio da venda.']
        ]
    ],
    'deliverables' => [
        ['icon' => 'book-open', 'title' => 'Catálogo São José', 'desc' => 'Acesso completo aos produtos da coleção com fotos de alta resolução.'],
        ['icon' => 'tag', 'title' => 'Condições de Revenda', 'desc' => 'Tabela de preços exclusiva para atacado com margens saudáveis.'],
        ['icon' => 'package', 'title' => 'Mix Recomendado', 'desc' => 'Sugestão inteligente dos itens que mais saem na época da campanha.'],
        ['icon' => 'bar-chart', 'title' => 'Orientação de Venda', 'desc' => 'Dicas rápidas de exposição para valorizar as peças na sua loja.']
    ],
    'audience' => [
        "Lojas e livrarias católicas",
        "Papelarias com linha religiosa",
        "Lojas de presentes",
        "Paróquias e movimentos",
        "Revendedores autônomos",
        "Distribuidores regionais"
    ],
    'process' => [
        ['number' => '01', 'title' => 'Solicitação', 'text' => 'Você preenche o formulário abaixo.'],
        ['number' => '02', 'title' => 'Atendimento', 'text' => 'Nossa equipe recebe e analisa.'],
        ['number' => '03', 'title' => 'Catálogo', 'text' => 'Enviamos catálogo e condições.'],
        ['number' => '04', 'title' => 'Pedido', 'text' => 'Montamos seu pedido de São José.']
    ],
    'history' => [
        'title' => 'Quem foi São José?',
        'description' => 'Esposo da Virgem Maria e pai adotivo de Jesus, São José é venerado como homem justo, trabalhador e silencioso. Sua vida foi dedicada a proteger e prover a Sagrada Família, tornando-se exemplo de humildade e obediência à vontade de Deus.',
        'cards' => [
            ['title' => 'Patrono das Famílias', 'text' => 'Protetor dos lares e modelo de pai amoroso.', 'icon' => 'heart'],
            ['title' => 'Patrono dos Trabalhadores', 'text' => 'Exemplo de dignidade e esforço no trabalho diário.', 'icon' => 'hammer'],
            ['title' => 'Modelo de Fé', 'text' => 'Homem de fé inabalável e silêncio orante.', 'icon' => 'sun']
        ]
    ],
    'rosary' => [
        'title' => 'Como rezar o Terço de São José',
        'subtitle' => 'O terço é um momento de oração e devoção profunda.',
        'steps' => [
            ['title' => 'Sinal da Cruz', 'desc' => 'Inicie traçando o sinal da cruz sobre si.'],
            ['title' => 'Oferecimento', 'desc' => 'Coloque suas intenções e pedidos a São José.'],
            ['title' => 'Orações Iniciais', 'desc' => 'Reze o Pai-Nosso, Ave-Maria e Glória.'],
            ['title' => 'Dezenas', 'desc' => 'Medite os mistérios e repita as preces de cada dezena.'],
            ['title' => 'Encerramento', 'desc' => 'Faça a oração final e o agradecimento.'],
        ],
        'note' => '"Existem variações do Terço de São José. Se desejar, peça para nossa equipe enviar um guia completo junto com o catálogo."',
        'cta' => 'Pedir catálogo + guia no WhatsApp'
    ],
    'prayer' => [
        'title' => 'Oração a São José',
        'text' => '“São José, guardião da Sagrada Família, conduze-nos pelo caminho da fé. Abençoa nossas casas e nosso trabalho, e ensina-nos a confiar em Deus todos os dias. Amém.”',
        'note' => 'Se quiser uma versão completa tradicional, peça no WhatsApp após preencher o formulário.'
    ],
    'faq' => [
        ['q' => "Vocês vendem no atacado para todo o Brasil?", 'a' => "Sim! Enviamos para todo o território nacional através de transportadoras parceiras e Correios, garantindo segurança na entrega."],
        ['q' => "Como faço meu primeiro pedido?", 'a' => "É simples. Após preencher o formulário, nossa equipe enviará o catálogo. Você escolhe os itens e nós montamos o orçamento formal."],
        ['q' => "Qual o prazo médio de envio?", 'a' => "O prazo para despacho é confirmado pela equipe após o pedido. A entrega gira em torno de 20 dias, a confirmar dependendo da cidade de entrega."],
        ['q' => "Quais as formas de pagamento?", 'a' => "Oferecemos condições especiais via PIX, Boleto (sujeito a análise) e Cartão de Crédito. Detalhes são passados junto com o catálogo."],
        ['q' => "Posso pedir reposição durante a campanha?", 'a' => "Sim, mas recomendamos garantir o estoque principal com antecedência, pois a demanda próxima ao dia 19 aumenta significativamente."]
    ]
];
?>