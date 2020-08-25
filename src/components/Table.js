/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import Dropdown from './elements/Dropdown';
import { FIELDS, CRAWL_TYPE } from '../utils/formFields';
import BtnGroup from './elements/BtnGroup';
import TableRow from './elements/TableRow';
import { SubmitContext } from '../context/Submit';

const Table = () => {
  const [,, customDisplayname,, state, dispatch] = useContext(SubmitContext);

  const { owner, project, ticketType, url, crawlType, comment, checkemployerexist,
    checkmoreemployers, checkexistingic, xpaths, pprs, jobCount, IDFromSource,
    unhealthyicstatus, icnumber, icstatus, existingic } = state;

  const onInputChange = e => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };

  const setState = ({ type, value }) => {
    dispatch({ type, value });
  };

  return (
    <table className="table table-hover">
      <tbody>
        <TableRow displayName={customDisplayname.owner}>
          <Dropdown defaultItem={owner} menuItems={FIELDS.owner.options} setState={value => setState({ type: 'owner', value })} />
        </TableRow>

        <TableRow displayName={customDisplayname.project}>
          <Dropdown defaultItem={project} menuItems={FIELDS.project.options} setState={value => setState({ type: 'project', value })} />
        </TableRow>

        {project === 'Jira Ticket' && (
        <TableRow displayName={customDisplayname.ticketType}>
          <Dropdown defaultItem={ticketType} menuItems={FIELDS.ticketType.options} setState={value => setState({ type: 'ticketType', value })} />
        </TableRow>
        )}

        <TableRow displayName={project === 'Unhealthy Project' ? FIELDS.url.unhealthy : FIELDS.url.displayName}>
          <input type="text" className="form-control" name={FIELDS.url.name} placeholder={FIELDS.url.placeholder} onChange={onInputChange} value={url} />
        </TableRow>

        <TableRow displayName={customDisplayname.crawlType}>
          <Dropdown defaultItem={crawlType} menuItems={FIELDS.crawlType.options} setState={value => setState({ type: 'crawlType', value })} />
        </TableRow>

        {crawlType === CRAWL_TYPE.CC ? (
          <TableRow displayName={customDisplayname.comment}>
            <input type="text" className="form-control" name={FIELDS.comment.name} placeholder={FIELDS.comment.placeholder} onChange={onInputChange} value={comment} />
          </TableRow>
        ) : (
          <>
            {
              crawlType !== CRAWL_TYPE.MF && (
              <>
                <TableRow displayName={customDisplayname.checkemployerexist}>
                  <BtnGroup defaultItem={checkemployerexist} menuItems={FIELDS.checkemployerexist.options} setState={value => setState({ type: 'checkemployerexist', value })} />
                </TableRow>

                <TableRow displayName={customDisplayname.checkmoreemployers}>
                  <BtnGroup defaultItem={checkmoreemployers} menuItems={FIELDS.checkmoreemployers.options} setState={value => setState({ type: 'checkmoreemployers', value })} />
                </TableRow>

                <TableRow displayName={customDisplayname.checkexistingic}>
                  <BtnGroup defaultItem={checkexistingic} menuItems={FIELDS.checkexistingic.options} setState={value => setState({ type: 'checkexistingic', value })} />
                </TableRow>
              </>
              )
            }

            {
              crawlType === CRAWL_TYPE.TK && (
              <>
                <TableRow displayName={customDisplayname.xpaths}>
                  <BtnGroup defaultItem={xpaths} menuItems={FIELDS.xpaths.options} setState={value => setState({ type: 'xpaths', value })} />
                </TableRow>

                <TableRow displayName={customDisplayname.pprs}>
                  <BtnGroup defaultItem={pprs} menuItems={FIELDS.pprs.options} setState={value => setState({ type: 'pprs', value })} />
                </TableRow>

                <TableRow displayName={customDisplayname.jobCount}>
                  <BtnGroup defaultItem={jobCount} menuItems={FIELDS.jobCount.options} setState={value => setState({ type: 'jobCount', value })} />
                </TableRow>
              </>
              )
            }

            <TableRow displayName={customDisplayname.IDFromSource}>
              <BtnGroup defaultItem={IDFromSource} menuItems={FIELDS.IDFromSource.options} setState={value => setState({ type: 'IDFromSource', value })} />
            </TableRow>
          </>
        )}

        {project === 'Unhealthy Project' && (
        <TableRow displayName={customDisplayname.unhealthyicstatus}>
          <Dropdown defaultItem={unhealthyicstatus} menuItems={FIELDS.unhealthyicstatus.options} setState={value => setState({ type: 'unhealthyicstatus', value })} />
        </TableRow>
        )}

        <TableRow displayName={customDisplayname.icnumber}>
          <input type="number" className="form-control" name={FIELDS.icnumber.name} placeholder={FIELDS.icnumber.placeholder} onChange={onInputChange} value={icnumber} />
        </TableRow>

        <TableRow displayName={customDisplayname.icstatus}>
          <BtnGroup defaultItem={icstatus} menuItems={FIELDS.icstatus.options} setState={value => setState({ type: 'icstatus', value })} />
        </TableRow>

        <TableRow displayName={customDisplayname.existingic}>
          <BtnGroup defaultItem={existingic} menuItems={FIELDS.existingic.options} setState={value => setState({ type: 'existingic', value })} />
        </TableRow>
      </tbody>
    </table>
  );
};

export default Table;
