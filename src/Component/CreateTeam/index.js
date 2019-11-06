import React, { Component } from 'react';
import SelectMarkupOption from '../CreateTeam/SelectMarkupOption';
import { connect } from 'react-redux';
import { handleChange, copyText } from '../../action/postAction';
import { CopyToClipboard } from 'react-copy-to-clipboard';
class CreateTeam extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.copyText = this.copyText.bind(this);
        this.state = {
            copyBtnClicked: false
        }
    }
    handleChange(e) {
        var selectedMarkup = this.props.htmlMarkup[e.target.value];
        console.log(selectedMarkup);
        this.props.handleChange(selectedMarkup)
    }
    copyText() {
        if (!this.state.copyBtnClicked) {
            this.setState({
                copyBtnClicked: true
            }, () => {
                this.props.copyText(true);
                setTimeout(() => {
                    this.setState({
                        copyBtnClicked: false
                    }, ()=>{
                        this.props.copyText(false)
                    })
                }, 5000);
            })

        }
    }
    componentDidMount() {
        this.props.handleChange(this.props.htmlMarkup[0])
    }
    render() {
        console.log(this.state.copyBtnClicked);
        // console.log(this.props.htmlMarkup)
        let selectedHtmlItem = this.props.htmlMarkup ? (
            <p>{this.props.selectedMarkupOption.html}</p>
            // <p dangerouslySetInnerHTML={{ __html: this.props.selectedMarkupOption.html }}/> // convert string to HTML code in json
        ) : (
                <p>No Elements</p>
            )
        let selectedCssItem = this.props.htmlMarkup ? (
            <p>{this.props.selectedMarkupOption.css}</p>
        ) : (
                <p>No Element</p>
            )
        return (
            <div className="container">
                <div className="card">
                    <SelectMarkupOption handleChange={this.handleChange} htmlMarkupData={this.props.htmlMarkup}></SelectMarkupOption>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="code-container">
                            <div className="">
                                <h6>HTML MARKUP:</h6>
                                <input value={this.props.selectedMarkupOption.html}
                                //onChange={({ target: { value } }) => this.setState({ value, copied: false })} 
                                />
                                <CopyToClipboard text={this.props.selectedMarkupOption.html}
                                    // onCopy={() => this.setState({ copied: true })}
                                    onCopy={this.copyText}
                                >
                                    {
                                        this.state.copyBtnClicked ? 
                                        <button disabled>Copy Markup</button> :
                                        <button>Copy Markup</button>
                                    }
                                </CopyToClipboard>
                                {this.props.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                                {/* {selectedHtmlItem} */}
                            </div>
                        </div>
                        <div className="code-container">
                            <div className="">
                                <h6>CSS MARKUP:</h6>
                                {selectedCssItem}
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <h6>Output:</h6>
                    </div>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    const { htmlMarkup, selectedMarkupOption, value, copied } = state;
    return {
        htmlMarkup,
        selectedMarkupOption,
        value,
        copied
    }
}

function mapDispatchProps(dispatch) {
    return {
        handleChange: (name) => { dispatch(handleChange(name)) },
        copyText: (status) => { dispatch(copyText(status)) }
    }
}


export default connect(mapStateToProps, mapDispatchProps)(CreateTeam);