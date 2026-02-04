<section id="solicitar-catalogo" class="py-24 bg-white relative">
    <div class="max-w-2xl mx-auto px-6 relative z-10">
        
        <div class="text-center mb-10">
          <h2 class="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
            Solicitar Catálogo <span class="text-brand-gold">São José</span>
          </h2>
          <p class="text-brand-gray">
            Preencha seus dados. Ao enviar, vamos abrir o WhatsApp com sua mensagem pronta para atendimento.
          </p>
        </div>

        <!-- Success Message (Hidden by default) -->
        <div id="form-success" class="hidden bg-green-50 border border-green-100 rounded-2xl p-10 text-center animate-pulse">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <?php echo get_icon('check-circle', 'w-8 h-8'); ?>
            </div>
            <h3 class="font-serif text-2xl text-green-800 mb-2">Perfeito!</h3>
            <p class="text-green-700 mb-6">Sua mensagem está pronta no WhatsApp.</p>
            <button 
              id="reopen-whatsapp"
              class="text-green-800 font-semibold underline hover:text-green-900"
            >
              Se não abriu, clique aqui.
            </button>
        </div>

        <!-- Form -->
        <form id="contact-form" class="space-y-5 bg-brand-offWhite/50 p-8 rounded-3xl border border-brand-border/30 shadow-lg shadow-brand-dark/5" data-whatsapp="<?php echo WHATSAPP_NUMBER; ?>">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Nome Completo</label>
                <input required name="name" type="text" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Seu nome" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Empresa / Paróquia</label>
                <input required name="company" type="text" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Nome da loja" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">CNPJ</label>
                <input required name="cnpj" type="text" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="00.000.000/0001-00" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">Cidade / UF</label>
                <input required name="city" type="text" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="Ex: Maringá/PR" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">WhatsApp</label>
                <input required name="phone" type="tel" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-brand-gray/80 ml-1">E-mail</label>
                <input required name="email" type="email" class="w-full px-4 py-3 rounded-xl border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all" placeholder="seu@email.com" />
              </div>
            </div>

            <div class="pt-2">
              <label class="flex items-start gap-3 cursor-pointer group">
                <input required name="terms" type="checkbox" class="mt-1 w-4 h-4 text-brand-gold rounded border-brand-border focus:ring-brand-gold" />
                <span class="text-sm text-brand-gray group-hover:text-brand-dark transition-colors">Concordo em receber contato da Encantos da Fé por WhatsApp e e-mail.</span>
              </label>
            </div>

            <button 
              type="submit"
              class="w-full py-4 bg-brand-dark hover:bg-black text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <?php echo get_icon('send', 'w-5 h-5'); ?>
              Solicitar Catálogo no WhatsApp
            </button>
        </form>
    </div>
</section>