/* eslint-disable max-len */
import React, { useState } from 'react';
import Dropdown from './elements/Dropdown';
import { FIELDS } from '../utils/formFields';
import BtnGroup from './elements/BtnGroup';
import TableRow from './elements/TableRow';

const Table = () => {
  const [owner, setOwner] = useState('Owner');
  const [project, setproject] = useState(FIELDS.project.options[0]);
  const [ticketType, setticketType] = useState(FIELDS.ticketType.options[0]);
  const [url, seturl] = useState('');
  const [crawlType, setcrawlType] = useState(FIELDS.crawlType.options[0]);
  const [comment, setcomment] = useState('');
  const [checkemployerexist, setcheckemployerexist] = useState('Yes');
  const [checkmoreemployers, setcheckmoreemployers] = useState('Yes');
  const [checkexistingic, setcheckexistingic] = useState('Yes');
  const [xpaths, setxpaths] = useState('Yes');
  const [pprs, setpprs] = useState('Yes');
  const [jobCount, setjobCount] = useState('Yes');
  const [IDFromSource, setIDFromSource] = useState('Yes');
  const [unhealthyicstatus, setunhealthyicstatus] = useState(FIELDS.unhealthyicstatus.options[0]);
  const [icnumber, seticnumber] = useState('');
  const [icstatus, seticstatus] = useState(FIELDS.icstatus.options[0]);
  const [existingic, setexistingic] = useState(FIELDS.existingic.options[1]);

  return (
    <table className="table table-hover">
      <tbody>
        <TableRow displayName={FIELDS.owner.displayName}>
          <Dropdown defaultItem={owner} menuItems={FIELDS.owner.options} setState={setOwner} />
        </TableRow>

        <TableRow displayName={FIELDS.project.displayName}>
          <Dropdown defaultItem={project} menuItems={FIELDS.project.options} setState={setproject} />
        </TableRow>

        {project === 'Jira Ticket' && (
        <TableRow displayName={FIELDS.ticketType.displayName}>
          <Dropdown defaultItem={ticketType} menuItems={FIELDS.ticketType.options} setState={setticketType} />
        </TableRow>
        )}

        <TableRow displayName={project === 'Unhealthy Project' ? FIELDS.url.unhealthy : FIELDS.url.displayName}>
          <input type="url" className="form-control" name={FIELDS.url.name} placeholder={FIELDS.url.placeholder} onChange={e => seturl(e.target.value)} value={url} />
        </TableRow>

        <TableRow displayName={FIELDS.crawlType.displayName}>
          <Dropdown defaultItem={crawlType} menuItems={FIELDS.crawlType.options} setState={setcrawlType} />
        </TableRow>

        {crawlType === 'CANNOT-CRAWL' ? (
          <TableRow displayName={FIELDS.comment.displayName}>
            <input type="text" className="form-control" name={FIELDS.comment.name} placeholder={FIELDS.comment.placeholder} onChange={e => setcomment(e.target.value)} value={comment} />
          </TableRow>
        ) : (
          <>
            <TableRow displayName={FIELDS.checkemployerexist.displayName}>
              <BtnGroup defaultItem={checkemployerexist} menuItems={FIELDS.checkemployerexist.options} setState={setcheckemployerexist} />
            </TableRow>

            <TableRow displayName={FIELDS.checkmoreemployers.displayName}>
              <BtnGroup defaultItem={checkmoreemployers} menuItems={FIELDS.checkmoreemployers.options} setState={setcheckmoreemployers} />
            </TableRow>

            <TableRow displayName={FIELDS.checkexistingic.displayName}>
              <BtnGroup defaultItem={checkexistingic} menuItems={FIELDS.checkexistingic.options} setState={setcheckexistingic} />
            </TableRow>

            {
              crawlType === 'TARAKAN' && (
              <>
                <TableRow displayName={FIELDS.xpaths.displayName}>
                  <BtnGroup defaultItem={xpaths} menuItems={FIELDS.xpaths.options} setState={setxpaths} />
                </TableRow>

                <TableRow displayName={FIELDS.pprs.displayName}>
                  <BtnGroup defaultItem={pprs} menuItems={FIELDS.pprs.options} setState={setpprs} />
                </TableRow>

                <TableRow displayName={FIELDS.jobCount.displayName}>
                  <BtnGroup defaultItem={jobCount} menuItems={FIELDS.jobCount.options} setState={setjobCount} />
                </TableRow>
              </>
              )
            }

            <TableRow displayName={FIELDS.IDFromSource.displayName}>
              <BtnGroup defaultItem={IDFromSource} menuItems={FIELDS.IDFromSource.options} setState={setIDFromSource} />
            </TableRow>
          </>
        )}

        <TableRow displayName={FIELDS.unhealthyicstatus.displayName}>
          <Dropdown defaultItem={unhealthyicstatus} menuItems={FIELDS.unhealthyicstatus.options} setState={setunhealthyicstatus} />
        </TableRow>

        <TableRow displayName={FIELDS.icnumber.displayName}>
          <input type="number" className="form-control" name={FIELDS.icnumber.name} placeholder={FIELDS.icnumber.placeholder} onChange={e => seticnumber(e.target.value)} value={icnumber} />
        </TableRow>

        <TableRow displayName={FIELDS.icstatus.displayName}>
          <BtnGroup defaultItem={icstatus} menuItems={FIELDS.icstatus.options} setState={seticstatus} />
        </TableRow>

        <TableRow displayName={FIELDS.existingic.displayName}>
          <BtnGroup defaultItem={existingic} menuItems={FIELDS.existingic.options} setState={setexistingic} />
        </TableRow>
      </tbody>
    </table>
  );
};

export default Table;
