import React from 'react';

function FlatBrokerMain() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <div className="p-3 border bg-light">
                        <h2>Column 1</h2>
                        <p>This is the first column. You can add any content here.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 border bg-light">
                        <h2>Column 2</h2>
                        <p>This is the second column. You can add any content here.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 border bg-light">
                        <h2>Column 3</h2>
                        <p>This is the third column. You can add any content here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlatBrokerMain;