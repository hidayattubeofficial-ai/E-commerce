<?php
/**
 * FM E-commerce WordPress configuration template.
 *
 * Copy this to the real WordPress installation as wp-config.php.
 * Never commit the real wp-config.php or production secrets.
 */

define('DB_NAME', getenv('FM_WP_DB_NAME') ?: 'fm_ecommerce');
define('DB_USER', getenv('FM_WP_DB_USER') ?: 'CHANGE_ME');
define('DB_PASSWORD', getenv('FM_WP_DB_PASSWORD') ?: 'CHANGE_ME');
define('DB_HOST', getenv('FM_WP_DB_HOST') ?: '127.0.0.1');

define('WP_MEMORY_LIMIT', '256M');
define('WP_ENVIRONMENT_TYPE', getenv('FM_WP_ENVIRONMENT') ?: 'development');

define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

/*
 * Generate unique values for the real installation.
 * These placeholders must never be used in production.
 */
define('AUTH_KEY',         'CHANGE_ME');
define('SECURE_AUTH_KEY',  'CHANGE_ME');
define('LOGGED_IN_KEY',    'CHANGE_ME');
define('NONCE_KEY',        'CHANGE_ME');
define('AUTH_SALT',        'CHANGE_ME');
define('SECURE_AUTH_SALT', 'CHANGE_ME');
define('LOGGED_IN_SALT',   'CHANGE_ME');
define('NONCE_SALT',       'CHANGE_ME');

$table_prefix = 'fm_';

define('DISALLOW_FILE_EDIT', true);

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

require_once ABSPATH . 'wp-settings.php';
