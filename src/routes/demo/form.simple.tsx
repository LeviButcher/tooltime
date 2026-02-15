import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { useAppForm } from "@/hooks/demo.form";

export const Route = createFileRoute("/demo/form/simple")({
  component: SimpleForm,
});

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

function SimpleForm() {
  const form = useAppForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onBlur: schema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
      // Show success message
      alert("Form submitted successfully!");
    },
  });

  return (
    <div
      className="flex justify-center items-center p-4 min-h-screen text-white bg-gradient-to-br from-purple-100 to-blue-100"
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 5% 40%, #add8e6 0%, #0000ff 70%, #00008b 100%)",
      }}
    >
      <div className="p-8 w-full max-w-2xl rounded-xl border-8 shadow-xl backdrop-blur-md bg-black/50 border-black/10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <form.AppField name="title">
            {(field) => <field.TextField label="Title" />}
          </form.AppField>

          <form.AppField name="description">
            {(field) => <field.TextArea label="Description" />}
          </form.AppField>

          <div className="flex justify-end">
            <form.AppForm>
              <form.SubscribeButton label="Submit" />
            </form.AppForm>
          </div>
        </form>
      </div>
    </div>
  );
}
