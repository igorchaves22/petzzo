import * as yup from "yup";

export const STATUS_MESSAGE = {
    newsletter: {
        required: 'The "email" field is required!',
        invalid: "Invalid email format!",
        success: "Your email has been sent!"
    }
};

export const newsletterFormSchema = yup.object().shape({
    email: yup.string().required(STATUS_MESSAGE.newsletter.required).email(STATUS_MESSAGE.newsletter.invalid)
});

export type NewsletterFormSchemaType = yup.InferType<typeof newsletterFormSchema>;
