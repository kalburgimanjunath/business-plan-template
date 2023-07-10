import React, { useState } from 'react';
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
        <form className="row m-5">
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="problemStatement">Problem Statement</label>
            <input
              type="text"
              className="form-control"
              id="problemStatement"
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              aria-describedby="problemStatement"
              placeholder="Enter Problem Statement"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="proposedStatement">Proposed Solution</label>
            <input
              type="text"
              className="form-control"
              id="proposedStatement"
              value={proposedStatement}
              onChange={(e) => setProposedStatement(e.target.value)}
              placeholder="Proposed Solution"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="existingAlternatives">Existing Alternatives</label>
            <input
              type="text"
              className="form-control"
              id="existingAlternatives"
              value={existingAlternatives}
              onChange={(e) => setExistingAlternatives(e.target.value)}
              placeholder="Existing Alternatives"
            />
          </div>

          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="uniqueValue">Unique Value Proposition</label>
            <input
              type="text"
              className="form-control"
              id="uniqueValue"
              value={uniqueValue}
              onChange={(e) => setUniqueValue(e.target.value)}
              placeholder="Unique Value Proposition"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="webmatrices">Web Matrices/Analysis</label>
            <input
              type="text"
              className="form-control"
              id="webmatrices"
              onChange={(e) => setWebMatrices(e.target.value)}
              value={webmatrices}
              placeholder="Web Matrices"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="earlyAdaptors">Early Adaptors</label>
            <input
              type="text"
              className="form-control"
              id="earlyAdaptors"
              value={earlyAdaptors}
              onChange={(e) => setEarlyAdaptors(e.target.value)}
              placeholder="Early Adaptors"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="marketingSegment">Marketing Segment</label>
            <input
              type="text"
              className="form-control"
              id="marketingSegment"
              onChange={(e) => setMarketingSegment(e.target.value)}
              value={marketingSegment}
              placeholder="Marketing Segment"
            />
          </div>

          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="costMatrix">Cost Matrix</label>
            <input
              type="text"
              className="form-control"
              id="costMatrix"
              onChange={(e) => setCostMatrix(e.target.value)}
              value={costMatrix}
              placeholder="Cost Matrix"
            />
          </div>
          <div className="form-group border border-primary p-2 m-2">
            <label htmlFor="revenueMatrix">Revenue Matrix</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRevenueMatrix(e.target.value)}
              id="revenueMatrix"
              placeholder="Revenue Matrix"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
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
