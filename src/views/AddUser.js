import React, { useContext, useEffect, useRef } from "react";
import FormField from "components/molecules/FormField/FormField";
import Button from "components/atoms/Button/Button";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Title } from "components/atoms/Title/Title";
import { UsersContext } from "providers/UsersProvider";
import { useForm } from "hooks/useForm";
/* import { useWindowSize } from "hooks/useWindowSize"; */

const initialFormState = {
  name: "",
  result: "",
  average: "",
  consent: "",
  error: "",
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  } = useForm(initialFormState);

  const ref = useRef(null);
  /*   const dimensions = useWindowSize(); */

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);
    } else {
      handleThrowError("We need your consent");
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      {/*      <Title>{dimensions.height} </Title>
      <Title>{dimensions.width}</Title> */}
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        ref={ref}
      />
      <FormField
        label="Result"
        id="result"
        name="result"
        value={formValues.result}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        value={formValues.average}
        onChange={handleToggleConsent}
        type="checkbox"
      />
      <Button type="submit">Add</Button>
      <br></br>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
