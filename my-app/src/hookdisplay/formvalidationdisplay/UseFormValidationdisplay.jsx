import React, { useState } from "react";
import ShowcaseContainer from "../../componentdisplay/ShowcaseContainer";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./UseFormValidationdisplay.css";

export default function UseFormValidationShowcase() {
// ========================= Usage Code Snippets =========================
const usageCode1 = `// Simple Login Form
import { useFormValidation } from "./useFormValidation";

function LoginForm() {
const { values, errors, handleChange, handleBlur, handleSubmit, showError } =
useFormValidation(
{ email: "", password: "" },
{ email: { isRequired: true, pattern: "email" }, password: { isRequired: true, minLength: 8 } }
);

const onSuccess = data => console.log("Login successful:", data);

return ( <form onSubmit={handleSubmit(onSuccess)}> <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
{showError("email") && <span>{errors.email}</span>} <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
{showError("password") && <span>{errors.password}</span>} <button type="submit">Login</button> </form>
);
}`;

const usageCode2 = `// Registration Form with Password Match
import { useFormValidation } from "./useFormValidation";

function SignupForm() {
const { values, errors, handleChange, handleBlur, handleSubmit, showError, resetForm } =
useFormValidation(
{ username: "", email: "", password: "", confirmPassword: "" },
{ username: { isRequired: true, minLength: 3, pattern: /^[a-zA-Z0-9_]+$/ },
email: { isRequired: true, pattern: "email" },
password: { isRequired: true, minLength: 8, pattern: /^(?=.*[A-Z])(?=.*[0-9])/ },
confirmPassword: { isRequired: true, matches: "password" } }
);

const onSuccess = data => { alert("Account created!"); resetForm(); };
}`;

const usageCode3 = `// Custom Validation Form
import { useFormValidation } from "./useFormValidation";

function AgeVerificationForm() {
const { values, errors, handleChange, handleBlur, handleSubmit, showError } =
useFormValidation(
{ age: "", country: "" },
{ age: { isRequired: true, min: 18, max: 120,
custom: (value, allValues) => allValues.country === "india" && value < 19 ? "Must be 19+ in India" : null },
country: { isRequired: true } }
);

return <form onSubmit={handleSubmit(data => console.log(data))}></form>;
}`;

// ========================= Live Forms =========================
const [loginSuccess, setLoginSuccess] = useState(false);
const loginForm = useFormValidation(
{ email: "", password: "" },
{
email: { isRequired: true, pattern: "email", msg: { isRequired: "Email is required", pattern: "Invalid email" } },
password: { isRequired: true, minLength: 8, msg: { isRequired: "Password required", minLength: "Min 8 chars" } },
}
);

const handleLoginSuccess = () => {
setLoginSuccess(true);
setTimeout(() => { setLoginSuccess(false); loginForm.resetForm(); }, 3000);
};

const [signupSuccess, setSignupSuccess] = useState(false);
const signupForm = useFormValidation(
{ username: "", email: "", password: "", confirmPassword: "" },
{
username: { isRequired: true, minLength: 3, pattern: /^[a-zA-Z0-9_]+$/, msg: { isRequired: "Required", minLength: "Min 3 chars", pattern: "Invalid" } },
email: { isRequired: true, pattern: "email", msg: { isRequired: "Required", pattern: "Invalid email" } },
password: { isRequired: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, msg: { isRequired: "Required", minLength: "Min 8 chars", pattern: "Must have uppercase & number" } },
confirmPassword: { isRequired: true, matches: "password", msg: { isRequired: "Required", matches: "Passwords don't match" } },
}
);

const handleSignupSuccess = () => {
setSignupSuccess(true);
setTimeout(() => { setSignupSuccess(false); signupForm.resetForm(); }, 3000);
};

const [ageSuccess, setAgeSuccess] = useState(false);
const ageForm = useFormValidation(
{ age: "", country: "" },
{
age: { isRequired: true, min: 18, max: 120, custom: (value, allValues) => allValues.country === "india" && value < 19 ? "Must be 19+ in India" : null, msg: { isRequired: "Required", min: "Min 18", max: "Invalid age" } },
country: { isRequired: true, msg: { isRequired: "Select country" } },
}
);

const handleAgeSuccess = () => {
setAgeSuccess(true);
setTimeout(() => { setAgeSuccess(false); ageForm.resetForm(); }, 3000);
};

return ( <div 
className="form-validation-showcase-container"> 
<h2 className="form-validation-showcase-title">useFormValidation Hook</h2> 
<p className="form-validation-showcase-intro">Reusable React hook for clean, flexible form validation.</p>

  <ShowcaseContainer title="Login Form" code={usageCode1}>  
    <form onSubmit={loginForm.handleSubmit(handleLoginSuccess)} className="demo-form" noValidate>  
      <div 
      className="form-field">
        <label>Email *</label>
        <input type="email" name="email" 
        value={loginForm.values.email} 
        onChange={loginForm.handleChange} 
        onBlur={loginForm.handleBlur} 
        placeholder="john12@email.com" 
        className={loginForm.showError("email") ? "error-input" : ""} 
        />
        {loginForm.showError("email") && <span className="error-text">{loginForm.errors.email}</span>}
      </div>  
      <div 
        className="form-field">
        <label>Password *</label>
        <input type="password" name="password" 
        value={loginForm.values.password} 
        onChange={loginForm.handleChange} 
        onBlur={loginForm.handleBlur} 
        placeholder="Min 8 chars" 
        className={loginForm.showError("password") ? "error-input" : ""} 
        />
        {loginForm.showError("password") && <span className="error-text">{loginForm.errors.password}</span>}
      </div>  
      <button type="submit" className="submit-button">Login</button>  
      {loginSuccess && <div className="success-message">Login successful!</div>}  
    </form>  
  </ShowcaseContainer>  

  <ShowcaseContainer title="Registration Form" code={usageCode2}>  
    <form onSubmit={signupForm.handleSubmit(handleSignupSuccess)} className="demo-form" noValidate>  
      {["username","email","password","confirmPassword"].map(field => (  
        <div key={field} className="form-field">  
          <label>
            {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g,' $1')} *
          </label>  
          <input 
          type={field.includes("password") ? "password" : "text"} 
          name={field} 
          value={signupForm.values[field]} 
          onChange={signupForm.handleChange} 
          onBlur={signupForm.handleBlur} 
          placeholder={`Enter ${field}`} 
          className={signupForm.showError(field) ? "error-input" : ""} 
          />  
          {signupForm.showError(field) && <span className="error-text">{signupForm.errors[field]}</span>}  
        </div>  
      ))}  
      <button type="submit" className="submit-button">Create Account</button>  
      {signupSuccess && <div className="success-message">Account created successfully!</div>}  
    </form>  
  </ShowcaseContainer>  

  <ShowcaseContainer title="Validation Form" code={usageCode3}>  
    <form onSubmit={ageForm.handleSubmit(handleAgeSuccess)} className="demo-form" noValidate>  

      <div 
      className="form-field">
        <label>Age *</label>
        <input type="number" name="age" 
        value={ageForm.values.age} 
        onChange={ageForm.handleChange} 
        onBlur={ageForm.handleBlur} 
        placeholder="18+" 
        className={ageForm.showError("age") ? "error-input" : ""} 
        />
        {ageForm.showError("age") && 
        <span className="error-text"> {ageForm.errors.age}</span>}
      </div> 

      <div className="form-field">
        <label>Country *</label>
        <select name="country" 
        value={ageForm.values.country} 
        onChange={ageForm.handleChange} 
        onBlur={ageForm.handleBlur} 
        className={ageForm.showError("country") ? "error-input" : ""}>
          <option value="">Select Country</option>
          <option value="nepal">Nepal</option>
          <option value="india">India (19+)</option>
          <option value="usa">Japan</option>
          <option value="uk">Australia</option>
          <option value="canada">Canada</option>
          </select>{ageForm.showError("country") && 
          <span className="error-text">{ageForm.errors.country}</span>}
      </div>  

      <div className="info-box">Custom validation: Age must be 19+ for India.</div>  
      <button type="submit" className="submit-button">Verify Age</button>  
      {ageSuccess && <div className="success-message">Age verified!</div>}  

    </form>  
  </ShowcaseContainer>  
    <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-content">
          <ul className="usage-list">
            <li>Define clear, user-friendly error messages</li>
            <li>Use built-in patterns for common formats (email, URL, phone)</li>
            <li>Validate on blur for better UX - avoid interrupting typing</li>
            <li>Use custom validation for complex business logic</li>
            <li>Reset form after successful submission</li>
            <li>Keep validation rules separate from component logic</li>
            <li>Show inline success or error states for better feedback</li>
            <li>Use reusable form components (Input, Select, Checkbox)</li>
          </ul>
    </div>
  </div>
  </div>  
);
}
