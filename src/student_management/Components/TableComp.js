import {Button, Table} from 'reactstrap';

const TableComp = ({students, remove}) => {
    return (
    <div className='table'>
    <Table bordered responsive hover striped size='sm'>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        Class
      </th>
      <th>
        Phone
      </th>
      <th>
        Date of Birth
      </th>
      <th>
        Update & Delete
      </th>
    </tr>
  </thead>
  <tbody>
    {students && students.map((student) => (
        <tr key={student.id}>
        <th scope="row">
          {student.id}
        </th>
        <td>
        {student.name}
        </td>
        <td>
        {student.classNum}
        </td>
        <td>
        {student.phone}
        </td>
        <td>
        {student.birthDate}
        </td>
        <td className="btnBox">
          {/* <Button color='success'>Edit</Button> */}
          <Button onClick={() => remove(student.id)} color='danger'>Delete</Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
</div>
    );
}

export default TableComp;