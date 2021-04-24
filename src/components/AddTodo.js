import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FaPlus} from "react-icons/fa";

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault(); ////Eğer koymaz isen sürekli yeniden form gönderir.

        //props yardımıyla state'i aktarmış oluyoruz kullanmak istediğimiz tarafa
        this.props.addTodo(this.state.title);

        //son olarak da state'in içini boşaltıyoruz.
        this.setState({ title: '' });
    }

    //input'a giren değeri alıyorum
    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    className="input-add"
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button className="btn"><FaPlus size="25" /></button>
            </form>
        )
    }
}

// PropTypes:
//Gönderilen verinin gerekli olup olmadığını ve hangi
//veri tipinde değer gönderileceğinin kontrolü yapılır.
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
