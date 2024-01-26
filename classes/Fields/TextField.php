<?php

namespace tobimori\DreamForm\Fields;

class TextField extends Field
{
	public static function blueprint(): array
	{
		return [
			'title' => t('text-field'),
			'preview' => 'fields',
			'wysiwyg' => true,
			'icon' => 'title',
			'tabs' => [
				'field' => [
					'label' => t('field'),
					'fields' => [
						'key' => 'dreamform/fields/key',
						'label' => 'dreamform/fields/label',
						'placeholder' => 'dreamform/fields/placeholder',
					]
				],
				'validation' => [
					'label' => t('validation'),
					'fields' => [
						'required' => 'dreamform/fields/required',
						'errorMessage' => 'dreamform/fields/error-message',
					]
				]
			]
		];
	}

	public function submissionBlueprint(): array|null
	{
		return [
			'label' => $this->field()->label()->value() ?? t('text-field'),
			'icon' => 'text-left',
			'type' => 'text'
		];
	}

	public function validate(): true|string
	{
		if (
			$this->field()->required()->toBool()
			&& $this->value()->isEmpty()
		) {
			return $this->field()->errorMessage()->isNotEmpty() ? $this->field()->errorMessage() : t('error-message-default');
		}

		return true;
	}
}