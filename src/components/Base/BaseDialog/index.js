import React from 'react'
import BaseCard from '@components/Base/BaseCard'
const Overlay = ({
  show,
  children,
  dismissible,
  dismissSkip,
  toggleDialog,
}) => {
  return show ? (
    <div
      onClick={(event) => {
        if (!dismissible) return
        const classes = Array.from(event.target.classList)
        const dismiss = classes.some((item) => !item.includes(dismissSkip))
        if (dismiss) {
          toggleDialog()
        }
      }}
      className="bg-black bg-opacity-30 fixed flex items-center justify-center left-0 min-h-full min-w-full overflow-auto top-0"
    >
      {children}
    </div>
  ) : null
}

class BaseDialog extends React.Component {
  static Title = (props) => (
    <div className="base-dialog__title">{props.children}</div>
  )
  static Body = (props) => (
    <div className="base-dialog__body">{props.children}</div>
  )
  render() {
    return this.props.show ? (
      <Overlay
        show={this.props.show}
        toggleDialog={this.props.toggleDialog}
        dismissible={this.props.dismissible ?? true}
        dismissSkip="base-dialog"
      >
        <BaseCard>
          <BaseCard.Body>
            <div className="base-dialog opacity-100 border-gray-500 justify-center">
              {this.props.children}
            </div>
          </BaseCard.Body>
        </BaseCard>
      </Overlay>
    ) : null
  }
}

export default BaseDialog
