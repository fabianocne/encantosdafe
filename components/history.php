<section class="py-20 md:py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
            <div class="reveal">
                <h2 class="font-serif text-3xl md:text-4xl text-brand-dark mb-6"><?php echo $content['history']['title']; ?></h2>
                <p class="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto">
                    <?php echo $content['history']['description']; ?>
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <?php foreach ($content['history']['cards'] as $index => $card): ?>
            <div class="reveal h-full" data-delay="<?php echo 100 + ($index * 100); ?>">
                <div class="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-offWhite border border-brand-border/30 h-full">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                        <?php echo get_icon($card['icon'], 'w-5 h-5'); ?>
                    </div>
                    <h3 class="font-serif text-lg font-medium text-brand-dark mb-2"><?php echo $card['title']; ?></h3>
                    <p class="text-sm text-brand-gray"><?php echo $card['text']; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="reveal" data-delay="400">
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 mb-10">
                <?php echo get_icon('calendar', 'w-8 h-8 text-brand-gold flex-shrink-0'); ?>
                <div class="text-center md:text-left">
                    <h4 class="font-serif text-lg font-medium text-brand-dark">Por que 19 de Março?</h4>
                    <p class="text-sm text-brand-dark/70">
                        É a solenidade litúrgica que celebra São José como esposo de Maria e patrono da Igreja Universal, data central para o comércio religioso.
                    </p>
                </div>
            </div>

            <div class="text-center">
                <button 
                    data-scroll-to="solicitar-catalogo"
                    class="text-brand-gold font-medium hover:text-brand-dark transition-colors underline decoration-1 underline-offset-4 text-sm"
                >
                    Quer o catálogo de São José no atacado? Preencha o formulário.
                </button>
            </div>
        </div>
    </div>
</section>