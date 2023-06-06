const tableHeader = (

    <table>
        <tr>
            <th>Task#</th>
            <th>Title</th>
            <th>Date Created</th>
            <th>Type</th>
            <th>Status</th>
            <th></th>
            <th></th>
        </tr>
    </table>

);

const tableBase = (
    
    <table>
        <span id='tableDetails'></span>
    </table>

)

/*
Notes:

+ Change the current place for the table headers to variables
to make them usable for resources too

+ The two empty <th> are for the view and edit buttons (table layout)

+ The 'tableDetails will be replaced by an ArrayList to fill
the details by a 'task' or 'resource object*

*/