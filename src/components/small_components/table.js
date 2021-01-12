import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
const [emails, setEmails] = useState([]);
useEffect(() => {
    const params = new URLSearchParams({
        limit: queryParams.get("limit") || 10,
        page: queryParams.get("page") || 1,
        name: queryParams.get("name") || '',
    });
    setIsLoading(true);

    fetch(`${API_URL}email?${params.toString()}`)
        .then((resp) => resp.json())
        .then((data) => setEmails(data))
        .finally(() => setIsLoading(false));
}, [reload]);



export const DataTable = (props) => {
    const columns = [
        { field: props.id, headerName: props.headerId},
        { field: props.from, headerName: props.headerNameFrom},
        { field: props.to, headerName: props.headerNameTo},
        { field: props.toCopy, headerName: props.headerNametoCopy},
        { field: props.letter, headerName: props.headerNameLetter},
        { field: props.titile, headerName: props.headerNameTite},
        { field: props.signature, headerName: props.headerNameSign},
    ];
    
    const rows = [
        { id: props.rowId, lastName: props.lastName, firstName: props.firstName, age: props.age },
    ];
    
    return (
        <div style={{ height: 400, width: '100%' }}>
            {emails.map((item) => (

            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            ))}
        </div>
    );
}

