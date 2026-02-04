<section class="py-20 md:py-24 bg-brand-offWhite">
    <div class="max-w-4xl mx-auto px-6">
        <div class="reveal">
          <h2 class="font-serif text-3xl text-center text-brand-dark mb-12">Dúvidas Frequentes</h2>
        </div>

        <div class="space-y-4">
          <?php foreach ($content['faq'] as $index => $item): ?>
            <div class="reveal" data-delay="<?php echo $index * 50; ?>">
              <div class="bg-white rounded-xl border border-brand-border/50 overflow-hidden">
                <button 
                  class="faq-toggle w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  data-index="<?php echo $index; ?>"
                >
                  <span class="font-medium text-brand-dark pr-8"><?php echo $item['q']; ?></span>
                  <!-- Icons controlled by JS -->
                  <div class="flex-shrink-0">
                      <span id="icon-plus-<?php echo $index; ?>" class="icon-plus text-brand-dark/30">
                          <?php echo get_icon('plus', 'w-5 h-5'); ?>
                      </span>
                      <span id="icon-minus-<?php echo $index; ?>" class="icon-minus text-brand-gold hidden">
                          <?php echo get_icon('minus', 'w-5 h-5'); ?>
                      </span>
                  </div>
                </button>
                <div id="faq-content-<?php echo $index; ?>" class="faq-content max-h-0 opacity-0 overflow-hidden">
                  <p class="px-6 pb-6 text-brand-gray text-sm leading-relaxed">
                    <?php echo $item['a']; ?>
                  </p>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
    </div>
</section>