/* eslint-disable max-len */
import React, { useState } from 'react';

import Dropdown from './elements/Dropdown';
import { FIELDS, CRAWL_TYPE } from '../utils/formFields';
import BtnGroup from './elements/BtnGroup';
import TableRow from './elements/TableRow';

const fieldDefaults = {
  owner: 'Owner',
  project: 'High Priority',
  ticketType: 'New Ticket',
  url: '',
  crawlType: 'TARAKAN',
  comment: '',
  checkemployerexist: 'Yes',
  checkmoreemployers: 'Yes',
  checkexistingic: 'Yes',
  xpaths: 'Yes',
  pprs: 'Yes',
  jobCount: 'Yes',
  IDFromSource: 'Yes',
  unhealthyicstatus: 'Done',
  icnumber: '0000',
  icstatus: 'Enabled',
  existingic: 'No',
};

const customDisplayname = {
  owner: FIELDS.owner.displayName,
  project: FIELDS.project.displayName,
  ticketType: FIELDS.ticketType.displayName,
  crawlType: FIELDS.crawlType.displayName,
  comment: 'Cannot-Crawl Comment',
  checkemployerexist: 'Checked if employer exist',
  checkmoreemployers: 'Checked for more employers',
  checkexistingic: 'Checked if existing IC',
  xpaths: FIELDS.xpaths.displayName,
  pprs: 'Included necessary PPRs',
  jobCount: FIELDS.jobCount.displayName,
  IDFromSource: 'Captured ID/Email',
  unhealthyicstatus: 'Unhealthy IC status',
  icnumber: FIELDS.icnumber.displayName,
  icstatus: FIELDS.icstatus.displayName,
  existingic: FIELDS.existingic.displayName,
};

const Table = () => {
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

  return (
    <table className="table table-hover">
      <tbody>
        <TableRow displayName={customDisplayname.owner}>
          <Dropdown defaultItem={owner} menuItems={FIELDS.owner.options} setState={setOwner} />
        </TableRow>

        <TableRow displayName={customDisplayname.project}>
          <Dropdown defaultItem={project} menuItems={FIELDS.project.options} setState={setproject} />
        </TableRow>

        {project === 'Jira Ticket' && (
        <TableRow displayName={customDisplayname.ticketType}>
          <Dropdown defaultItem={ticketType} menuItems={FIELDS.ticketType.options} setState={setticketType} />
        </TableRow>
        )}

        <TableRow displayName={project === 'Unhealthy Project' ? FIELDS.url.unhealthy : FIELDS.url.displayName}>
          <input type="url" className="form-control" name={FIELDS.url.name} placeholder={FIELDS.url.placeholder} onChange={e => seturl(e.target.value)} value={url} />
        </TableRow>

        <TableRow displayName={customDisplayname.crawlType}>
          <Dropdown defaultItem={crawlType} menuItems={FIELDS.crawlType.options} setState={setcrawlType} />
        </TableRow>

        {crawlType === CRAWL_TYPE.CC ? (
          <TableRow displayName={customDisplayname.comment}>
            <input type="text" className="form-control" name={FIELDS.comment.name} placeholder={FIELDS.comment.placeholder} onChange={e => setcomment(e.target.value)} value={comment} />
          </TableRow>
        ) : (
          <>
            {
              crawlType !== CRAWL_TYPE.MF && (
              <>
                <TableRow displayName={customDisplayname.checkemployerexist}>
                  <BtnGroup defaultItem={checkemployerexist} menuItems={FIELDS.checkemployerexist.options} setState={setcheckemployerexist} />
                </TableRow>

                <TableRow displayName={customDisplayname.checkmoreemployers}>
                  <BtnGroup defaultItem={checkmoreemployers} menuItems={FIELDS.checkmoreemployers.options} setState={setcheckmoreemployers} />
                </TableRow>

                <TableRow displayName={customDisplayname.checkexistingic}>
                  <BtnGroup defaultItem={checkexistingic} menuItems={FIELDS.checkexistingic.options} setState={setcheckexistingic} />
                </TableRow>
              </>
              )
            }

            {
              crawlType === CRAWL_TYPE.TK && (
              <>
                <TableRow displayName={customDisplayname.xpaths}>
                  <BtnGroup defaultItem={xpaths} menuItems={FIELDS.xpaths.options} setState={setxpaths} />
                </TableRow>

                <TableRow displayName={customDisplayname.pprs}>
                  <BtnGroup defaultItem={pprs} menuItems={FIELDS.pprs.options} setState={setpprs} />
                </TableRow>

                <TableRow displayName={customDisplayname.jobCount}>
                  <BtnGroup defaultItem={jobCount} menuItems={FIELDS.jobCount.options} setState={setjobCount} />
                </TableRow>
              </>
              )
            }

            <TableRow displayName={customDisplayname.IDFromSource}>
              <BtnGroup defaultItem={IDFromSource} menuItems={FIELDS.IDFromSource.options} setState={setIDFromSource} />
            </TableRow>
          </>
        )}

        {project === 'Unhealthy Project' && (
        <TableRow displayName={customDisplayname.unhealthyicstatus}>
          <Dropdown defaultItem={unhealthyicstatus} menuItems={FIELDS.unhealthyicstatus.options} setState={setunhealthyicstatus} />
        </TableRow>
        )}

        <TableRow displayName={customDisplayname.icnumber}>
          <input type="number" className="form-control" name={FIELDS.icnumber.name} placeholder={FIELDS.icnumber.placeholder} onChange={e => seticnumber(e.target.value)} value={icnumber} />
        </TableRow>

        <TableRow displayName={customDisplayname.icstatus}>
          <BtnGroup defaultItem={icstatus} menuItems={FIELDS.icstatus.options} setState={seticstatus} />
        </TableRow>

        <TableRow displayName={customDisplayname.existingic}>
          <BtnGroup defaultItem={existingic} menuItems={FIELDS.existingic.options} setState={setexistingic} />
        </TableRow>
      </tbody>
    </table>
  );
};

export default Table;
