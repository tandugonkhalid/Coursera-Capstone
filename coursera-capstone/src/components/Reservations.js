import React, {useContext,} from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../context/UserContext';


function Reservations(){

    const {state, dispatch} = useContext(UserContext);
    
    const handleChanges = (e) => {
        dispatch({type: "CHANGE_INPUT", payload: {name: e.target.name, value:e.target.value}});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

 return(
        <section>
            <h1>Reservation Form</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>First Name</label>
                </div>
                <div class="form-group">
                    <input type="text" placeholder='First Name' class="form-control" name="firstname" 
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                </div>
                <div class="form-group">
                    <input type="text" placeholder='Last Name' class="form-control" name="lastname" 
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                </div>
                <div class="form-group">
                    <input type="email" placeholder='Email' class="form-control" name="email"
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-group">
                    <label>Contact Info</label>
                </div>
                <div class="form-group">
                    <input type="text" placeholder='Contact Info' class="form-control" name="contact"
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="table for one"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">table for one</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="table for two"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">table for two</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="table for family"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">table for family</label>
                </div>
                <div class="form-group">
                    <label>Date</label>
                </div>
                <div class="form-group">
                    <input type="date" placeholder='Date' class="form-control" name="date"
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-group">
                    <label>Time</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="5:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">5:00pm</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="6:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">6:00pm</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="7:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">7:00pm</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="8:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">8:00pm</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="9:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">9:00pm</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="Time" id="inlineRadio1" value="10:00pm"
                    onChange={(e) => handleChanges(e)}/>
                    <label class="form-check-label" for="inlineRadio1">10:00pm</label>
                </div>
                <div class="form-group">
                    <label>No. of Guests</label>
                </div>
                <div class="form-group">
                    <input type="number" placeholder='Number of Guests' class="form-control" name="guests"
                    onChange={(e) => handleChanges(e)} required/>
                </div>
                <div class="form-group">
                    <label>Occassion</label>
                </div>
                <select class="form-select" aria-label="Default select example" name="occassion" onChange={(e) => handleChanges(e)}>
                    <option value="Birthday" selected>Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
 );
}

export default Reservations;