import React from 'react'

class BaseCard extends React.Component {
  static Header = (props) => (
    <div className={`${props.className} base-card__header`}>
      {props.children}
    </div>
  )

  static Body = (props) => (
    <div className="base-card__body">{props.children}</div>
  )
  render() {
    return (
      <div className={`${this.props.className}`}>{this.props.children}</div>
    )
  }
}

export default BaseCard
