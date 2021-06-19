import React , {Component} from 'react';
import {Toast} from 'react-bootstrap';

export default class MyToast extends Component {
    render() {
        const toastCss={
            position:'fixed',
            top:'50px',
            right: '20px',
            zIndex:'1',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) ',
        };
        return(
            <div style={toastCss}>
                <Toast className={"border border-danger bg-danger text-white"}>
                    <Toast.Header className={"bg-danger text-white"} closeButton={false}>
                        <strong className="mr-auto">Succés</strong>
                    </Toast.Header>
                    <Toast.Body>
                        supression avec succés
                    </Toast.Body>
                </Toast>
            </div>
        );
    };
}