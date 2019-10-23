import React, { Component } from 'react';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {
                        "name": "Australia",
                        "continent": "Oceania",
                        "population": "42 Million",
                        "color": "yellow",
                        "textColor": "black",
                        "ID": 1
                    },
                    {
                        "name": "England",
                        "continent": "Europe",
                        "population": "37 Million",
                        "color": "white",
                        "textColor": "black",
                        "ID": 2
                    },
                    {
                        "name": "Namibia",
                        "continent": "Africa",
                        "population": "14 Million",
                        "color": "orange",
                        "textColor": "black",
                        "Id": 3
                    },
                    {
                        "name": "New Zealand",
                        "continent": "Oceania",
                        "population": "10 Million",
                        "color": "black",
                        "textColor": "white",
                        "Id": 4
                    },
                    {
                        "name": "Pakistan",
                        "continent": "Asia",
                        "population": "232 Million",
                        "color": "green",
                        "textColor": "white",
                        "Id": 5
                    },
                    {
                        "name": "Zimbabwe",
                        "continent": "Africa",
                        "population": "32 Million",
                        "color": "red",
                        "textColor": "white",
                        "Id": 6
                    },
                    {
                        "name": "South Africa",
                        "continent": "Africa",
                        "population": "152 Million",
                        "color": "purple",
                        "textColor": "white",
                        "Id": 7
                    },
                    {
                        "name": "India",
                        "continent": "Asia",
                        "population": "1.2 Billion",
                        "color": "blue",
                        "textColor": "white",
                        "Id": 8
                    }
                ],
            selectValue: ''
        }
    }
    // handleChange(e) {
    //     this.setState({
    //         selectValue : e.target.value
    //     })
    // }      
    // through error when you use normal function if you didn't bind the function. For ES6+ (ES2015) you can also use the ES6+ arrow function (=>) to be able to use this
    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value
        });
        let arrData = this.state.data;
       // let objSelectedData = arrData[e.target.value];
        // console.log(objSelectedData.color);
    }
    showSelectedCountry = () => {
        let countryDataFull = { name: '' };
        this.state.data.forEach(countryData => {
            if (countryData.name === this.state.selectValue) {
                countryDataFull = countryData
            }
        })
        return <div style={{ backgroundColor: countryDataFull.color, height: '100%', width: '100%',textAlign:'center' }}>
            <p style={{ color: countryDataFull.textColor }}>{countryDataFull.name} </p>
            <p style={{ color: countryDataFull.textColor }}>{countryDataFull.continent} </p>
            <p style={{ color: countryDataFull.textColor }}>{countryDataFull.population}</p>
        </div>
    }
    componentDidMount() {
        console.log("didMountData", this.state.data[0])
        this.setState({
            selectValue: this.state.data[0].name
        })
    }
    render() {
        return (
            <div className="dropdownList">
                <div className="input-field col s12">
                    <select onChange={this.handleChange}>
                        {
                            this.state.data.map((details, i) =>
                                <option key={i} value={details.name}>{details.name}</option>
                            )
                        }

                    </select>
                </div>

                {this.showSelectedCountry()}
            </div>
        )
    }
}

export default Team;