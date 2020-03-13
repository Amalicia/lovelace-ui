import React from 'react';
import './Prediction.css';

class Prediction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            pred: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    async handleFormSubmit(event) {
        event.preventDefault();

        const data = new FormData()
        data.append('file', this.uploadInput.files[0])

        fetch('http://0.0.0.0:5000/predict', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({
                    pred: body.prediction
                })
            })
        })
    }

    render() {
        return (
            <div className="Prediction">
                <div className="Pred-body">
                    <form onSubmit={this.handleFormSubmit}>
                        <input ref={(ref) => { this.uploadInput = ref; }} className="Image-in" type="file" id="file-select" onChange={this.handleChange}/>
                        <label for="file-select" className="Image-lbl">Choose an Image</label>
                        <button className="Pred-btn">Predict</button>
                    </form>
                    <div className="Pred-zone">
                        <img className="Img-disp" src={this.state.file}/>
                        <h1 className="Pred-text">Predictions:</h1>
                        <p className="Pred-val" style={{color: this.state.pred === ["none"] ? "#cf1e25" : "#7CFC00"}}>{this.state.pred}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prediction