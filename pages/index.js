import React, { useState, useEffect } from 'react';
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
  const [plan, setItems] = useState([]);
  const [isformSubmitted, setFullFormSubmitted] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('plan'));
    if (items) {
      setItems(items);
    }
  }, [isformSubmitted]);
  console.log(plan);

  const FormBusinessPlan = () => {
    return (
      <div className="w-full sticky top-0 left-0 bg-white ">
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
            localStorage.setItem('plan', JSON.stringify(values, null, 2));
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              // setFormSubmitted(true);
              setFullFormSubmitted(true);
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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
                <textarea
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

              <div className="fixed bottom-0 left-0 bg-white p-2 w-full shadow-md border-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-blue-600 border p-2 rounded-lg text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };
  const Preview = () => {
    return (
      <div className="grid grid-cols-5 m-5 border text-center preview h-full">
        <div className="col p-3 border h-fullr">
          <h1>Problem Statement</h1>
          <div>{plan.problemStatement}</div>
        </div>
        <div className="col p-3 border h-full">
          <div className="row">
            <div className="row  p-3 border">
              <h1>Proposed Solution</h1>
              <div>{plan.proposedStatement}</div>
            </div>
            <div className="row  p-3 border">
              <h1>Existing Alternatives</h1>
              <div>{plan.existingAlternatives}</div>
            </div>
          </div>
        </div>
        <div className="col  p-3 border">
          <h1>Unique Value Proposition</h1>
          <div>{plan.uniqueValue}</div>
        </div>
        <div className="col  p-3 border">
          <div className="row  p-3 border">
            <h1>Early Adaptors</h1>
            <div>{plan.earlyAdaptors}</div>
          </div>
          <div className="row  p-3 border">
            <h1>Web Matrices</h1>
            <div>{plan.webmatrices}</div>
          </div>
        </div>
        <div className="col  p-3 border">
          <h1>Marketing Segment</h1>
          <div>{plan.marketingSegment}</div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="row border-2 shadow-md p-2 fixed top-0 w-full bg-white z-10">
        <div className="col font-bold text-2xl text-center">
          Business Plan template
        </div>
      </div>
      <div className="grid grid-cols-4 m-10 gap-4">
        <div className="col col-span-1">
          <FormBusinessPlan />
        </div>
        <div className="col ml-5 border-2 text-center col-span-3">
          <Preview />
        </div>
      </div>
    </div>
  );
}
