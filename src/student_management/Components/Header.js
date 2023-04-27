import { useState } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const Header = (props) => {
    const [name, setName] = useState("");
    const [classNum, setClassNum] = useState(0);
    const [phone, setPhoneNum] = useState("");
    const [birthDate, setBirthDate] = useState("");

    function saveUser (e) {
 
      e.preventDefault();
        const user = {
            id: uuidv4(),
            name,
            classNum,
            phone,
            birthDate
        }
      props.add(user);
      setName("");
      setClassNum(0);
      setPhoneNum("");
      setBirthDate("");
    }
    return (
    <div className='header'>
        <h3>Add & Update</h3>
<Form onSubmit={saveUser}>
    <FormGroup floating>
      <Input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Label for="name">
        Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="class"
        name="class"
        placeholder="Class"
        type="number"
        value={classNum}
        min={1}
        max={11}
        onChange={e => setClassNum(e.target.value)}
      />
      <Label for="class">
        Class
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="phone"
        name="phone"
        placeholder="Phone"
        type="number"
        value={phone}
        onChange={e => setPhoneNum(e.target.value)}
      />
      <Label for="Phone">
        Phone
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="Date_of_Birth"
        name="Date_of_Birth"
        placeholder="Date of Birth"
        type="date"
        value={birthDate}
        onChange={e => setBirthDate(e.target.value)}
      />
      <Label for="Date_of_Birth">
        Date of Birth
      </Label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
</Form>
</div>
    );
}

export default Header;