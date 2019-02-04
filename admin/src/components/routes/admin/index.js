import React, {Component} from 'react'
import LockedRoutesBounder from '../../common/locked-routes-bounder'

class AdminPage extends Component {
    static propTypes = {}

    render() {
        return (
            <LockedRoutesBounder>
                <div>
                    <h1>Admin</h1>
                </div>
            </LockedRoutesBounder>
        )
    }
}

export default AdminPage
