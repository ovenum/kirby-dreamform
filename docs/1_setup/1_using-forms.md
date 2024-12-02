---
title: Using Forms
---

After installing, go on by adding the Form field to **a blueprint of your choice.** In this case, we'll be creating a new Block, but you can use forms in every blueprint type: Blocks, Pages, Files or even Users.

```yaml
# site/blueprints/blocks/form.yml

title: Form Block
icon: survey
preview: fields
wysiwyg: true

fields:
  form:
    label: Select your form
    extends: dreamform/fields/form
```

In order for our Block to be output on the site, we'll have to create the corresponding Block snippet and call the plugins' form snippet with the value of the field we just created supplied as argument.

```php
// site/snippets/blocks/form.php

<?php snippet('dreamform/form', ['form' => $block->form()->toPage()]); ?>
```

You can adapt this concept to anywhere you want to output a form.
