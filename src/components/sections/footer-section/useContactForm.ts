import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormState {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    formData: {
      name: "",
      email: "",
      message: "",
    },
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    try {
      // Aqui você pode adicionar a lógica de envio do email
      // Por exemplo, usando uma API de email
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulação de envio

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
      }));
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Failed to send message. Please try again.",
      }));
    }
  };

  const resetForm = () => {
    setFormState({
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    });
  };

  return {
    formState,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
