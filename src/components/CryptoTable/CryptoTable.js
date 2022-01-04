import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link} from '@mui/material';
import { Sparklines, SparklinesLine } from 'react-sparklines';



const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});


const columns = [  
  {
    id: 'rank',
    label: 'Rank',
    align: 'center',

  },
  {
    id: 'iconUrl',
    label: 'Logo',
    align: 'left',
    format: (value) => <img style={{width:"20px", haigt: "20px", display:"flex"}} src={value} alt={value}/>,
  },
  { 
    id: 'name',
    label: 'Name', 
    minWidth: 50 ,
    align: 'left',

  }, 
  {
    id: 'symbol',
    label: 'Symbol',
    minWidth: 50,
    align: 'left',
    format: (value) => <span style={{color: "red" }}>{value}</span>,
  },
  { id: 'price',
    label: 'Price',
    minWidth: 50 ,
    align: 'left',
    format: (value) => formatter.format(+value),
  },

  {
    id: 'marketCap',
    label: 'Market Cap',
    minWidth: 50,
    align: 'left',
    format: (value) =>formatter.format(+value),
  },
  {
    id: '24hVolume',
    label: '24h Volume',
    minWidth: 50,
    align: 'left',
    format: (value) =>formatter.format(+value),
  },
  {
    id: 'sparkline',
    label: 'Sparkline',
    minWidth: 50,
    align: 'left',
    format: (value) =><Sparklines data={value}>
    <SparklinesLine color={ value.at(0) < value.at(-1) ? "green" : "red"} />
   </Sparklines>,
  },

];

export default function CryptoTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = props.coins;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <div style={{textAlign: "center"}}><h1>Top 50 Crypto Coins In The World </h1></div>

      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.uuid}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        
                        <TableCell key={column.id} align={column.align}>
                          <Link href={row.coinrankingUrl} underline="none">

                          {column.format 
                            ? column.format(value)
                            : value}
                            
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
          }



          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
