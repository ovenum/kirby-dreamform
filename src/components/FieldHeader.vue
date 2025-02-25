<script setup>
import Editable from "@/components/Editable.vue";

const props = defineProps({
	content: Object,
	fieldset: Object,
	requireLabel: Boolean,
	minAsRequired: Boolean,
});

const emit = defineEmits(["update"]);
const update = (value) => emit("update", { ...props.content, ...value });
</script>

<template>
	<div class="df-field-header">
		<div>
			<editable
				tag="div"
				class="df-field-label"
				:placeholder="fieldset.name"
				:class="{ 'is-invalid': !content.label && requireLabel }"
				:modelValue="content.label"
				@update:modelValue="update({ label: $event })"
			/>
			<button
				type="button"
				class="df-field-required"
				:class="{
					'is-active': minAsRequired
						? props.content.min
						: props.content.required,
				}"
				@click="
					update(
						minAsRequired
							? { min: props.content.min ? null : 1 }
							: { required: !props.content.required },
					)
				"
			>
				✶ <span>{{ $t("dreamform.common.required.label") }}</span>
			</button>
		</div>
		<div class="df-field-key" :class="{ 'is-invalid': !content.key }">
			<editable
				tag="code"
				:slugify="true"
				:placeholder="$t('dreamform.common.key.label')"
				:modelValue="content.key"
				@update:modelValue="update({ key: $event })"
			/>
			<k-icon type="key" />
		</div>
	</div>
</template>

<style lang="scss">
.df-field-header {
	justify-content: space-between;
	font-weight: var(--font-semi);
	margin-bottom: var(--spacing-2);
	line-height: var(--leading-h3);
	display: flex;
	align-items: center;

	&:hover .df-field-required:not(.is-active) {
		color: var(--color-text-dimmed);
	}

	.df-field-label.is-invalid {
		color: var(--color-red);
	}
}

.df-field-key {
	color: var(--color-text-dimmed);
	background: var(--menu-color-back);
	padding: 0.125rem var(--spacing-1);
	border-radius: var(--input-rounded);
	font-size: var(--text-xs);
	text-align: right;
	display: flex;
	gap: var(--spacing-1);
	align-items: center;

	&.is-invalid {
		background: var(--color-red);
		color: var(--color-white);
	}
}

.df-field-required {
	padding: 0.125rem;
	color: var(--block-color-back);
	transition: color 0.15s;
	margin-left: var(--spacing-1);

	&.is-active {
		color: var(--color-blue);

		&:hover {
			color: var(--color-blue-500);
		}
	}
}
</style>
