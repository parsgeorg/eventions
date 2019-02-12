import React from 'react';
import Message from '../ui/Messages';
import TextFieldGroup from '../ui/TextFieldGroup';

const View = props => {
  const {
    name,
    price,
    nameErr,
    priceErr,
    isShowSuccessMessage,
    isLoading,
  } = props.data;
  const { handleChange, handleSubmit } = props;
  return (
    <>
      {isShowSuccessMessage && (
        <Message text="Новая задача успешно добавлена!" />
      )}
      <h3 className="lead">Добавить изобретение</h3>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          label="Name"
          onChange={handleChange}
          value={name}
          field="name"
          type="text"
          className={`form-control ${nameErr && 'errField'}`}
          error={nameErr}
        />

        <TextFieldGroup
          label="Price"
          onChange={handleChange}
          value={price}
          field="price"
          type="text"
          className={`form-control ${priceErr && 'errField'}`}
          error={priceErr}
        />

        <div className="form-group">
          <button
            disabled={isLoading || priceErr || nameErr || !price || !name}
            className="btn btn-primary btn-lg"
          >
            Добавить
          </button>
        </div>
      </form>
    </>
  );
};

export default View;
