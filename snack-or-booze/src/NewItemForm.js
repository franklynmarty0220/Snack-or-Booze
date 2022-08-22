import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";


const NewItemForm = ({ addItem }) =>{

    const Initial_State = {
        category:"snacks",
        name:"",
        descrpition: "",
        recipe:"",
        serve:""
    };
    const [formData,setFormData] = useState(Initial_State);

    const handleSubmit = e => {
        e.preventDefault();
        addItem(formData);
        setFormData(Initial_State);
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(d =>({
            ...d,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">category:</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
    
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
    
          <label htmlFor="recipe">Recipe:</label>
          <input
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
    
          <label htmlFor="serve">Serve:</label>
          <input
            id="serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
    
          <button>Submit</button>
        </form>
      );


}

export default NewItemForm;
