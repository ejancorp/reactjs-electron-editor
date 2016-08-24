import React, { Component } from 'react';
import Editor from './Editor';
import { connect } from 'react-redux';
import TabItem from './TabItem';
import { createTab } from './../actions/tabs';
import uuid from 'node-uuid';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.createTab = this.createTab.bind(this);
	}
	getInitialTabState() {
		return {
			uid: uuid.v1(),
			filename: 'Untitled-' + this.props.tabs.length,
			mode: 'javascript',
			value: ''
		}
	}
	createTab() {
		return this.props.onCreate(
			this.getInitialTabState()
		);
	}
	render() {
		return (
			<div className="tab-group">
				{this.props.tabs.map((tab, key) => {
					return (
						<TabItem setting={tab} index={key} key={key} active={(this.props.active == key)}/>
					);
				})}
			  <div className="tab-item tab-item-fixed"  onClick={this.createTab} style={{ cursor: 'pointer' }}>
			    <span className="icon icon-plus"></span>
			  </div>
			</div>
		);
	}
}

Tabs.propTypes = {
	active: React.PropTypes.number.isRequired,
  tabs: React.PropTypes.array.isRequired,
  onCreate: React.PropTypes.func.isRequired
};

export default Tabs;
