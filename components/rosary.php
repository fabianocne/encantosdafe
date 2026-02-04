<section class="py-20 md:py-24 bg-brand-offWhite">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <div class="reveal">
                <h2 class="font-serif text-3xl md:text-4xl text-brand-dark mb-4"><?php echo $content['rosary']['title']; ?></h2>
                <p class="text-brand-gray"><?php echo $content['rosary']['subtitle']; ?></p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
           <!-- Mobile connector line -->
           <div class="absolute left-6 top-6 bottom-6 w-[1px] bg-brand-border md:hidden z-0"></div>

          <?php foreach ($content['rosary']['steps'] as $index => $step): ?>
            <div class="reveal relative z-10" data-delay="<?php echo $index * 100; ?>">
              <div class="bg-white p-6 rounded-xl border border-brand-border/50 h-full hover:border-brand-gold/30 transition-colors flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif font-medium text-sm">
                  <?php echo $index + 1; ?>
                </div>
                <div>
                  <h3 class="font-medium text-brand-dark mb-1"><?php echo $step['title']; ?></h3>
                  <p class="text-xs text-brand-gray leading-relaxed"><?php echo $step['desc']; ?></p>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>

        <div class="reveal" data-delay="500">
          <div class="text-center max-w-2xl mx-auto">
            <p class="text-sm text-brand-gray italic mb-6">
              <?php echo $content['rosary']['note']; ?>
            </p>
            <button 
              data-scroll-to="solicitar-catalogo"
              class="inline-flex items-center gap-2 text-brand-dark font-medium border border-brand-border px-6 py-3 rounded-full hover:bg-white hover:shadow-sm transition-all text-sm"
            >
              <?php echo $content['rosary']['cta']; ?>
              <?php echo get_icon('arrow-down', 'w-4 h-4'); ?>
            </button>
          </div>
        </div>
    </div>
</section>