import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Name</span></strong>
                    </div>
                    <div className="credits">
                        Designed by <a href="https://instagram.com/rsroshi">RS Roshi</a>
                    </div>
                </div>
            </footer>
        )
    }
}