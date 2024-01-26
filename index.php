<?php

@include_once __DIR__ . '/vendor/autoload.php';

use Kirby\Cms\App;
use Kirby\Data\Yaml;
use Kirby\Filesystem\Dir;
use Kirby\Filesystem\F;
use Kirby\Toolkit\A;
use tobimori\DreamForm\Actions\AbortAction;
use tobimori\DreamForm\Actions\ConditionalAction;
use tobimori\DreamForm\Actions\EmailAction;
use tobimori\DreamForm\Actions\RedirectAction;
use tobimori\DreamForm\Fields\ButtonField;
use tobimori\DreamForm\Fields\CheckboxField;
use tobimori\DreamForm\Fields\EmailField;
use tobimori\DreamForm\Fields\HiddenField;
use tobimori\DreamForm\Fields\SelectField;
use tobimori\DreamForm\Fields\TextareaField;
use tobimori\DreamForm\Fields\TextField;
use tobimori\DreamForm\Models\FormPage as Form;

if (
  version_compare(App::version() ?? '0.0.0', '4.0.0', '<') === true ||
  version_compare(App::version() ?? '0.0.0', '5.0.0', '>') === true
) {
  throw new Exception('Kirby Dream Form requires Kirby 4');
}


// TODO: autoload?
Form::$registeredActions['redirect'] = RedirectAction::class;
Form::$registeredActions['email'] = EmailAction::class;
Form::$registeredActions['conditional'] = ConditionalAction::class;
Form::$registeredActions['abort'] = AbortAction::class;

Form::$registeredFields['button'] = ButtonField::class;
Form::$registeredFields['checkbox'] = CheckboxField::class;
Form::$registeredFields['email'] = EmailField::class;
Form::$registeredFields['hidden'] = HiddenField::class;
Form::$registeredFields['select'] = SelectField::class;
Form::$registeredFields['textarea'] = TextareaField::class;
Form::$registeredFields['text'] = TextField::class;

App::plugin('tobimori/dreamform', [
  'options' => [
    'email' => null,
    'actions' => true,
    'fields' => true,
    'layouts' => [ // https://getkirby.com/docs/reference/panel/fields/layout#defining-your-own-layouts
      '1/1',
      '1/2, 1/2'
    ],
    'page' => 'page://forms' // Slug or URI to the page where the forms are located
  ],
  'pageModels' => [
    'forms' => 'tobimori\DreamForm\Models\FormsPage',
    'form' => 'tobimori\DreamForm\Models\FormPage',
    'submission' => 'tobimori\DreamForm\Models\SubmissionPage',
  ],
  'blueprints' => [
    'pages/forms' => __DIR__ . '/blueprints/pages/forms.yml',
    'pages/form' => __DIR__ . '/blueprints/pages/form.yml',
    'pages/submission' => require_once __DIR__ . '/blueprints/pages/submission.php',

    'dreamform/fields/key' => __DIR__ . '/blueprints/fields/key.yml',
    'dreamform/fields/label' => __DIR__ . '/blueprints/fields/label.yml',
    'dreamform/fields/placeholder' => __DIR__ . '/blueprints/fields/placeholder.yml',
    'dreamform/fields/error-message' => __DIR__ . '/blueprints/fields/error-message.yml',
    'dreamform/fields/required' => __DIR__ . '/blueprints/fields/required.yml',
    'dreamform/fields/static-dynamic-toggles' => __DIR__ . '/blueprints/fields/static-dynamic-toggles.yml',
    'dreamform/fields/actions' => require_once __DIR__ . '/blueprints/fields/actions.php',
    'dreamform/fields/fields' => require_once __DIR__ . '/blueprints/fields/fields.php',
    'dreamform/fields/field' => require_once __DIR__ . '/blueprints/fields/field.php',
    'dreamform/fields/form' => require_once __DIR__ . '/blueprints/fields/form.php',
    'dreamform/fields/email-template' => require_once __DIR__ . '/blueprints/fields/email-template.php',
    'dreamform/fields/writer-with-fields' => require_once __DIR__ . '/blueprints/fields/writer-with-fields.php',
  ],
  // get all files from /translations and register them as language files
  'translations' => A::keyBy(A::map(
    Dir::read(__DIR__ . '/translations'),
    fn ($file) => A::merge([
      'lang' => F::name($file),
    ], Yaml::decode(F::read(__DIR__ . '/translations/' . $file)))
  ), 'lang')
]);