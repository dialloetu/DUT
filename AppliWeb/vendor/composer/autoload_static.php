<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit833ee8fa7a8ca12b3de20c90f2c265f5
{
    public static $prefixLengthsPsr4 = array (
        'a' => 
        array (
            'analysePhonetique\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'analysePhonetique\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit833ee8fa7a8ca12b3de20c90f2c265f5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit833ee8fa7a8ca12b3de20c90f2c265f5::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit833ee8fa7a8ca12b3de20c90f2c265f5::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
