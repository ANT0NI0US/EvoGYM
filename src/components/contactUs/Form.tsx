import { useForm } from "react-hook-form";
import MotionDivContactUs from "@/ui/MotionDivContactUs";

export default function Form() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <MotionDivContactUs tailwindClass="mt-10 basis-3/5 md:mt-0" y={50}>
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/28a68a9fa124a3a390fc1e21c9e8d128"
        method="POST"
      >
        <input
          className="inputStyles"
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="mb-2 -mt-5 ml-2 text-primary-500">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length is 100 char."}
          </p>
        )}

        <input
          className="inputStyles"
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="mb-2 -mt-5 ml-2 text-primary-500">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </p>
        )}

        <textarea
          className="inputStyles"
          placeholder="MESSAGE"
          rows={4}
          cols={50}
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="mb-2 -mt-5 ml-2 text-primary-500">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Max length is 2000 char."}
          </p>
        )}

        <button
          type="submit"
          className="mt-5 text-center w-1/2 md:w-fit rounded-lg bg-secondary-500 px-16 sm:px-20 py-3 transition duration-500 hover:text-white mx-auto flexCenter md:mx-0 font-extrabold"
        >
          SUBMIT
        </button>
      </form>
    </MotionDivContactUs>
  );
}
