<section class="py-20 bg-brand-offWhite">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <div class="reveal">
                <h2 class="font-serif text-3xl md:text-4xl text-brand-dark">Como funciona</h2>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <!-- Connecting line for desktop -->
            <div class="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-brand-border z-0"></div>

            <?php foreach ($content['process'] as $index => $step): ?>
            <div class="reveal relative z-10" data-delay="<?php echo $index * 150; ?>">
                <div class="flex flex-col items-center text-center">
                    <div class="w-24 h-24 rounded-full bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6">
                        <span class="font-serif text-2xl text-brand-gold italic"><?php echo $step['number']; ?></span>
                    </div>
                    <h3 class="font-semibold text-lg text-brand-dark mb-2"><?php echo $step['title']; ?></h3>
                    <p class="text-brand-gray text-sm"><?php echo $step['text']; ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>