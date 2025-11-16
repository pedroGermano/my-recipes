import { useFormContext } from "react-hook-form";

export const RecipeFormField = () => {
	const { register } = useFormContext();
	const fields = [
		{ type: "text", name: "title", label: "Titulo" },
		{
			type: "text",
			name: "cookingTimingInMinutes",
			label: "Tempo de cozimento",
		},
		{ type: "textarea", name: "description", label: "Descrição" },
	];
	return (
		<div className="flex flex-col">
			{fields.map((f) => {
				return (
					<div key={f.name}>
						<label htmlFor={f.name}>{f.label}</label>
						{f.type === "text" ? (
							<input
								{...register(f.name)}
								type="text"
								className="w-full border border-gray-200 rounded-sm py-2 bg-gray-100 outline-none"
							/>
						) : (
							<textarea
								{...register(f.name)}
								className="w-full border border-gray-200 rounded-sm bg-gray-100 outline-none"
								rows={6}
							/>
						)}
					</div>
				);
			})}
			<button
				type="submit"
				className="w-full bg-orange-600 px-2 py-4 rounded-md text-white font-semibold cursor-pointer hover:opacity-80"
			>
				Publicar Receita
			</button>
		</div>
	);
};
