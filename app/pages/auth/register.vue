<template>
	<UContainer class="flex items-center justify-center sm:min-w-160 sm:p-4">
		<UCard class="w-full max-w-md">
			<template #header>
				<div class="p-4 text-center">
					<h1 class="text-xl font-semibold">
						Create your account
					</h1>
				</div>
			</template>

			<div class="space-y-4">
				<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
					<UButton
						color="neutral"
						variant="outline"
						icon="grommet-icons:github"
						class="justify-center"
						:loading="false"
						:disabled="false"
					>
						Github
					</UButton>

					<UButton
						color="neutral"
						variant="outline"
						icon="grommet-icons:google"
						class="justify-center"
						:loading="false"
						:disabled="false"
					>
						Google
					</UButton>
				</div>

				<USeparator label="or" />

				<UForm
					:schema="schema"
					:state="state"
					class="space-y-4"
					@submit="onSubmit"
				>
					<UFormField label="Name" name="name">
						<UInput v-model="state.name" placeholder="Your name" class="w-full" />
					</UFormField>

					<UFormField label="Email" name="email">
						<UInput v-model="state.email" placeholder="Your email" class="w-full" />
					</UFormField>

					<UFormField label="Password" name="password">
						<UInput
							v-model="state.password"
							type="password"
							placeholder="Password"
							class="w-full"
						/>
					</UFormField>

					<UFormField label="Confirm password" name="confirmPassword">
						<UInput
							v-model="state.confirmPassword"
							type="password"
							placeholder="Confirm password"
							class="w-full"
						/>
					</UFormField>

					<UButton type="submit" class="w-full justify-center">
						Create account
					</UButton>
				</UForm>
        <div class="text-center text-sm">Already have an accoount?
          <UButton variant="link" color="primary" :disabled="false" to="/auth/login" class="-ml-2">Sign in</UButton>
        </div>
			</div>
		</UCard>
	</UContainer>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z
	.object({
		name: z.string().trim().min(5, "Name must be at least 5 characters"),
		email: z.string().email("Invalid email address"),
		password: z.string().min(8, "Must be at least 8 characters"),
		confirmPassword: z.string(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
	// toast.add({
	// 	title: "Success",
	// 	description: "The form has been submitted.",
	// 	color: "success",
	// });

	console.log(event.data);
}
</script>
