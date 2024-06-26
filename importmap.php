<?php

/**
 * Returns the importmap for this application.
 *
 * - "path" is a path inside the asset mapper system. Use the
 *     "debug:asset-map" command to see the full list of paths.
 *
 * - "entrypoint" (JavaScript only) set to true for any module that will
 *     be used as an "entrypoint" (and passed to the importmap() Twig function).
 *
 * The "importmap:require" command can be used to add new entries to this file.
 */
return [
    'app' => [
        'path' => './assets/app.js',
        'entrypoint' => true,
    ],
    'preline/plugin' => [
        'version' => '2.1.0',
    ],
    'tailwindcss/plugin' => [
        'version' => '3.3.5',
    ],
    '@tailwindcss/forms' => [
        'version' => '0.5.7',
    ],
    'mini-svg-data-uri' => [
        'version' => '1.4.4',
    ],
    'tailwindcss/defaultTheme' => [
        'version' => '3.3.5',
    ],
    'tailwindcss/colors' => [
        'version' => '3.3.5',
    ],
    'picocolors' => [
        'version' => '1.0.0',
    ],
    'lucide' => [
        'version' => '0.371.0',
    ],
    'gumshoejs' => [
        'version' => '5.1.2',
    ],
    'swiper' => [
        'version' => '11.1.1',
    ],
];
