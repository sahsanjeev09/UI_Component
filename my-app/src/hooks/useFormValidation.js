import { useState } from "react";
export const validateForm = (values, rules = {}) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = values[field];
    const fieldRules = rules[field];

    // Skip validation if field has no value and is not required
    if (!fieldRules.isRequired && (!value || value === "")) {
      return;
    }

    // Required check
    if (fieldRules.isRequired) {
      if (typeof value === "boolean") {
        if (!value) {
          errors[field] = fieldRules.msg?.isRequired || `${formatFieldName(field)} is required`;
          return;
        }
      } else if (!value || (typeof value === "string" && !value.trim())) {
        errors[field] = fieldRules.msg?.isRequired || `${formatFieldName(field)} is required`;
        return;
      }
    }

    // Convert value to string for pattern/length checks
    const stringValue = typeof value === "string" ? value : String(value);

    //  Min Length check
    if (fieldRules.minLength && stringValue.length < fieldRules.minLength) {
      errors[field] =
        fieldRules.msg?.minLength ||
        `${formatFieldName(field)} must be at least ${fieldRules.minLength} characters`;
      return;
    }

    //  Max Length check
    if (fieldRules.maxLength && stringValue.length > fieldRules.maxLength) {
      errors[field] =
        fieldRules.msg?.maxLength ||
        `${formatFieldName(field)} must not exceed ${fieldRules.maxLength} characters`;
      return;
    }

    //  Min Value check (for numbers)
    if (fieldRules.min !== undefined) {
      const numValue = Number(stringValue);
      if (!isNaN(numValue) && numValue < fieldRules.min) {
        errors[field] =
          fieldRules.msg?.min ||
          `${formatFieldName(field)} must be at least ${fieldRules.min}`;
        return;
      }
    }

    //  Max Value check (for numbers)
    if (fieldRules.max !== undefined) {
      const numValue = Number(stringValue);
      if (!isNaN(numValue) && numValue > fieldRules.max) {
        errors[field] =
          fieldRules.msg?.max ||
          `${formatFieldName(field)} must not exceed ${fieldRules.max}`;
        return;
      }
    }

    //  Email pattern (if provided as string "email")
    if (fieldRules.pattern === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(stringValue)) {
        errors[field] = fieldRules.msg?.pattern || "Invalid email format";
        return;
      }
    }

    //  URL pattern
    if (fieldRules.pattern === "url") {
      try {
        new URL(stringValue);
      } catch {
        errors[field] = fieldRules.msg?.pattern || "Invalid URL format";
        return;
      }
    }

    //  Phone pattern
    if (fieldRules.pattern === "phone") {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(stringValue) || stringValue.replace(/\D/g, "").length < 10) {
        errors[field] = fieldRules.msg?.pattern || "Invalid phone number";
        return;
      }
    }

    // Custom Regex (if provided as string)
    if (typeof fieldRules.pattern === "string" && 
        fieldRules.pattern !== "email" && 
        fieldRules.pattern !== "url" && 
        fieldRules.pattern !== "phone") {
      const regex = new RegExp(fieldRules.pattern);
      if (!regex.test(stringValue)) {
        errors[field] = fieldRules.msg?.pattern || `${formatFieldName(field)} format is invalid`;
        return;
      }
    }

    //  Custom Regex (if provided as RegExp object)
    if (fieldRules.pattern instanceof RegExp) {
      if (!fieldRules.pattern.test(stringValue)) {
        errors[field] = fieldRules.msg?.pattern || `${formatFieldName(field)} format is invalid`;
        return;
      }
    }

    // Custom validation function
    if (typeof fieldRules.custom === "function") {
      const customError = fieldRules.custom(value, values);
      if (customError) {
        errors[field] = customError;
        return;
      }
    }

    //  Match field validation (e.g., password confirmation)
    if (fieldRules.matches) {
      const matchField = fieldRules.matches;
      if (value !== values[matchField]) {
        errors[field] =
          fieldRules.msg?.matches ||
          `${formatFieldName(field)} must match ${formatFieldName(matchField)}`;
        return;
      }
    }
  });

  return errors;
};

/**
 * Helper function to format field names for error messages
 */
const formatFieldName = (field) => {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Object} formRules - Validation rules for the form
 * @param {Object} options - Additional options
 * @returns {Object} - Form state and handlers
 */
export const useFormValidation = (initialValues, formRules, options = {}) => {
  const {
    validateOnChange = false,
    validateOnBlur = true,
    resetOnSubmit = false,
  } = options;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rules, setRules] = useState(formRules);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setValues((prev) => ({ ...prev, [name]: newValue }));

    // Validate on change if option is enabled
    if (validateOnChange && touched[name]) {
      const newValues = { ...values, [name]: newValue };
      const validationErrors = validateForm(newValues, rules);
      setErrors(validationErrors);
    }
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur if option is enabled
    if (validateOnBlur) {
      const validationErrors = validateForm(values, rules);
      setErrors(validationErrors);
    }
  };

  // Handle form submission
  const handleSubmit = (onSuccess, onError) => async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate form
    const validationErrors = validateForm(values, rules);
    setErrors(validationErrors);

    // Check if form is valid
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call success callback
        if (onSuccess) {
          await onSuccess(values);
        }

        // Reset form if option is enabled
        if (resetOnSubmit) {
          setValues(initialValues);
          setTouched({});
          setErrors({});
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
      }
    } else {
      // Call error callback if provided
      if (onError) {
        onError(validationErrors);
      }
    }

    setIsSubmitting(false);
  };

  // Helper to check if field should show error
  const showError = (field) => touched[field] && errors[field];

  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  // Set a specific field value
  const setFieldValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // Set a specific field error
  const setFieldError = (field, error) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Validate specific field
  const validateField = (field) => {
    const fieldRules = { [field]: rules[field] };
    const fieldErrors = validateForm(values, fieldRules);
    setErrors((prev) => ({ ...prev, ...fieldErrors }));
    return !fieldErrors[field];
  };

  // Validate entire form without submitting
  const validateAll = () => {
    const validationErrors = validateForm(values, rules);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    rules,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
    setValues,
    setFieldValue,
    setFieldError,
    setRules,
    resetForm,
    validateField,
    validateAll,
  };
};