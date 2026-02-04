<section class="py-20 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div class="order-2 lg:order-1 relative">
            <div class="reveal">
              <div class="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-offWhite relative shadow-2xl shadow-brand-dark/5">
                 <img 
                   src="<?php echo $images['sao_jose_illustration']; ?>" 
                   alt="Imagem ilustrativa de São José" 
                   class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                 />
                 <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="reveal" data-delay="100">
              <h2 class="font-serif text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                <?php echo $content['why']['title_prefix']; ?> <span class="text-brand-gold"><?php echo $content['why']['title_highlight']; ?></span> <?php echo $content['why']['title_suffix']; ?>
              </h2>
            </div>
            
            <div class="reveal" data-delay="200">
              <p class="text-brand-gray mb-10 text-lg leading-relaxed">
                <?php echo $content['why']['description']; ?>
              </p>
            </div>

            <div class="space-y-8">
              <?php foreach ($content['why']['reasons'] as $index => $reason): ?>
              <div class="reveal" data-delay="<?php echo 300 + ($index * 100); ?>">
                  <div class="flex gap-5 group">
                    <div class="flex-shrink-0 w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-gold font-serif text-xl italic group-hover:border-brand-gold transition-colors">
                      <?php echo $index + 1; ?>
                    </div>
                    <div>
                      <h3 class="font-medium text-xl text-brand-dark mb-1"><?php echo $reason['title']; ?></h3>
                      <p class="text-brand-gray"><?php echo $reason['text']; ?></p>
                    </div>
                  </div>
              </div>
              <?php endforeach; ?>
            </div>
          </div>

        </div>
    </div>
</section>