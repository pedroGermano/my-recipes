import {
	recipeSchema,
	type RecipeFormData,
} from "@/@types/schemas/recipes.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { RecipeFormField } from "./components/recipes-form-field";

export const NewRecipes = () => {
	const methods = useForm<RecipeFormData>({
		resolver: zodResolver(recipeSchema),
		defaultValues: {
			title: "",
			description: "",
			coonkingTimeInMinutes: "",
			image: "",
		},
	});

	const { handleSubmit } = methods;
	const onSubmit = (values: RecipeFormData) => {
		debugger;
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white max-w-1/2 mx-auto h-auto rounded-md shadow-sm mt-6"
			>
				<RecipeFormField />
			</form>
		</FormProvider>
	);
};
