import { deleteEvention, openModal } from '../../actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../../components/ui/modal';

class DeleteEvention extends Component {
  deleteEventionApi = () => {
    this.props.deleteEvention(this.props.match.params.id);
  };

  render() {
    const id = this.props.match.params.id;
    const dataForDelete = `Вы точно хотите удалить изобретение ${id} ?`;
    const modalData = [];
    modalData.push('Удаление изобретения', 'Удалить', dataForDelete);

    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {
                <Modal actionByClick={this.deleteEventionApi}>
                  {modalData}
                </Modal>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = {
  openModal,
  deleteEvention,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteEvention);
