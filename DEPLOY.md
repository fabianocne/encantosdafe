# 🚀 Guia de Deploy - Servidor Apache

## 📋 Checklist Pré-Deploy

Antes de fazer o upload para o servidor Apache, certifique-se de:

- [ ] Adicionar as imagens necessárias
  - `encantos da fé oficial.jpg` (logo)
  - `catálogo sao josé.jpg` (imagem hero)
- [ ] Atualizar URLs no HTML (trocar "seudominio.com.br" pelo domínio real)
- [ ] Configurar SSL/HTTPS (recomendado)
- [ ] Testar localmente

## 📂 Estrutura de Arquivos para Upload

```
public_html/ (ou htdocs/)
├── index.html
├── .htaccess
├── robots.txt
├── encantos da fé oficial.jpg
└── catálogo sao josé.jpg
```

## 🔧 Configuração do Apache

### 1. Módulos Necessários

Certifique-se de que os seguintes módulos estão habilitados:

```bash
# No Ubuntu/Debian
sudo a2enmod rewrite
sudo a2enmod deflate
sudo a2enmod expires
sudo a2enmod headers

# Reiniciar Apache
sudo systemctl restart apache2
```

### 2. Permitir .htaccess

No arquivo de configuração do Apache (ex: `/etc/apache2/sites-available/000-default.conf`):

```apache
<Directory /var/www/html>
    AllowOverride All
    Require all granted
</Directory>
```

### 3. Configurar Virtual Host (opcional)

```apache
<VirtualHost *:80>
    ServerName seudominio.com.br
    ServerAlias www.seudominio.com.br
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## 🔒 Configurar SSL/HTTPS (Recomendado)

### Usando Let's Encrypt (gratuito):

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-apache

# Obter certificado
sudo certbot --apache -d seudominio.com.br -d www.seudominio.com.br

# Auto-renovação (já configurada automaticamente)
sudo certbot renew --dry-run
```

Após configurar SSL, descomente esta linha no `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 📤 Upload dos Arquivos

### Via FTP/SFTP:
1. Conecte-se ao servidor usando FileZilla, WinSCP ou similar
2. Navegue até a pasta `public_html` ou `htdocs`
3. Faça upload de todos os arquivos

### Via SSH/Terminal:
```bash
# Conectar ao servidor
ssh usuario@seuservidor.com.br

# Navegar até pasta web
cd /var/www/html

# Clonar repositório (se usar Git)
git clone https://github.com/fabianocne/encantosdafe.git .

# Ou fazer upload via SCP
scp -r /caminho/local/* usuario@servidor:/var/www/html/
```

## ✅ Validação Pós-Deploy

### 1. Testar Compressão Gzip
```bash
curl -H "Accept-Encoding: gzip" -I https://seudominio.com.br/index.html
# Deve mostrar: Content-Encoding: gzip
```

### 2. Testar Cache Headers
```bash
curl -I https://seudominio.com.br/index.html
# Verifique: Cache-Control, Expires
```

### 3. Verificar SSL
```bash
# Testar certificado
openssl s_client -connect seudominio.com.br:443
```

### 4. Teste de Velocidade
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### 5. Teste de SEO
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

## 🔍 Troubleshooting

### Problema: .htaccess não funciona
**Solução:**
```bash
# Verificar se AllowOverride está habilitado
grep -r "AllowOverride" /etc/apache2/
# Deve ter: AllowOverride All
```

### Problema: Erro 500
**Solução:**
```bash
# Verificar logs do Apache
sudo tail -f /var/log/apache2/error.log

# Verificar sintaxe do .htaccess
apachectl configtest
```

### Problema: Compressão não funciona
**Solução:**
```bash
# Verificar se mod_deflate está habilitado
apache2ctl -M | grep deflate
# Deve aparecer: deflate_module
```

### Problema: CSS/JS não carrega
**Solução:**
- Verificar permissões dos arquivos (644 para arquivos, 755 para pastas)
- Verificar Console do navegador (F12)
- Limpar cache do navegador

## 📊 Monitoramento

### Logs do Apache
```bash
# Ver logs em tempo real
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log

# Analisar logs
sudo cat /var/log/apache2/access.log | grep "404"
```

### Analytics (opcional)
Adicione Google Analytics no HTML antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 Atualizações Futuras

### Via Git:
```bash
cd /var/www/html
git pull origin main
```

### Via FTP:
1. Fazer backup dos arquivos atuais
2. Upload dos novos arquivos
3. Testar funcionamento

## 📞 Suporte

Em caso de dúvidas ou problemas:
- Documentação Apache: https://httpd.apache.org/docs/
- Stack Overflow: https://stackoverflow.com/questions/tagged/apache

## ✅ Checklist Final

- [ ] Arquivos enviados para o servidor
- [ ] Imagens adicionadas
- [ ] .htaccess funcionando
- [ ] SSL configurado (HTTPS)
- [ ] Teste de performance realizado
- [ ] Google Search Console configurado
- [ ] Backup configurado
- [ ] Monitoramento configurado

---

**🎉 Pronto! Seu site está no ar!**
