import React, { useState } from 'react';
import { Formik } from 'formik';
export default function Home() {
  const [problemStatement, setProblemStatement] = useState('');
  const [proposedStatement, setProposedStatement] = useState('');
  const [existingAlternatives, setExistingAlternatives] = useState('');
  const [uniqueValue, setUniqueValue] = useState('');
  const [webmatrices, setWebMatrices] = useState('');
  const [earlyAdaptors, setEarlyAdaptors] = useState('');
  const [marketingSegment, setMarketingSegment] = useState('');
  const [costMatrix, setCostMatrix] = useState('');
  const [revenueMatrix, setRevenueMatrix] = useState('');
  const FormBusinessPlan = () => {
    return (
      <div className="row">
        <Formik
          initialValues={{
            problemStatement: '',
            proposedStatement: '',
            existingAlternatives: '',
            uniqueValue: '',
            webmatrices: '',
            earlyAdaptors: '',
            marketingSegment: '',
            costMatrix: '',
            revenueMatrix: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.problemStatement) {
              errors.problemStatement = 'Required';
            } else if (!values.proposedStatement) {
              errors.proposedStatement = 'Required';
            } else if (!values.existingAlternatives) {
              errors.existingAlternatives = 'Required';
            } else if (!values.uniqueValue) {
              errors.uniqueValue = 'Required';
            } else if (!values.webmatrices) {
              errors.webmatrices = 'Required';
            } else if (!values.earlyAdaptors) {
              errors.earlyAdaptors = 'Required';
            } else if (!values.marketingSegment) {
              errors.marketingSegment = 'Required';
            } else if (!values.costMatrix) {
              errors.costMatrix = 'Required';
            } else if (!values.revenueMatrix) {
              errors.revenueMatrix = 'Required';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            localStorage.setItem('user', JSON.stringify(values, null, 2));
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setFormSubmitted(true);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="row m-5">
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="problemStatement">Problem Statement</label>
                <input
                  type="text"
                  className="form-control"
                  id="problemStatement"
                  value={problemStatement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.problemStatement}
                  aria-describedby="problemStatement"
                  placeholder="Enter Problem Statement"
                />
                {errors.problemStatement &&
                  touched.problemStatement &&
                  errors.problemStatement}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="proposedStatement">Proposed Solution</label>
                <input
                  type="text"
                  className="form-control"
                  id="proposedStatement"
                  value={values.proposedStatement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Proposed Solution"
                />
                {errors.proposedStatement &&
                  touched.proposedStatement &&
                  errors.proposedStatement}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="existingAlternatives">
                  Existing Alternatives
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="existingAlternatives"
                  value={values.existingAlternatives}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Existing Alternatives"
                />
                {errors.existingAlternatives &&
                  touched.existingAlternatives &&
                  errors.existingAlternatives}
              </div>

              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="uniqueValue">Unique Value Proposition</label>
                <input
                  type="text"
                  className="form-control"
                  id="uniqueValue"
                  value={values.uniqueValue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Unique Value Proposition"
                />
                {errors.uniqueValue &&
                  touched.uniqueValue &&
                  errors.uniqueValue}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="webmatrices">Web Matrices/Analysis</label>
                <input
                  type="text"
                  className="form-control"
                  id="webmatrices"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.webmatrices}
                  placeholder="Web Matrices"
                />
                {errors.uniqueValue &&
                  touched.uniqueValue &&
                  errors.uniqueValue}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="earlyAdaptors">Early Adaptors</label>
                <input
                  type="text"
                  className="form-control"
                  id="earlyAdaptors"
                  value={values.earlyAdaptors}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Early Adaptors"
                />
                {errors.earlyAdaptors &&
                  touched.earlyAdaptors &&
                  errors.earlyAdaptors}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="marketingSegment">Marketing Segment</label>
                <input
                  type="text"
                  className="form-control"
                  id="marketingSegment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.marketingSegment}
                  placeholder="Marketing Segment"
                />
                {errors.marketingSegment &&
                  touched.marketingSegment &&
                  errors.marketingSegment}
              </div>

              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="costMatrix">Cost Matrix</label>
                <input
                  type="text"
                  className="form-control"
                  id="costMatrix"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.costMatrix}
                  placeholder="Cost Matrix"
                />
                {errors.costMatrix && touched.costMatrix && errors.costMatrix}
              </div>
              <div className="form-group border border-primary p-2 m-2">
                <label htmlFor="revenueMatrix">Revenue Matrix</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="revenueMatrix"
                  value={values.revenueMatrix}
                  placeholder="Revenue Matrix"
                />
                {errors.revenueMatrix &&
                  touched.revenueMatrix &&
                  errors.revenueMatrix}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn bg-blue-600 border p-2 rounded-lg text-white"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  };
  const Preview = () => {
    return (
      <div className="grid grid-cols-7">
        <div className="col">{problemStatement}</div>
        <div className="col">
          <div className="row">
            <div className="row">{proposedStatement}</div>
            <div className="row">{existingAlternatives}</div>
          </div>
        </div>
        <div className="col">{uniqueValue}</div>
        <div className="col">
          <div className="row">{earlyAdaptors}</div>
          <div className="row">{webmatrices}</div>
        </div>
        <div className="col">{marketingSegment}</div>
      </div>
    );
  };
  return (
    <div>
      <div className="row">
        <div className="col font-bold text-2xl text-center underline">
          Business Plan template
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col mr-5">
          <FormBusinessPlan />
        </div>
        <div className="col ml-5 border-2 text-center">
          <Preview />
        </div>
      </div>
    </div>
  );
}
