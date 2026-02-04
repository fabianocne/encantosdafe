<section class="py-20 bg-white border-b border-brand-border/30">
    <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="reveal">
            <span class="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">Público Alvo</span>
            <h2 class="font-serif text-3xl md:text-4xl text-brand-dark mb-12">Para quem preparamos este catálogo?</h2>
        </div>
        
        <div class="reveal" data-delay="200">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-2xl mx-auto">
                <?php foreach ($content['audience'] as $item): ?>
                <div class="flex items-center gap-3 py-3 border-b border-brand-border/30 last:border-0 md:last:border-b">
                    <?php echo get_icon('check-circle-2', 'w-5 h-5 text-brand-gold flex-shrink-0'); ?>
                    <span class="text-brand-dark font-medium"><?php echo $item; ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>