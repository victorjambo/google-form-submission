/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import Table from './Table';
import Footer from './Footer';
import { SubmitContext } from '../context/Submit';

const Home = () => {
  const [fieldDefaults] = useContext(SubmitContext);

  const [owner, setOwner] = useState(fieldDefaults.owner);
  const [project, setproject] = useState(fieldDefaults.project);
  const [ticketType, setticketType] = useState(fieldDefaults.ticketType);
  const [url, seturl] = useState(fieldDefaults.url);
  const [crawlType, setcrawlType] = useState(fieldDefaults.crawlType);
  const [comment, setcomment] = useState(fieldDefaults.comment);
  const [checkemployerexist, setcheckemployerexist] = useState(fieldDefaults.checkemployerexist);
  const [checkmoreemployers, setcheckmoreemployers] = useState(fieldDefaults.checkmoreemployers);
  const [checkexistingic, setcheckexistingic] = useState(fieldDefaults.checkexistingic);
  const [xpaths, setxpaths] = useState(fieldDefaults.xpaths);
  const [pprs, setpprs] = useState(fieldDefaults.pprs);
  const [jobCount, setjobCount] = useState(fieldDefaults.jobCount);
  const [IDFromSource, setIDFromSource] = useState(fieldDefaults.IDFromSource);
  const [unhealthyicstatus, setunhealthyicstatus] = useState(fieldDefaults.unhealthyicstatus);
  const [icnumber, seticnumber] = useState(fieldDefaults.icnumber);
  const [icstatus, seticstatus] = useState(fieldDefaults.icstatus);
  const [existingic, setexistingic] = useState(fieldDefaults.existingic);

  const getters = { owner, project, ticketType, url, crawlType, comment, checkemployerexist, checkmoreemployers, checkexistingic, xpaths, pprs, jobCount, IDFromSource, unhealthyicstatus, icnumber, icstatus, existingic };
  const setters = { setOwner, setproject, setticketType, seturl, setcrawlType, setcomment, setcheckemployerexist, setcheckmoreemployers, setcheckexistingic, setxpaths, setpprs, setjobCount, setIDFromSource, setunhealthyicstatus, seticnumber, seticstatus, setexistingic };

  const props = { ...getters, ...setters };

  return (
    <>
      <Table {...props} />
      <Footer formFields={getters} />
    </>
  );
};

export default Home;
