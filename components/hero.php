<section id="inicio" class="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <!-- Text Content -->
            <div class="text-center lg:text-left">
                <div class="reveal">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
                        <span class="w-2 h-2 rounded-full bg-brand-gold"></span>
                        <?php echo $content['hero']['badge']; ?>
                    </div>
                </div>
                
                <div class="reveal" data-delay="100">
                    <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                        <?php echo $content['hero']['title']; ?> <br/>
                        <span class="text-brand-gray/80 italic"><?php echo $content['hero']['subtitle']; ?></span>
                    </h1>
                </div>

                <div class="reveal" data-delay="200">
                    <p class="text-lg md:text-xl text-brand-gray font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                        <?php echo $content['hero']['description']; ?>
                    </p>
                </div>

                <div class="reveal" data-delay="300">
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 text-sm text-brand-dark font-medium">
                        <?php foreach ($content['hero']['bullets'] as $bullet): ?>
                        <div class="flex items-center gap-2">
                            <?php echo get_icon('check', 'w-5 h-5 text-brand-gold'); ?>
                            <span><?php echo $bullet; ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="reveal" data-delay="400">
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button
                            data-scroll-to="solicitar-catalogo"
                            class="group relative inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-[#9E7D4B] text-white text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20 w-full sm:w-auto"
                        >
                            <?php echo $content['hero']['cta']; ?>
                            <span class="transition-transform group-hover:translate-x-1 inline-block">
                                <?php echo get_icon('arrow-right', 'w-4 h-4'); ?>
                            </span>
                        </button>
                        <p class="text-xs text-brand-gray/60 max-w-xs sm:max-w-none sm:text-left text-center">
                            <?php echo $content['hero']['note']; ?>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Image Content -->
            <div class="relative mt-8 lg:mt-0">
                <div class="reveal" data-delay="200">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/10 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
                        <img 
                            src="<?php echo $images['catalog_hero']; ?>" 
                            alt="Catálogo São José - Artigos Religiosos" 
                            class="w-full h-auto object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>