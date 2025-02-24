# Laravel-Piwik v4.0.0

[![Semaphore CI](https://robbrazier.semaphoreci.com/badges/Laravel_Piwik.svg)](https://robbrazier.semaphoreci.com/projects/Laravel_Piwik)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6e05c91a199a4ffbb2723cec35e57019)](https://www.codacy.com/gh/RobBrazier/Laravel_Piwik/dashboard)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/6e05c91a199a4ffbb2723cec35e57019)](https://www.codacy.com/gh/RobBrazier/Laravel_Piwik/dashboard)
[![Minimum PHP Version](https://badgen.net/badge/PHP/>=7.3/8892BF)](https://php.net/)
[![Packagist Version](https://badgen.net/packagist/v/robbrazier/piwik)](https://packagist.org/packages/robbrazier/piwik)
[![Packagist Total Downloads](https://badgen.net/packagist/dt/robbrazier/piwik)](https://packagist.org/packages/robbrazier/piwik)

An Interface to Piwik's Analytics API for Laravel (Composer Package)

This is the Laravel 5+ version of the Laravel-Piwik Bundle.

> Version 4.0.0 and onwards have dropped support for PHP 5.6, 7.0 and 7.1

## Installation

Add `RobBrazier/Piwik` to `composer.json`:

```json
{
    "require": {
        "robbrazier/piwik": "~4.0"
    }
}
```
### For Laravel 5.4 and below

Add `'RobBrazier\Piwik\PiwikServiceProvider'` and `'Piwik' => 'RobBrazier\Piwik\Facades\Piwik'`
to `app/config/app.php`

```php
'providers' = array(
    ...
    RobBrazier\Piwik\PiwikServiceProvider::class,
    ...
);

[...]

'aliases' = array(
    ...
    'Piwik' => RobBrazier\Piwik\Facades\Piwik::class,
    ...
);
```

### For Laravel 5.5 and above, no app.php changes are required as the autoloader will pick up the required configuration

Then move the config file out of the package, so that it doesn't get replaced
when you update, by running:

```bash
php artisan vendor:publish --provider="RobBrazier\Piwik\PiwikServiceProvider" --tag="config"
```

Update your packages with `composer update` or install with `composer install`.

Then go to `config/piwik.php` and add your config settings such as server,
apikey, siteid etc.

## Documentation

Usage Documentation is located at <https://robbrazier.github.io/Laravel_Piwik/Usage.html>
API Documentation is located at <https://robbrazier.github.io/Laravel_Piwik/API_Docs.html>

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
