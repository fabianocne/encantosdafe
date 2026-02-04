<section class="py-20 md:py-24 bg-white">
    <div class="max-w-2xl mx-auto px-6">
      <div class="text-center">
        <div class="reveal">
          <div class="flex justify-center mb-4 text-brand-gold">
            <?php echo get_icon('star', 'w-5 h-5 fill-brand-gold/20'); ?>
          </div>
          <h2 class="font-serif text-3xl text-brand-dark mb-10"><?php echo $content['prayer']['title']; ?></h2>
        </div>
        
        <div class="reveal" data-delay="200">
          <div class="relative p-10 md:p-14 bg-brand-offWhite rounded-[2rem] border border-brand-border shadow-sm">
            <!-- Decorative corners -->
            <div class="absolute top-6 left-6 w-8 h-8 border-t border-l border-brand-gold/40 rounded-tl-lg"></div>
            <div class="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-gold/40 rounded-tr-lg"></div>
            <div class="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-brand-gold/40 rounded-bl-lg"></div>
            <div class="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-brand-gold/40 rounded-br-lg"></div>

            <p class="font-serif text-xl md:text-2xl text-brand-dark leading-relaxed italic">
              <?php echo $content['prayer']['text']; ?>
            </p>
          </div>
        </div>

        <div class="reveal" data-delay="300">
          <p class="mt-8 text-sm text-brand-gray/60">
            <?php echo $content['prayer']['note']; ?>
          </p>
        </div>
      </div>
    </div>
</section>