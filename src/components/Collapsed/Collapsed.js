import React, { Component } from 'react'
import classnames from 'classnames'

import style from './Collapsed.scss'

class Collapsed extends Component {
  static Header = ({ children, className, onClick, headerRef }) => (
    <div className={className} ref={headerRef} onClick={onClick}>{children}</div>
  )
  static Content = ({ open, className, children, contentRef }) => open
    ? <div className={className} ref={contentRef}>{children}</div>
    : null

  state = {
    open: false
  }

  innerRef = React.createRef() // ref (in order to measure height of content container)
  outerRef = React.createRef() // ref (in order to measure height of content container)
  height = 0 // Very initial value of height (modified in componentDidMound lifecycle method)
  headerHeight = 0 // Very initial value of header height (modified in componentDidMound lifecycle method)
  initial = true // flag indicating initial render

  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  getContainerHeight = () => {
    const { open } = this.state
    return open ? this.height : this.headerHeight
  }

  componentDidMount = () => {
    this.headerHeight = this.outerRef.current.offsetHeight
    this.height = this.innerRef.current.clientHeight + this.headerHeight
    this.initial = false
    this.forceUpdate() // force update in order to hide expanded content (after measurement of initial render height)
  }

  render () {
    const { className, expandedClassName, children, onClick } = this.props
    const { open } = this.state
    return (
      <div
        className={classnames(style.container, open && expandedClassName, className)}
        style={{ height: this.getContainerHeight() }}
      >
        {
          React.Children.map(children, child => React.cloneElement(child, {
            open: open || this.initial,
            onClick: this.handleClick,
            contentRef: this.innerRef,
            headerRef: this.outerRef
          }))
        }
      </div>
    )
  }
}

export default Collapsed
