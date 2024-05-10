"use client";

import labelIcon from "@/../../public/assets/images/form-label-star.svg";
import addmoreIcon from "@/../../public/assets/images/addmore-icon.svg";
import Image from "next/image";
import { useFieldArray, useForm } from "react-hook-form";

function DynamicForm() {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      hazardousSubstances: [
        {
          name: "",
          hazardClass: "",
          identifiers: "",
          location: "USA",
          concentrationRange: "",
          impactSubstance: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "hazardousSubstances",
  });

  const handleFormSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div>
      <h3 className="text-[#071427] font-semibold mb-6">
        Hazardous substances*
      </h3>

      <form action="" className="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="">
          {fields.map((item, index) => {
            return (
              <div
                className="grid grid-cols-3 gap-x-4 gap-y-6 mb-6"
                key={item.id}
              >
                {/* Name  */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Name <Image src={labelIcon} />
                  </label>

                  <input
                    type="text"
                    {...register(`hazardousSubstances.${index}.name`, {
                      required: true,
                    })}
                    id="name"
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm p-3 outline-blue-600 w-full"
                  />
                </div>

                {/* Hazard classes and categories */}
                <div>
                  <label
                    htmlFor="hazardClass"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Hazard classes and/or categories{" "}
                    <Image src={labelIcon} alt="labelIcon" />
                  </label>

                  <input
                    type="text"
                    {...register(`hazardousSubstances.${index}.hazardClass`, {
                      required: true,
                    })}
                    id="hazardClass"
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm p-3 outline-blue-600 w-full"
                  />
                </div>

                {/* Idetifiers */}
                <div>
                  <label
                    htmlFor="identifiers"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Identifiers
                    <Image src={labelIcon} alt="labelIcon" />
                  </label>

                  <input
                    type="text"
                    {...register(`hazardousSubstances.${index}.identifiers`, {
                      required: true,
                    })}
                    id="identifiers"
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm p-3 outline-blue-600 w-full"
                  />
                </div>

                {/* Location selection */}
                <div>
                  <label
                    htmlFor="location"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Location <Image src={labelIcon} alt="labelIcon" />
                  </label>

                  <select
                    {...register(`hazardousSubstances.${index}.location`, {
                      required: true,
                    })}
                    id="location"
                    form="carform"
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm pr-[179px] pl-3 py-3 outline-blue-600 w-full"
                  >
                    <option defaultValue="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="England">England</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="concentrationRange"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Concentration range{" "}
                    <Image src={labelIcon} alt="labelIcon" />
                  </label>

                  <input
                    type="text"
                    {...register(
                      `hazardousSubstances.${index}.concentrationRange`,
                      {
                        required: true,
                      }
                    )}
                    id="identifiers"
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm p-3 outline-blue-600 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="impactSubstance"
                    className="flex items-center mb-2 text-[#667085]"
                  >
                    Impact of substances on the environment, human health,
                    safety <Image src={labelIcon} alt="labelIcon" />
                  </label>

                  <input
                    type="text"
                    id="impactSubstance"
                    {...register(
                      `hazardousSubstances.${index}.impactSubstance`,
                      {
                        required: true,
                      }
                    )}
                    className="border border-[#CDD8E4] rounded-md bg-white shadow-sm p-3 outline-blue-600 w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <input type="submit" value="" />
      </form>

      <button
        className="flex
  items-center gap-3 px-6 py-3 bg-[#FAFCFF] shadow-sm"
        onClick={() => {
          append({ name: "", hazardClass: "" });
        }}
      >
        <Image src={addmoreIcon} alt="labelIcon" /> Add more
      </button>
    </div>
  );
}

export default DynamicForm;
