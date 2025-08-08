import { SUPPORTED_FORMATS } from "@/utils/supported-formats";
import * as yup from "yup";

export const SetProfileSchema = yup.object().shape({
  profile: yup
    .mixed()
    .test(
      "exist",
      "No image",
      (value) =>
        (value as File).type !== "application/octet-stream" &&
        (value as File).size !== 0
    )
    .test(
      "format",
      "The image format should be .jpeg .png .jpg.",
      (value) => value && SUPPORTED_FORMATS.includes((value as File).type)
    )
    .test(
      "size",
      "The desired image size should be less than 5MB.",
      (value) => value && (value as File).size <= 5000000
    ),
});
