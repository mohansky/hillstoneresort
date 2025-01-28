import { z } from "zod";
// import { formSchema } from "@/lib/formValidation"; 

type FormStatus = "idle" | "submitting" | "success" | "error" | "existingStudent";

export interface FormActionState {
  status: FormStatus;
  data?: {
    message: string | string[];
    issues?: string[] | undefined;
  };
}

// export interface ActionState extends FormActionState {
//   data?: FormActionState["data"] & {
//     user?: z.infer<typeof formSchema>;
//   };
// }

export interface MenuLink {
  link: string;
  text: string;
}

export interface MenuProps {
  links: MenuLink[];
}