import Form from "components/Form";
import { toast } from "react-toastify";
import { EXAMPLE_FORM_CONFIG } from "customConstants";

import "./MainPage.scss";
import { useState } from "react";

function MainPage() {
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Анкета успешно отправлена!");
    setSubmittedFormData({ ...values, photo: undefined });
    resetForm();
  };

  return (
    <div className="MainPage">
      <h1>Анкета</h1>
      <Form
        config={EXAMPLE_FORM_CONFIG}
        labelsWidth={150}
        onSubmit={onSubmit}
      />
      {submittedFormData && (
        <>
          <h4>Данные формы:</h4>
          <pre>{JSON.stringify(submittedFormData, null, 4)}</pre>
        </>
      )}
    </div>
  );
}

export default MainPage;
