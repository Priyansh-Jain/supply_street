import React,{Component} from 'react';
import './FreeInspection.css'


class FreeInspection extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address:'',
            redirect: false,
          };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
      }
      
      onPhoneChange(event) {
        this.setState({ phone: event.target.value });
      }

      onAddressChange(event) {
        this.setState({ address: event.target.value });
      }
      



    handleSubmit(e){
        e.preventDefault();
         let databody = {
            "name": this.state.name,
            "phone": this.state.phone,
            "address": this.state.address,
         }
     
         fetch('http://localhost:9000/free-inspection', {
                 method: 'POST',
                 body: JSON.stringify(databody),
                 headers: {
                     'Content-Type': 'application/json'
                 },
             })
             .then(res => res.json())
             .then(data => console.log(data));

            //  this.props.history.push('/');
     }

    render(){
        return (
            <div className="person-form">
                <form class="login-form" onSubmit={this.handleSubmit}>
                    <h1>Free Inspection</h1>
                    <div class="textb">
                        <input type="text" required name="name" value={this.name} onChange={this.onNameChange} />
                        <div class="placeholder">Name</div>
                    </div>
    
                    <div class="textb">
                        <input type="number" required name="phone" value={this.phone} onChange={this.onPhoneChange} />
                        <div class="placeholder">Phone No</div>
                    </div>
    
                    <div class="textb">
                        <input type="text" required name="address" value={this.address} onChange={this.onAddressChange}/>
                        <div class="placeholder">Address</div>
                    </div>
    
    
                    <button class="btn" type="submit">SUBMIT</button>
                    
                </form>
            </div>
        )
    }
    
}

export default FreeInspection;
