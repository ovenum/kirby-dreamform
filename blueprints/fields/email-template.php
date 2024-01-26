<?php

use Kirby\Filesystem\Dir;
use Kirby\Toolkit\A;
use Kirby\Toolkit\Str;

return function () {
	$templates = Dir::read(kirby()->root('templates') . '/emails');
	$templates = array_unique(A::map($templates, fn ($name) => Str::split($name, '.')[0]));

	return [
		'label' => t('template-type-kirby'),
		'type' => 'select',
		'options' => $templates,
	];
};