import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './Collapsed.scss'

// Implementation based on Compound Components pattern

class Collapsed extends Component {
  static Header = ({ children, className, onClick, headerRef }) => (
    <div className={className} ref={headerRef} onClick={onClick}>{children}</div>
  )
  static Content = ({ open, className, children, contentRef }) => open
    ? <div className={className} style={{ boxSizing: 'border-box' }} ref={contentRef}>{children}</div>
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

  recalculateContent = () => {
    this.headerHeight = this.outerRef.current ? this.outerRef.current.clientHeight : 0
    this.height = this.innerRef.current ? this.innerRef.current.clientHeight + this.headerHeight : 0
  }

  componentDidMount = () => {
    this.recalculateContent()
    this.initial = false
    this.forceUpdate() // force update in order to hide expanded content (after measurement of initial render height)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.children !== this.props.children) {
      this.recalculateContent()
      this.forceUpdate()
    }
  }

  render () {
    const { className, expandedClassName, children } = this.props
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

Collapsed.propTypes = {
  className: PropTypes.string,
  expandedClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.instanceOf(Collapsed.Header), PropTypes.instanceOf(Collapsed.Content)]).isRequired
}

Collapsed.Header.displayName = 'Collapsed.Header'
Collapsed.Content.displayName = 'Collapsed.Content'

export default Collapsed
