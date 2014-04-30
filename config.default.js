/**
 * config
 */

var path = require('path');
var pkg = require('./package.json');

var config = {
  debug: true,
  name: 'Node Club',
  description: 'Node Club es una comunidad de desarrolladores de software utilizando Node.js',
  version: pkg.version,

  // site settings
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />',
  ],
  host: 'localhost.cnodejs.org',
  // El valor por defecto Google ID tracker, por favor, modifique su propio sitio, la dirección de aplicación：http://www.google.com/analytics/
  google_tracker_id: 'UA-41753901-5',
  site_logo: '', // default is `name`
  site_icon: '', // El valor predeterminado es sin favicon, rellene el URL aquí
  site_navs: [
    // [ path, title, [target=''] ]
    [ '/about', 'Acerca de' ],
  ],
  site_static_host: '', // Dominio de almacenamiento de archivos estáticos
  mini_assets: false, // Compresión de archivos estáticos combinados, vista detallada del cargador
  site_enable_search_preview: false, // abierto google search preview
  site_google_search_domain:  'cnodejs.org',  // google search preview Nombre de dominio que desea buscar

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1/node_club_dev',
  session_secret: 'node_club',
  auth_cookie_name: 'node_club',
  port: 3000,

  // Lista de temas, cantidad
  list_topic_count: 20,

  // Restringir el intervalo de publicar, unidad: ms
  post_interval: 10000,

  // RSS
  rss: {
    title: 'Comunidad',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'Comunidad',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [
    {
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    },
    {
      'text': 'Node Party',
      'url': 'http://party.cnodejs.net/'
    },
    {
      'text': 'Node 入门',
      'url': 'http://nodebeginner.org/index-zh-cn.html'
    },
    {
      'text': 'Node 中文文档',
      'url': 'http://docs.cnodejs.net/cman/'
    }
  ],

  // sidebar ads
  side_ads: [
    {
      'url': 'http://www.upyun.com/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/upyun_logo.png',
      'text': ''
    },
    {
      'url': 'http://ruby-china.org/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/ruby_china_logo.png',
      'text': ''
    },
    {
      'url': 'http://adc.taobao.com/',
      'image': 'http://adc.taobao.com/bundles/devcarnival/images/d2_180x250.jpg',
      'text': ''
    }
  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin Puede eliminar el tema, editar las etiquetas, elegir roles configurar
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ],
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback',
  },
  allow_sign_up: true,
};

module.exports = config;
module.exports.config = config;
