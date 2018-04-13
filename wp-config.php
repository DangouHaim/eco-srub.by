<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/hosting2/ecosrubby/public_html/wp-content/plugins/wp-super-cache/' );
if (strpos($_SERVER['REQUEST_URI'], 'wp-admin')) define ('WPLANG', 'ru_RU'); else define ('WPLANG', 'ru_RU_lite');

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'ecosrubby_wp');

/** Имя пользователя MySQL */
define('DB_USER', 'ecosrubby_admin');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'W4MS9_8XVi');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'A{*A~-WYyOC.S4_7yx[UDN*fRTjAgqrK|7W{)H(-:$ZhT8x@7]*PQ$2O^&Y[GIC8');
define('SECURE_AUTH_KEY',  '5uZV16hw+JL%:X=|1=N.x$z_#AJ3=ivrK5vbEL1-3|)S`jk~[f7>VYh!iUyPgt_J');
define('LOGGED_IN_KEY',    'v%h/SW+RTd^:-aFFF)G(4mg{_Awevsz%AqFa*C~V.=J|b#A;wK(w;Yv1^pZJ/2X%');
define('NONCE_KEY',        '6RqPV@{uzpDGGfw-Hag0X5(+P<UI9Ith{m$,?i+4W0nrC0e6y)#z([74)OWt9gip');
define('AUTH_SALT',        'hK*3e:i{s9#W[3NYST4KmeB)tHAZN_=&Vz8*4}xI?5`B&4v%|3Dm=f3``=[QOGCk');
define('SECURE_AUTH_SALT', 'R/}E>DLe]Y2T_a&5iL6l+0a9Qg);6$^$#4H}Fc&~Tj}fz`c/&,|B!P%x/c)$`1-/');
define('LOGGED_IN_SALT',   'mK+Y3qk}B=M~]  ZMdE(^8`sq)kja|g)r7t-q*2=J>Jurq>h2w*jx!!:j?4A<`n0');
define('NONCE_SALT',       '4ove3/p<t(#8qOT9ae%fV]6p>/{~fW0ps_a]Kl@w1f43&9)5_NQ3kN`}i91JT#9/');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
