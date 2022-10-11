import React, { useEffect, useState } from 'react'
import '../App.css';

import {
    CContainer,
  CImage,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'



export default function DataTable() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/");
        const data = await response.json();
        return setData(data);
      }
    
      useEffect(() => {
        fetchData();
      },[])

    console.log(data);


return (

    <CContainer className='d-flex align-items-center pt-5'>
    <CTable align="middle" className="mb-0 border" hover responsive>
    
        <CTableHead color="light">
            <CTableRow>
                <CTableHeaderCell className='d-flex align-items-center'>
                  <input className='w-100' placeholder='Enter Keywords'></input>
                </CTableHeaderCell>
            </CTableRow>
        </CTableHead>

        <div className='tableBody pt-5'>
        <CTableBody>
            {data.map((item, index) => (
            <CTableRow v-for="item in tableData" key={index}>

                <CTableDataCell className="text-center">
                    <CImage className='img-fluid p-2 d-none d-md-flex' src={item.links.flickr.original[0]} />
                </CTableDataCell>

                <CTableDataCell>

                    <CTable>
                        <CTableRow>
                            <CTableDataCell colSpan={2}>
                                <CImage className='img-fluid d-flex d-md-none' src={item.links.flickr.original[0]} />
                            </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                            <CTableDataCell className='text-start fw-bold pe-2'>
                            Flight Number {item.flight_number}: {item.name} ( {item.date_utc} )
                            </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                            <CTableDataCell className='text-start pe-2'>
                            Details: {item.details}
                            </CTableDataCell>
                        </CTableRow>
                        
                    </CTable>

                </CTableDataCell>

            </CTableRow>
            ))}
        </CTableBody>
        </div>
    </CTable>
    </CContainer>
    )

}