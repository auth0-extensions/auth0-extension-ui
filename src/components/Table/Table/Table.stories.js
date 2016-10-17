import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Table from './';
import { TableHeader, TableColumn, TableBody, TableRow, TableCell, TableIconCell, TableTextCell } from '../../';

storiesOf('Table', module)
  .add('default view', () => (
    <Table>
      My table content
    </Table>
  ))
  .add('sample table', () => (
    <Table>
      <TableHeader>
        <TableColumn width="10%" />
        <TableColumn width="50%">Table Column</TableColumn>
        <TableColumn width="40%" />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableIconCell color="green" icon="573" />
          <TableTextCell>Table Text Cell</TableTextCell>
          <TableCell>
            Another Table Cell
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
