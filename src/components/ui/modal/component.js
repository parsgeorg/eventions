import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Modal extends PureComponent {
  render() {
    return (
      <div className="modalDialog">
        <div>
          <Link to="/" className="close">
            X
          </Link>
          <h2>{this.props.children[0]}</h2>
          <p>{this.props.children[2]}</p>
          <button
            className="btn btn-success"
            onClick={this.props.actionByClick}
          >
            {this.props.children[1]}
          </button>
        </div>
      </div>
    );
  }
}
