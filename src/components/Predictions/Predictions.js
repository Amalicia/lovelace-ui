import React from 'react';
import axios from 'axios';
import './Prediction.css';

class Prediction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            pred: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    async handleButtonClick() {
        console.log('on click')
        if (this.state.file == null)
            return;

        let data = new FormData

        console.log(this.state.file)

        // data.append("image", this.state.file, this.state.file.filename)

        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }

        console.log('sending request')
        const response = await axios.post('http://0.0.0.0:5000/predict', JSON.stringify(this.state.file), config)

        this.setState({
            pred: response.data()
        })
    }

    render() {
        return (
            <div className="Prediction">
                <div className="Pred-body">
                    <input className="Image-in" type="file" id="file-select" onChange={this.handleChange}/>
                    <label for="file-select" className="Image-lbl">Choose an Image</label>
                    <button className="Pred-btn" onClick={async () => this.handleButtonClick()}>Predict</button>
                    <div className="Pred-zone">
                        <img className="Img-disp" src={this.state.file}/>
                        <h1 className="Pred-text">Predictions: <span>{this.state.pred}</span></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prediction