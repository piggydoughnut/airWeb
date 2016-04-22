import React from "react";

class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.message.description}</td>
                <td>{this.props.message.hasOwnProperty('file')}</td>
                <td>{this.props.message.hasOwnProperty('obj_file_path')}</td>
                <td>{(this.props.message.comments_count) ? this.props.message.comments_count : '--'}</td>
                <td>{(this.props.message.views_count) ? this.props.message.views_count : '--'}</td>
                <td>{(this.props.message.created_at) ? this.props.message.created_at : '--'}</td>
            </tr>
        )
    }
}

module.exports = Row;
