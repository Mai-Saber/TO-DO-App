import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CongratsModal(props) {
  return (
    <Modal
      className="modal modalDocs"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">
            <h1>Congratulations</h1>
          </Modal.Title>
        </Modal.Header>
        {/* //////////////////////////// */}
        <Modal.Body>
          <div className="modal-container">
            <p className="c"> Ooh, You have Completed All Tasks </p>
            <div className="img">
              <img
                src="https://thumbs.gfycat.com/PerkyHandyLeonberger-size_restricted.gif"
                alt=""
              />
            </div>
          </div>
        </Modal.Body>
        {/* ////////////////////////////// */}
        <Modal.Footer className="modal-footer">
          <Button onClick={props.onHide}>CLOSE</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
export default CongratsModal;
