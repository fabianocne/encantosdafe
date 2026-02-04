<section class="py-20 bg-brand-offWhite">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <div class="reveal">
                <h2 class="font-serif text-3xl md:text-4xl text-brand-dark mb-4">O que você vai receber</h2>
                <p class="text-brand-gray max-w-2xl mx-auto">Tudo o que você precisa para tomar sua decisão de compra com tranquilidade.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ($content['deliverables'] as $index => $item): ?>
            <div class="reveal h-full" data-delay="<?php echo $index * 100; ?>">
                <div class="bg-white p-8 rounded-2xl border border-brand-border/40 h-full hover:shadow-xl hover:shadow-brand-dark/5 transition-all duration-300 hover:-translate-y-1">
                    <div class="w-12 h-12 bg-brand-offWhite rounded-xl flex items-center justify-center text-brand-gold mb-6">
                        <?php echo get_icon($item['icon']); ?>
                    </div>
                    <h3 class="font-semibold text-lg text-brand-dark mb-2"><?php echo $item['title']; ?></h3>
                    <p class="text-sm text-brand-gray leading-relaxed"><?php echo $item['desc']; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>